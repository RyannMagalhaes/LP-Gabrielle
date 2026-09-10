export interface InstagramPost {
  id: string;
  caption: string;
  targetPath: string;
  /** Real per-post permalink. Leave undefined until Gabrielle supplies it -
   *  never fabricate a per-post URL. Consumers fall back to the profile URL. */
  postUrl?: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    caption: 'Publicação em breve — conteúdo sobre saúde emocional.',
    targetPath: 'src/assets/instagram/post-01.jpg',
  },
  {
    id: 'post-2',
    caption: 'Publicação em breve — reflexões sobre o processo terapêutico.',
    targetPath: 'src/assets/instagram/post-02.jpg',
  },
  {
    id: 'post-3',
    caption: 'Publicação em breve — bastidores do consultório online.',
    targetPath: 'src/assets/instagram/post-03.jpg',
  },
  {
    id: 'post-4',
    caption: 'Publicação em breve — conteúdo sobre autoconhecimento.',
    targetPath: 'src/assets/instagram/post-04.jpg',
  },
  {
    id: 'post-5',
    caption: 'Publicação em breve — dicas de bem-estar no dia a dia.',
    targetPath: 'src/assets/instagram/post-05.jpg',
  },
  {
    id: 'post-6',
    caption: 'Publicação em breve — novidades e avisos.',
    targetPath: 'src/assets/instagram/post-06.jpg',
  },
];
