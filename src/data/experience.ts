import type { LocalizedString } from '@/i18n';

export type ExperienceKind = 'project' | 'internship' | 'research';

export type ExperienceItem = {
  id: string;
  kind: ExperienceKind;
  featured?: boolean;
  period: string;
  organization: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  highlights: LocalizedString[];
  tech: string[];
  image: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export const experiences: ExperienceItem[] = [
  {
    id: 'vision-agent',
    kind: 'research',
    featured: true,
    period: '2025 - Present',
    organization: {
      zh: '智能视觉实验室',
      en: 'Intelligent Vision Lab',
    },
    title: {
      zh: '面向复杂场景理解的多模态视觉代理',
      en: 'Multimodal Vision Agent for Complex Scene Understanding',
    },
    summary: {
      zh: '围绕视觉语言模型、空间推理和工具调用构建研究原型，探索模型如何在开放场景中解释目标、关系和操作约束。',
      en: 'A research prototype around vision-language models, spatial reasoning, and tool use for interpreting objects, relations, and action constraints in open scenes.',
    },
    highlights: [
      {
        zh: '设计了可复现实验管线，覆盖数据准备、评测、可视化和错误归因。',
        en: 'Designed a reproducible experiment pipeline covering data preparation, evaluation, visualization, and error attribution.',
      },
      {
        zh: '将模型输出转化为结构化中间表示，便于后续检索和人工审阅。',
        en: 'Converted model outputs into structured intermediate representations for retrieval and human review.',
      },
    ],
    tech: ['PyTorch', 'Python', 'VLM', 'Evaluation'],
    image: '/images/project-vision.png',
    links: [
      {
        label: 'Code',
        href: 'https://github.com/XuTianle0101/vision-agent',
      },
    ],
  },
  {
    id: 'intern-platform',
    kind: 'internship',
    featured: true,
    period: '2025 Summer',
    organization: {
      zh: '某科技公司 AI 平台组',
      en: 'AI Platform Team, Example Tech',
    },
    title: {
      zh: '机器学习平台实习生',
      en: 'Machine Learning Platform Intern',
    },
    summary: {
      zh: '参与训练任务管理、实验追踪和模型服务链路建设，关注研发体验、稳定性和可观测性。',
      en: 'Worked on training job management, experiment tracking, and model serving workflows with a focus on developer experience, reliability, and observability.',
    },
    highlights: [
      {
        zh: '改进实验元数据检索体验，减少重复排查成本。',
        en: 'Improved experiment metadata retrieval and reduced repetitive debugging effort.',
      },
      {
        zh: '补充关键路径监控指标，帮助定位训练任务异常。',
        en: 'Added monitoring signals for critical paths to help diagnose failed training jobs.',
      },
    ],
    tech: ['TypeScript', 'React', 'Python', 'Docker'],
    image: '/images/platform-work.png',
  },
  {
    id: 'paper-reading',
    kind: 'project',
    featured: false,
    period: '2024',
    organization: {
      zh: '个人项目',
      en: 'Personal Project',
    },
    title: {
      zh: '论文阅读与实验记录系统',
      en: 'Paper Reading and Experiment Notes System',
    },
    summary: {
      zh: '用结构化笔记串联论文动机、方法、复现实验和后续想法，服务长期研究积累。',
      en: 'A structured note system connecting paper motivation, methods, reproduction attempts, and follow-up ideas for long-term research work.',
    },
    highlights: [
      {
        zh: '按主题、数据集、方法和实验结论建立索引。',
        en: 'Indexed notes by topic, dataset, method, and experimental conclusion.',
      },
    ],
    tech: ['MDX', 'BibTeX', 'Python'],
    image: '/images/research-notes.png',
  },
];
