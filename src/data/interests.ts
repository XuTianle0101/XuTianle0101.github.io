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
      zh: '运动',
      en: 'Sports',
    },
    description: {
      zh: '保持规律运动，在训练和团队活动中延续自律、执行力和协作感。',
      en: 'Keeping a regular sports routine and carrying discipline, execution, and teamwork into daily work.',
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
