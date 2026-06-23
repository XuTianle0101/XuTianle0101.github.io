import type { LocalizedString } from '@/i18n';

export type Interest = {
  title: LocalizedString;
  description: LocalizedString;
};

export const interests: Interest[] = [
  {
    title: {
      zh: '技术写作',
      en: 'Technical Writing',
    },
    description: {
      zh: '把调试过程、论文复现和工具链经验写成可重复使用的笔记。',
      en: 'Turning debugging traces, paper reproductions, and tooling experience into reusable notes.',
    },
  },
  {
    title: {
      zh: '摄影与城市漫步',
      en: 'Photography & City Walks',
    },
    description: {
      zh: '用图像观察城市结构、光线和日常生活里的小秩序。',
      en: 'Observing city structure, light, and small patterns of daily life through images.',
    },
  },
  {
    title: {
      zh: '开源工具',
      en: 'Open-source Tools',
    },
    description: {
      zh: '喜欢打磨能节省重复劳动的小工具，也关注开发体验。',
      en: 'I enjoy polishing small tools that remove repetitive work and improve developer experience.',
    },
  },
];
