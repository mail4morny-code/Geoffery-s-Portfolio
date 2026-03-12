import type { Metadata } from "next";
import { CaseStudyLayout } from "../../components/CaseStudyLayout";
import { caseStudyBySlug } from "../../data/case-studies";

export const metadata: Metadata = {
  title: "Creatorpreneur - PR & Digital Communication | Geoffrey Kwadzo Alomatu",
};

export default function CreatorpreneurPage() {
  const study = caseStudyBySlug("creatorpreneur");
  if (!study) {
    return null;
  }
  return <CaseStudyLayout study={study} />;
}
