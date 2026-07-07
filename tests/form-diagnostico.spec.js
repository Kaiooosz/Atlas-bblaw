// tests/form-diagnostico.spec.js
// ── Teste 2 · Formulário de diagnóstico (step-by-step) ───────────────────────
//
// O roteador verifica APP.user() antes de exibir #/diagnostico.
// Mockamos diretamente o estado interno do APP após o boot.
//
const { test, expect } = require('@playwright/test');

async function mockLogin(page) {
  await page.goto('/');

  // Aguarda o APP ser registrado em window
  await page.waitForFunction(() => typeof window.APP !== 'undefined', { timeout: 10000 });

  // Injeta user direto no estado interno do APP e re-roteia
  await page.evaluate(() => {
    // APP.signup lê inputs HTML — injetamos o user diretamente no closure S
    // via signup simulado: setamos o campo e chamamos signup
    const nomeFld = document.getElementById('au-nome');
    const emailFld = document.getElementById('au-email');
    const passFld = document.getElementById('au-pass');
    const consent = document.getElementById('au-consent');
    if (nomeFld && emailFld && passFld && consent) {
      nomeFld.value = 'Playwright Teste';
      emailFld.value = 'playwright@bblaw.com.br';
      passFld.value = 'pw123456';
      consent.checked = true;
      window.APP.signup();
    }
  });

  // Navega para o diagnóstico com sessão ativa
  await page.evaluate(() => { location.hash = '#/diagnostico'; });
  await page.waitForTimeout(800);
}

test.describe('Formulário de Diagnóstico', () => {
  test('Sem login → redireciona para #/conta', async ({ page }) => {
    await page.goto('/#/diagnostico');
    await expect(page.locator('#page-conta')).toBeVisible();
  });

  test.describe('Com sessão mockada', () => {
    test.beforeEach(async ({ page }) => {
      await mockLogin(page);
    });

    test('Formulário fica visível após login', async ({ page }) => {
      await expect(page.locator('#page-diagnostico')).toBeVisible();
    });

    test('Passo 1 está ativo', async ({ page }) => {
      await expect(page.locator('.fstep[data-step="1"]')).toBeVisible();
    });

    test('Barra de progresso tem pelo menos 1 passo ativo', async ({ page }) => {
      await expect(page.locator('#diag-prog')).toBeVisible();
      const activeBars = await page.locator('#diag-prog span.on').count();
      expect(activeBars).toBeGreaterThanOrEqual(1);
    });

    test('Botão Continuar está visível', async ({ page }) => {
      const nextBtn = page.locator('#diag-next');
      await expect(nextBtn).toBeVisible();
    });

    test('Seleciona tipo de empresa e avança', async ({ page }) => {
      const tipoSelect = page.locator('#d-tipo');
      await expect(tipoSelect).toBeVisible();
      await tipoSelect.selectOption({ index: 1 });

      await page.locator('#diag-next').click();
      await page.waitForTimeout(400);

      // Ainda na página de diagnóstico (avançou o step)
      await expect(page.locator('#page-diagnostico')).toBeVisible();
    });
  });
});
