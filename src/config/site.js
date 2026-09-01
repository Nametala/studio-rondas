// Configuração central do site — Studio Rondas Saúde Integrada.
// Edite os valores abaixo para atualizar conteúdo, contato e equipe sem mexer em componentes.
// Campos marcados "PLACEHOLDER" precisam de confirmação do cliente antes da publicação final.

export const site = {
  nome: 'Studio Rondas',
  nomeCompleto: 'Studio Rondas Saúde Integrada',

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
  // As imagens abaixo são composições genéricas geradas na paleta da marca
  // (public/placeholders/), só para preencher o site na apresentação de
  // venda — trocar por fotos reais antes de publicar.
  equipe: [
    {
      nome: 'Jackson',
      funcao: 'Personal de musculação',
      foto: '/placeholders/equipe-1.svg',
    },
    {
      nome: 'João',
      funcao: 'Professor',
      foto: '/placeholders/equipe-2.svg',
    },
    {
      nome: 'Hugo',
      funcao: 'Professor',
      foto: '/placeholders/equipe-3.svg',
    },
  ],

  // PLACEHOLDER — trocar por fotos reais do espaço assim que o cliente
  // confirmar o uso de imagens próprias (ou do Instagram @studiorondas).
  // As imagens abaixo são composições genéricas geradas na paleta da marca
  // (public/placeholders/), só para preencher o site na apresentação de
  // venda — trocar por fotos reais antes de publicar.
  galeria: [
    {
      icone: 'dumbbell',
      legenda: 'Salão de musculação',
      foto: '/placeholders/espaco-1.svg',
    },
    {
      icone: 'pilates',
      legenda: 'Sala de pilates',
      foto: '/placeholders/espaco-2.svg',
    },
    {
      icone: 'personal',
      legenda: 'Atendimento personalizado',
      foto: '/placeholders/espaco-3.svg',
    },
    {
      icone: 'espaco',
      legenda: 'Recepção e estrutura',
      foto: '/placeholders/espaco-4.svg',
    },
  ],
};
