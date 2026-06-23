import Image from 'next/image';
import Link from 'next/link';
import { ExperienceCard } from '@/components/experience-card';
import { PublicationItem } from '@/components/publication-item';
import { SectionHeading } from '@/components/section-heading';
import { experiences } from '@/data/experience';
import { interests } from '@/data/interests';
import { profile } from '@/data/profile';
import { publications } from '@/data/publications';
import { dictionary, text, type Locale } from '@/i18n';
import { formatDate } from '@/lib/format';
import { getAllPosts } from '@/lib/blog';
import { localizedPath } from '@/lib/routes';

type HomePageProps = {
  locale: Locale;
  rootMode?: boolean;
};

export function HomePage({ locale, rootMode = false }: HomePageProps) {
  const copy = dictionary[locale];
  const featuredExperiences = experiences.filter((item) => item.featured).slice(0, 2);
  const featuredPublications = publications.filter((item) => item.featured).slice(0, 2);
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24 md:pt-20">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-coral">{copy.introLabel}</p>
          <h1 className="mt-6 font-serif text-6xl leading-[0.95] md:text-8xl">
            {text(profile.name, locale)}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-ink/72 dark:text-white/72">
            {text(profile.headline, locale)}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-ink/68 dark:text-white/68">
            {text(profile.summary, locale)}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={localizedPath(locale, '/experience', rootMode)} className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-coral dark:bg-white dark:text-ink dark:hover:bg-coral dark:hover:text-white">
              {copy.nav.experience}
            </Link>
            <Link href={localizedPath(locale, '/publications', rootMode)} className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold hover:border-teal hover:text-teal dark:border-white/20">
              {copy.nav.publications}
            </Link>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden bg-white shadow-soft dark:bg-white/[0.04]">
          <Image src={profile.heroImage} alt="" fill priority sizes="(min-width: 768px) 48vw, 100vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 text-white">
            <div className="flex items-end gap-5">
              <Image src={profile.portrait} alt="" width={116} height={116} className="h-28 w-28 rounded-full border-4 border-white object-cover" />
              <div>
                <p className="font-serif text-3xl">{text(profile.location, locale)}</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/80">{text(profile.longBio, locale)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white px-5 py-16 dark:border-white/10 dark:bg-white/[0.03] md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {profile.skillGroups.map((group) => (
            <div key={text(group.name, locale)} className="border-l-2 border-teal pl-5">
              <h2 className="font-serif text-2xl">{text(group.name, locale)}</h2>
              <p className="mt-3 leading-7 text-ink/65 dark:text-white/65">{group.skills.join(' / ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow={copy.featuredWork}
          title={locale === 'zh' ? '从研究问题到可运行系统' : 'From research questions to working systems'}
          action={{ label: copy.viewAll, href: localizedPath(locale, '/experience', rootMode) }}
        />
        <div className="grid gap-7 md:grid-cols-2">
          {featuredExperiences.map((item) => (
            <ExperienceCard key={item.id} item={item} locale={locale} compact />
          ))}
        </div>
      </section>

      <section className="bg-[#ecefed] px-5 py-20 dark:bg-[#202322] md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.featuredPapers}
            title={locale === 'zh' ? '论文、预印本与研究记录' : 'Papers, preprints, and research notes'}
            action={{ label: copy.viewAll, href: localizedPath(locale, '/publications', rootMode) }}
          />
          {featuredPublications.map((publication) => (
            <PublicationItem key={publication.id} publication={publication} locale={locale} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_0.8fr] md:px-8">
        <div>
          <SectionHeading
            eyebrow={copy.latestWriting}
            title={locale === 'zh' ? '把做过的事写清楚' : 'Writing down the work'}
            action={{ label: copy.viewAll, href: localizedPath(locale, '/blog', rootMode) }}
          />
          <div className="space-y-5">
            {posts.map((post) => (
              <Link key={post.slug} href={localizedPath(locale, `/blog/${post.slug}`, rootMode)} className="block border-t border-line py-5 hover:text-coral dark:border-white/10">
                <p className="text-sm text-ink/55 dark:text-white/55">{formatDate(post.date, locale)}</p>
                <h3 className="mt-2 font-serif text-3xl">{text(post.title, locale)}</h3>
                <p className="mt-3 leading-7 text-ink/68 dark:text-white/68">{text(post.description, locale)}</p>
              </Link>
            ))}
          </div>
        </div>
        <aside>
          <SectionHeading eyebrow={copy.interests} title={locale === 'zh' ? '工作之外的线索' : 'Signals beyond work'} />
          <div className="space-y-4">
            {interests.map((interest) => (
              <div key={text(interest.title, locale)} className="border border-line bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-serif text-2xl">{text(interest.title, locale)}</h3>
                <p className="mt-3 leading-7 text-ink/66 dark:text-white/66">{text(interest.description, locale)}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
