// Configuração central do site — Studio Rondas Saúde Integrada.
// Edite os valores abaixo para atualizar conteúdo, contato e equipe sem mexer em componentes.
// Campos marcados "PLACEHOLDER" precisam de confirmação do cliente antes da publicação final.

// Monta a URL de uma foto do Unsplash já recortada e otimizada pelo CDN deles.
// `id` é o identificador estável da foto (photo-XXXXXXXXXXXXX-XXXXXXXXXXXX), então
// a imagem nunca muda — diferente de serviço que sorteia foto a cada requisição.
// Todas as fotos usadas aqui estão sob a Unsplash License, que permite uso
// comercial sem atribuição. Ainda assim, são provisórias: o objetivo é o cliente
// enxergar o site pronto, e devem sair quando chegarem as fotos do studio.
const foto = (id, w, h) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=${w}&h=${h}`

export const site = {
  nome: 'Studio Rondas',
  nomeCompleto: 'Studio Rondas Saúde Integrada',

  // Foto de abertura — interior de academia com luz fria, que conversa com o
  // ultramarino da marca. PLACEHOLDER, como as demais.
  heroFoto: foto('photo-1693214674451-2111f7690877', 900, 1200),

  whatsapp: {
    // PLACEHOLDER — substituir pelo número real do WhatsApp do studio (formato: 55DDDNUMERO)
    numero: '5531900000000',
    mensagemPadrao:
      'Olá! Gostaria de marcar uma aula experimental no Studio Rondas.',
  },

  instagram: {
    usuario: '@studiorondas',
    url: 'https://www.instagram.com/studiorondas/',
  },

  endereco: {
    enderecoCompleto:
      'Rua Bernardo Guimarães, 280 - Funcionários, Belo Horizonte - MG',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Rua+Bernardo+Guimar%C3%A3es,+280,+Funcion%C3%A1rios,+Belo+Horizonte+-+MG&output=embed',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Studio+Rondas+Sa%C3%BAde+Integrada+Rua+Bernardo+Guimar%C3%A3es+280+Belo+Horizonte',
  },

  // PLACEHOLDER — confirmar horário exato de funcionamento com o cliente
  horario: [
    { dias: 'Segunda a sexta', horas: '06h às 21h' },
    { dias: 'Sábado', horas: '08h às 12h' },
  ],

  avaliacoes: {
    nota: 5.0,
    total: 58,
  },

  sobre: {
    // PLACEHOLDER — texto a validar com o cliente
    paragrafos: [
      'No Studio Rondas o atendimento é próximo e as turmas são reduzidas: cada aluno é acompanhado de perto, do primeiro treino em diante.',
      'Musculação, pilates, personal e fisioterapia em um só espaço, sem a agitação das academias grandes.',
    ],
  },

  modalidades: [
    {
      nome: 'Pilates',
      icone: 'pilates',
      descricao:
        'Aulas em turma reduzida, com foco em postura, mobilidade e fortalecimento.',
    },
    {
      nome: 'Musculação personalizada',
      icone: 'dumbbell',
      descricao:
        'Treino adaptado ao seu objetivo, com acompanhamento próximo.',
    },
    {
      nome: 'Personal',
      icone: 'personal',
      descricao: 'Atendimento individual, horário e plano de treino sob medida.',
    },
    {
      nome: 'Fisioterapia',
      icone: 'fisio',
      descricao: 'Avaliação e reabilitação integradas ao treino.',
    },
  ],

  // Diferenciais confirmados a partir das avaliações do Google (não são
  // números/estatísticas inventados — só fatos citados por clientes reais).
  diferenciais: [
    {
      icone: 'personal',
      titulo: 'Atendimento de perto',
      descricao:
        'Acompanhamento próximo em cada treino, não um professor distante olhando pra turma toda.',
    },
    {
      icone: 'grupo',
      titulo: 'Sem lotação',
      descricao:
        'Turma reduzida, sem a fila de aparelhos das academias grandes.',
    },
    {
      icone: 'sparkle',
      titulo: 'Equipamento novo',
      descricao: 'Aparelhos trocados recentemente, sempre em bom estado.',
    },
    {
      icone: 'espaco',
      titulo: 'Tudo em um só lugar',
      descricao:
        'Musculação, pilates, personal e fisioterapia sob o mesmo teto.',
    },
  ],

  // PLACEHOLDER — confirmar nomes e funções com o cliente antes de publicar.
  // Fotos de banco (Unsplash, licença de uso comercial livre), escolhidas para
  // o site parecer pronto na apresentação de venda. Trocar pelas fotos reais da
  // equipe antes de publicar: basta substituir a URL em `foto`.
  equipe: [
    {
      nome: 'Jackson',
      funcao: 'Personal de musculação',
      foto: foto('photo-1585892478508-130c50eb7a69', 560, 700),
    },
    {
      nome: 'João',
      funcao: 'Professor',
      foto: foto('photo-1577744168855-0391d2ed2b3a', 560, 700),
    },
    {
      nome: 'Hugo',
      funcao: 'Professor',
      foto: foto('photo-1652400744403-8f29705bd6a5', 560, 700),
    },
  ],

  // PLACEHOLDER — trocar pelas fotos reais do espaço assim que o cliente
  // confirmar o uso de imagens próprias (ou do Instagram @studiorondas).
  // Também são fotos de banco, escolhidas por combinarem com a base escura
  // do site e por mostrarem cada modalidade de forma reconhecível.
  galeria: [
    {
      icone: 'dumbbell',
      legenda: 'Salão de musculação',
      foto: foto('photo-1597076537061-a6b58163aa45', 960, 720),
    },
    {
      icone: 'pilates',
      legenda: 'Sala de pilates',
      foto: foto('photo-1747240549807-fc3962949818', 960, 720),
    },
    {
      icone: 'personal',
      legenda: 'Atendimento personalizado',
      foto: foto('photo-1758875569414-120ebc62ada3', 960, 720),
    },
    {
      icone: 'espaco',
      legenda: 'Recepção e estrutura',
      foto: foto('photo-1593079831268-3381b0db4a77', 960, 720),
    },
  ],
};
