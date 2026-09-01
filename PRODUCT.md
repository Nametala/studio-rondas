# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Moradores e trabalhadores da região central de Belo Horizonte (bairro
Funcionários e adjacências) que procuram uma academia de vizinhança com
acompanhamento próximo, em vez de uma rede grande e lotada. Situação típica:
a pessoa está insatisfeita com fila de aparelho e professor distante, ou
está voltando a treinar depois de uma pausa/lesão e quer ser acompanhada de
perto. O trabalho que ela está fazendo no site é decidir se vale marcar uma
aula experimental — a conversão é iniciar conversa no WhatsApp.

## Product Purpose

Site institucional de página única que apresenta o Studio Rondas Saúde
Integrada e leva o visitante a marcar uma aula experimental pelo WhatsApp.
Sucesso = visitante entende em segundos o que é o studio, onde fica e por que
ele é diferente, e clica para conversar no WhatsApp ou ver a localização.

## Positioning

Studio pequeno de saúde integrada onde musculação, pilates, personal e
fisioterapia ficam sob o mesmo teto, com turma reduzida e acompanhamento
próximo em cada treino — o oposto da academia de rede (fila de aparelho,
professor olhando a turma toda de longe). Nota 5,0 com 58 avaliações no
Google. [INFERIDO da copy/README — confirmar com o cliente se "saúde
integrada" e a fisioterapia presencial no espaço estão corretos.]

## Operating Context

- Endereço: Rua Bernardo Guimarães, 280 — Funcionários, Belo Horizonte/MG.
- Contato e conversão acontecem fora do site, no WhatsApp (link `wa.me`).
- Perfil no Instagram: @studiorondas.
- O cliente deve colar o link do site no campo "site" do Google Business
  depois de publicado.

## Capabilities and Constraints

- Página única, estática, sem backend e sem variáveis de ambiente. Todo
  conteúdo público, centralizado em `src/config/site.js` — texto, telefone,
  horário, modalidades, equipe, galeria e avaliações se editam só nesse
  arquivo, sem tocar em componentes.
- Stack fixada: React 19 + Vite + Tailwind CSS v4 + Motion. GSAP autorizado
  pelo cliente para uso pontual (scroll pinado / timelines) — Motion segue
  como motor principal.
- Idioma pt-BR.
- Acessibilidade: contraste mínimo WCAG AA já é exigência do projeto
  (a paleta atual foi ajustada para isso); toda animação respeita
  `prefers-reduced-motion`.
- Deploy: preview automático a cada push; produção só com autorização
  explícita do dono do projeto.

## Brand Commitments

- Nome: "Studio Rondas" (curto) / "Studio Rondas Saúde Integrada" (completo).
- Logo oficial ainda não fornecido — hoje há um monograma "R" provisório
  (PLACEHOLDER), a ser trocado pelo arquivo do cliente.
- Referência de ambição de motion dada pelo cliente: Lovable (referência de
  ousadia e fluidez de animação, não de paleta).
- Catálogo de referência de ideias de movimento: Animmaster Lib
  (animmasterlib.dev) — usado só como inspiração; efeitos reconstruídos
  limpos no stack do projeto, sem instalar nem copiar componentes.

## Evidence on Hand

- Avaliações do Google: nota 5,0, 58 avaliações (em `site.js`).
- Diferenciais tirados de avaliações reais de clientes no Google (atendimento
  de perto, sem lotação, equipamento novo, tudo em um só lugar) — não são
  estatísticas inventadas.
- SEM fotos reais do espaço, SEM fotos da equipe, SEM logo oficial, SEM texto
  "Sobre" validado, SEM número de WhatsApp real, SEM horário confirmado.
  Todos marcados PLACEHOLDER em `site.js` — não inventar nenhum desses.
- Equipe hoje listada como Jackson (personal de musculação), João (professor),
  Hugo (professor) — nomes/funções a confirmar.

## Product Principles

1. A conversão é uma conversa no WhatsApp; cada seção existe para aproximar o
   visitante desse clique, não para preencher página.
2. "De perto" é a promessa central — o site deve transmitir proximidade e
   cuidado individual, não escala.
3. Só fatos verificáveis. Nada de número, depoimento ou alegação que o
   cliente não confirmou; placeholders ficam visíveis como pendência.
4. Conteúdo mora em `site.js`; o cliente atualiza texto sem depender de dev.
5. Ambição visual e de motion é bem-vinda, mas nunca à custa de acesso,
   desempenho ou de o visitante entender o que é o studio.

## Accessibility & Inclusion

Contraste WCAG AA no mínimo para texto; foco visível em todo elemento
interativo; `prefers-reduced-motion` respeitado em todas as animações
(entrada, scroll-linked, loops e parallax). Carrossel e faixas em loop
precisam de alternativa estática e controle de pausa.
