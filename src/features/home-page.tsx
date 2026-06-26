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
      <section className="relative isolate mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:px-8 md:pb-24 md:pt-20">
        <div className="pointer-events-none absolute inset-x-6 top-8 -z-10 h-56 rounded-full bg-gradient-to-r from-coral/20 via-violet/15 to-teal/15 blur-3xl md:hidden" />
        <div className="flex flex-col justify-center">
          <p className="font-accent text-xl text-coral">{copy.introLabel}</p>
          <h1 className="mt-5 break-words font-serif text-5xl leading-[0.96] sm:text-6xl md:mt-6 md:text-8xl">
            {text(profile.name, locale)}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72 dark:text-white/72 md:mt-6 md:text-xl md:leading-9">
            {text(profile.headline, locale)}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/68 dark:text-white/68 md:mt-8 md:text-lg md:leading-9">
            {text(profile.summary, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10">
            <Link href={localizedPath(locale, '/experience', rootMode)} className="rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-white hover:bg-coral dark:bg-white dark:text-ink dark:hover:bg-coral dark:hover:text-white">
              {copy.nav.experience}
            </Link>
            <Link href={localizedPath(locale, '/publications', rootMode)} className="rounded-full border border-ink/15 bg-white/50 px-6 py-3 text-center text-sm font-semibold hover:border-teal hover:text-teal dark:border-white/20 dark:bg-white/5">
              {copy.nav.publications}
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-coral/20 via-cloud to-teal/20 shadow-soft dark:from-coral/15 dark:via-white/[0.04] dark:to-teal/15 md:min-h-[520px] md:rounded-none">
          <Image src={profile.heroImage} alt="" fill priority sizes="(min-width: 768px) 48vw, 100vw" className="bg-white object-contain p-4" />
        </div>
      </section>

      <section className="border-y border-line bg-cloud/86 px-5 py-14 backdrop-blur dark:border-white/10 dark:bg-white/[0.03] md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {profile.skillGroups.map((group) => (
            <div key={text(group.name, locale)} className="rounded-3xl border border-line/70 bg-paper/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] md:rounded-none md:border-0 md:border-l-2 md:border-teal md:bg-transparent md:p-0 md:pl-5 md:shadow-none">
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

      <section className="bg-[#e0f2fe] px-5 py-20 dark:bg-[#082f49] md:px-8">
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

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow={copy.latestWriting}
          title={locale === 'zh' ? '把做过的事写清楚' : 'Writing down the work'}
          action={{ label: copy.viewAll, href: localizedPath(locale, '/blog', rootMode) }}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={localizedPath(locale, `/blog/${post.slug}`, rootMode)} className="block border-t border-line bg-white/55 p-5 hover:text-coral dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-sm text-ink/55 dark:text-white/55">{formatDate(post.date, locale)}</p>
              <h3 className="mt-2 font-serif text-3xl">{text(post.title, locale)}</h3>
              <p className="mt-3 leading-7 text-ink/68 dark:text-white/68">{text(post.description, locale)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-cloud/86 px-5 py-20 dark:border-white/10 dark:bg-white/[0.03] md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={copy.interests} title={locale === 'zh' ? '工作之外的线索' : 'Signals beyond work'} />
          <div className="grid gap-4 md:grid-cols-3">
            {interests.map((interest) => (
              <div key={text(interest.title, locale)} className="border border-line bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-serif text-2xl">{text(interest.title, locale)}</h3>
                <p className="mt-3 leading-7 text-ink/66 dark:text-white/66">{text(interest.description, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fff4df] px-5 py-20 dark:bg-[#10202a] md:px-8">
        <div className="pointer-events-none absolute -left-24 top-14 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow={locale === 'zh' ? '个人形象' : 'Personal Visuals'} title={locale === 'zh' ? '技术之外' : 'Beyond technology'} />
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {profile.visualGallery.map((photo) => (
              <figure
                key={photo.image}
                className="group overflow-hidden border border-ink/10 bg-white/75 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.05]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={text(photo.title, locale)}
                    fill
                    sizes="(min-width: 1024px) 19vw, (min-width: 640px) 31vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-3 top-3 h-1 bg-coral/80" />
                </div>
                <figcaption className="p-3">
                  <h3 className="font-serif text-lg">{text(photo.title, locale)}</h3>
                  <p className="mt-2 text-xs leading-5 text-ink/62 dark:text-white/62">{text(photo.caption, locale)}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
