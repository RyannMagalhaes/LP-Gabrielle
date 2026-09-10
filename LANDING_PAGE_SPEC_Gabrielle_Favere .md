# LANDING_PAGE_SPEC.md

## 1. Objetivo

Fonte principal de instruções para implementação da landing page da psicóloga **Gabrielle Favere**.

Prioridades: clareza e confiança; acolhimento e identificação com mulheres jovens adultas; conversão via WhatsApp; consistência com a identidade existente; qualidade visual institucional/editorial; responsividade, acessibilidade, performance e SEO.

A página deve parecer **institucional, feminina, acolhedora, sofisticada, contemporânea e humana**, evitando estética genérica de psicologia/wellness.

---

## 2. Contexto da profissional

- **Nome:** Gabrielle Favere
- **Profissão:** Psicóloga
- **Atendimento:** exclusivamente online nesta primeira versão
- **Público prioritário:** mulheres jovens adultas
- **Abordagem:** Terapia Cognitivo-Comportamental (TCC)
- **Temas centrais:** ansiedade, autoestima, autocobrança, insegurança, limites pessoais, comparação, necessidade de aprovação, sobrecarga emocional e desenvolvimento emocional

### Posicionamento

Unir **acolhimento e técnica**, valorizando vínculo humano, escuta empática, individualidade, ética profissional e atuação baseada em evidências.

### Conversão principal

Contato via **WhatsApp**. Todos os CTAs primários devem apontar para o mesmo fluxo e usar número/mensagem centralizados em configuração.

Mensagem sugerida:

> Olá, Gabrielle! Conheci seu trabalho pelo site e gostaria de saber mais sobre a psicoterapia online.

---

## 3. Direção criativa

### Conceito

**Editorial institucional + acolhimento orgânico + sofisticação contemporânea.**

A página deve transmitir simultaneamente:

- “Aqui posso ser acolhida e escutada.”
- “Estou diante de uma profissional tecnicamente preparada.”

### Personalidade visual

- Feminina, sem infantilização
- Acolhedora, sem sentimentalismo excessivo
- Sofisticada, sem parecer clínica de luxo
- Institucional, mas não fria
- Orgânica, sem excesso de ornamentos
- Contemporânea, sem estética startup/tech
- Premium editorial e humana, não artesanal

### Evitar

- Rosa dominando toda a página
- Estética candy/romântica em excesso
- Corações e clichês visuais de saúde mental
- Folhagens aleatórias sem função
- Excesso de cards idênticos
- Gradientes chamativos
- Glassmorphism pesado
- Sombras fortes
- Bordas arredondadas em todos os elementos
- Grandes blocos de texto centralizado
- Animações chamativas
- Scroll hijacking
- Vídeo com autoplay e som
- Claims de cura, resultado ou transformação garantida

---

## 4. Brandbook e assets oficiais

Preservar e reutilizar:

- logomarca Gabrielle Favere Psicologia
- símbolo da marca
- formas/elementos gráficos orgânicos
- elementos fotográficos/vetoriais fornecidos
- tipografia oficial quando licenciada/disponível

### Tipografia

- **Roc Grotesk:** títulos, headings e destaques
- **Sitka:** textos corridos e apoio editorial

Se disponíveis e licenciadas para web, usar WOFF2 com `font-display: swap`. Se não houver licença/arquivo válido, adotar fallback e documentar a substituição; não baixar cópias não autorizadas.

```css
--font-display: "Roc Grotesk", "Arial Narrow", Arial, sans-serif;
--font-body: "Sitka", Georgia, "Times New Roman", serif;
```

### Estrutura atual dos assets

A estrutura utilizada no projeto é:

```text
/assets
  /brand
    /logo
      Logo_RGB.svg
      Verde_VerticalPNG_RGB.png
    /symbol
      Verde_Rosa_HorizontalSímbolo_PNG_RGB.png
      Verde_Rosa_Horizontal_1Símbolo_PNG_RGB.png
    /derived
    README.md
```

