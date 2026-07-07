// tests/navigation.spec.js
// ── Teste 1 · Navegação entre páginas ────────────────────────────────────────
const { test, expect } = require('@playwright/test');

test.describe('Navegação principal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Página inicial carrega com título correto', async ({ page }) => {
    await expect(page).toHaveTitle(/BBLAW/i);
    await expect(page.locator('section.hero')).toBeVisible();
  });

  test('Navega para Atuação (#/servicos)', async ({ page }) => {
    await page.click('a[href="#/servicos"]');
    await expect(page.locator('#page-servicos')).toBeVisible();
  });

  test('Navega para Hubs (#/hubs)', async ({ page }) => {
    await page.click('a[href="#/hubs"]');
    await expect(page.locator('#page-hubs')).toBeVisible();
  });

  test('Navega para Insights (#/insights)', async ({ page }) => {
    await page.click('a[href="#/insights"]');
    await expect(page.locator('#page-insights')).toBeVisible();
  });

  test('Navega para Sobre (#/sobre)', async ({ page }) => {
    await page.click('a[href="#/sobre"]');
    await expect(page.locator('#page-sobre')).toBeVisible();
  });

  test('Navega para Atlas/Conta (#/conta)', async ({ page }) => {
    await page.click('#nav-account');
    await expect(page.locator('#page-conta')).toBeVisible();
  });

  test('Botão "Iniciar Diagnóstico" → redireciona para login (sem sessão)', async ({ page }) => {
    // Sem sessão ativa, o roteador redireciona diagnostico → conta
    await page.click('#nav-main-cta');
    await expect(page.locator('#page-conta')).toBeVisible();
  });
});

test.describe('Serviços e Hubs', () => {
  test('Abre detalhe de um serviço (internacionalização)', async ({ page }) => {
    await page.goto('/#/servicos');
    // Aguarda a página de serviços ficar visível antes de interagir
    await expect(page.locator('#page-servicos')).toBeVisible();
    // Clica no primeiro link de serviço visível
    await page.locator('#page-servicos a.arearow').first().click();
    await expect(page.locator('#page-servico')).toBeVisible();
  });

  test('Abre detalhe de um Hub', async ({ page }) => {
    await page.goto('/#/hubs');
    await expect(page.locator('#page-hubs')).toBeVisible();
    await page.locator('#page-hubs a.card').first().click();
    await expect(page.locator('#page-hub')).toBeVisible();
  });
});
