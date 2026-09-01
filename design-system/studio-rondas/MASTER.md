# Design System Master File — Studio Rondas

> Fonte de verdade do design do site institucional (página única).
> Ao trabalhar numa seção, cheque `design-system/studio-rondas/pages/[seção].md`
> primeiro; se existir, as regras dele têm prioridade sobre este arquivo.

**Projeto:** Studio Rondas Saúde Integrada
**Stack:** React 19 + Vite + Tailwind CSS v4 (`@theme` em `src/index.css`) + Motion + Lenis (smooth scroll)
**Direção:** "Papel morno com blocos de marca" — a base é o off-white quente das
artes deles, e a identidade entra em blocos chapados de ultramarino e lima ocupando
seções inteiras, como nos posts. Fotografia real do espaço. Serifa de peso alto.
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
| Papel morno | `#f4f1eb` | `--color-surface` | Fundo principal |
| Papel fechado | `#e7e1d6` | `--color-surface-alt` | Seções alternadas, cards |
| Ultramarino | `#0b1a83` | `--color-ink-deep` | Seção chapada de marca (Prova Social) |
| Tinta | `#1b1a17` | `--color-ink` | Texto principal — 15,4:1 sobre o papel |
| Tinta suave | `#5b5850` | `--color-ink-muted` | Texto secundário — 6,3:1 |
| Fio / hairline | `#d9d3c7` | `--color-line` | Bordas e divisórias |
| Ultramarino (texto) | `#0b1a83` | `--color-accent` | Links, eyebrow, ícones — 12,5:1 |
| Lima | `#99c10b` | `--color-accent-fill` | Botões e a seção chapada de Diferenciais |
| Amarelo | `#fdd504` | `--color-highlight` | Realces, `::selection` |
| Verde WhatsApp | `#0f7833` | `--color-whatsapp` | CTA de WhatsApp — 5,6:1 com branco |
| Verde WhatsApp escuro | `#0b6329` | `--color-whatsapp-dark` | Hover do CTA |
| Anel de foco | `#0b1a83` | `--color-ring` | `focus-visible:ring-ring` |

**A base é papel morno, não branco nem escuro.** O `#f4f1eb` deriva do `#e2ddd8`
medido nas artes claras deles (H30, S14%, L87%), um pouco clareado para grandes áreas
de texto respirarem. Duas tentativas anteriores erraram a mão: branco puro brigava com
a fotografia, e um quase-preto `#0e1014` saiu da personalidade da marca — o perfil deles
é claro e quente, com a cor entrando em blocos, não no fundo. Não escurecer a base de
novo: se faltar peso, aumentar a presença dos blocos de ultramarino e lima.

Os quatro hexes de marca também existem crus, para SVG e casos pontuais:
`--color-brand-blue`, `--color-brand-lime`, `--color-brand-yellow`, `--color-brand-green`.

### Regras de ouro

1. **Lima e amarelo carregam `text-ink` (a tinta escura), nunca texto claro.** Texto
   claro sobre lima dá 1,9:1. Vale para o hover também: se o hover troca o fundo, o
   texto tem que trocar junto.
2. **Na seção chapada de lima, todo texto é `text-ink` cheio — nada de `text-ink-muted`**,
   que ali dá 3,4:1 e reprova. A hierarquia vem do tamanho, não da opacidade.
3. **Ultramarino carrega `text-surface` (o papel).** 12,5:1.
4. **Verde é exclusivo do WhatsApp** na interface — fora isso ele só aparece no logo.
5. **A marca aparece em bloco, não em respingo.** Duas seções inteiras chapadas
   (Diferenciais em lima, Prova Social em ultramarino) é o que faz a página parecer
   deles. Não reduzir isso a detalhes de acento.

### Contrastes verificados

| Par | Ratio |
|-----|------:|
| Tinta sobre o papel | 15,4:1 |
| Tinta suave sobre o papel | 6,3:1 |
| Ultramarino sobre o papel (link/eyebrow) | 12,5:1 |
| Tinta sobre lima (botão e seção) | 8,3:1 |
| Tinta sobre amarelo | 12,2:1 |
| Papel sobre ultramarino (seção) | 12,5:1 |
| Lima sobre ultramarino | 6,7:1 |
| Ultramarino sobre lima | 6,7:1 |
| Branco sobre verde WhatsApp | 5,6:1 |

---

## Anti-template

O que separa esta página de um layout gerado. Cada item aqui existe porque foi
apontado numa revisão como "cara de IA":

- **Nada de rótulo numerado de seção.** `01 — Sobre`, `05 — Espaço` e afins foram
  removidos: numerar seções não ajuda ninguém a navegar e é a assinatura mais óbvia
  de template. Sobraram três rótulos, todos com sentido próprio (`Por que o Rondas`,
  `O espaço`, `No Google`), e quatro seções abrem direto no título.
- **Numeração só onde enumera de verdade.** Modalidades mantém `01`–`04` porque são
  quatro itens de uma lista; parágrafos de texto corrido não levam índice.
- **Ritmo vertical variado.** Cada seção tem seu próprio respiro (`py-24 sm:py-36`
  até `py-28 sm:py-44`) em vez do mesmo valor repetido — página com cadência, não
  com régua.
- **Layouts que não se repetem.** Sobre é assimétrica (título à esquerda, texto numa
  coluna estreita à direita separada por fio), Modalidades é lista larga, Diferenciais
  é grade, Galeria é carrossel. Não empilhar sete seções com a mesma estrutura de
  "rótulo, título, conteúdo".
- **Sem seta "Continuar" no hero.** Indicador de rolagem em página que obviamente
  rola é ornamento vazio.
- **O `<h1>` cabe em 2 linhas.** Se passar de 3, diminuir o corpo ou alargar o
  container — nunca deixar virar um bloco de 5 linhas.

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

Utilities de apoio em `src/index.css`: `.font-display` e `.eyebrow`.

O bloco de marca-texto atrás de uma palavra do título (`.swipe`) **foi removido a pedido**.
Para destacar uma palavra no título, colorir em ultramarino (`text-accent`) — é mais
limpo e deixa a marca aparecer sem a caixa.

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
do studio — basta trocar a URL em `foto`. Critério ao escolher: modalidade reconhecível de
imediato, cena com profundidade (não close genérico), e imagem com contraste próprio, já
que sobre o papel claro ela precisa se sustentar sozinha.

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
