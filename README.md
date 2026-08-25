# Studio Rondas Saúde Integrada — site institucional

Site de página única (React + Vite + Tailwind CSS v4) para o Studio Rondas
Saúde Integrada, academia em Belo Horizonte (musculação, pilates, personal e
fisioterapia).

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
equipe, avaliações) fica centralizado em [`src/config/site.js`](src/config/site.js).
Não é necessário mexer nos componentes para atualizar texto, telefone ou
horário — só editar esse arquivo.

## Pendências antes de publicar (PLACEHOLDER)

Itens marcados como `PLACEHOLDER` em `src/config/site.js` e que precisam de
confirmação do cliente antes do site ir ao ar:

- **WhatsApp**: número real (hoje está com um número fictício).
- **Horário de funcionamento**: confirmar dias e horários exatos.
- **Equipe**: confirmar nomes/funções atuais (Jackson, João, Hugo) e
  conseguir fotos.
- **Texto "Sobre"**: validar o texto com o cliente antes de publicar.
- Confirmar com o cliente se pode usar prints/textos do Instagram
  (@studiorondas) no site.

Depois de publicar, orientar o cliente a colar o link do site no campo
"site" do perfil do Google Business.
