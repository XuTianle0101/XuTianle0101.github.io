import type { LocalizedString } from '@/i18n';

export const profile = {
  name: {
    zh: '你的名字',
    en: 'Your Name',
  },
  headline: {
    zh: '计算机视觉 / 多模态智能 / 全栈工程',
    en: 'Computer Vision / Multimodal AI / Full-stack Engineering',
  },
  location: {
    zh: '中国，上海',
    en: 'Shanghai, China',
  },
  email: 'you@example.com',
  portrait: '/images/portrait-placeholder.png',
  heroImage: '/images/editorial-desk.png',
  summary: {
    zh: '我关注智能视觉系统如何从复杂世界中理解结构、行动和意义。这个网站收集我的研究、项目、实习经历、技术写作和一些构成我日常好奇心的兴趣。',
    en: 'I study how intelligent visual systems understand structure, action, and meaning in the messy real world. This site collects my research, projects, internships, technical writing, and the interests that keep my curiosity moving.',
  },
  longBio: {
    zh: '目前的研究兴趣包括计算机视觉、多模态学习、具身智能和高质量工程系统。我喜欢把论文里的想法做成可运行、可解释、可迭代的原型，也持续记录实现细节、实验经验和工具链心得。',
    en: 'My current interests include computer vision, multimodal learning, embodied intelligence, and reliable engineering systems. I enjoy turning ideas from papers into prototypes that can be run, explained, and improved, while writing about implementation details, experiments, and tooling.',
  },
  education: [
    {
      school: {
        zh: '复旦大学',
        en: 'Fudan University',
      },
      degree: {
        zh: '硕士研究生，电子信息 / 计算机视觉方向',
        en: "Master's Student, Electronic Information / Computer Vision",
      },
      period: '2024 - 2027',
    },
    {
      school: {
        zh: '某某大学',
        en: 'Example University',
      },
      degree: {
        zh: '本科，计算机科学与技术',
        en: 'B.Eng. in Computer Science',
      },
      period: '2020 - 2024',
    },
  ],
  skillGroups: [
    {
      name: {
        zh: '研究与算法',
        en: 'Research & Algorithms',
      },
      skills: ['Computer Vision', 'Multimodal Learning', 'Deep Learning', 'Optimization'],
    },
    {
      name: {
        zh: '工程',
        en: 'Engineering',
      },
      skills: ['Python', 'PyTorch', 'TypeScript', 'React', 'Next.js'],
    },
    {
      name: {
        zh: '工具链',
        en: 'Tooling',
      },
      skills: ['Linux', 'Docker', 'Git', 'LaTeX', 'Data Visualization'],
    },
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/yourname',
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
    },
  ],
} satisfies {
  name: LocalizedString;
  headline: LocalizedString;
  location: LocalizedString;
  email: string;
  portrait: string;
  heroImage: string;
  summary: LocalizedString;
  longBio: LocalizedString;
  education: Array<{
    school: LocalizedString;
    degree: LocalizedString;
    period: string;
  }>;
  skillGroups: Array<{
    name: LocalizedString;
    skills: string[];
  }>;
  socials: Array<{
    label: string;
    href: string;
  }>;
};
