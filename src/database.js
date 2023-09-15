/* eslint-disable no-unused-vars */
import App4 from './assets/App4.png';
import App1 from './assets/App1.png';
import App2 from './assets/App2.png';
import App3 from './assets/App3.png';
import App5 from './assets/APP1-D.png';
import tvAberta from './assets/tvAberta.png';

// import App6 from './assets/APP1-E.png';

import UFJF from './assets/UFJF.png';
import UFF from './assets/UFF.png';
import UFPB from './assets/UFPB.png';
import PUC from './assets/PUC.png';
import UFC from './assets/UFC.png';
// import UFJF from './assets/UFJF.png';
import UFMA from './assets/UFMA.png';
import UNICAMP from './assets/UNICAMP.png';
import USP from './assets/USP.png';

import UFRN from './assets/UFRN.png';

import UNB from './assets/UNB.png';
import UFPE from './assets/UFPE.png';
import UFRJ from './assets/UFRJ.png';
import IME from './assets/IME.png';
import CEFET from './assets/CEFET.png';
import UECE from './assets/UECE.png';
import UEMA from './assets/UEMA.png';
import UFMG from './assets/UFMG.png';
import UFPA from './assets/UFPA.png';

import recommendation1 from './assets/recommendation1.png';
import recommendation2 from './assets/recommendation2.png';
import recommendation3 from './assets/recommendation3.png';
import recommendation4 from './assets/recommendation4.png';
import recommendation5 from './assets/recommendation5.png';

import ufjfVideo from './assets/ufjfVideo1.mp4';

import Group1 from './assets/Group1.png';
import Group2 from './assets/Group2.png';
import Group3 from './assets/Group3.png';

import image2 from './assets/image2.png';
import image3 from './assets/Group1.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';

import image9 from './assets/image9.png';
import image10 from './assets/image10.png';
import image11 from './assets/image11.png';
import image12 from './assets/image15.png';
import image13 from './assets/image13.png';
import image17 from './assets/image17.png';
import image18 from './assets/image18.png';
import image19 from './assets/image19.png';
import image20 from './assets/image20.png';

import hbo from './assets/hbo.png';
import netflix from './assets/netflix.png';
import prime from './assets/prime.png';
import hulu from './assets/hulu.png';
import TvAbertaIcone from './assets/TV-ABERTA-icone.png';
export const cards = [
  {
    name: 'UFJF',
    icon: image2,
    content: ufjfVideo,
    relatedRecommendations: [
      { name: 'Rec1', icon: image9 },
      { name: 'Rec2', icon: image7 },
      { name: 'Rec1', icon: image5 },
      { name: 'Rec2', icon: image2 },
      { name: 'Rec1', icon: Group3 },
    ],
  },
  {
    name: 'UFC',
    icon: image3,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
    relatedRecommendations: [
      { name: 'Rec1', icon: Group1 },
      { name: 'Rec2', icon: Group2 },
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: Group3 },
      { name: 'Rec1', icon: UFMA },
    ],
  },
  {
    name: 'UFF',
    icon: image4,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFMA',
    icon: image5,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPB',
    icon: image6,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
];
export const streaming = [
  {
    name: 'App1',
    icon: hbo,
    content:
      'https://www.youtube.com/embed/6jtOBIICfJc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
    relatedRecommendations: [
      { name: 'Rec1', icon: image7 },
      { name: 'Rec2', icon: image9 },
      { name: 'Rec1', icon: image11 },
      { name: 'Rec2', icon: image10 },
      { name: 'Rec1', icon: Group2 },
    ],
  },
  {
    name: 'TV Aberta',
    icon: TvAbertaIcone,
    content:
      'https://www.youtube.com/embed/K86o2jF2x2I?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
    relatedRecommendations: [
      { name: 'Rec1', icon: Group1 },
      { name: 'Rec2', icon: Group2 },
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: Group3 },
      { name: 'Rec1', icon: UFMA },
    ],
  },
  {
    name: 'App2',
    icon: prime,
    content:
      'https://www.youtube.com/embed/K86o2jF2x2I?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
    relatedRecommendations: [
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: UFMA },
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: UFMA },
      { name: 'Rec1', icon: UFPB },
    ],
  },
  {
    name: 'TV Aberta',
    icon: netflix,
    content:
      'https://www.youtube.com/embed/K86o2jF2x2I?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
    relatedRecommendations: [
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: UFMA },
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: UFMA },
      { name: 'Rec1', icon: UFPB },
    ],
  },
  {
    name: 'App2',
    icon: hulu,
    content:
      'https://www.youtube.com/embed/K86o2jF2x2I?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
    relatedRecommendations: [
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: UFMA },
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: UFMA },
      { name: 'Rec1', icon: UFPB },
      // ... mais recomendações relacionadas ao App2
    ],
  },
];

export const recommendations = [
  {
    name: 'App3',
    icon: App3,

    content:
      'https://www.youtube.com/embed/L2XF-cKm8jg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'App4',
    icon: App4,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: UFJF,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFC',
    icon: UFC,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },

  {
    name: 'UFMA',
    icon: UFMA,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
];

export const appsAppCatUI = [
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content: ufjfVideo,
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFJF',
    icon: 'https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw',
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
];

export const universityApps = [
  {
    name: 'UFJF',
    icon: Group1,
    content: ufjfVideo,
  },
  {
    name: 'UFC',
    icon: Group2,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFF',
    icon: Group3,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFMA',
    icon: image2,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFRJ',
    icon: image3,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPB',
    icon: image4,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'ufpe',
    icon: image5,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFRJ',
    icon: image6,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFRN',
    icon: image7,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UNB',
    icon: image9,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UNICAMP',
    icon: image10,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'USP',
    icon: image11,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'IME',
    icon: image12,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'CEFET',
    icon: image13,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UECE',
    icon: image20,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UEMA',
    icon: image17,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFMG',
    icon: image18,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPA',
    icon: image19,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
];

export const recommendationsApps = [
  {
    name: 'UFPA',
    icon: recommendation1,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPA',
    icon: recommendation2,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPA',
    icon: recommendation3,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPA',
    icon: recommendation4,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPA',
    icon: recommendation5,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
];

export const secondCards = [
  {
    name: 'UFJF',
    icon: UFJF,
    content: ufjfVideo,
  },
  {
    name: 'UFC',
    icon: UFC,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFF',
    icon: UFF,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFMA',
    icon: UFMA,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPB',
    icon: UFPB,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
];
