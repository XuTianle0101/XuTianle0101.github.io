import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { LocalizedString, Locale } from '@/i18n';

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export type BlogLanguage = Locale | 'bilingual';
export type BlogSeries = 'ai-infra' | 'what-is' | 'misc';

export const blogSeriesOrder: BlogSeries[] = ['ai-infra', 'what-is', 'misc'];

export const blogSeriesMeta: Record<BlogSeries, LocalizedString> = {
  'ai-infra': {
    zh: 'AI Infra',
    en: 'AI Infra',
  },
  'what-is': {
    zh: '什么是系列',
    en: 'What Is Series',
  },
  misc: {
    zh: '杂谈',
    en: 'Notes',
  },
};

export const blogSeriesDescriptions: Record<BlogSeries, LocalizedString> = {
  'ai-infra': {
    zh: '面向训练、推理、通信和系统性能的基础设施笔记。',
    en: 'Infrastructure notes on training, inference, communication, and systems performance.',
  },
  'what-is': {
    zh: '用工程视角解释一个重要概念：它是什么、解决什么问题、怎么落地。',
    en: 'Engineering-oriented explainers for important concepts: what they are, why they matter, and how to apply them.',
  },
  misc: {
    zh: '项目复盘、工具链经验，以及更自由的技术思考。',
    en: 'Project reflections, tooling notes, and more free-form technical thoughts.',
  },
};

export type BlogFrontmatter = {
  title: LocalizedString;
  description: LocalizedString;
  date: string;
  language: BlogLanguage;
  tags: string[];
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  series: BlogSeries;
};

function inferBlogSeries(title: LocalizedString): BlogSeries {
  const zhTitle = title.zh.trim();

  if (zhTitle.startsWith('[Infra')) {
    return 'ai-infra';
  }

  if (zhTitle.startsWith('什么是')) {
    return 'what-is';
  }

  return 'misc';
}

export function getBlogSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostSource(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  return fs.readFileSync(fullPath, 'utf8');
}

export function getPostBySlug(slug: string): BlogPost {
  const source = getPostSource(slug);
  const { data } = matter(source);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    language: data.language,
    series: inferBlogSeries(data.title),
    tags: data.tags ?? [],
  };
}

export function getAllPosts() {
  return getBlogSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}
