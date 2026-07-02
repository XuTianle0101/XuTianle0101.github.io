import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { type Locale, text } from '@/i18n';
import { formatDate } from '@/lib/format';
import { blogSeriesMeta, getPostBySlug, getPostSource } from '@/lib/blog';

function estimateReadingMinutes(content: string, locale: Locale) {
  const plainText = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[#>*_`[\]()|-]/g, '')
    .trim();

  const unitCount =
    locale === 'zh'
      ? plainText.replace(/\s/g, '').length
      : plainText.split(/\s+/).filter(Boolean).length;
  const unitsPerMinute = locale === 'zh' ? 550 : 220;

  return Math.max(1, Math.ceil(unitCount / unitsPerMinute));
}

export function BlogPostPage({ locale, slug }: { locale: Locale; slug: string }) {
  const post = getPostBySlug(slug);
  const source = getPostSource(slug);
  const { content } = matter(source);
  const readingMinutes = estimateReadingMinutes(content, locale);
  const readingLabel = locale === 'zh' ? `${readingMinutes} 分钟阅读` : `${readingMinutes} min read`;
  const languageLabel = post.language === 'bilingual' ? 'Bilingual' : post.language.toUpperCase();

  return (
    <article className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
      <header className="border-y border-line bg-cloud/60 py-9 dark:border-white/10 dark:bg-white/[0.03] md:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal dark:text-sky-300">
            <span>{formatDate(post.date, locale)}</span>
            <span className="h-1 w-1 rounded-full bg-teal/50 dark:bg-sky-300/60" />
            <span>{text(blogSeriesMeta[post.series], locale)}</span>
            <span className="h-1 w-1 rounded-full bg-teal/50 dark:bg-sky-300/60" />
            <span>{languageLabel}</span>
            <span className="h-1 w-1 rounded-full bg-teal/50 dark:bg-sky-300/60" />
            <span>{readingLabel}</span>
          </div>
          <h1 className="mt-5 font-serif text-[2.35rem] leading-[1.08] text-ink dark:text-white md:text-[4.4rem]">
            {text(post.title, locale)}
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink/68 dark:text-white/68 md:text-xl md:leading-9">
            {text(post.description, locale)}
          </p>
        </div>
      </header>

      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="border border-line bg-white/55 px-3 py-1 text-xs font-medium text-ink/68 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/68">
            {tag}
          </span>
        ))}
      </div>

      <div className="prose-site mx-auto mt-12 max-w-3xl text-ink/78 dark:text-white/78">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
