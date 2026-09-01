# Design System Master File — Studio Rondas

> Fonte de verdade do design do site institucional (página única).
> Ao trabalhar numa seção, cheque `design-system/studio-rondas/pages/[seção].md`
> primeiro; se existir, as regras dele têm prioridade sobre este arquivo.

**Projeto:** Studio Rondas Saúde Integrada
**Stack:** React 19 + Vite + Tailwind CSS v4 (`@theme` em `src/index.css`) + Motion + Lenis (smooth scroll)
**Direção:** "Academia editorial em base escura" — fundo quase-preto, fotografia real do
espaço, ultramarino e lima da marca como acentos, serifa de peso alto nos títulos.
A base escura não é estética gratuita: as fotos de academia são escuras e de baixa
luz, e um fundo claro brigava com todas elas.
**Dials:** Variance 6/10 · Motion 7/10 · Density 4/10

---

## De onde vem a paleta

Os valores de marca foram **medidos**, não escolhidos: amostragem de pixels de 48 posts
do grid do Instagram [@studiorondas](https://www.instagram.com/studiorondas/) mais o
avatar (logo), via canvas no navegador. As duas cores dominantes saíram de ~2,1 milhões
de pixels de azul e ~1,5 milhão de pixels de lima.

| Cor | Hex medido | Onde aparece no Instagram |
|-----|-----------|---------------------------|
| Ultramarino | `#0b1a83` | Fundo chapado dos posts — a cor mais presente do perfil |
| Lima | `#99c10b` | Blocos de destaque e posts chapados |
| Amarelo | `#fdd504` | Disco do logo (67% dos pixels do avatar) |
| Verde bandeira | `#0f7833` | O "R" do logo |

> O anel rosa em volta do avatar **não é da marca** — é o indicador de stories do
> próprio Instagram. Não usar magenta.

---

## Paleta (tokens)

Tokens definidos em `src/index.css` dentro de `@theme`. Todos os pares de texto abaixo
passam WCAG AA (≥4.5:1).

| Papel | Hex | Token | Uso |
|------|-----|-------|-----|
| Quase-preto | `#0e1014` | `--color-surface` | Fundo principal |
| Um passo acima | `#16191f` | `--color-surface-alt` | Seções alternadas, cards |
| Ultramarino | `#0b1a83` | `--color-ink-deep` | Seção chapada de respiro (Prova Social) |
| Texto claro | `#f3f4f6` | `--color-ink` | Texto principal — 17,3:1 sobre o fundo |
| Texto suave | `#a2a7b3` | `--color-ink-muted` | Texto secundário — 7,9:1 |
| Fio / hairline | `#272b34` | `--color-line` | Bordas e divisórias |
| Lima (texto) | `#99c10b` | `--color-accent` | Links, eyebrow, ícones — 9,1:1 |
| Lima preenchimento | `#99c10b` | `--color-accent-fill` | Botões — SEMPRE com texto escuro |
| Amarelo | `#fdd504` | `--color-highlight` | `.swipe-alt`, realces, `::selection` |
| Verde WhatsApp | `#0f7833` | `--color-whatsapp` | CTA de WhatsApp — 5,6:1 com branco |
| Verde WhatsApp escuro | `#0b6329` | `--color-whatsapp-dark` | Hover do CTA |
| Anel de foco | `#99c10b` | `--color-ring` | `focus-visible:ring-ring` |

Os quatro hexes de marca também existem crus, para SVG e casos pontuais:
`--color-brand-blue`, `--color-brand-lime`, `--color-brand-yellow`, `--color-brand-green`.

### Regras de ouro

1. **Lima e amarelo carregam `text-surface` (escuro), nunca `text-ink`.** Texto claro
   sobre lima dá 1,9:1 — reprova feio. Como o fundo do site é escuro, `text-surface`
   é justamente a cor escura: em botão lima ela é a escolha certa.
   Vale para o estado de hover também — se o hover troca o fundo, o texto tem que trocar junto.
2. **Ultramarino e verde carregam `text-ink` (claro).** 12,8:1 e 5,6:1.
3. **Verde é exclusivo do WhatsApp** na interface — fora isso ele só aparece no logo.
4. **Lima é o acento único** de texto e ícone. Não introduzir uma quinta cor.

### Contrastes verificados

| Par | Ratio |
|-----|------:|
| Texto claro sobre o fundo | 17,3:1 |
| Texto suave sobre o fundo | 7,9:1 |
| Lima sobre o fundo (link/eyebrow) | 9,1:1 |
| Texto escuro sobre lima (botão) | 9,1:1 |
| Texto escuro sobre amarelo | 13,3:1 |
| Texto claro sobre ultramarino | 12,8:1 |
| Lima sobre ultramarino | 6,7:1 |
| Branco sobre verde WhatsApp | 5,6:1 |

---

## Tipografia

- **Títulos:** `Fraunces` (variável), usada em **peso 700** via `.font-display`.
  Escolhida por ter corpo: a didone fina que estava antes sumia contra fotografia e
  não passava a ideia de academia. Não combinar com `font-bold` — o peso já vem da
  classe. O itálico é parte da voz (segunda linha do hero, citação da Prova Social).
- **Rótulos, números e corpo:** `Archivo` (400/500/600/700) — `--font-sans`.
  Todo rótulo em CAIXA ALTA com tracking aberto usa a grotesca, nunca a serifa —
  é assim nas artes deles ("STUDIO RONDAS", "SAÚDE INTEGRADA").
- **Mono:** stack de sistema — só índices numéricos.
- Carregadas via `<link>` em `index.html`.

Utilities de apoio em `src/index.css`: `.font-display`, `.eyebrow`, `.swipe` (bloco
ultramarino com texto claro, a assinatura das artes deles) e `.swipe-alt` (a mesma
caixa em amarelo com texto escuro).

O asterisco de oito pontas (✷) é motivo recorrente do perfil: aparece no logo, no selo
sobre a foto do hero e como separador da faixa marquee.

---

## Imagens

**O site usa fotografia real — não ilustração, não composição abstrata.** Três tentativas
de substituir foto por imagem gerada foram descartadas em revisão: stock aleatório
(entregou um urso como personal), composições abstratas de cor e ilustração vetorial de
equipamento. Todas falharam no mesmo ponto: o site precisa parecer uma academia de verdade
para o cliente se enxergar nele.

As fotos atuais vêm do **Unsplash** (licença de uso comercial livre, sem atribuição
obrigatória) e estão centralizadas em `src/config/site.js`, montadas pelo helper `foto(id, w, h)`
que fixa o recorte e a otimização no CDN. O `id` é estável, então a imagem nunca muda.

São **provisórias**: existem para a apresentação de venda e saem quando chegarem as fotos
do studio — basta trocar a URL em `foto`. Critério ao escolher: cena escura ou de baixa luz
(para casar com a base), modalidade reconhecível de imediato, e nada de close genérico.

---

## Layout & ritmo

- Container: `max-w-6xl mx-auto`, padding `px-5 sm:px-8`.
- Seções: `py-24 sm:py-32`; `scroll-mt-20` para as âncoras.
- Alternância de fundo: `surface` → `surface-alt` → `surface`… Uma única seção
  ultramarina (`ink-deep`, Prova Social) fecha a página como pontuação.
- Cada seção abre com `<SectionEyebrow>NN — Nome</SectionEyebrow>` + `<SectionHeading>`.
- Bordas: hairline `border-line`, cantos `rounded-2xl`/`rounded-3xl`. Sombras quase
  ausentes — em base escura sombra não constrói hierarquia; o fio e o espaço constroem.
- Grão de ruído sutil (`body::after`) em `mix-blend-mode: soft-light` — em fundo escuro
  o `multiply` de antes sumiria.

---

## Motion

Motor principal: **Motion** (`motion/react`). Smooth scroll: **Lenis** (`src/lib/useSmoothScroll.js`),
desligado sob `prefers-reduced-motion`.

- Entradas: `whileInView` com `viewport={{ once: true }}`, `opacity/y`, `ease` = `EASE`
  (`[0.16, 1, 0.3, 1]` em `src/lib/motion.js`), duração 0.6–0.85s, stagger ~0.08.
  Componentes prontos: `Reveal`, `RevealGroup`/`RevealItem` em `src/components/Reveal.jsx`.
- **Cortina de palavras** (`WordReveal`): cada linha do título é uma máscara com
  `overflow-hidden` e as palavras sobem de `y: 112%`. Usada no `<h1>` do hero (no
  carregamento) e em todo `SectionHeading` (ao entrar em tela). Só para títulos
  curtos — em parágrafo o efeito vira ruído e atrapalha a leitura.
- **Parallax do hero** (`HeroArt`): a foto é 18% mais alta que a máscara e desliza
  ±6%, então nunca descobre a borda; o selo de canto anda em sentido contrário para
  criar profundidade. Ambos suavizados por `useSpring`. Nunca aplicar parallax em texto.
- **Botão magnético** (`Magnetic`): o CTA principal segue o cursor com mola. Só age
  em `(hover: hover) and (pointer: fine)` — em toque, puxar o alvo sob o dedo
  prejudicaria o acerto do toque.
- **Números** (`CountUp`): contam ao entrar em tela; sob reduced-motion nascem no
  valor final, derivado no render (sem `setState` de efeito).
- Hover de linha/cartão: preenchimento que varre com `scale-x` a partir de
  `origin-left`. Anima só `transform` — nada de `width`/`height`, que forçam layout.
- Marquee: CSS puro (`.marquee-track`), pausa sob reduced-motion.
- `<MotionConfig reducedMotion="user">` em `main.jsx`. Efeitos em CSS puro carregam
  `motion-reduce:` explicitamente, já que o MotionConfig não os alcança.
- Um só efeito de scroll pesado por página (o parallax do hero). Não empilhar seções
  fixadas: brigam com o scroll nativo e pioram muito o mobile.

---

## Conteúdo

Todo texto editável vive em `src/config/site.js`. Campos `PLACEHOLDER` (WhatsApp real,
horário, nomes da equipe, texto "Sobre", logo oficial, fotos) ficam visíveis como
pendência e **não devem ser inventados** — ver `PRODUCT.md` e `README.md`.

O monograma em `src/components/Logo.jsx` é um desenho aproximado do avatar do
Instagram (disco amarelo, "R" verde, brilho ultramarino) — substituir pelo vetor
oficial quando o cliente enviar.

---

## Checklist antes de entregar

- [ ] Ícones em SVG (`src/components/icons.jsx`), nunca emoji
- [ ] `cursor-pointer` em tudo que é clicável; hover com transição 150–300ms
- [ ] Contraste de texto ≥ 4.5:1 (a paleta acima já garante)
- [ ] Nenhum `bg-accent-fill` ou `bg-highlight` com `text-ink` — tem que ser `text-surface`,
      inclusive no estado de hover
- [ ] Nenhum `font-bold` junto de `font-display` (o peso vem da classe)
- [ ] `focus-visible:ring-ring` visível em todo elemento interativo
- [ ] `prefers-reduced-motion` respeitado (entradas, parallax, marquee, carrossel)
- [ ] Responsivo em 375 / 768 / 1024 / 1440; sem scroll horizontal
- [ ] Carrossel da galeria: setas + dots operáveis por teclado, pausa no hover/foco
- [ ] `npm run lint` e `npm run build` limpos
