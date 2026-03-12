import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyLayout } from "../../components/CaseStudyLayout";
import { caseStudyBySlug, caseStudies } from "../../data/case-studies";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = caseStudyBySlug(params.slug as "ghnewstoday" | "creatorpreneur" | "dzata-foundation");
  if (!study) {
    return { title: "Case Study" };
  }
  return {
    title: `${study.title} | Geoffrey Kwadzo Alomatu`,
    description: study.overview.split("\n")[0],
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudyBySlug(params.slug as "ghnewstoday" | "creatorpreneur" | "dzata-foundation");

  if (!study) {
    notFound();
  }

  return <CaseStudyLayout study={study} />;
}
