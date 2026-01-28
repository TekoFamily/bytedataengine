# Documentação do Projeto: ByteData Engine

Este documento detalha a arquitetura técnica, a estrutura de pastas e o sistema de design (Design System) implementado no projeto ByteData Engine.

## 1. Visão Geral
O projeto é um website de portfólio/pitch para uma engine de engenharia de dados. O objetivo visual é transmitir **Autoridade**, **Performance** e **Modernidade** (Enterprise SaaS Aesthetic), inspirado em plataformas como Zoho Analytics e Stripe.

## 2. Estrutura de Pastas (Arquitetura)
O projeto segue uma arquitetura modular baseada em React, facilitando a escalabilidade e manutenção.

```
src/
├── components/          # Componentes reutilizáveis
│   ├── common/          # Componentes globais (Navbar, Footer, ScrollToTop)
│   └── home/            # Componentes específicos da Home (Hero, Features, Pipeline)
├── layouts/             # Wrappers de layout (MainLayout)
├── pages/               # Páginas completas (HomePage, ArchitecturePage)
├── App.jsx              # Configuração de rotas (React Router)
├── main.jsx             # Ponto de entrada (Mounting)
└── index.css            # Folha de estilo mestra (Design System)
```

## 3. Design System (Estilos)

O design visual é centralizado no arquivo `index.css` e utiliza variáveis CSS (`:root`) para garantir consistência.

### Paleta de Cores
*   **Primary Corporate Blue:** `#2563EB` (Royal Blue) - Usado em botões principais, links e destaques.
*   **Secondary Slate:** `#0F172A` (Slate 900) - Usado em títulos e textos de alto contraste.
*   **Backgrounds:**
    *   `Page`: `#ffffff` (Branco Puro) - Limpeza visual.
    *   `Surface`: `#F8FAFC` (Slate 50) - Seções alternadas para ritmo visual.

### Tipografia
*   **Família:** `Inter` (Google Fonts).
*   **Características:** Leitura técnica, espaçamento de letras levemente negativo em títulos (`letter-spacing: -0.02em`) para um visual moderno e compacto.

### Elementos de UI
*   **Botões:** Estilo "Pill" (arredondados), com sombras coloridas sutis (`box-shadow` com tom azulado).
*   **Glassmorphism Light:** Navbar com fundo semitransparente e desfoque (`backdrop-filter: blur(10px)`).
*   **Grid Pattern:** Fundo com grade sutil usando gradientes CSS para denotar "engenharia/blueprint".

## 4. Componentes Chave

### Common
*   **Navbar:** Responsiva. Em desktop exibe links; em mobile torna-se um menu "hambúrguer". Detecta a rota ativa para navegação.
*   **Footer:** Layout em grid que se adapta de 3 colunas (desktop) para 1 coluna (mobile).

### Home
*   **Hero:** Contém a proposta de valor principal e um **Mockup CSS Puro** do dashboard (janela com barra de endereço e tabela simulada), reforçando a ideia de produto real.
*   **Pipeline:** Visualização passo-a-passo (steps) de como o dado flui. Responsivo: horizontal no desktop, vertical no mobile.

## 5. Como Editar

### Para alterar cores globais:
Vá em `src/index.css` e edite a seção `:root`:
```css
:root {
  --primary: #NOVA_COR; 
}
```

### Para adicionar uma nova página:
1.  Crie o arquivo em `src/pages/NovaPagina.jsx`.
2.  Importe-o em `src/App.jsx`.
3.  Adicione uma rota: `<Route path="/nova-rota" element={<NovaPagina />} />`.

### Para editar o conteúdo (Textos):
Os textos estão *hardcoded* diretamente nos arquivos `.jsx` correspondentes (ex: `Hero.jsx` para o título principal) para facilitar a edição rápida sem arquivos de tradução complexos.
