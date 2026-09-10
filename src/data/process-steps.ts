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
    description: 'Você entra em contato pelo WhatsApp e pode contar brevemente o que está buscando.',
  },
  {
    number: '02',
    title: 'Primeiro encontro',
    description: 'Gabrielle conhece um pouco mais sobre você, sua história e o que trouxe você até a terapia.',
  },
  {
    number: '03',
    title: 'Processo terapêutico',
    description: 'A partir daí, o acompanhamento é construído de forma individualizada e colaborativa.',
  },
  {
    number: '100%',
    title: 'Online',
    description: 'As sessões acontecem online, permitindo que você tenha seu espaço de cuidado onde estiver.',
    emphasis: true,
  },
];
