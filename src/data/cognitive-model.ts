export interface CognitiveModelStage {
  key: 'situacao' | 'pensamentos' | 'sentimentos' | 'comportamento';
  title: string;
  description: string;
}

export const COGNITIVE_MODEL_STAGES: CognitiveModelStage[] = [
  {
    key: 'situacao',
    title: 'Situação',
    description: 'Algo acontece: uma mensagem, uma cobrança, um silêncio que se estende.',
  },
  {
    key: 'pensamentos',
    title: 'Pensamentos',
    description: 'A mente interpreta o que aconteceu, muitas vezes de forma automática.',
  },
  {
    key: 'sentimentos',
    title: 'Sentimentos',
    description: 'Esses pensamentos geram emoções — ansiedade, culpa, alívio, insegurança.',
  },
  {
    key: 'comportamento',
    title: 'Comportamento',
    description: 'Você reage: evita, se cobra, se isola ou busca controlar o que sente.',
  },
];
