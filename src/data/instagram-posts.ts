import type { ImageMetadata } from 'astro';
import post01 from '@/assets/instagram/post-01.jpg';
import post02 from '@/assets/instagram/post-02.jpg';
import post03 from '@/assets/instagram/post-03.jpg';
import post04 from '@/assets/instagram/post-04.jpg';

export interface InstagramPost {
  id: string;
  caption: string;
  image: ImageMetadata;
  /** Real per-post permalink. Leave undefined until Gabrielle supplies it -
   *  never fabricate a per-post URL. Consumers fall back to the profile URL. */
  postUrl?: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    caption: 'Você não precisa conquistar tudo aos seus 20 e poucos anos 🩷',
    image: post01,
    postUrl: 'https://www.instagram.com/p/Dde2iJBhOZx/',
  },
  {
    id: 'post-2',
    caption: 'Qual história te marcou recentemente? 🩷',
    image: post02,
    postUrl: 'https://www.instagram.com/p/DdZMLUxEcJd/',
  },
  {
    id: 'post-3',
    caption: 'Um pouco da minha história com a psicologia 🩷',
    image: post03,
    postUrl: 'https://www.instagram.com/p/DdT_WzjxpOR/',
  },
  {
    id: 'post-4',
    caption: 'Um pouco sobre quem está por trás desse perfil 🩷',
    image: post04,
    postUrl: 'https://www.instagram.com/p/DdRaIqdkaH8/',
  },
];
