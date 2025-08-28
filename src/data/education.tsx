import React from 'react';
import type { Education } from '../types';
import semoLogo from '../assets/semo.png';
import pbrVitsLogo from '../assets/PBR vits.png';

export const education: Education[] = [
  {
    degree: 'Master of Science',
    institution: 'Southeast Missouri State University',
    dateRange: '2023 - 2024',
    description:
      'Advanced studies in Computer Science with focus on software engineering and system design.',
    icon: <img src={semoLogo} alt="Southeast Missouri State University" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
  },
  {
    degree: 'Bachelor of Technology',
    institution: 'PBR VITS',
    dateRange: '2013 - 2017',
    description:
      'Comprehensive foundation in Computer Science, programming, and software development principles.',
    icon: <img src={pbrVitsLogo} alt="PBR VITS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
  },
];
