import { SectionHeading } from '@/components/section-heading';
import { profile } from '@/data/profile';
import { type Locale, text } from '@/i18n';

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow={locale === 'zh' ? '联系' : 'Contact'}
        title={locale === 'zh' ? '欢迎交流研究、项目和写作' : 'Open to research, projects, and writing conversations'}
      >
        <p>{text(profile.summary, locale)}</p>
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-2">
        <a href={`mailto:${profile.email}`} className="border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-sm uppercase tracking-[0.18em] text-coral">Email</p>
          <h2 className="mt-4 break-words font-serif text-3xl">{profile.email}</h2>
        </a>
        {profile.socials.map((item) => (
          <a key={item.label} href={item.href} className="border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-sm uppercase tracking-[0.18em] text-teal">Link</p>
            <h2 className="mt-4 font-serif text-3xl">{item.label}</h2>
          </a>
        ))}
      </div>
    </section>
  );
}
