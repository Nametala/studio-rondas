# Studio Rondas Saúde Integrada

Site institucional de página única para o Studio Rondas Saúde Integrada,
academia em Belo Horizonte (musculação, pilates, personal e fisioterapia).

**Stack:** React 19 + Vite + Tailwind CSS v4 + Motion + Lenis (smooth scroll).

Direção visual em [`design-system/studio-rondas/MASTER.md`](design-system/studio-rondas/MASTER.md):
paleta creme/tinta/âmbar, tipografia Barlow Condensed + Barlow, layout editorial.

## Rodando localmente

```bash
npm install
npm run dev
```

```bash
npm run build   # gera a versão de produção em dist/
npm run lint    # oxlint
```

## Editar conteúdo

Todo o conteúdo editável (nome, WhatsApp, endereço, horário, modalidades,
diferenciais, equipe, galeria, avaliações) fica centralizado em
[`src/config/site.js`](src/config/site.js). Não é necessário mexer nos
componentes para atualizar texto, telefone ou horário — só editar esse
arquivo.

## Pendências antes de publicar

Itens marcados `PLACEHOLDER` em `src/config/site.js` e que precisam de
confirmação do cliente antes do site ir ao ar:

- **WhatsApp**: número real (hoje está com um número fictício).
- **Horário de funcionamento**: confirmar dias e horários exatos.
- **Equipe**: confirmar nomes/funções atuais (Jackson, João, Hugo) e
  conseguir fotos.
- **Texto "Sobre"**: validar com o cliente.
- **Galeria do espaço** (`site.galeria`): hoje são cartões com ícone no
  lugar de foto — trocar por fotos reais quando confirmadas.
- **Logo** ([`src/components/Logo.jsx`](src/components/Logo.jsx) e
  `public/favicon.svg`): monograma "R" provisório — trocar pelo arquivo
  oficial assim que o cliente confirmar.
- Confirmar se pode usar prints/textos do Instagram (@studiorondas) no site.

Depois de publicar, orientar o cliente a colar o link do site no campo
"site" do perfil do Google Business.

## Segurança

Sem backend nem variáveis de ambiente — todo conteúdo em `site.js` é
informação pública. Antes de qualquer deploy:

```bash
gitleaks detect --source . --no-git                              # segredos
semgrep --config auto --exclude node_modules --exclude dist .    # SAST
npm audit                                                         # dependências
```

Nunca commitar `.env`/`.env.local` com valores reais (bloqueados no
`.gitignore`).

## Deploy

Preview automático a cada push. Produção só com autorização explícita do
dono do projeto.
