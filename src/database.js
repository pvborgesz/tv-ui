/* eslint-disable no-unused-vars */
import App4 from "./assets/App4.png";
import App1 from "./assets/App1.png";
import App2 from "./assets/App2.png";
import App3 from "./assets/App3.png";
import App5 from "./assets/APP1-D.png";
import tvAberta from "./assets/tvAberta.png";

// import App6 from './assets/APP1-E.png';

import UFJF from "./assets/UFJF.png";
import UFF from "./assets/UFF.png";
import UFPB from "./assets/UFPB.png";
import PUC from "./assets/PUC.png";
import UFC from "./assets/UFC.png";
// import UFJF from './assets/UFJF.png';
import UFMA from "./assets/UFMA.png";
import UNICAMP from "./assets/UNICAMP.png";
import USP from "./assets/USP.png";

import UFRN from "./assets/UFRN.png";

import UNB from "./assets/UNB.png";
import UFPE from "./assets/UFPE.png";
import UFRJ from "./assets/UFRJ.png";
import IME from "./assets/IME.png";
import CEFET from "./assets/CEFET.png";
import UECE from "./assets/UECE.png";
import UEMA from "./assets/UEMA.png";
import UFMG from "./assets/UFMG.png";
import UFPA from "./assets/UFPA.png";

import recommendation1 from "./assets/recommendation1.png";
import recommendation2 from "./assets/recommendation2.png";
import recommendation3 from "./assets/recommendation3.png";
import recommendation4 from "./assets/recommendation4.png";
import recommendation5 from "./assets/recommendation5.png";

import ufjfVideo from "./assets/ufjfVideo1.mp4";

import RedeTvIcon from "./assets/Group1.png";
import Group2 from "./assets/Group2.png";
import Group3 from "./assets/Group3.png";

import CanalGovIcon from "./assets/CanalGov.svg";
import TvIfmaIcon from "./assets/TvIfma.svg";
import CanalSaudeIcon from "./assets/CanalSaude.svg";
import SBTIcon from "./assets/SBT.png";
import RecordIcon from "./assets/Record.svg";
import TVPIcon from "./assets/TVP.svg";
import TVCamaraIcon from "./assets/TvCamara.svg";
import TVNazareIcon from "./assets/TvNazare.svg";
import TVSenado from "./assets/TvSenado.svg";
import RedeVidaIcon from "./assets/RedeVida.png";
import RedeVidaEdu from "./assets/RedeVidaEdu.svg";
import RedeUniao from "./assets/RedeUniao.svg";
import FuturaIcon from "./assets/Futura.png";
import BandIcon from "./assets/Band.png";
import TvEvangelizarIcon from "./assets/TvEvangelizar.svg";
import TvNovoTempoIcon from "./assets/TvNovoTempo.svg";
import GloboIcon from "./assets/Globo.svg";
import TvAparecidaIcon from "./assets/TvAparecida.svg";
import GazetaIcon from "./assets/Gazeta.svg";
import image2 from "./assets/image2.png";
import image3 from "./assets/Group1.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";

import image9 from "./assets/image9.png";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.png";
import image12 from "./assets/image15.png";
import RedeBrasilIcon from "./assets/RedeBrasil.png";
import image17 from "./assets/image17.png";
import image18 from "./assets/image18.png";
import image19 from "./assets/image19.png";
import image20 from "./assets/image20.png";

import hbo from "./assets/hbo.png";
import netflix from "./assets/netflix.png";
import prime from "./assets/prime.png";
import hulu from "./assets/hulu.png";
import TvAbertaIcone from "./assets/TV-ABERTA-icone.png";
import discovery from "./assets/discovery.png";
import firetv from "./assets/firetv.png";
import disney from "./assets/disney.png";
import sho from "./assets/sho.png";
import globoplay from "./assets/globoplay.png";
import nacional from "./assets/nacional.png";

