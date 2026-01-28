# Guia de Estilo & Layout - ByteData Engine

Este documento fornece uma visão geral técnica do layout, sistema de design, variações de tema e estrutura do projeto.

---

## 1. Paleta de Cores e Temas

O sistema utiliza variáveis CSS nativas para gerenciar as cores, permitindo uma troca suave entre os modos Claro e Escuro através do atributo `data-theme="dark"`.

### Cores Principais (Brand)

| Variável | Descrição | Modo Claro (Hex) | Modo Escuro (Hex) |
| :--- | :--- | :--- | :--- |
| `--primary` | Cor Primária (Ação, Links) | `#2563EB` (Blue 600) | `#3B82F6` (Blue 500) |
| `--primary-dark` | Estado Hover/Ativo | `#1E40AF` (Blue 800) | `#60A5FA` (Blue 400) |
| `--primary-light` | Bordas e Detalhes | `#60A5FA` (Blue 400) | `#1E40AF` (Blue 800) |
| `--secondary` | Títulos e Heading | `#0F172A` (Slate 900) | `#F8FAFC` (Slate 50) |
| `--accent` | Alertas e Highlights | `#F59E0B` (Amber 500) | `#F59E0B` (Amber 500) |

### Superfícies e Fundos (Backgrounds)

| Variável | Descrição | Modo Claro | Modo Escuro |
| :--- | :--- | :--- | :--- |
| `--bg-page` | Fundo Principal da Página | `#ffffff` | `#0F172A` (Slate 900) |
| `--bg-surface` | Seções Secundárias/Nav | `#F8FAFC` (Slate 50) | `#1E293B` (Slate 800) |
| `--bg-card` | Cards e Elementos Elevados | `#ffffff` | `#1E293B` (Slate 800) |
| `--bg-highlight` | Badges e Ícones | `#EFF6FF` (Blue 50) | `rgba(59, 130, 246, 0.15)` |
| `--bg-info` | Seções Informativas | `#c4e2f0` | `#1e3a8a` |

### Tipografia e Texto

*   **Fonte Principal:** 'Inter', sans-serif (Google Fonts)
*   **Hierarquia de Cores:**
    *   `--text-main`: Corpo do texto (`#1E293B` / `#F1F5F9`)
    *   `--text-muted`: Legendas e descrições (`#64748B` / `#94A3B8`)
    *   `--text-on-info`: Texto sobre fundos de destaque (`#000000` / `#ffffff`)

---

## 2. Estrutura de Layout e Arquivos

A aplicação segue uma arquitetura React padrão com Vite, organizada para escalabilidade.

### Estrutura de Diretórios
```
src/
├── components/          # Componentes reutilizáveis
│   ├── common/          # Componentes globais (Navbar, Footer, ScrollToTop)
│   └── home/            # Componentes específicos da Home (Hero, Featured, Pipeline)
├── layouts/             # Wrappers de estrutura de página
│   └── MainLayout.jsx   # Layout padrão (Navbar + Content + Footer)
├── pages/               # Páginas da aplicação (Rotas)
│   ├── HomePage.jsx     # Página Inicial (Landing Page)
│   └── ArchitecturePage.jsx # Detalhamento Técnico (agora embutido na Home)
├── hooks/               # Custom Hooks
│   └── useTheme.js      # Gerenciamento de estado do tema (localStorage)
├── index.css            # Folha de estilo global e definições de variáveis
└── main.jsx             # Ponto de entrada da aplicação
```

### Layout Principal (`MainLayout.jsx`)
O layout envolve todas as páginas e define a estrutura básica:
1.  **Background Grid:** Um padrão sutil de grade (`.bg-grid`) fixo ao fundo.
2.  **Navbar:** Barra de navegação fixa no topo (`sticky`), responsiva, contendo o logotipo, links e o botão de tema.
3.  **Main Content:** Área de conteúdo dinâmico (`{children}`).
4.  **Footer:** Rodapé padrão.

---

## 3. Componentes de UI Principais

### Hero Section
A primeira impressão do usuário. Contém:
*   Título de alto impacto (`h1`).
*   Subtítulo descritivo (`.lead`).
*   Botões de Call to Action (CTA).
*   **Imagem do Sistema:** Uma imagem responsiva (`.hero-system-img`) com sombra profunda, mostrando o dashboard.

### Cards & Features
Utilizados para listar funcionalidades.
*   **Estilo:** Borda suave, sombra ao passar o mouse (`hover`), ícone com fundo colorido.
*   **Responsividade:** Grid que se adapta de 1 a 3 colunas.

### Pipeline Visualization
Uma representação visual do fluxo de dados com etapas conectadas (1 -> 2 -> 3).
*   **Design:** Passos circulares ou retangulares conectados por linhas.
*   **Adaptação:** No mobile, o fluxo muda de horizontal para vertical.

### Architecture Carousel (Novo)
Substituiu a lista estática de "Deep Dive Layers".
*   **Funcionalidade:** Permite navegar entre os detalhes técnicos (Camada de Controle, Ingestão, API) deslizando lateralmente.
*   **Controles:** Botões de seta e indicadores (dots) inferiores.

### Operational Flow (Novo)
Substituiu a lista simples de passos operacionais.
*   **Design:** Cards interativos com números grandes em destaque.
*   **Interação:** Efeito de "slide" e iluminação ao passar o mouse.

---

## 4. Implementação do Modo Escuro

O tema não é apenas uma troca de cores, mas uma **redefinição semântica**.

1.  **Hook `useTheme`:**
    *   Detecta a preferência do sistema operacional (`prefers-color-scheme`).
    *   Lê/Grava a preferência do usuário no `localStorage` ('light' ou 'dark').
    *   Aplica o atributo `data-theme` na tag `<html>`.

2.  **CSS Variables:**
    *   Em vez de definir cores fixas (`background: white`), usamos abstrações (`background: var(--bg-card)`).
    *   O bloco `[data-theme="dark"]` no CSS redefiniu os valores dessas variáveis para tons de Slate (Azul acinzentado escuro) e Amber/Blue para destaques.

---

## 5. Responsividade

*   **Breakpoints:** O design responde principalmente em `768px` (Tablets/Mobile) e `1000px` (Desktops menores).
*   **Comportamentos:**
    *   **Navbar:** Os links viram um menu hambúrguer no mobile.
    *   **Grids:** Grid de colunas vira pilha vertical (stack).
    *   **Imagens:** `max-width: 100%` para garantir que nada "vaze" da tela.
