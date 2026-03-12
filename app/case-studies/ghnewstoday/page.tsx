import type { Metadata } from "next";
import { CaseStudyLayout } from "../../components/CaseStudyLayout";
import { caseStudyBySlug } from "../../data/case-studies";

export const metadata: Metadata = {
  title: "GhNewsToday - Digital Media Platform | Geoffrey Kwadzo Alomatu",
};

export default function GhNewsTodayPage() {
  const study = caseStudyBySlug("ghnewstoday");
  if (!study) {
    return null;
  }
  return <CaseStudyLayout study={study} />;
}
