export type CaseStudy = {
  slug: "ghnewstoday" | "creatorpreneur" | "dzata-foundation";
  title: string;
  overview: string;
  role: string;
  responsibilitiesTitle: string;
  responsibilities: string[];
  challenge: string;
  strategyTitle: string;
  strategySections: { title: string; body: string }[];
  impact: string;
  contributions: string[];
  visualsTitle: string;
  visuals: string[];
  banner: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ghnewstoday",
    title: "GhNewsToday - Digital Media Platform",
    overview:
      "GhNewsToday is a digital media platform focused on delivering timely news, lifestyle content, and commentary to a growing online audience. As a co-founder, my responsibility was to build the platform's digital presence and establish a scalable content strategy that could grow readership and engagement across multiple social media channels.\n\nMy goal was to create a consistent brand voice while ensuring content remained relevant to current trends and audience interests.",
    role: "Co-Founder & Digital Communication Strategist",
    responsibilitiesTitle: "Responsibilities included:",
    responsibilities: [
      "Content strategy development",
      "Social media management",
      "Audience engagement and community building",
      "Performance analysis and reporting",
    ],
    challenge:
      "When launching a new digital media platform, visibility and audience trust are the biggest obstacles. The platform needed to establish a recognizable brand voice, build a loyal audience base, maintain consistent content production, and track performance to improve results over time.",
    strategyTitle: "Strategy / Approach:",
    strategySections: [
      {
        title: "Content Strategy",
        body:
          "I developed a structured content strategy that aligned with the platform's editorial direction. This included identifying trending topics, maintaining consistent publishing schedules, and ensuring storytelling remained engaging and relevant.",
      },
      {
        title: "Social Media Growth",
        body:
          "Multiple social media accounts were actively managed to distribute content and attract new readers. Posts were scheduled strategically to maximize reach and engagement.",
      },
      {
        title: "Community Engagement",
        body:
          "Building a loyal readership required more than publishing articles. I actively engaged with readers through comments, discussions, and feedback to foster a strong community around the platform.",
      },
      {
        title: "Performance Monitoring",
        body:
          "Analytics tools were used to track performance metrics such as reach, engagement rates, and audience growth. These insights helped refine the content strategy and improve overall performance.",
      },
    ],
    impact:
      "The structured content strategy and consistent audience engagement helped strengthen the platform's digital presence and increase reader interaction across its channels.",
    contributions: [
      "Built and executed a digital content strategy",
      "Managed social media platforms for audience growth",
      "Strengthened online community engagement",
      "Used analytics to optimize content performance",
    ],
    visualsTitle: "Visual Sections to Include:",
    visuals: [
      "Hero/banner placeholder image",
      "Social media content placeholder gallery",
      "Analytics/performance placeholder cards",
      "Space for future screenshots and campaign visuals",
    ],
    banner: "/projects/ghnewstoday.jpeg",
  },
  {
    slug: "creatorpreneur",
    title: "Creatorpreneur - PR & Digital Communication",
    overview:
      "Creatorpreneur is an organization focused on empowering entrepreneurs through workshops, bootcamps, and digital learning experiences. As the PR & Social Media Lead, I was responsible for developing communication strategies that increased visibility for programs and events.\n\nMy work focused on building awareness, promoting events, and strengthening the organization's online presence.",
    role: "PR & Social Media Lead",
    responsibilitiesTitle: "Key responsibilities included:",
    responsibilities: [
      "Developing digital communication strategies",
      "Managing social media platforms",
      "Creating promotional content",
      "Managing media outreach and partnerships",
      "Tracking campaign performance",
    ],
    challenge:
      "The organization needed a structured communication strategy to increase awareness of programs and workshops, improve engagement on social media, attract more participants to events, and maintain consistent branding across platforms.",
    strategyTitle: "Strategy / Approach:",
    strategySections: [
      {
        title: "Digital Communication Strategy",
        body:
          "I developed a structured strategy that aligned content with the organization's mission and audience needs.",
      },
      {
        title: "Multi-Platform Content Distribution",
        body:
          "Content was created and distributed across Instagram, Facebook, TikTok, and LinkedIn. Each platform required tailored content formats to maximize engagement.",
      },
      {
        title: "Promotional Campaigns",
        body:
          "Promotional campaigns were created to highlight upcoming workshops, bootcamps, and events.",
      },
      {
        title: "Performance Tracking",
        body:
          "Content performance was tracked using platform analytics to identify what content resonated most with the audience.",
      },
    ],
    impact:
      "The improved communication strategy strengthened Creatorpreneur's digital presence and helped drive awareness for its programs and events.",
    contributions: [
      "Led digital communication and PR strategy",
      "Developed and executed social media campaigns",
      "Promoted workshops and entrepreneurial programs",
      "Optimized content using engagement metrics",
    ],
    visualsTitle: "Visual Sections to Include:",
    visuals: [
      "Hero/banner placeholder image",
      "Campaign design placeholder gallery",
      "Event promotion placeholder cards",
      "Space for future metrics and screenshots",
    ],
    banner: "/projects/creatorpreneur.jpeg",
  },
  {
    slug: "dzata-foundation",
    title: "Dzata Foundation - Media & Communications Support",
    overview:
      "The Dzata Foundation is a nonprofit organization focused on community development and public engagement initiatives. My role involved supporting the foundation's communication efforts through visual content creation, media production, and administrative coordination.\n\nI contributed to strengthening the foundation's digital presence by producing engaging visual materials and assisting with communication activities that helped highlight the organization's work and impact.",
    role: "Video Editor | Graphic Designer | Personal Assistant",
    responsibilitiesTitle: "Key responsibilities included:",
    responsibilities: [
      "Editing video content for events and outreach initiatives",
      "Designing graphics for communication and promotional materials",
      "Supporting administrative coordination for communication activities",
      "Assisting in content preparation for digital platforms",
    ],
    challenge:
      "For nonprofit organizations, communicating impact effectively is essential for building awareness and attracting support. The foundation needed engaging visual content that could clearly communicate its initiatives and activities to a broader audience.\n\nThis required producing professional visual assets while maintaining consistent messaging aligned with the foundation's mission.",
    strategyTitle: "Strategy / Approach:",
    strategySections: [
      {
        title: "Visual Content Production",
        body:
          "I edited video content from foundation events and programs to create engaging visual stories that highlighted the organization's work.",
      },
      {
        title: "Graphic Design",
        body:
          "Graphics were created for communication materials and digital platforms to help present the foundation's activities in a clear and visually appealing way.",
      },
      {
        title: "Communication Support",
        body:
          "I assisted with preparing materials used for public communication and supported coordination tasks related to the foundation's activities.",
      },
    ],
    impact:
      "Through consistent visual storytelling and communication support, the foundation was able to present its initiatives more effectively and maintain a stronger presence in its communications.",
    contributions: [
      "Edited videos for foundation programs and activities",
      "Designed graphics for communication materials",
      "Supported administrative coordination for communication initiatives",
      "Contributed to strengthening the foundation's visual storytelling",
    ],
    visualsTitle: "Visual Sections to Include:",
    visuals: [
      "Hero/banner placeholder image",
      "Video editing work placeholder",
      "Graphic design work placeholder",
      "Event coverage placeholder gallery",
      "Space for future project visuals",
    ],
    banner: "/projects/dzata-foundation.jpeg",
  },
];

export const caseStudyBySlug = (slug: CaseStudy["slug"]) =>
  caseStudies.find((item) => item.slug === slug);
