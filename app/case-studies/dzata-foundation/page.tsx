import type { Metadata } from "next";
import { CaseStudyLayout } from "../../components/CaseStudyLayout";
import { caseStudyBySlug } from "../../data/case-studies";

export const metadata: Metadata = {
  title: "Dzata Foundation - Media & Communications Support | Geoffrey Kwadzo Alomatu",
};

export default function DzataFoundationPage() {
  const study = caseStudyBySlug("dzata-foundation");
  if (!study) {
    return null;
  }
  return <CaseStudyLayout study={study} />;
}
