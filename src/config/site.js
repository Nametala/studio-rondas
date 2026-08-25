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
    logradouro: 'Rua Bernardo Guimarães, 280',
    bairro: 'Funcionários',
    cidade: 'Belo Horizonte',
    estado: 'MG',
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
      descricao:
        'Aulas em turma reduzida, com foco em postura, mobilidade e fortalecimento.',
    },
    {
      nome: 'Musculação personalizada',
      descricao:
        'Treino adaptado ao seu objetivo, com acompanhamento próximo.',
    },
    {
      nome: 'Personal',
      descricao: 'Atendimento individual, horário e plano de treino sob medida.',
    },
    {
      nome: 'Fisioterapia',
      descricao: 'Avaliação e reabilitação integradas ao treino.',
    },
  ],

  // PLACEHOLDER — confirmar nomes, funções e fotos com o cliente antes de publicar
  equipe: [
    { nome: 'Jackson', funcao: 'Personal de musculação', foto: null },
    { nome: 'João', funcao: 'Professor', foto: null },
    { nome: 'Hugo', funcao: 'Professor', foto: null },
  ],

  // PLACEHOLDER — trocar por fotos reais do espaço assim que o cliente confirmar
  // o uso de imagens próprias (ou do Instagram @studiorondas). `foto: null` faz
  // o carrossel exibir um cartão com ícone no lugar da imagem.
  galeria: [
    { icone: 'dumbbell', legenda: 'Salão de musculação', foto: null },
    { icone: 'pilates', legenda: 'Sala de pilates', foto: null },
    { icone: 'personal', legenda: 'Atendimento personalizado', foto: null },
    { icone: 'espaco', legenda: 'Recepção e estrutura', foto: null },
  ],
};
