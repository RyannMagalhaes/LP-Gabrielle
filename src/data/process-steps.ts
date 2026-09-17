export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  emphasis?: boolean;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Primeiro contato',
    description: 'Você entra em contato pelo WhatsApp, conta brevemente o que está buscando e pode tirar suas primeiras dúvidas.',
    emphasis: true,
  },
  {
    number: '02',
    title: 'Primeiro encontro',
    description: 'Conversamos sobre o que trouxe você à terapia, sua história e o que espera encontrar nesse processo.',
    emphasis: true,
  },
  {
    number: '03',
    title: 'Processo terapêutico',
    description: 'A partir daí, construímos juntas um acompanhamento individualizado, de acordo com suas necessidades e objetivos.',
    emphasis: true,
  },
  {
    number: '04',
    title: 'Atendimento online ou presencial',
    description: 'Escolha a modalidade que fizer mais sentido para você. Os atendimentos presenciais acontecem em Uberlândia – MG.',
    emphasis: true,
  },
];
