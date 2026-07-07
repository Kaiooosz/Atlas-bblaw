// tests/mobile.spec.js
// ── Teste 3 · Menu mobile e responsividade ────────────────────────────────────
const { test, expect, devices } = require('@playwright/test');

test.describe('Mobile — Menu hambúrguer', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Botão hambúrguer está visível em mobile', async ({ page }) => {
    await expect(page.locator('button.burger')).toBeVisible();
  });

  test('Links de navegação ficam ocultos inicialmente em mobile', async ({ page }) => {
    const navLinks = page.locator('#navlinks');
    // Em mobile, os links devem estar com display:none (classe open não presente)
    await expect(navLinks).not.toHaveClass(/open/);
  });

  test('Clicar no hambúrguer abre o menu', async ({ page }) => {
    await page.click('button.burger');
    const navLinks = page.locator('#navlinks');
    await expect(navLinks).toHaveClass(/open/);
    await expect(page.locator('#navlinks a').first()).toBeVisible();
  });

  test('Clicar novamente no hambúrguer fecha o menu', async ({ page }) => {
    await page.click('button.burger');
    await page.click('button.burger');
    const navLinks = page.locator('#navlinks');
    await expect(navLinks).not.toHaveClass(/open/);
  });

  test('Botão CTA ocupa largura total em mobile', async ({ page }) => {
    await page.click('button.burger');
    const cta = page.locator('#nav-main-cta');
    await expect(cta).toBeVisible();
    const box = await cta.boundingBox();
    // deve ocupar quase toda a largura (> 90% de 375px)
    expect(box.width).toBeGreaterThan(300);
  });
});

test.describe('Mobile — Conteúdo responsivo', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('Hero h1 está visível e não transborda', async ({ page }) => {
    await page.goto('/');
    const h1 = page.locator('section.hero h1').first();
    await expect(h1).toBeVisible();
    const box = await h1.boundingBox();
    expect(box.width).toBeLessThanOrEqual(375);
  });

  test('Botões do hero empilham verticalmente', async ({ page }) => {
    await page.goto('/');
    const btns = page.locator('section.hero .btn-row .btn');
    const count = await btns.count();
    if (count >= 2) {
      const box1 = await btns.nth(0).boundingBox();
      const box2 = await btns.nth(1).boundingBox();
      // Em mobile, o segundo botão deve estar abaixo do primeiro
      expect(box2.y).toBeGreaterThan(box1.y + box1.height - 10);
    }
  });
});
