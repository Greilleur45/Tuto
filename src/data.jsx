import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { GoBook } from "react-icons/go";

import Work1 from './assets/Projet-1.jpg';
import Work2 from './assets/Projet-2.jpg';
import Work3 from './assets/Projet-3.jpg';
import Work4 from './assets/Projet-4.jpg';
import Work5 from './assets/Projet-5.jpg';
import Work6 from './assets/Projet-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Prénom : ',
    description: 'Brice',
  },

  {
    id: 2,
    title: 'Nom : ',
    description: 'DURAND',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 ans',
  },

  {
    id: 4,
    title: 'Nationnalité : ',
    description: 'Française',
  },

  {
    id: 5,
    title: 'Adresse : ',
    description: '23 Rue Roger Cazala',
  },

  {
    id: 6,
    title: 'Ville : ',
    description: '36000 Châteauroux',
  },

  {
    id: 7,
    title: 'N° de téléphone : ',
    description: '+33 6 02 06 99 07',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'brice.durand8@orange.fr',
  },

  {
    id: 9,
    title: 'Mobilité : ',
    description: 'Permis B',
  },

  {
    id: 10,
    title: 'Langues : ',
    description: 'Francais, Anglais',
  },
];

export const stats = [
  {
    id: 1,
    no: '715',
    title: 'Au TOEIC<br /> blanc',
  },

  {
    id: 2,
    no: 'BAC +3',
    title: "Niveau<br /> d'étude actuel",
  },

  {
    id: 3,
    no: '2 ans',
    title: "D'apprentissage chez EDF",
  },

  {
    id: 4,
    no: '100%',
    title: ' De ce portfolio est <br />réalisé à la main',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: "Septembre 2022 - Aujourd'hui",
    title: 'Technicien de maintenance <span> EDF<br /> centrale nucléaire de Saint-Laurent des Eaux, France </span>',
    desc: "Création d'une application d'aide à l'intervention pour EDF.<br />Maintenance préventive et corrective sur les différents systèmes élémentaires de la centrale. <br />Référant sur des systèmes de la centrale.",
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Août 2022',
    title: "Manutentionnaire dans le domaine de l'électroménager <span> CTLOG <br />Meung-sur-Loire, France </span>",
    desc: "Enlèvement des machines à laver des containers.<br /> Expertise de l'état des machines à laver. <br />Étiquetage des machines à laver. <br />Filmage des différentes machines.",
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Juin 2022 - Juillet 2022',
    title: 'Manutentionnaire dans le domaine du pharmaceutique <span> OCP REPARTITION <br />Meung-sur-Loire, France </span>',
    desc: "Préparation de colis contenant divers médicaments pour distribution. <br />Vérification du bon état des colis ainsi que de l’étiquetage.",
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Septembre 2023 - Aout 2026',
    title: "Ecole d'ingénieur <span> A la recherche d'une école </span>",
    desc: "Mon projet professionnel serait de rejoindre une école d'ingénieur en apprentissage dans la mécatronique.<br /> L'objectif est d'approfondir mes compétences acquises lors de ma précédente formation et en acquérir de nouvelles.",
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: "Septembre 2021 - Aujourd'hui",
    title: "Bachelor Universitaire de Technologie en Génie Electrique et Informatique Industrielle<br /> (BUT GEII) <span> IUT de l'Indre<br /> Châteauroux, France </span>",
    desc: "Actuellement en troisième année.<br /> J'ai effectué 2 ans d'apprentissage chez EDF en 2ième et 3ième années.<br /> Spécialité : Automatisme et Informatique Industrielle (AII)",
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Septembre 2019 - Juin 2021',
    title: 'Baccalauréat Général <span> Lycée François Villion<br /> Beaugency, France </span>',
    desc: "Spécialités : <br /> - Mathématiques,<br /> - Numérique et Sciences Informatiques (NSI),<br /> - Science de l'Ingénieur (SI) [abandonné en 1ère]",
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '70',
  },

  {
    id: 2,
    title: 'C',
    percentage: '60',
  },

  {
    id: 3,
    title: 'VBA',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Pyhton',
    percentage: '40',
  },

  {
    id: 5,
    title: 'Grafcet',
    percentage: '80',
  },

  {
    id: 6,
    title: 'JavaScript',
    percentage: '50',
  },

  {
    id: 7,
    title: 'KiCad',
    percentage: '65',
  },

  {
    id: 8,
    title: 'See Electrical Expert',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Projet FISH',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: "Fiche Intelligente de Suivie et d'Historique",
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'EDF',
      },
      {
        icon: <FaCode />,
        title: 'Langage : ',
        desc: 'VBA',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'site en cours de développement',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'SAÉ Robot',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: "Programmation d'un robot Arduino",
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: "IUT de l'Indre",
      },
      {
        icon: <FaCode />,
        title: 'Langage : ',
        desc: 'Arduino',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'site en cours de développement',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'SAÉ PLCNEXT',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Processus industriel sur automate PLCNEXT',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: "IUT de l'Indre",
      },
      {
        icon: <FaCode />,
        title: 'Langage : ',
        desc: 'Structuré (ST)',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'site en cours de développement',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "SAÉ Informatique embarqué",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: "Création d'un PCB ATMEGA32U4",
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: "IUT de l'Indre",
      },
      {
        icon: <FaCode />,
        title: 'Langage : ',
        desc: 'C',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'site en cours de développement',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "SAÉ Traitement de surface",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: "Processus industriel d'un traitement de surface",
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: "IUT de l'Indre",
      },
      {
        icon: <FaCode />,
        title: 'Langage : ',
        desc: 'Grafcet et Ladder (LD)',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'site en cours de développement',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'SAÉ Mobil home',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: "Installation électrique d'un mobil home",
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: "IUT de l'Indre",
      },
      {
        icon: <GoBook />,
        title: 'Norme : ',
        desc: 'NFC 15-100',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'site en cours de développement',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
