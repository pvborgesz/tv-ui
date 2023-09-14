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

export const cards = [
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
export const streaming = [
  {
    name: 'App1',
    icon: App1,
    content:
      'https://www.youtube.com/embed/6jtOBIICfJc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
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
    icon: tvAberta,
    content:
      'https://www.youtube.com/embed/K86o2jF2x2I?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
    relatedRecommendations: [
      { name: 'Rec1', icon: App5 },
      { name: 'Rec2', icon: App3 },
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: App2 },
      { name: 'Rec1', icon: App2 },
      // ... mais recomendações relacionadas à TV Aberta
    ],
  },
  {
    name: 'App2',
    icon: App2,
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
    icon: tvAberta,
    content:
      'https://www.youtube.com/embed/K86o2jF2x2I?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
    relatedRecommendations: [
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: UFMA },
      { name: 'Rec1', icon: UFPB },
      { name: 'Rec2', icon: UFMA },
      { name: 'Rec1', icon: UFPB },
      // ... mais recomendações relacionadas à TV Aberta
    ],
  },
  {
    name: 'App2',
    icon: App2,
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
    name: 'UFRJ',
    icon: UFRJ,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPB',
    icon: UFPB,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'ufpe',
    icon: UFPE,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFRJ',
    icon: UFRJ,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFRN',
    icon: UFRN,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UNB',
    icon: UNB,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UNICAMP',
    icon: UNICAMP,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'USP',
    icon: USP,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'IME',
    icon: IME,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'CEFET',
    icon: CEFET,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UECE',
    icon: UECE,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UEMA',
    icon: UEMA,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFMG',
    icon: UFMG,
    content:
      'https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0',
  },
  {
    name: 'UFPA',
    icon: UFPA,
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