A pasta `/derived` deve receber exclusivamente variantes criadas para a landing page. Os arquivos existentes em `/logo` e `/symbol` devem ser tratados como assets oficiais e preservados.

### Prioridade de uso

1. Preferir `Logo_RGB.svg` nas aplicações principais da marca, especialmente header e footer, quando a composição do arquivo for adequada ao contexto.
2. Não rasterizar o SVG desnecessariamente.
3. Usar os PNGs para variações específicas ou quando forem mais adequados à composição.
4. Para adaptações cromáticas, criar uma cópia em `/assets/brand/derived`; nunca sobrescrever o SVG ou PNG original.
5. Se `Logo_RGB.svg` utilizar `fill`/`stroke` editáveis, a recoloração deve alterar somente propriedades cromáticas, preservando integralmente paths, viewBox, proporções e geometria.
6. Antes de criar uma variante, verificar se um dos assets oficiais já oferece contraste e aparência adequados.

### Regras para assets

1. Não redesenhar o logo.
2. Não alterar paths, proporções ou geometria do símbolo.
3. Trabalhar sempre a partir dos arquivos oficiais.
4. Manter originais intactos e criar variantes derivadas separadamente.
5. Para SVG, preferir `fill`, `stroke`, CSS variables ou `currentColor` para recoloração.
6. Para PNG/JPG, não usar filtros CSS agressivos para “forçar” cor.
7. Preservar `aspect-ratio`.
8. Nunca usar screenshot de baixa resolução se houver vetor oficial.

### Recoloração

Os assets foram fornecidos nas cores originais do brandbook, mas a landing page usará nova paleta. É permitido criar **cópias recoloridas** dos elementos gráficos e versões monocromáticas da marca, desde que a geometria seja preservada integralmente e os originais sejam mantidos.

Para elementos decorativos, utilizar tokens `rose`, `blush`, `ink` e variações.

### Linguagem dos grafismos

Os grafismos orgânicos devem funcionar estruturalmente:

- entrando parcialmente pela lateral da viewport
- acompanhando fotografias
- conectando visualmente blocos
- aparecendo discretamente no background
- criando relações visuais entre elementos

Não repetir o mesmo grafismo em todas as seções.

### Elementos fotográficos da identidade

Flores/tulipas podem ser usadas como apoio. Borboleta e pássaro somente se houver propósito visual claro.

Prioridade: **fotografia real da Gabrielle > grafismos orgânicos > flores > demais elementos**.

---

## 5. Paleta cromática inicial

Implementar via tokens para permitir refinamento posterior.

```css
:root {
  --color-canvas: #FCF9F7;
  --color-surface-soft: #F7EDEF;
  --color-blush: #E8BFC8;
  --color-rose: #C98291;
  --color-rose-deep: #A65F70;
  --color-ink: #34302F;
  --color-muted: #716766;
  --color-border: #E8DDDC;
  --color-white: #FFFFFF;
}
```

Distribuição aproximada:

- 60–70% off-white/branco quente
- 20–30% rosa muito claro/blush
- 5–10% rose profundo + neutros escuros

Validar WCAG AA e escurecer tokens quando necessário; nunca sacrificar legibilidade.

---

## 6. Design system

### Containers e gutters

```css
--container-max: 1200px;
--container-wide: 1360px;
--gutter-mobile: 20px;
--gutter-tablet: 32px;
--gutter-desktop: 48px;
```

