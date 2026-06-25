import type { LocalizedString } from '@/i18n';

export type Publication = {
  id: string;
  title: LocalizedString;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'preprint' | 'workshop';
  status: LocalizedString;
  summary: LocalizedString;
  featured?: boolean;
  links?: {
    paper?: string;
    code?: string;
    doi?: string;
    arxiv?: string;
    bibtex?: string;
  };
};

export const publications: Publication[] = [
  {
    id: 'structured-vision-2026',
    title: {
      zh: '面向开放世界场景理解的结构化视觉表示',
      en: 'Structured Visual Representations for Open-world Scene Understanding',
    },
    authors: ['xutianle', 'Collaborator A', 'Advisor B'],
    venue: 'Preprint',
    year: 2026,
    type: 'preprint',
    status: {
      zh: '准备投稿',
      en: 'In preparation',
    },
    summary: {
      zh: '研究视觉语言模型在开放场景中的结构化表达、错误模式和可解释评测方式。',
      en: 'A study of structured representations, failure modes, and interpretable evaluation for vision-language models in open-world scenes.',
    },
    featured: true,
    links: {
      arxiv: 'https://arxiv.org/',
      code: 'https://github.com/XuTianle0101',
    },
  },
  {
    id: 'efficient-eval-2025',
    title: {
      zh: '复杂视觉任务中的高效评测协议',
      en: 'Efficient Evaluation Protocols for Complex Vision Tasks',
    },
    authors: ['xutianle', 'Collaborator C'],
    venue: 'Workshop on Reliable AI Systems',
    year: 2025,
    type: 'workshop',
    status: {
      zh: '已接收',
      en: 'Accepted',
    },
    summary: {
      zh: '提出轻量评测集构建方法，帮助在有限计算预算下发现关键错误类型。',
      en: 'A lightweight evaluation-set construction method for exposing important error classes under limited compute budgets.',
    },
    featured: true,
    links: {
      paper: 'https://example.com/paper.pdf',
    },
  },
];
