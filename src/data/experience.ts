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
    id: 'cambricon-vllm-mlu',
    kind: 'internship',
    featured: true,
    period: '2026/04 - Present',
    organization: {
      zh: '寒武纪科技有限公司',
      en: 'Cambricon Technologies',
    },
    title: {
      zh: '并行运算与推理 AI Infra 实习生 | 国产芯片 vLLM',
      en: 'AI Infra Intern, Parallel Computing & Inference | vLLM on Domestic AI Chips',
    },
    summary: {
      zh: '维护和开发面向寒武纪 MLU 的大模型推理引擎 vLLM_MLU，业务围绕 KimiK 系列模型，服务腾讯客户场景。',
      en: 'Maintained and developed vLLM_MLU, a large-model inference engine adapted to Cambricon MLUs, supporting KimiK-series model workloads for Tencent-facing scenarios.',
    },
    highlights: [
      {
        zh: '参与大模型推理框架在国产 AI 芯片上的适配、调试与性能路径维护。',
        en: 'Worked on adapting, debugging, and maintaining performance-critical paths of an LLM inference framework on domestic AI accelerators.',
      },
      {
        zh: '围绕真实客户模型和部署环境处理推理引擎兼容性与工程稳定性问题。',
        en: 'Handled inference-engine compatibility and engineering stability issues around real customer models and deployment environments.',
      },
    ],
    tech: ['vLLM', 'MLU', 'Python', 'CUDA', 'LLM Inference'],
    image: '/images/organizations/cambricon.png',
  },
  {
    id: 'migu-world-cup-vlm',
    kind: 'internship',
    featured: true,
    period: '2025/12 - 2026/04',
    organization: {
      zh: '中国移动咪咕视频',
      en: 'China Mobile Migu Video',
    },
    title: {
      zh: 'AI 算法实习生 | 世界杯 AI 解说 VLM',
      en: 'AI Algorithm Intern | World Cup AI Commentary VLM',
    },
    summary: {
      zh: '面向世界杯赛事直播搭建 VLM 项目框架，基于 Qwen3-VL-8B 接入 vLLM 流式实时推理引擎，适配直播流实时解析需求。',
      en: 'Built a VLM project framework for World Cup live-broadcast scenarios, using Qwen3-VL-8B with vLLM streaming inference to support real-time video-stream understanding.',
    },
    highlights: [
      {
        zh: '集成 YOLO 模型实现赛场球员检测，并自研战术识别框架完成赛场战术实时拆解。',
        en: 'Integrated YOLO for player detection and developed a tactics-recognition framework for real-time tactical parsing.',
      },
      {
        zh: '搭建标准化多模态数据预处理与样本标注流水线；相关工作 1 篇 CCF-C 在投。',
        en: 'Built standardized multimodal preprocessing and annotation pipelines; one related CCF-C paper is under submission.',
      },
    ],
    tech: ['Qwen3-VL-8B', 'vLLM', 'VLM', 'YOLO', 'Data Annotation'],
    image: '/images/organizations/migu.png',
  },
  {
    id: 'nanovision-ct-reconstruction',
    kind: 'internship',
    featured: true,
    period: '2025/09 - 2025/12',
    organization: {
      zh: '纳米维景医疗',
      en: 'NanoVision Medical',
    },
    title: {
      zh: 'AI 算法实习生 | 32 源相控阵 CT 重建算法',
      en: 'AI Algorithm Intern | 32-source Phased-array CT Reconstruction',
    },
    summary: {
      zh: '负责多源 CT 重建算法研发，主导 FBP、FDK 经典重建算法数学推导与改进，并构建正投、加权、反投等基础算子。',
      en: 'Worked on multi-source CT reconstruction, leading mathematical derivation and improvement of FBP/FDK reconstruction algorithms and building forward-projection, weighting, and back-projection operators.',
    },
    highlights: [
      {
        zh: '优化 CUDA 并行运算逻辑，降低成像伪影 25%。',
        en: 'Optimized CUDA parallel-computing logic and reduced imaging artifacts by 25%.',
      },
      {
        zh: '验证算法解唯一性与采样数据完备性，探索 3DGS、FistaNet 等 AI 重建方法。',
        en: 'Verified solution uniqueness and sampling-data completeness, and explored AI reconstruction methods such as 3DGS and FistaNet.',
      },
    ],
    tech: ['CT Reconstruction', 'FBP', 'FDK', 'CUDA', '3DGS', 'FistaNet'],
    image: '/images/organizations/nanovision.png',
  },
  {
    id: 'medical-device-genetic-optimization',
    kind: 'research',
    featured: false,
    period: '2023/10 - 2025/03',
    organization: {
      zh: '复旦大学“医+X”交叉创新团队孵化项目',
      en: 'Fudan University Med+X Interdisciplinary Innovation Incubation Project',
    },
    title: {
      zh: '基于遗传算法和传统力学交叉融合的医疗器械优化设计',
      en: 'Medical Device Optimization via Genetic Algorithms and Classical Mechanics',
    },
    summary: {
      zh: '使用 Python Pipeline 串联多个软件自主二次开发 API，以 NSGA-II 遗传算法进行自动优化设计。',
      en: 'Connected multiple self-developed software APIs through a Python pipeline and applied NSGA-II genetic algorithms for automated optimization design.',
    },
    highlights: [
      {
        zh: '以第一发明人申请 3 项发明专利。',
        en: 'Filed three invention patents as first inventor.',
      },
      {
        zh: '以第一作者发表 1 篇 SCI 1 区顶刊文章。',
        en: 'Published one SCI Q1 journal article as first author.',
      },
    ],
    tech: ['Python', 'NSGA-II', 'Optimization', 'Mechanics', 'Medical Device Design'],
    image: '/images/organizations/fudan.png',
  },
  {
    id: 'tencent-facial-rig',
    kind: 'project',
    featured: false,
    period: '2025/12 - 2026/04',
    organization: {
      zh: '腾讯游戏引擎技术',
      en: 'Tencent Game Engine Technology',
    },
    title: {
      zh: '基于仿真 + 神经网络的 FacialRig',
      en: 'FacialRig with Simulation and Neural Networks',
    },
    summary: {
      zh: '围绕数字人面部驱动场景，结合物理模拟、人体解剖学和神经网络，完成从隐式网络训练、材料空间重建到 FEM 仿真的流程搭建。',
      en: 'For digital-human facial driving, combined physical simulation, anatomy, and neural networks to build a workflow from implicit-network training and material-space reconstruction to FEM simulation.',
    },
    highlights: [
      {
        zh: '支持单图 / 3D 扫描快速拟合，并验证表情迁移、动画重定向和碰撞规避效果。',
        en: 'Supported rapid fitting from a single image or 3D scan, and validated expression transfer, animation retargeting, and collision avoidance.',
      },
      {
        zh: '提升面部动画生成的真实感与可控性。',
        en: 'Improved realism and controllability of facial animation generation.',
      },
    ],
    tech: ['FacialRig', 'FEM', 'Implicit Network', 'Physics Simulation', 'Neural Networks'],
    image: '/images/organizations/tencent.png',
  },
];