### Espaçamento

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
```

Desktop: geralmente 96–128px de padding vertical. Mobile: 64–80px.

### Radius

- Botões: pill/alto radius quando fizer sentido
- Blocos: 18–28px
- Imagens editoriais: 24–40px ou máscara orgânica
- Não aplicar o mesmo radius em tudo

### Tipografia fluida

```css
--fs-hero: clamp(3rem, 6vw, 6.2rem);
--fs-h2: clamp(2.2rem, 4vw, 4.4rem);
--fs-h3: clamp(1.35rem, 2vw, 2rem);
--fs-body-lg: clamp(1.1rem, 1.3vw, 1.3rem);
--fs-body: 1rem;
--fs-small: 0.875rem;
```

Headlines com line-height compacto e caráter editorial. Parágrafos com largura de leitura controlada.

---

## 7. Arquitetura da página

1. Header
2. Hero
3. Identificação
4. Sobre Gabrielle
5. O jeito de cuidar
6. TCC / processo terapêutico
7. Vídeo de apresentação
8. Como funciona
9. Respiro emocional
10. FAQ
11. CTA final
12. Footer
13. Botão flutuante de WhatsApp

---

## 8. Header

Logo horizontal oficial + links **Início, Sobre mim, Psicoterapia, Como funciona, Dúvidas** + CTA **Quero conversar**.

- Integrado visualmente ao Hero no topo
- Sticky
- Após scroll, background claro translúcido/sólido + borda inferior sutil
- Transição suave
- Menu mobile compacto, acessível, com foco gerenciado

---

## 9. Hero

### Layout

Composição assimétrica/editorial. Fotografia real de Gabrielle é protagonista; evitar 50/50 rígido. Integrar 1 grafismo oficial próximo à fotografia.

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

Eyebrow: **Psicoterapia online para mulheres**

# Um espaço para você se compreender com mais gentileza.

Um acompanhamento psicológico pautado em acolhimento, escuta e evidências científicas para ajudar você a compreender seus pensamentos, emoções e a forma como se relaciona consigo mesma.

CTA: **Quero conversar**

Microcopy: **Atendimento psicológico individual • Online**

**[FIM — TEXTO DE EXEMPLO]**

### Motion

- eyebrow: fade + leve translateY
- headline: entrada progressiva por bloco/linha, nunca por caractere
- texto e CTA: fade + translateY pequeno
- foto: fade + scale 0.98 → 1
- grafismo: opacity + translate/rotate de baixa amplitude
- duração geral: 500–900ms; stagger 60–120ms

Não bloquear interação esperando animações.

---

## 10. Identificação

Objetivo: fazer a visitante pensar “isso parece comigo”, sem diagnóstico.

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

# Talvez você tenha se acostumado a dar conta de tudo.

Por fora, pode parecer que está tudo bem. Mas, por dentro, pensamentos, cobranças e inseguranças podem ocupar mais espaço do que você gostaria.

### Quando a mente não desacelera
Preocupações constantes, pensamentos que parecem não ter fim e dificuldade para relaxar mesmo quando, aparentemente, está tudo bem.

### Quando você começa a duvidar de si mesma
Comparações, inseguranças, autocrítica e aquela sensação persistente de que você poderia estar fazendo mais — ou sendo melhor.

### Quando dizer “não” parece difícil demais
O medo de decepcionar, a necessidade de aprovação e a dificuldade de estabelecer limites podem fazer com que suas próprias necessidades fiquem sempre para depois.

### Quando tudo começa a pesar
Trabalho, estudos, relacionamentos, expectativas e responsabilidades se acumulam até que encontrar espaço para você mesma parece cada vez mais difícil.

Você não precisa esperar que tudo se torne insuportável para começar a olhar para o que sente.

**[FIM — TEXTO DE EXEMPLO]**

### Layout/motion

Grid editorial orgânico; evitar 4 cards idênticos. Reveal on-scroll: opacity 0→1 + translateY 16–32px→0, com stagger curto e execução discreta.

---

## 11. Sobre Gabrielle

Fotografia grande + texto. Não parecer currículo.

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

Eyebrow: **Sobre mim**

# Antes de qualquer técnica, existe uma pessoa sendo escutada.

Olá, sou Gabrielle Favere, psicóloga, e acredito que a terapia pode ser um espaço em que você se sinta verdadeiramente acolhida para compreender o que está vivendo.

Minha atuação é orientada pela Terapia Cognitivo-Comportamental (TCC) e por práticas baseadas em evidências, mas acredito que nenhuma técnica substitui a importância do vínculo construído ao longo do processo terapêutico.

Por isso, busco construir um espaço de escuta, respeito e colaboração, considerando não apenas aquilo que trouxe você até a terapia, mas também sua história, seus valores e a maneira única como você percebe o mundo.

**Gabrielle Favere**  
Psicóloga • CRP XX/XXXXX

**[FIM — TEXTO DE EXEMPLO]**

CRP permanece placeholder até informação real. A foto pode usar reveal suave por máscara/clip-path, sem distorção.

---

## 12. O jeito de cuidar

Três pilares: **Acolhimento • Ciência • Vínculo**.

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

# Um cuidado construído entre acolhimento, ciência e vínculo.

### Acolhimento
Escutar antes de interpretar.

### Ciência
Compreender para construir novas possibilidades.

### Vínculo
Um processo construído juntas.

**[FIM — TEXTO DE EXEMPLO]**

Fundo rosa muito suave; tipografia forte; grafismos conectando os conceitos. Evitar 3 cards genéricos. Parallax máximo de 12–24px nos grafismos, desabilitado para `prefers-reduced-motion`.

---

## 13. TCC / processo terapêutico

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

# Entender o que acontece também faz parte do processo.

A Terapia Cognitivo-Comportamental ajuda a observar como pensamentos, emoções e comportamentos se relacionam no cotidiano. Ao longo do processo, esses padrões podem ser compreendidos de forma colaborativa e trabalhados a partir das necessidades e objetivos de cada pessoa.

A terapia não é um roteiro pronto: o acompanhamento considera sua história, seu contexto e aquilo que faz sentido para você.

**Pensamentos ↔ Emoções ↔ Comportamentos**

**[FIM — TEXTO DE EXEMPLO]**

Criar representação simples, leve e orgânica da relação entre pensamentos, emoções e comportamentos; evitar infográfico acadêmico pesado.

---

## 14. Vídeo de apresentação

Seção dedicada, aproximadamente 45–90s.

O vídeo deve abordar brevemente: apresentação, visão de terapia, abordagem, vínculo, diferenciais e público.

### Layout

- editorial assimétrico
- vídeo ocupando cerca de 55–60% no desktop
- thumbnail/frame real de boa qualidade
- botão play elegante
- texto complementar ao lado

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

Eyebrow: **Conheça meu trabalho**

# Um pouco sobre como eu trabalho.

“Acredito que um bom processo terapêutico começa quando você encontra um espaço onde pode verdadeiramente ser você.”

**[FIM — TEXTO DE EXEMPLO]**

### Regras técnicas

- sem autoplay com som
- poster antes do play
- lazy-load do player quando possível
- embed leve
- controles acessíveis
- se houver modal: foco correto, ESC fecha, retorno de foco
- legenda para conteúdo falado

Hover: thumbnail scale máximo 1.02; play scale máximo 1.05. Sem animação contínua chamativa.

---

## 15. Como funciona

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

# Começar pode ser mais simples do que parece.

### 01 — Primeiro contato
Você entra em contato pelo WhatsApp e pode contar brevemente o que está buscando.

### 02 — Primeiro encontro
Gabrielle conhece um pouco mais sobre você, sua história e o que trouxe você até a terapia.

### 03 — Processo terapêutico
A partir daí, o acompanhamento é construído de forma individualizada e colaborativa.

### 100% online
As sessões acontecem online, permitindo que você tenha seu espaço de cuidado onde estiver.

**[FIM — TEXTO DE EXEMPLO]**

Usar progressão visual conectando 01→02→03. No mobile, progressão vertical.

---

## 16. Respiro emocional

Fotografia horizontal/editorial grande + 1 grafismo + mínimo texto.

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

# Você não precisa ter todas as respostas para começar.

**[FIM — TEXTO DE EXEMPLO]**

Parallax fotográfico muito discreto apenas quando adequado e fora de reduced motion.

---

## 17. FAQ

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

# Talvez você ainda tenha algumas dúvidas.

**[FIM — TEXTO DE EXEMPLO]**

Perguntas iniciais:

1. Como funcionam as sessões online?
2. Quanto tempo dura cada sessão?
3. Com que frequência acontecem os encontros?
4. Como saber se a terapia pode fazer sentido para mim?
5. Preciso saber exatamente o que quero trabalhar antes de começar?
6. Como funciona o pagamento?
7. Como faço para iniciar o acompanhamento?

Respostas devem permanecer placeholders até Gabrielle fornecer dados factuais. Não inventar valores, duração, frequência, política de cancelamento, pagamento ou disponibilidade.

Accordion acessível com button real, `aria-expanded`, `aria-controls`, foco e animação suave.

---

## 18. CTA final

Esta pode ser a seção de maior presença cromática.

### Copy provisória

**[INÍCIO — TEXTO DE EXEMPLO]**

# Dar o primeiro passo também é uma forma de cuidado.

Se você sente que chegou o momento de olhar com mais atenção para o que está vivendo, podemos começar com uma conversa.

CTA: **Quero conversar**

Microcopy: **Você será direcionada para o WhatsApp.**

**[FIM — TEXTO DE EXEMPLO]**

Combinar fundo blush/rose + fotografia + grafismo + headline grande + CTA evidente.

---

## 19. Footer

Incluir logo, nome, profissão, CRP real quando fornecido, links, Instagram, WhatsApp, informações legais/profissionais necessárias e copyright dinâmico. Manter simples.

---

## 20. Botão flutuante de WhatsApp — obrigatório

### Comportamento

- `position: fixed`
- canto inferior direito
- mobile respeita `env(safe-area-inset-bottom)`
- não sobrepor conteúdo/controles/cookie banner
- z-index documentado
- link com mensagem pré-preenchida
- `aria-label="Conversar com Gabrielle pelo WhatsApp"`
- área clicável mínima 48×48px
- tooltip no desktop: **Conversar pelo WhatsApp**

### Visual

Evitar círculo verde gigantesco e destoante. Usar botão circular/pill compacto integrado à identidade (`rose-deep` ou `ink`) e ícone reconhecível do WhatsApp.

### Aparição

Pode surgir após pequeno scroll (250–400px) ou depois da entrada do Hero: fade + translateY/scale sutil. No CTA final, evitar competição visual.

Hover: scale máx. 1.04, sombra discreta, 180–250ms. **Não usar pulsação infinita.**

---

## 21. Motion system — animações suaves e modernas

Motion faz parte da experiência, mas nunca deve virar espetáculo.

### Princípios

1. Movimento reforça hierarquia/continuidade.
2. Não atrasar leitura ou interação.
3. Pequenas amplitudes.
4. Easing natural.
5. Poucas animações simultâneas.
6. Não animar tudo.
7. Sem cursor extravagante.
8. Sem scroll hijacking.
9. Sem bounce exagerado.

```css
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
--ease-soft: cubic-bezier(0.16, 1, 0.3, 1);
```

Durações:

- hover: 180–280ms
- microinteração: 220–400ms
- reveal: 500–800ms
- hero: até ~900ms
- decorativos: até 1200ms apenas se muito sutis

Para scroll reveal, usar `IntersectionObserver` ou equivalente leve. Padrão: `opacity 0→1` e `translateY 20–28px→0`.

Obrigatório:

```css
@media (prefers-reduced-motion: reduce) {
  /* remover/reduzir substancialmente animações não essenciais */
}
```

Conteúdo nunca pode depender de animação/JS para ficar visível.

---

## 22. Fotografia

Fotografia real da Gabrielle é protagonista.

Direção: editorial, natural, acolhedora, iluminação suave; evitar fotografia corporativa rígida, poses artificiais e stock quando houver foto real.

Necessidades desejadas:

1. retrato principal para Hero
2. retrato/contexto para Sobre
3. fotografia horizontal para respiro
4. frame/thumbnail do vídeo
5. detalhes ambientais opcionais

Preservar tons de pele; sem overlay rosa intenso no rosto. Otimizar AVIF/WebP, `srcset`, `sizes`, dimensões reservadas, lazy-load abaixo da dobra. Imagem LCP do Hero não deve ser lazy-loaded.

---

## 23. Responsividade

Mobile não deve ser apenas desktop empilhado.

Sugestão de faixas:

- mobile: <640px
- tablet: 640–1023px
- desktop: >=1024px

Regras:

- headline mobile sem 7–9 linhas
- fotografias mantêm protagonismo
- grafismos podem ser cortados intencionalmente pela viewport
- CTAs com boa área de toque
- WhatsApp flutuante respeita safe area
- identificação vira composição vertical ritmada, não cards idênticos
- “Como funciona” vira progressão vertical
- vídeo mantém largura confortável

Testar: 320, 375, 390, 430, 768, 1024, 1280 e 1440px+.

---

## 24. Acessibilidade

- HTML semântico
- um único `h1`
- headings coerentes
- WCAG AA para texto/controles
- navegação por teclado
- foco visível
- `alt` descritivo em imagens informativas e vazio em decoração
- ARIA apenas quando necessário
- accordion/menu/vídeo acessíveis
- legendas para vídeo falado
- não depender apenas de cor
- respeitar reduced motion

---

## 25. SEO

Metadados provisórios:

```text
Title: Gabrielle Favere | Psicóloga Online para Mulheres
Description: Psicoterapia online para mulheres com Gabrielle Favere. Atendimento baseado em Terapia Cognitivo-Comportamental, acolhimento, escuta e evidências científicas.
```

Implementar title, meta description, canonical configurável, Open Graph, favicon, robots, sitemap quando pertinente, e schema.org adequado apenas com dados reais.

Não inventar endereço, avaliações, preços ou credenciais.

---

## 26. Performance

- evitar dependências grandes para animações simples
- tree-shaking
- lazy-load abaixo da dobra
- imagens otimizadas
- preload apenas crítico
- poucos pesos de fonte
- evitar CLS
- player de vídeo sob demanda
- animar preferencialmente `transform` e `opacity`
- evitar layout thrashing

Almejar Core Web Vitals saudáveis.

---

## 27. Implementação técnica

Antes de codificar:

1. inspecionar stack/repositório
2. mapear componentes existentes
3. mapear assets e formatos
4. identificar fontes/licenças
5. reutilizar convenções atuais
6. não substituir arquitetura sem necessidade

Estrutura de brand assets já adotada:

```text
/assets
  /brand
    /logo
      Logo_RGB.svg
      Verde_VerticalPNG_RGB.png
    /symbol
      Verde_Rosa_HorizontalSímbolo_PNG_RGB.png
      Verde_Rosa_Horizontal_1Símbolo_PNG_RGB.png
    /derived
    README.md
