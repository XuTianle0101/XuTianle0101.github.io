import type { LocalizedString } from '@/i18n';

export type Publication = {
  id: string;
  title: LocalizedString;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'preprint' | 'workshop' | 'patent';
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
    id: 'medical-device-optimization-sci-q1',
    title: {
      zh: '基于遗传算法和传统力学交叉融合的医疗器械优化设计',
      en: 'Medical Device Optimization Design via Genetic Algorithms and Classical Mechanics',
    },
    authors: ['徐天乐', 'Collaborators'],
    venue: 'SCI Q1 Journal',
    year: 2025,
    type: 'journal',
    status: {
      zh: '已发表，第一作者',
      en: 'Published, first author',
    },
    summary: {
      zh: '复旦大学“医+X”交叉创新团队孵化项目成果，使用 Python Pipeline 串联多个软件 API，并基于 NSGA-II 完成医疗器械自动优化设计。',
      en: 'Result from Fudan Med+X interdisciplinary innovation work, connecting multiple software APIs through a Python pipeline and applying NSGA-II for automated medical-device optimization.',
    },
    featured: true,
  },
  {
    id: 'world-cup-ai-commentary-vlm',
    title: {
      zh: '面向世界杯直播场景的 AI 解说多模态视觉语言模型',
      en: 'Multimodal Vision-Language Model for World Cup AI Commentary',
    },
    authors: ['徐天乐', 'Collaborators'],
    venue: 'CCF-C Conference Submission',
    year: 2026,
    type: 'conference',
    status: {
      zh: '在投',
      en: 'Under submission',
    },
    summary: {
      zh: '围绕直播流实时解析，结合 Qwen3-VL-8B、vLLM 流式推理、YOLO 球员检测和战术识别框架，构建世界杯 AI 解说技术链路。',
      en: 'Built a World Cup AI-commentary pipeline combining Qwen3-VL-8B, vLLM streaming inference, YOLO player detection, and tactical-recognition modules for real-time broadcast understanding.',
    },
    featured: true,
  },
  {
    id: 'medical-device-invention-patents',
    title: {
      zh: '医疗器械优化设计相关发明专利 3 项',
      en: 'Three Invention Patents on Medical Device Optimization Design',
    },
    authors: ['徐天乐', 'Collaborators'],
    venue: 'Chinese Invention Patents',
    year: 2025,
    type: 'patent',
    status: {
      zh: '已申请，第一发明人',
      en: 'Filed, first inventor',
    },
    summary: {
      zh: '围绕遗传算法与传统力学融合的医疗器械优化设计方法，以第一发明人申请 3 项发明专利。',
      en: 'Filed three invention patents as first inventor around medical-device optimization methods combining genetic algorithms with classical mechanics.',
    },
    featured: false,
  },
];