export const cards = [
  {
    name: "UFJF",
    icon: image3,
    content: "https://www.youtube.com/embed/Yj4eO703ia0?si=DrnofRedbwRlEZCi&amp;controls=0&autoplay=1&loop=1",
    relatedRecommendations: [
      { name: "Rec1", icon: image9 },
      { name: "Rec2", icon: image7 },
      { name: "Rec1", icon: image5 },
      { name: "Rec2", icon: image2 },
      { name: "Rec1", icon: Group3 },
    ],
  },
  {
    name: "UFC",
    icon: TVSenado,
    content:
      "https://www.youtube.com/embed/smpaHY1Eqag?si=Ir2yvbXnkbYSmL_c&amp;controls=0&autoplay=1&loop=1",
    relatedRecommendations: [
      { name: "Rec1", icon: RedeTvIcon },
      { name: "Rec2", icon: Group2 },
      { name: "Rec1", icon: UFPB },
      { name: "Rec2", icon: Group3 },
      { name: "Rec1", icon: UFMA },
    ],
  },
  {
    name: "UFF",
    icon: image2,
    content:
      "https://www.youtube.com/embed/hfWx2_1IJxc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
    relatedRecommendations: [
      { name: "Rec1", icon: Group2 },
      { name: "Rec2", icon: UFMA },
      { name: "Rec1", icon: Group3 },
      { name: "Rec2", icon: UFPB },
      { name: "Rec1", icon: RedeTvIcon },
    ],
  },
  {
    name: "UFMA",
    icon: RedeUniao,
    content:
      "https://www.youtube.com/embed/ukAgAcDaQ-Y?si=LNYQm2kfplhgjf6W&amp;controls=0&autoplay=1&mute=0",
    relatedRecommendations: [
      { name: "Rec1", icon: image2 },
      { name: "Rec2", icon: image4 },
      { name: "Rec1", icon: image3 },
      { name: "Rec2", icon: image20 },
      { name: "Rec1", icon: image5 },
    ],
  },
  {
    name: "UFPB",
    icon: RedeVidaEdu,
    content:
      "https://www.youtube.com/embed/B-xAcubMKms?si=IsWGJ7Ykht6J_tch&amp;controls=0&autoplay=1&mute=0",
    relatedRecommendations: [
      { name: "Rec1", icon: image9 },
      { name: "Rec2", icon: image12 },
      { name: "Rec1", icon: image11 },
      { name: "Rec2", icon: RedeBrasilIcon },
      { name: "Rec1", icon: image19 },
    ],
  },
];

export const streaming = [
  {
    name: "App1",
    icon: hbo,
    content:
      "https://www.youtube.com/embed/F3OxA9Cz17A?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
    relatedRecommendations: [
      { name: "Rec1", icon: netflix },
      { name: "Rec2", icon: disney },
      { name: "Rec1", icon: prime },
      { name: "Rec2", icon: hulu },
      { name: "Rec1", icon: image4 },
    ],
  },
  {
    name: "TV Aberta",
    icon: TvAbertaIcone,
    content:
      "https://www.youtube.com/embed/K86o2jF2x2I?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
    relatedRecommendations: [
      { name: "Rec1", icon: RedeTvIcon },
      { name: "Rec2", icon: Group2 },
      { name: "Rec1", icon: UFPB },
      { name: "Rec2", icon: Group3 },
      { name: "Rec1", icon: UFMA },
    ],
  },
  {
    name: "App2",
    icon: prime,
    content:
      "https://www.youtube.com/embed/FfAueqEab30?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
    relatedRecommendations: [
      { name: "Rec1", icon: firetv },
      { name: "Rec2", icon: disney },
      { name: "Rec1", icon: sho },
      { name: "Rec2", icon: discovery },
      { name: "Rec1", icon: globoplay },
    ],
  },
  {
    name: "TV Aberta",
    icon: netflix,
    content:
      "https://www.youtube.com/embed/oZn3qSgmLqI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
    relatedRecommendations: [
      { name: "Rec1", icon: discovery },
      { name: "Rec2", icon: globoplay },
      { name: "Rec1", icon: disney },
      { name: "Rec2", icon: sho },
      { name: "Rec1", icon: firetv },
    ],
  },
  {
    name: "App2",
    icon: hulu,
    content:
      "https://www.youtube.com/embed/1iyz4d8WoqQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
    relatedRecommendations: [
      { name: "Rec1", icon: UFPB },
      { name: "Rec2", icon: UFMA },
      { name: "Rec1", icon: UFPB },
      { name: "Rec2", icon: UFMA },
      { name: "Rec1", icon: UFPB },
      // ... mais recomendações relacionadas ao App2
    ],
  },
];