```

Não reorganizar ou renomear esses arquivos sem necessidade. Se a stack exigir assets dentro de `public/` ou diretório equivalente, preservar essa organização relativa ao mover/copiar os arquivos. Outros recursos (fotografias, vídeo e ícones) podem seguir a convenção existente do projeto.

Centralizar cores, tipografia, spacing, radius, container e motion em tokens.

Componentes sugeridos:

```text
Header
HeroSection
IdentificationSection
AboutSection
CarePrinciplesSection
TccSection
IntroVideoSection
ProcessSection
EmotionalBreakSection
FaqSection
FinalCtaSection
Footer
FloatingWhatsAppButton
```

Não componentizar wrappers vazios sem ganho de manutenção.

---

## 28. Conteúdo e segurança editorial

Toda copy marcada como **TEXTO DE EXEMPLO** é provisória e serve apenas para orientar hierarquia, densidade, comprimento e tom.

### Não inventar

- CRP
- preço
- formação específica não confirmada
- especializações não confirmadas
- duração de sessão
- frequência
- cancelamento
- agenda
- pagamento
- depoimentos
- resultados clínicos

### Tom de voz

Humano, feminino sem caricatura, empático, acessível, calmo, responsável e não infantilizado.

### Claims proibidos

- “Livre-se da ansiedade.”
- “Recupere sua autoestima em poucas sessões.”
- “Transforme sua vida.”
- “Descubra sua melhor versão.”
- “Resultados garantidos.”

Preferir compreensão, construção, cuidado e processo.

---

## 29. Analytics e conversão

Se já houver analytics no projeto, preparar eventos para:

- CTA Hero → WhatsApp
- botão flutuante → WhatsApp
- CTA final → WhatsApp
- play do vídeo
- abertura de FAQ
- Instagram

Não instalar tracking sem solicitação/consentimento adequado.

---

## 30. Critérios de aceite

- [ ] Psicoterapia online para mulheres jovens adultas fica clara
- [ ] Fotografia de Gabrielle é protagonista
- [ ] Página não parece template genérico de psicologia
- [ ] Nova paleta é majoritariamente clara; rosa é controlado
- [ ] Logo/símbolo mantêm geometria oficial
- [ ] Assets originais permanecem preservados
- [ ] Recoloração ocorre em cópias derivadas
- [ ] Roc Grotesk/Sitka são usadas quando disponíveis/licenciadas
- [ ] Ansiedade e autoestima aparecem de forma humana e não diagnóstica
- [ ] Há seção dedicada ao vídeo
- [ ] Vídeo não inicia com som automaticamente
- [ ] CTA WhatsApp no Hero
- [ ] CTA WhatsApp no final
- [ ] Botão flutuante WhatsApp funcional e acessível
- [ ] Botão flutuante sem pulsação infinita
- [ ] Animações suaves, modernas e discretas
- [ ] `prefers-reduced-motion` respeitado
- [ ] Sem scroll hijacking
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Menu mobile acessível
- [ ] FAQ acessível
- [ ] Contraste validado
- [ ] Imagens otimizadas
- [ ] Vídeo não prejudica carregamento inicial
- [ ] Sem informações profissionais inventadas
- [ ] SEO básico implementado
- [ ] Sem erros/warnings relevantes no console

---

## 31. Workflow esperado do Claude Code

### Etapa 1 — Inspeção

Leia este arquivo completamente, inspecione projeto e assets e identifique stack, convenções, fontes e componentes antes de implementar.

### Etapa 2 — Plano

Defina estrutura de componentes, estratégia de assets, tokens, responsividade, motion e performance.

### Etapa 3 — Fundação visual

Implemente tokens, tipografia, containers, botões e helpers de motion.

### Etapa 4 — Seções

Construa na ordem da página, mantendo ritmo e consistência visual.

### Etapa 5 — Assets

Use assets reais. Se algo faltar, use placeholder claramente marcado; **não invente logo, retrato ou dado profissional**.

### Etapa 6 — Motion

Adicionar animações somente depois de layout e responsividade estarem corretos.

### Etapa 7 — Validação

Validar desktop/mobile/tablet, overflow horizontal, foco, teclado, contraste, reduced motion, LCP/CLS, WhatsApp, vídeo, FAQ e console.

### Etapa 8 — Refinamento

Reduzir aparência de template, melhorar ritmo vertical, remover ornamentos desnecessários, equilibrar foto/texto, integrar grafismos e uniformizar microinterações.

---

## 32. Regra final de decisão

Quando houver dúvida entre uma solução chamativa e uma elegante, escolher a elegante.

Quando houver dúvida entre adicionar um elemento e preservar clareza, preservar clareza.

Quando houver dúvida entre padrão genérico de landing page e composição editorial mais autoral, preferir a solução editorial desde que não prejudique usabilidade.

A experiência final deve transmitir:

**acolhimento + confiança + feminilidade + técnica + humanidade.**
