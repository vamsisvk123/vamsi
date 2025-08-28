import React from 'react';
import type { Experience } from '../types';
import carelonLogo from '../assets/carelon.png';
import softsuaveLogo from '../assets/softsuave.png';
import peoplecombineLogo from '../assets/peoplecombine.png';

export const experiences: Experience[] = [
  {
    dateRange: 'Dec 2020',
    present: 'Sep 2023',
    companyName: 'Carelon Global Solutions',
    jobTitle: 'Full Stack Developer',
    description:
      'Developed dynamic and responsive web applications using ReactJS and NodeJS. Implemented RESTful APIs, integrated Strapi CMS, and collaborated in Agile development cycles. Built scalable solutions with modern technologies and ensured cross-device compatibility.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Java', 'Angular', 'Strapi', 'AWS', 'Next.js'],
    icon: <img src={carelonLogo} alt="Carelon Global Solutions" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
  },
  {
    dateRange: 'May 2019',
    present: 'Jul 2020',
    companyName: 'Soft Suave Technologies',
    jobTitle: 'React JS / Node JS Developer',
    description:
      'Converted React web applications into cross-platform desktop applications using Electron.js. Developed kiosk systems, deployed applications on Raspberry Pi, and managed production environments with PM2. Built RESTful APIs and automated backend processes.',
    tags: ['React.js', 'Node.js', 'Electron.js', 'MySQL', 'AWS EC2', 'Bootstrap'],
    icon: <img src={softsuaveLogo} alt="Soft Suave Technologies" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
  },
  {
    dateRange: 'Jul 2017',
    present: 'Feb 2019',
    companyName: 'People Combine',
    jobTitle: 'Trainee Software Engineer',
    description:
      'Performed extensive data validation and backend testing with complex SQL queries. Developed interactive data tables using jQGrid, integrated Jasper Reports for customizable reporting, and designed RESTful API endpoints for seamless frontend-backend communication.',
    tags: ['MySQL', 'Java', 'jQuery', 'Jasper Reports', 'JavaScript', 'HTML', 'CSS'],
    icon: <img src={peoplecombineLogo} alt="People Combine" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
  },
];