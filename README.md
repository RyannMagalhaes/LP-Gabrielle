# Landing Page — Gabrielle Favere

Astro + Tailwind CSS v4. Static site, no backend.

## Rodando o projeto

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # gera dist/ (static)
npm run preview    # serve o build de produção
npm run prepare-assets  # regenera favicons/OG/derivados de marca (ver abaixo)
```

## Pendências antes de publicar (não inventar — ver spec)

- **Fotografias reais** de Gabrielle: hero (`src/assets/photos/hero-portrait.jpg`), sobre
  (`about-portrait.jpg`), respiro emocional (`emotional-break.jpg`), CTA final
  (`final-cta.jpg`). Até lá, `MediaPlaceholder` reserva o aspect-ratio exato e mostra um
  aviso visual discreto — basta importar a imagem real e trocar pelo componente
  `<Image>`/`<Picture>` no lugar do placeholder.
- **Vídeo de apresentação** (45–90s): definir `VIDEO_SRC` em
  `src/components/sections/IntroVideoSection.astro` e adicionar o poster em
  `src/assets/video/poster.jpg`.
- **Número de WhatsApp real**: `src/lib/whatsapp.config.ts` (`WHATSAPP_NUMBER`).
- **CRP, formação, duração/frequência de sessão, pagamento, disponibilidade,
  depoimentos**: nunca inventados — placeholders explícitos em `AboutSection.astro`,
  `Footer.astro` e `src/data/faq.ts`, aguardando dado real.
- **Instagram**: link placeholder em `Footer.astro` (TODO marcado no código).
- **Domínio real**: `astro.config.mjs` (`site`) usa um domínio placeholder — trocar antes
  de habilitar sitemap/canonical definitivos.

## Fontes (substituição documentada)

A marca pede Roc Grotesk (display) + Sitka (corpo). Não há arquivo licenciado desses
fonts nos assets, então **não foram baixados de fonte não oficial**. Usamos, via
Fontsource (self-hosted): **Bricolage Grotesque** (display) e **Newsreader** (corpo),
escolhidos pelo espírito editorial semelhante. Ver comentário em `src/styles/theme.css`.
Quando os arquivos licenciados chegarem, troque os imports em `BaseLayout.astro` e as
duas variáveis `--font-display`/`--font-body` — nada mais precisa mudar.

## Logo oficial — limitação conhecida

`Assets/Brand/Logo/Logo_RGB.svg` é um export bruto do Illustrator (múltiplos artboards,
sem `width`/`height`, cores hardcoded, sem `<g transform>`). Embedado direto ele renderiza
só um quadrado escuro com o símbolo, sem o wordmark. Por isso o site usa os **PNGs
oficiais** (`Assets/Brand/Logo/Verde_VerticalPNG_RGB.png` e as variantes em
`Assets/Brand/Symbol/`), que são limpos e com transparência real.

**TODO futuro:** extrair manualmente (num editor vetorial — Illustrator/Inkscape, nunca
por script às cegas) o artboard correto com o lockup completo, exportar como SVG limpo
para `Assets/Brand/Derived/`, preservando geometria/paths/proporções exatamente.

## Assets de marca — regras (ver `Assets/readme.md`)

- Originais em `Assets/Brand/Logo` e `Assets/Brand/Symbol` nunca são sobrescritos.
- Variantes recoloridas (ink, rose-deep) ficam em `Assets/Brand/Derived/`, geradas por
  `scripts/prepare-brand-assets.mjs` (recolor offline preservando alpha — não é filtro
  CSS). Rode `npm run prepare-assets` se precisar regenerar.
- Favicons e `og-image.png` também são gerados por esse script.
