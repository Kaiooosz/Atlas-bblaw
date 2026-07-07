# Atlas BBLAW

Site institucional e plataforma Atlas da BBLAW — Bezerra Borges Advogados.

## Estrutura do Projeto

```
Atlas-bblaw/
├── index.html          # HTML principal (sem CSS/JS inline)
├── css/
│   └── main.css        # Todos os estilos (tokens, layout, componentes, mobile)
├── js/
│   ├── data.js         # Dados: SERVICES, HUBS, ARTICLES + helpers de render
│   └── atlas.js        # Engine: PRODUCTS, diagnóstico, roteador SPA, formulários
├── tests/
│   ├── navigation.spec.js       # Testes E2E de navegação
│   ├── form-diagnostico.spec.js # Testes E2E do formulário
│   └── mobile.spec.js           # Testes E2E de responsividade mobile
├── playwright.config.js
└── package.json
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor local (porta 3333)
npm run dev
```

## Testes

```bash
# Rodar todos os testes (Desktop Chrome + Mobile Safari)
npm test

# Rodar apenas Desktop
npx playwright test --project="Desktop Chrome"

# Abrir UI interativa do Playwright
npm run test:ui
```

## Tecnologias

- **HTML/CSS/JS** puro (sem frameworks)
- **Space Grotesk** — tipografia única do projeto
- **Playwright** — testes E2E
- **Serve** — servidor de desenvolvimento estático
