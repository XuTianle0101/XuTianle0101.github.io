import { ExperienceCard } from '@/components/experience-card';
import { SectionHeading } from '@/components/section-heading';
import { experiences } from '@/data/experience';
import { type Locale } from '@/i18n';

export function ExperiencePage({ locale }: { locale: Locale }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow={locale === 'zh' ? '经历' : 'Experience'}
        title={locale === 'zh' ? '项目、实习与科研轨迹' : 'Projects, internships, and research work'}
      >
        <p>
          {locale === 'zh'
            ? '这里按时间和类型整理可展示的工作，首版内容是示例占位，后续可以直接替换为真实经历。'
            : 'This page organizes visible work by time and type. The first version uses placeholder content that can be replaced with real experience.'}
        </p>
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2">
        {experiences.map((item) => (
          <ExperienceCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
    </section>
  );
}
