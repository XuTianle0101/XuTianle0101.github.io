import type { LocalizedString } from '@/i18n';

export const profile = {
  name: {
    zh: '徐天乐',
    en: 'xutianle',
  },
  headline: {
    zh: 'AI 算法 / 大模型推理引擎 / 多模态视觉 / 医学影像重建',
    en: 'AI Algorithms / LLM Inference Systems / Multimodal Vision / Medical Imaging',
  },
  location: {
    zh: '中国，上海',
    en: 'Shanghai, China',
  },
  email: 'xutianle@fudan.edu.cn',
  phone: '15002804372',
  wechat: 'HAPYHAPYLe',
  portrait: '/images/portrait-placeholder.png',
  heroImage: '/images/editorial-desk.png',
  summary: {
    zh: '复旦大学生物医学工程硕士研究生，方向聚焦 AI 算法、大模型推理引擎、多模态视觉和医学影像重建。曾在寒武纪、咪咕视频、纳米维景医疗等场景中参与 vLLM_MLU、世界杯 AI 解说 VLM、32 源相控阵 CT 重建等项目。',
    en: 'I am a Biomedical Engineering master student at Fudan University, focused on AI algorithms, LLM inference systems, multimodal vision, and medical imaging reconstruction. My work spans vLLM_MLU on Cambricon MLUs, World Cup AI commentary VLMs, and multi-source CT reconstruction.',
  },
  longBio: {
    zh: '我本科毕业于复旦大学理论与应用力学专业，具备数理建模和工程推导基础；硕士阶段在人工智能与生物医学工程交叉方向继续深造。我的实践覆盖从 CUDA 并行算子、vLLM/SGLang 推理引擎适配，到 VLM 实时解析、YOLO 检测、CT 重建算法和遗传算法优化设计，关注把算法能力落到真实业务和硬件平台中。',
    en: 'I received my bachelor degree in Theoretical and Applied Mechanics from Fudan University and am now pursuing a master degree at the intersection of AI and Biomedical Engineering. My experience covers CUDA operators, vLLM/SGLang inference adaptation, real-time VLM parsing, YOLO detection, CT reconstruction, and genetic-algorithm-based engineering optimization.',
  },
  education: [
    {
      school: {
        zh: '复旦大学',
        en: 'Fudan University',
      },
      degree: {
        zh: '硕士研究生在读，生物医学工程（人工智能与生物医学工程交叉）',
        en: 'M.S. Candidate, Biomedical Engineering (AI x Biomedical Engineering)',
      },
      period: '2024/09 - 2028/06',
      details: {
        zh: '发表 1 篇 SCI 1 区文章（第一作者），申请 3 项发明专利（第一发明人）。',
        en: 'Published one SCI Q1 journal article as first author and filed three invention patents as first inventor.',
      },
    },
    {
      school: {
        zh: '复旦大学',
        en: 'Fudan University',
      },
      degree: {
        zh: '本科，理论与应用力学（数理基础），获理学学士学位',
        en: 'B.S., Theoretical and Applied Mechanics',
      },
      period: '2020/09 - 2024/06',
      details: {
        zh: '主修数学物理方法、常微分方程、计算方法与软件、工程数学等课程。',
        en: 'Coursework included mathematical physics methods, ordinary differential equations, computational methods and software, and engineering mathematics.',
      },
    },
  ],
  skillGroups: [
    {
      name: {
        zh: '编程语言 / 工程工具',
        en: 'Programming & Engineering',
      },
      skills: ['Python', 'CUDA', 'Linux', 'Git'],
    },
    {
      name: {
        zh: '机器学习框架 / 库',
        en: 'ML Frameworks & Libraries',
      },
      skills: ['PyTorch', 'TensorFlow', 'Transformer', 'Hugging Face'],
    },
    {
      name: {
        zh: '核心算法领域',
        en: 'Core Algorithm Areas',
      },
      skills: ['vLLM', 'SGLang', 'VLM', 'YOLO', 'CT Reconstruction'],
    },
    {
      name: {
        zh: '数据与评测',
        en: 'Data & Evaluation',
      },
      skills: ['Data Annotation', 'Model Evaluation', 'Hallucination Check', 'Algorithm Engineering'],
    },
  ],
  honors: [
    {
      zh: '2024-2025 学年复旦大学小米特等奖学金（全校 10 人）',
      en: 'Fudan University Xiaomi Grand Scholarship, 2024-2025 (10 recipients university-wide)',
    },
    {
      zh: '中国国际大学生创新大赛银奖',
      en: 'Silver Award, China International College Students Innovation Competition',
    },
    {
      zh: '全国大学生数学建模竞赛上海市一等奖',
      en: 'Shanghai First Prize, Contemporary Undergraduate Mathematical Contest in Modeling',
    },
    {
      zh: '上海市普通高等学校优秀毕业生',
      en: 'Outstanding Graduate of Shanghai Universities',
    },
    {
      zh: '复旦大学“毕业生之星”提名奖（全校 20 人）',
      en: 'Nominee, Fudan University Graduate Star Award (20 nominees university-wide)',
    },
    {
      zh: '获冠名奖学金、优秀学生奖学金',
      en: 'Named scholarships and Outstanding Student Scholarship',
    },
  ],
  service: [
    {
      zh: '政治面貌：中共党员。',
      en: 'Political affiliation: CPC member.',
    },
    {
      zh: '曾任复旦大学航空航天系学生会执行主席。',
      en: 'Former Executive President of the Student Union, Department of Aeronautics and Astronautics, Fudan University.',
    },
    {
      zh: '复旦大学“人才工程”预备队（一期）队员。',
      en: 'Member of Fudan University Talent Program Preparatory Cohort I.',
    },
  ],
  languages: [
    {
      zh: 'CET-6 520+，具备较强英语沟通与英文文献阅读能力。',
      en: 'CET-6 520+, with strong English communication and technical reading ability.',
    },
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/XuTianle0101',
    },
  ],
} satisfies {
  name: LocalizedString;
  headline: LocalizedString;
  location: LocalizedString;
  email: string;
  phone: string;
  wechat: string;
  portrait: string;
  heroImage: string;
  summary: LocalizedString;
  longBio: LocalizedString;
  education: Array<{
    school: LocalizedString;
    degree: LocalizedString;
    period: string;
    details: LocalizedString;
  }>;
  skillGroups: Array<{
    name: LocalizedString;
    skills: string[];
  }>;
  honors: LocalizedString[];
  service: LocalizedString[];
  languages: LocalizedString[];
  socials: Array<{
    label: string;
    href: string;
  }>;
};
