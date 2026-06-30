import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { dictionary, type Locale, text } from '@/i18n';
import { formatDate } from '@/lib/format';
import { getAllPosts } from '@/lib/blog';
import { localizedPath } from '@/lib/routes';

export function BlogListPage({ locale, rootMode = false }: { locale: Locale; rootMode?: boolean }) {
  const posts = getAllPosts();
  const copy = dictionary[locale];

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow={copy.nav.blog}
        title={locale === 'zh' ? '技术博客与研究笔记' : 'Technical writing and research notes'}
      >
        <p>
          {locale === 'zh'
            ? '博客使用 MDX 维护，适合写论文复现、项目复盘、工具链经验和实验记录。'
            : 'The blog is maintained in MDX for paper reproductions, project notes, tooling experience, and experiment logs.'}
        </p>
      </SectionHeading>

      <div className="border-y border-line dark:border-white/10">
        {posts.map((post, index) => (
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
              <h2 className="mt-3 font-serif text-[1.9rem] leading-tight transition group-hover:text-teal dark:group-hover:text-sky-300 sm:text-[2.6rem]">
                {text(post.title, locale)}
              </h2>
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
    </section>
  );
}