export const recommendations = [
  {
    name: "App3",
    icon: App3,

    content:
      "https://www.youtube.com/embed/L2XF-cKm8jg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "App4",
    icon: App4,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: UFJF,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFC",
    icon: UFC,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },

  {
    name: "UFMA",
    icon: UFMA,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
];

export const appsAppCatUI = [
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content: ufjfVideo,
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFJF",
    icon: "https://play-lh.googleusercontent.com/jK1lhjL_Iu9xIz3C_qdmR13RRAMZz1DvXEnE5WLyNLvxqv78yySK4DNF-SMVI2fC3ig=w240-h480-rw",
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
];

export const universityApps = [
  {
    name: "TVBrasil",
    icon: image6,
    content:
      "https://www.youtube.com/embed/w1DAHKloWSM?si=Rv2Y5J2nfpz3L3tq&amp;?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Canal Gov",
    icon: CanalGovIcon,
    content:
      "https://www.youtube.com/embed/5289Y9yqJ2w?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Tv IFMA",
    icon: TvIfmaIcon,
    content:
      "https://www.youtube.com/embed/Fugh4vqrXVo?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Canal Saúde",
    icon: CanalSaudeIcon,
    content:
      "https://www.youtube.com/embed/-_UUKW5y9aY?si=XklnrDm2-PREb6CS&amp;controls=0&autoplay=1&mute=0",
  },
  {
    name: "SBT",
    icon: SBTIcon,
    content:
      "https://www.youtube.com/embed/4ksJml0fHik?si=N5XGI1xvNFyblL6f&amp;controls=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Record TV",
    icon: RecordIcon,
    content:
      "https://www.youtube.com/embed/GRaPZ1a3wJ0?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "TVP",
    icon: TVPIcon,
    content:
      "https://www.youtube.com/embed/0PfphtXa6lQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "TVCamara",
    icon: TVCamaraIcon,
    content:
      "https://www.youtube.com/embed/FFm0XzdRtXM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },

  {
    name: "TV Nazaré",
    icon: TVNazareIcon,
    content:
      "https://www.youtube.com/embed/S0hL-SrVEKY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Rede Viva",
    icon: RedeVidaIcon,
    content:
      "https://www.youtube.com/embed/jKY8Ns4MN3k?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Futura",
    icon: FuturaIcon,
    content:
      "https://www.youtube.com/embed/fEbsaUoUgzg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Band TV",
    icon: BandIcon,
    content:
      "https://www.youtube.com/embed/VBGI_0bvACY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Rede Brasil",
    icon: RedeBrasilIcon,
    content:
      "https://www.youtube.com/embed/azDbEF5AwXk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "TV Evangelizar",
    icon: TvEvangelizarIcon,
    content:
      "https://www.youtube.com/embed/jJdmfVS5kdM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Tv Novo Tempo",
    icon: TvNovoTempoIcon,
    content:
      "https://www.youtube.com/embed/MWUYk6q9wkE?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Tv Aparecida",
    icon: TvAparecidaIcon,
    content:
      "https://www.youtube.com/embed/I_ViRwaBUs8?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "Globo",
    icon: GloboIcon,
    content:
      "https://www.youtube.com/embed/hfWx2_1IJxc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "GazetaIcon",
    icon: GazetaIcon,
    content:
      "https://www.youtube.com/embed/p3AiekKjhoM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
];

export const recommendationsApps = [
  {
    name: "UFPA",
    icon: recommendation1,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFPA",
    icon: recommendation2,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFPA",
    icon: recommendation3,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFPA",
    icon: recommendation4,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFPA",
    icon: recommendation5,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
];

export const secondCards = [
  {
    name: "UFJF",
    icon: image2,
    content: ufjfVideo,
  },
  {
    name: "UFC",
    icon: image4,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFF",
    icon: image3,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFMA",
    icon: image9,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
  {
    name: "UFPB",
    icon: image20,
    content:
      "https://www.youtube.com/embed/-UUV_1mwFqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0",
  },
];
