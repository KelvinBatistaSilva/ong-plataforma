# ong-plataforma
# Plataforma ONG — Entrega I (Fundamentos e Estruturação)

Este pacote contém:
- `index.html` (institucional, missão/visão/contato com imagem)
- `projetos.html` (projetos/voluntariado/doações, imagens)
- `cadastro.html` (formulário completo com validação HTML5 e máscaras JS)
- `css/styles.css` (responsivo, acessível, contraste AA)
- `css/components.css` (botões/estados, cards, formulários estilizados, alerts, toasts e modals) Entrega II
- `css/design-system.css` (variáveis CSS; paleta 8+ cores; tipografia 5+ tamanhos; espaçamentos modulares) Entrega II
- `css/layout.css` (grid 12 colunas, Flexbox interno, 5+ breakpoints, navegação responsiva) Entrega II
- `js/main.js` (máscaras: CPF, telefone, CEP; melhorias de UX)
- `js/ui.js` (menu hambúrguer + submenu, modal e toast; melhorias de acessibilidade básica) Entrega II
- `assets/img/hero.svg`, `assets/img/project.svg` (imagens otimizadas)
- `W3C Validator/projetos.html_validado_no_w3.png` (print da validação W3C Validator)
- `W3C Validator/index.html_validado_no_w3.png` (print da validação W3C Validator)
- `W3C Validator/cadastro.html_validado_no_w3.png` (print da validação W3C Validator)
- `W3C Validator/acessibilidade WCAG 2 1 AA.png` (print da nota Lighthouse) Entrega IV

# Entrega III — Interatividade e Funcionalidades (JavaScript)

Implementa SPA (hash router), templates JS, verificação de consistência (idade ≥16, CPF válido, DDD x UF), máscaras (CPF/telefone/CEP), feedback visual (erros + toast) e armazenamento local (localStorage). Código modular em `js/modules/`.


Entrega IV (Versionamento, Acessibilidade e Deploy)

GitFlow, Conventional Commits, SemVer releases, WCAG 2.1 AA, minificação e deploy.

Produção
Minificação executada com scripts/minify.py; artefatos em /dist

## Como testar
1. Abra `index.html` no navegador.
2. Valide no [W3C Validator](https://validator.w3.org/nu/) (todos os HTML estão prontos para validação).
3. Lighthouse: verifique Acessibilidade, SEO e Performance (lazy-loading e CSS minificado).
