# Design System Master File — Studio Rondas

> Fonte de verdade do design do site institucional (página única).
> Ao trabalhar numa seção, cheque `design-system/studio-rondas/pages/[seção].md`
> primeiro; se existir, as regras dele têm prioridade sobre este arquivo.

**Projeto:** Studio Rondas Saúde Integrada
**Stack:** React 19 + Vite + Tailwind CSS v4 (`@theme` em `src/index.css`) + Motion + Lenis (smooth scroll)
**Direção:** "Claro e editorial" — papel creme quente, tinta quase preta, âmbar como único
acento, verde reservado só para o WhatsApp. Bastante respiro, tipografia condensada grande,
composição assimétrica. Calmo e premium — transmite proximidade e cuidado, não escala.
**Dials:** Variance 5/10 · Motion 7/10 · Density 4/10

---

## Paleta

Tokens definidos em `src/index.css` dentro de `@theme` (Tailwind v4 gera as utilities
`bg-*`, `text-*`, `border-*`). Todos os pares de texto abaixo passam WCAG AA (≥4.5:1).

| Papel | Hex | Token | Uso |
|------|-----|-------|-----|
| Papel creme | `#f7f4ec` | `--color-surface` | Fundo principal |
| Creme fechado | `#efe9db` | `--color-surface-alt` | Seções alternadas, cards |
| Tinta profunda | `#16130e` | `--color-ink-deep` | Seção escura de respiro (Prova Social) |
| Tinta (texto) | `#211d16` | `--color-ink` | Texto principal — 14.8:1 sobre creme |
| Tinta suave | `#5c5548` | `--color-ink-muted` | Texto secundário — 5.9:1 sobre creme |
| Fio / hairline | `#ded6c3` | `--color-line` | Bordas e divisórias sobre creme |
| Âmbar (texto) | `#b45309` | `--color-accent` | Links, eyebrow, marcas pequenas — 5.1:1 |
| Âmbar preenchimento | `#e0a43b` | `--color-accent-fill` | Botões âmbar — SEMPRE com texto tinta |
| Marca-texto | `#f4cd76` | `--color-highlight` | Traço decorativo atrás de uma palavra (`.swipe`) |
| Verde WhatsApp | `#2f7d3c` | `--color-whatsapp` | Só CTA de WhatsApp — 5.1:1 com texto branco |
| Verde WhatsApp escuro | `#276a33` | `--color-whatsapp-dark` | Hover do CTA de WhatsApp |
| Anel de foco | `#8a4b0a` | `--color-ring` | `focus-visible:ring-ring` |

**Regra de ouro:** botão âmbar (`bg-accent-fill`) usa texto tinta, nunca branco.
Verde é exclusivo do WhatsApp. Âmbar é o único acento — não introduzir outra cor.

---

## Tipografia

- **Display:** `Barlow Condensed` (600) — `font-display` / `--font-display`.
  Títulos de seção em caixa mista; hero e eyebrow em CAIXA ALTA com `tracking` aberto.
- **Corpo:** `Barlow` (400/500/600) — `--font-sans`.
- **Mono:** stack de sistema (`ui-monospace`…) — só números medidos (horário, índices `01`).
- Carregadas via `<link>` em `index.html` (Barlow Condensed 500/600/700 + Barlow 400/500/600).

Utilities de apoio em `src/index.css`: `.font-display`, `.eyebrow` (rótulo condensado
versalete com tracinho de régua — a cor vem por classe, ex. `text-accent`), `.swipe`
(traço de marca-texto atrás de uma palavra).

---

## Layout & ritmo

- Container: `max-w-6xl mx-auto`, padding `px-5 sm:px-8`.
- Seções: `py-24 sm:py-32`; `scroll-mt-20` para as âncoras.
- Alternância de fundo: `surface` → `surface-alt` → `surface`… Uma única seção escura
  (`ink-deep`, Prova Social) fecha a página como pontuação.
- Cada seção abre com `<SectionEyebrow>NN — Nome</SectionEyebrow>` + `<SectionHeading>`.
- Bordas: hairline `border-line`, cantos `rounded-2xl`/`rounded-3xl`. Sombras quase
  ausentes — a hierarquia vem do fio e do espaço, não de elevação.

---

## Motion

Motor principal: **Motion** (`motion/react`). Smooth scroll: **Lenis** (`src/lib/useSmoothScroll.js`),
desligado sob `prefers-reduced-motion`.

- Entradas: `whileInView` com `viewport={{ once: true }}`, `opacity/y`, `ease` = `EASE`
  (`[0.16, 1, 0.3, 1]` em `src/lib/motion.js`), duração 0.6–0.85s, stagger ~0.08.
  Componentes prontos: `Reveal`, `RevealGroup`/`RevealItem` em `src/components/Reveal.jsx`.
- Parallax: só em camadas decorativas (arco do hero), nunca em texto.
- Marquee: CSS puro (`.marquee-track`), pausa sob reduced-motion.
- `<MotionConfig reducedMotion="user">` em `main.jsx` — toda animação respeita o sistema.
- Hover: transições 150–300ms; nada de transform que empurre layout.

---

## Conteúdo

Todo texto editável vive em `src/config/site.js`. Campos `PLACEHOLDER` (WhatsApp real,
horário, fotos da equipe/espaço, texto "Sobre", logo oficial) ficam visíveis como
pendência e **não devem ser inventados** — ver `PRODUCT.md` e `README.md`.

---

## Checklist antes de entregar

- [ ] Ícones em SVG (`src/components/icons.jsx`), nunca emoji
- [ ] `cursor-pointer` em tudo que é clicável; hover com transição 150–300ms
- [ ] Contraste de texto ≥ 4.5:1 (a paleta acima já garante)
- [ ] `focus-visible:ring-ring` visível em todo elemento interativo
- [ ] `prefers-reduced-motion` respeitado (entradas, parallax, marquee, carrossel)
- [ ] Responsivo em 375 / 768 / 1024 / 1440; sem scroll horizontal
- [ ] Carrossel da galeria: setas + dots operáveis por teclado, pausa no hover/foco
- [ ] `npm run lint` e `npm run build` limpos
