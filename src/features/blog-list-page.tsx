import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { dictionary, type Locale, text } from '@/i18n';
import { formatDate } from '@/lib/format';
import { blogSeriesDescriptions, blogSeriesMeta, blogSeriesOrder, getAllPosts } from '@/lib/blog';
import { localizedPath } from '@/lib/routes';

export function BlogListPage({ locale, rootMode = false }: { locale: Locale; rootMode?: boolean }) {
  const posts = getAllPosts();
  const copy = dictionary[locale];
  const groupedPosts = blogSeriesOrder.map((series) => ({
    series,
    posts: posts.filter((post) => post.series === series),
  }));

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow={copy.nav.blog}
        title={locale === 'zh' ? '技术博客系列' : 'Technical writing series'}
      >
        <p>
          {locale === 'zh'
            ? '把技术博客按 AI Infra、什么是系列和杂谈组织起来：一部分面向系统和训练工程，一部分解释关键概念，一部分保留更自由的项目复盘与思考。'
            : 'Technical writing organized into AI Infra, What Is Series, and Notes: systems work, concept explainers, and more free-form project reflections.'}
        </p>
      </SectionHeading>

      <div className="grid gap-3 md:grid-cols-3">
        {groupedPosts.map(({ series, posts: seriesPosts }) => (
          <a
            key={series}
            href={`#${series}`}
            className="group border border-line bg-white/45 p-5 transition hover:-translate-y-1 hover:border-teal/45 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-300/40 dark:hover:bg-white/[0.07]"
          >
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/42 dark:text-white/42">
              {locale === 'zh' ? `${String(seriesPosts.length).padStart(2, '0')} 篇文章` : `${String(seriesPosts.length).padStart(2, '0')} posts`}
            </div>
            <h2 className="mt-4 font-serif text-2xl transition group-hover:text-teal dark:group-hover:text-sky-300">
              {text(blogSeriesMeta[series], locale)}
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/62 dark:text-white/62">{text(blogSeriesDescriptions[series], locale)}</p>
          </a>
        ))}
      </div>

      <div className="mt-14 space-y-16">
        {groupedPosts.map(({ series, posts: seriesPosts }) => (
          <section key={series} id={series} className="scroll-mt-24">
            <div className="mb-6 flex flex-col gap-3 border-b border-line pb-5 dark:border-white/10 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/42 dark:text-white/42">
                  Series / {String(seriesPosts.length).padStart(2, '0')}
                </div>
                <h2 className="mt-2 font-serif text-4xl text-ink dark:text-white">{text(blogSeriesMeta[series], locale)}</h2>
              </div>
              <p className="max-w-2xl leading-7 text-ink/62 dark:text-white/62">{text(blogSeriesDescriptions[series], locale)}</p>
            </div>

            {seriesPosts.length > 0 ? (
              <div className="border-y border-line dark:border-white/10">
                {seriesPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={localizedPath(locale, `/blog/${post.slug}`, rootMode)}
                    className="group grid gap-5 border-t border-line py-7 first:border-t-0 transition hover:bg-white/45 dark:border-white/10 dark:hover:bg-white/[0.03] md:grid-cols-[5rem_1fr] md:px-4"
                  >
                    <div className="font-mono text-sm text-ink/42 dark:text-white/42 md:pt-1">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/48 dark:text-white/48">
                        <span>{formatDate(post.date, locale)}</span>
                        <span className="h-1 w-1 rounded-full bg-ink/30 dark:bg-white/35" />
                        <span>{post.language}</span>
                      </div>
                      <h3 className="mt-3 font-serif text-[1.9rem] leading-tight transition group-hover:text-teal dark:group-hover:text-sky-300 sm:text-[2.6rem]">
                        {text(post.title, locale)}
                      </h3>
                      <p className="mt-4 max-w-3xl leading-8 text-ink/68 dark:text-white/68">{text(post.description, locale)}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="border border-line bg-white/45 px-3 py-1 text-xs text-ink/65 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-line bg-white/35 px-5 py-8 text-ink/58 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/58">
                {locale === 'zh' ? '这个系列还在酝酿中，之后会把更自由的技术笔记放在这里。' : 'This series is waiting for future notes and freer technical reflections.'}
              </div>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}
