# Design System Master File — Studio Rondas

> Fonte de verdade do design do site institucional (página única).
> Ao trabalhar numa seção, cheque `design-system/studio-rondas/pages/[seção].md`
> primeiro; se existir, as regras dele têm prioridade sobre este arquivo.

**Projeto:** Studio Rondas Saúde Integrada
**Stack:** React 19 + Vite + Tailwind CSS v4 (`@theme` em `src/index.css`) + Motion + Lenis (smooth scroll)
**Direção:** "Editorial de marca" — a identidade real do @studiorondas trazida para a web:
ultramarino como cor-mãe, lima como acento de destaque, amarelo e verde vindos do logo,
tipografia de serifa didone condensada nos títulos contra grotesca justa nos rótulos.
Muito respiro, fundo branco, uma seção ultramarina como pontuação.
**Dials:** Variance 5/10 · Motion 7/10 · Density 4/10

---

## De onde vem a paleta

Os valores abaixo foram **medidos**, não escolhidos: amostragem de pixels de 48 posts
do grid do Instagram [@studiorondas](https://www.instagram.com/studiorondas/) mais o
avatar (logo), via canvas no navegador. As duas cores dominantes saíram de ~2,1 milhões
de pixels de azul e ~1,5 milhão de pixels de lima, o que dá confiança alta nos hexes.

Distribuição de fundo nos 48 posts analisados: 16 foto colorida · 10 claro/off-white ·
10 preto e branco · 7 ultramarino chapado · 5 lima chapado.

| Cor | Hex medido | Onde aparece no Instagram |
|-----|-----------|---------------------------|
| Ultramarino | `#0b1a83` | Fundo chapado dos posts — a cor mais presente do perfil |
| Lima | `#99c10b` | Blocos de destaque e posts chapados |
| Amarelo | `#fdd504` | Disco do logo (67% dos pixels do avatar); realces de palavra |
| Verde bandeira | `#0f7833` | O "R" do logo |
| Preto / branco | `#0c0c0c` / `#ffffff` | Fotografia P&B e tipografia |
| Off-white morno | `#ece4dc` | Fundo dos posts claros |

> O anel rosa em volta do avatar **não é da marca** — é o indicador de stories do
> próprio Instagram. Não usar magenta.

---

## Paleta (tokens)

Tokens definidos em `src/index.css` dentro de `@theme` (Tailwind v4 gera as utilities
`bg-*`, `text-*`, `border-*`). Todos os pares de texto abaixo passam WCAG AA (≥4.5:1).

| Papel | Hex | Token | Uso |
|------|-----|-------|-----|
| Branco | `#ffffff` | `--color-surface` | Fundo principal |
| Off-white morno | `#f1eee8` | `--color-surface-alt` | Seções alternadas, cards |
| Ultramarino | `#0b1a83` | `--color-ink-deep` | Seção chapada de respiro (Prova Social) |
| Tinta (texto) | `#12121a` | `--color-ink` | Texto principal — 18,6:1 sobre branco |
| Tinta suave | `#55555f` | `--color-ink-muted` | Texto secundário — 7,4:1 sobre branco |
| Fio / hairline | `#dedce4` | `--color-line` | Bordas e divisórias |
| Ultramarino (texto) | `#0b1a83` | `--color-accent` | Links, eyebrow, ícones — 14,1:1 |
| Lima preenchimento | `#99c10b` | `--color-accent-fill` | Botões — SEMPRE com texto tinta |
| Amarelo | `#fdd504` | `--color-highlight` | Bloco `.swipe-alt`, realces, `::selection` |
| Verde da marca | `#0f7833` | `--color-brand-green` | "R" do logo; é também o CTA de WhatsApp |
| Verde WhatsApp | `#0f7833` | `--color-whatsapp` | CTA de WhatsApp — 5,6:1 com texto branco |
| Verde WhatsApp escuro | `#0b6329` | `--color-whatsapp-dark` | Hover do CTA de WhatsApp |
| Anel de foco | `#0b1a83` | `--color-ring` | `focus-visible:ring-ring` |

Os quatro hexes de marca também existem crus, para SVG e casos pontuais:
`--color-brand-blue`, `--color-brand-lime`, `--color-brand-yellow`, `--color-brand-green`.

### Regras de ouro

1. **Lima e amarelo carregam texto tinta, nunca branco.** Branco sobre lima dá 2,1:1 —
   reprova. É a única divergência consciente em relação ao Instagram, onde eles usam
   branco sobre lima; num post isso é aceitável, numa interface não.
2. **Ultramarino e verde carregam texto branco.** 14,1:1 e 5,6:1.
3. **Verde é exclusivo do WhatsApp** na interface — fora isso ele só aparece dentro do
   logo. A coincidência entre o verde do "R" e o verde do WhatsApp é feliz, não um convite
   para espalhar verde pelo site.
4. **Ultramarino é o acento único** de texto e ícone. Não introduzir uma quinta cor.

### Contrastes verificados

| Par | Ratio |
|-----|------:|
| Tinta sobre branco | 18,6:1 |
| Tinta suave sobre branco | 7,4:1 |
| Ultramarino sobre branco (link/eyebrow) | 14,1:1 |
| Tinta sobre lima (botão) | 8,9:1 |
| Tinta sobre amarelo | 13,0:1 |
| Branco sobre ultramarino | 14,1:1 |
| Lima sobre ultramarino (eyebrow/estrelas) | 6,7:1 |
| Branco sobre verde WhatsApp | 5,6:1 |

---

## Tipografia

O perfil combina uma **serifa didone condensada** nos títulos (romana e itálica) com uma
**grotesca justa** nos rótulos de canto, números e apoio. O site reproduz essa divisão:

- **Títulos:** `Instrument Serif` — `font-display` / `--font-display`.
  Existe **só em peso 400**: nunca combinar com `font-semibold`/`font-bold`, senão o
  navegador sintetiza um falso negrito. A hierarquia vem do tamanho, não do peso.
  O itálico é parte da voz (segunda linha do hero, citação da Prova Social).
- **Rótulos, números e corpo:** `Archivo` (400/500/600/700) — `--font-sans`.
  Todo rótulo em CAIXA ALTA com tracking aberto usa a grotesca, nunca a serifa —
  é assim nas artes deles ("STUDIO RONDAS", "SAÚDE INTEGRADA").
- **Mono:** stack de sistema (`ui-monospace`…) — só índices numéricos.
- Carregadas via `<link>` em `index.html`.

Utilities de apoio em `src/index.css`:

- `.font-display` — serifa em 400 com tracking levemente fechado.
- `.eyebrow` — rótulo grotesco versalete com tracinho de régua (a cor vem por classe,
  ex. `text-accent` no claro, `text-accent-fill` sobre o ultramarino).
- `.swipe` — bloco chapado ultramarino com texto branco atrás de uma palavra. É a
  assinatura das artes deles (a palavra "Pilates" dentro de um retângulo).
- `.swipe-alt` — a mesma caixa em amarelo com texto tinta.

O asterisco de oito pontas (✷) é motivo recorrente do perfil: aparece no logo e como
separador da faixa marquee.

---

## Layout & ritmo

- Container: `max-w-6xl mx-auto`, padding `px-5 sm:px-8`.
- Seções: `py-24 sm:py-32`; `scroll-mt-20` para as âncoras.
- Alternância de fundo: `surface` → `surface-alt` → `surface`… Uma única seção
  ultramarina (`ink-deep`, Prova Social) fecha a página como pontuação.
- Cada seção abre com `<SectionEyebrow>NN — Nome</SectionEyebrow>` + `<SectionHeading>`.
- Bordas: hairline `border-line`, cantos `rounded-2xl`/`rounded-3xl`. Sombras quase
  ausentes — a hierarquia vem do fio e do espaço, não de elevação.
- Grão de ruído sutil (`body::after`, opacidade 0.04) reproduz a textura que eles
  aplicam sobre os fundos chapados dos posts.

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
- **Parallax em camadas** (`HeroArt`): quatro camadas com amplitudes de 18 a 100px,
  suavizadas por `useSpring`. O piso e o aparelho ficam na *mesma* camada de
  propósito: separá-los descola o reformer do chão e quebra a composição.
  Nunca aplicar parallax em texto.
- **Botão magnético** (`Magnetic`): o CTA principal segue o cursor com mola. Só age
  em `(hover: hover) and (pointer: fine)` — em toque, puxar o alvo sob o dedo
  prejudicaria o acerto do toque.
- **Números** (`CountUp`): contam ao entrar em tela; sob reduced-motion nascem no
  valor final, derivado no render (sem `setState` de efeito).
- Hover de linha/cartão: preenchimento que varre com `scale-x` a partir de
  `origin-left`. Anima só `transform` — nada de `width`/`height`, que forçam layout.
- Marquee: CSS puro (`.marquee-track`), pausa sob reduced-motion.
- `<MotionConfig reducedMotion="user">` em `main.jsx` — toda animação respeita o sistema.
  Efeitos em CSS puro carregam `motion-reduce:` explicitamente, já que o MotionConfig
  não os alcança.
- Hover: transições 150–300ms; nada de transform que empurre layout.
- Um só efeito de scroll pesado por página (o parallax do hero). Não empilhar seções
  fixadas: brigam com o scroll nativo e pioram muito o mobile.

---

## Conteúdo

Todo texto editável vive em `src/config/site.js`. Campos `PLACEHOLDER` (WhatsApp real,
horário, nomes da equipe, texto "Sobre", logo oficial) ficam visíveis como pendência e
**não devem ser inventados** — ver `PRODUCT.md` e `README.md`.

O monograma em `src/components/Logo.jsx` é um desenho aproximado do avatar do
Instagram (disco amarelo, "R" verde, brilho ultramarino) — substituir pelo vetor
oficial quando o cliente enviar.

### Ilustrações (`public/ilustra/`)

Sem fotos reais, o site usa ilustração vetorial própria em vez de banco de imagem.
A direção é deliberada: **equipamento, interiores e tipografia — sem figura humana.**
Silhueta de pessoa em vetor plano é fácil de errar e, malfeita, lê como defeito;
o aparelho e o espaço comunicam a modalidade sem esse risco.

| Arquivo | O que mostra | Onde entra |
|---------|--------------|------------|
| `pilates.svg` | Reformer em vista lateral | Galeria + `HeroArt` |
| `musculacao.svg` | Rack com halteres | Galeria |
| `atendimento.svg` | Ficha de treino com progresso | Galeria |
| `recepcao.svg` | Interior: janela, balcão, luminárias, planta | Galeria |
| `equipe-1..3.svg` | Cartões de monograma (inicial em serifa) | Equipe |

Regras ao criar novas peças: paleta da marca apenas; grão em `feTurbulence` a ~0.10
de opacidade; o brilho de oito pontas como pontuação, nunca como elemento principal;
fundo escuro o bastante onde houver legenda branca sobreposta. **Nada de círculos
concêntricos** — lêem como anilha e foram removidos de propósito.

Tudo isso é preenchimento para a apresentação de venda e sai quando chegarem as fotos
reais: basta trocar a string em `foto` dentro de `src/config/site.js`.

---

## Checklist antes de entregar

- [ ] Ícones em SVG (`src/components/icons.jsx`), nunca emoji
- [ ] `cursor-pointer` em tudo que é clicável; hover com transição 150–300ms
- [ ] Contraste de texto ≥ 4.5:1 (a paleta acima já garante)
- [ ] Nenhum `font-semibold`/`font-bold` junto de `font-display` (falso negrito)
- [ ] Texto tinta sobre lima e amarelo; texto branco sobre ultramarino e verde
- [ ] `focus-visible:ring-ring` visível em todo elemento interativo
- [ ] `prefers-reduced-motion` respeitado (entradas, parallax, marquee, carrossel)
- [ ] Responsivo em 375 / 768 / 1024 / 1440; sem scroll horizontal
- [ ] Carrossel da galeria: setas + dots operáveis por teclado, pausa no hover/foco
- [ ] `npm run lint` e `npm run build` limpos
