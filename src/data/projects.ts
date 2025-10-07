import type { ProjectDetail } from '@/types';

type ProjectDetailMap = Record<string, ProjectDetail>;

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'ligula',
    title: 'Ligula tristique quis risus',
    subtitle:
      'Guided onboarding, behavioral lifecycle messaging, and roadmap support for a SaaS scale-up redefining activation.',
    description:
      'Adex partnered with the product and lifecycle teams at Ligula to reinvent how new workspaces launch. We embedded a cross-functional squad spanning product strategy, UX, marketing automation, and engineering to deliver a step-change in onboarding performance.',
    heroEyebrow: 'SaaS Platform',
    heroImage: '/assets/images/blog-1.jpg',
    category: 'SaaS Platform',
    date: '2023-10-14',
    dateLabel: '14 Oct 2023',
    location: 'San Francisco, CA',
    services: [
      'Product strategy',
      'UX research & design',
      'Full-stack engineering',
      'Lifecycle experimentation',
    ],
    heroStats: [
      { label: 'Activation lift', value: '+32%' },
      { label: 'Time to value', value: '3.5× faster' },
      { label: 'NPS post-onboarding', value: '+18' },
    ],
    challenge:
      'Activation had plateaued as Ligula expanded into enterprise segments. The existing onboarding flow assumed a single persona and relied heavily on in-app prompts that users dismissed. New stakeholders needed contextual guidance tailored to their role and maturity.',
    solution: [
      'Introduced a persona-aware onboarding questionnaire that routes users to the most relevant tasks and surface area inside the product.',
      'Delivered a progressive setup assistant with contextual microcopy, animated walkthroughs, and short success stories to reinforce why each step matters.',
      'Orchestrated lifecycle messaging combining in-product nudges, triggered emails, and success-manager outreach based on completion signals.',
      'Established an experimentation backlog with weekly instrumentation reviews, accelerating iteration velocity by 3×.',
    ],
    outcomes: [
      'Activation conversion improved by 32% within the first 60 days post-launch.',
      'Average time to first value decreased from 10.5 days to 3 days thanks to streamlined setup and deeper analytics surface area.',
      'Upsell velocity increased by 15% through success-qualified leads nurtured with the new lifecycle communications.',
    ],
    metrics: [
      {
        id: 'activation-rate',
        value: '+32%',
        label: 'Activation conversion',
        description:
          'Share of new workspaces completing the critical onboarding checklist within 14 days.',
      },
      {
        id: 'time-to-value',
        value: '3 days',
        label: 'Time to first value',
        description:
          'Median time for admins to launch the first automation, down from 10.5 days pre-engagement.',
      },
      {
        id: 'nps',
        value: '+18',
        label: 'Post-onboarding NPS',
        description:
          'Lift in Net Promoter Score gathered after week three of the onboarding journey.',
      },
    ],
    timeline: [
      {
        id: 'discover',
        title: 'Discover & align',
        description:
          'Field research with admins, champions, and implementation managers across seven customer cohorts to map decision journeys.',
        duration: 'Weeks 1-3',
      },
      {
        id: 'design',
        title: 'Design & prototype',
        description:
          'High-fidelity prototypes for the setup assistant, persona routing logic, and lifecycle orchestration with stakeholder testing.',
        duration: 'Weeks 4-7',
      },
      {
        id: 'build',
        title: 'Build & iterate',
        description:
          'Paired engineering sprints delivering the new onboarding experience with instrumentation to capture activation signals.',
        duration: 'Weeks 8-13',
      },
      {
        id: 'launch',
        title: 'Launch & optimize',
        description:
          'Segmented launch with controlled A/B rollout, weekly metric reviews, and ongoing experimentation backlog grooming.',
        duration: 'Weeks 14-18',
      },
    ],
    testimonial: {
      quote:
        'Adex embedded seamlessly with our team. They helped us uncover friction we did not know existed and rallied everyone around a clear activation vision. The uplift was visible within weeks.',
      person: 'Maya Chen',
      role: 'VP Product, Ligula',
    },
    nextProjectSlug: 'nullam',
  },
  {
    slug: 'nullam',
    title: 'Nullam id dolor elit id nibh',
    subtitle:
      'Headless commerce architecture, localized storefronts, and ops enablement for a global retail rollout.',
    description:
      'Nullam partnered with Adex to reinvent their flagship e-commerce experience while preparing the stack for rapid global expansion. We replatformed the storefront to a composable architecture, shipped new brand aesthetics, and enabled the internal team to launch in new regions on demand.',
    heroEyebrow: 'Retail & E-Commerce',
    heroImage: '/assets/images/blog-2.jpg',
    category: 'Retail',
    date: '2024-03-29',
    dateLabel: '29 Mar 2024',
    location: 'London, UK',
    services: [
      'Experience design',
      'Headless commerce development',
      'Localization systems',
      'Ops enablement',
    ],
    heroStats: [
      { label: 'Regions launched', value: '3 in 6 months' },
      { label: 'Conversion lift', value: '+21%' },
      { label: 'Average order value', value: '+14%' },
    ],
    challenge:
      'Legacy monolithic platforms made it impossible to roll out localized experiences quickly. Merchandising teams were blocked by engineering backlogs, and the brand expression was inconsistent across devices and geographies.',
    solution: [
      'Defined a composable stack powered by a headless CMS, commerce engine, and custom orchestration layer for merchandising and pricing.',
      'Reimagined the experience across web and mobile with modular design systems, micro-interactions, and richer merchandising storytelling.',
      'Implemented localization tooling for tax, fulfillment, and translations, plus content governance workflows enabling non-technical teams to launch in weeks.',
      'Delivered a playbook and enablement sprints to train in-house squads on managing releases, content updates, and experimentation.',
    ],
    outcomes: [
      'First three international regions launched within six months—previously a 12 to 18 month effort.',
      'Sitewide conversion lifted by 21% thanks to faster performance, personalized offers, and more confident checkout flows.',
      'Average order value increased by 14% through curated bundles and intelligent cross-sell modules.',
    ],
    metrics: [
      {
        id: 'conversion',
        value: '+21%',
        label: 'Conversion rate',
        description:
          'Measured across mobile and desktop sessions post replatform launch.',
      },
      {
        id: 'rollout-speed',
        value: '6 wks',
        label: 'Regional launch cadence',
        description:
          'Average time required for local teams to launch a new region end-to-end.',
      },
      {
        id: 'perf',
        value: '-38%',
        label: 'Page load time',
        description:
          'Reduction in Largest Contentful Paint across key commerce pages.',
      },
    ],
    timeline: [
      {
        id: 'inception',
        title: 'Architecture alignment',
        description:
          'Audited the legacy stack, prioritized integrations, and defined the composable roadmap with executive stakeholders.',
        duration: 'Weeks 1-4',
      },
      {
        id: 'vision',
        title: 'Experience vision',
        description:
          'Defined modular design language, motion systems, and merchandising storytelling templates for flagship categories.',
        duration: 'Weeks 5-8',
      },
      {
        id: 'implementation',
        title: 'Implementation sprints',
        description:
          'Built core commerce services, localization tooling, and CI/CD workflows with progressive rollouts.',
        duration: 'Weeks 9-20',
      },
      {
        id: 'enablement',
        title: 'Ops enablement',
        description:
          'Ran playbook sessions, documentation workshops, and co-launched the first region with merchandising and ops teams.',
        duration: 'Weeks 21-24',
      },
    ],
    testimonial: {
      quote:
        'Adex delivered a modern stack and experience we can scale globally. Their team guided us through every decision and left us with the confidence to ship fast on our own.',
      person: 'Jonas Müller',
      role: 'Chief Digital Officer, Nullam',
    },
    nextProjectSlug: 'ultricies',
  },
  {
    slug: 'ultricies',
    title: 'Ultricies fusce porta elit',
    subtitle:
      'Connected clinician dashboards, unified data layers, and proactive care workflows for a health-tech leader.',
    description:
      'Ultricies needed to bring fragmented patient insights together so clinicians could act faster. We co-built a platform that centralizes data streams, flags risk in real time, and aligns care teams around the right interventions.',
    heroEyebrow: 'Health Tech',
    heroImage: '/assets/images/blog-3.jpg',
    category: 'Health Tech',
    date: '2024-01-08',
    dateLabel: '08 Jan 2024',
    location: 'Austin, TX',
    services: [
      'Product discovery',
      'Data visualization',
      'Platform engineering',
      'Clinical workflow design',
    ],
    heroStats: [
      { label: 'Signal detection time', value: '-45%' },
      { label: 'Clinician satisfaction', value: '+4.6 ★' },
      { label: 'Integrations launched', value: '12' },
    ],
    challenge:
      'Critical patient signals were buried in disparate systems. Clinicians lacked a central hub to monitor risk, coordinate care teams, and take action in one place. Compliance standards added complexity and slowed experimentation.',
    solution: [
      'Mapped clinician rituals through contextual inquiry, revealing the moments where data gaps disrupted care decisions.',
      'Designed a modular dashboard system with priority-based cards, inline collaboration, and responsive layouts for tablet and desktop.',
      'Implemented a secure event-driven data layer stitching together EMR, lab, wearable, and patient-reported sources with compliance guardrails.',
      'Set up proactive alerting and triage workflows, integrating with existing paging and telehealth tools to ensure adoption.',
    ],
    outcomes: [
      'Signal detection time decreased by 45%, enabling earlier interventions for high-risk patients.',
      'Clinician satisfaction score climbed from 3.1 to 4.6 stars in internal surveys post rollout.',
      'Twelve integrations were launched over four months, with an internal team now able to add new connections using the documented playbook.',
    ],
    metrics: [
      {
        id: 'signal',
        value: '-45%',
        label: 'Signal detection time',
        description:
          'Reduction in average time to identify patient risk markers after data centralization.',
      },
      {
        id: 'engagement',
        value: '+1.5×',
        label: 'Daily active usage',
        description:
          'Increase in clinicians logging into the dashboard at least twice per day.',
      },
      {
        id: 'compliance',
        value: '100%',
        label: 'HIPAA / GDPR compliance',
        description:
          'Audited compliance maintained while launching new data pipelines and alerts.',
      },
    ],
    timeline: [
      {
        id: 'clinical-discovery',
        title: 'Clinical discovery',
        description:
          'Shadowed care teams across three hospitals, captured workflow recordings, and identified priority conditions to target first.',
        duration: 'Weeks 1-5',
      },
      {
        id: 'experience-design',
        title: 'Experience design',
        description:
          'Built interactive prototypes for the dashboard architecture, tested with clinicians, and refined accessibility patterns.',
        duration: 'Weeks 6-10',
      },
      {
        id: 'platform-build',
        title: 'Platform build',
        description:
          'Developed data ingestion services, compliance workflows, and UI components with co-located engineering pods.',
        duration: 'Weeks 11-20',
      },
      {
        id: 'launch-ops',
        title: 'Launch & ops',
        description:
          'Rolled out to pilot clinics, collected feedback loops, and scaled enablement to remaining regions with playbooks.',
        duration: 'Weeks 21-28',
      },
    ],
    testimonial: {
      quote:
        'Our clinicians finally have a system that thinks the way they do. Adex translated complex requirements into an intuitive platform that instantly became mission critical.',
      person: 'Dr. Elena Ruiz',
      role: 'Chief Medical Information Officer, Ultricies',
    },
    nextProjectSlug: 'habit',
  },
  {
    slug: 'habit',
    title: 'Habit-forming productivity app',
    subtitle:
      'A personalization engine and mobile design system powering over one million daily rituals for a VC-backed startup.',
    description:
      'Habit partnered with Adex to accelerate their roadmap ahead of Series B. We crafted a new brand identity, modular mobile design system, and personalization engine that adapts to each user’s motivation style.',
    heroEyebrow: 'Mobile & Consumer',
    heroImage: '/assets/images/blog-4.jpg',
    category: 'Mobile',
    date: '2023-06-02',
    dateLabel: '02 Jun 2023',
    location: 'Toronto, Canada',
    services: [
      'Brand & product design',
      'Mobile engineering',
      'Personalization models',
      'Growth experimentation',
    ],
    heroStats: [
      { label: 'Daily active users', value: '1M+' },
      { label: 'Retention lift', value: '+19%' },
      { label: 'Feature velocity', value: '2× faster' },
    ],
    challenge:
      'Retention lagged as Habit expanded to mainstream audiences. The existing UI felt generic, and the team struggled to prioritize features without clearer signals on what motivated different cohorts.',
    solution: [
      'Designed a new brand identity and design system that balances motivational energy with calming routines across light and dark modes.',
      'Implemented a personalization engine that clusters users by motivation archetype and dynamically adjusts streaks, rewards, and copy tone.',
      'Refactored the mobile app with shared Kotlin Multiplatform modules, unlocking faster experimentation across iOS and Android.',
      'Set up growth experimentation rituals, instrumentation, and dashboards so PMs could self-serve insights weekly.',
    ],
    outcomes: [
      'Daily active users crossed one million with a 19% lift in 90-day retention.',
      'Users engaging with personalized routines completed 2.3× more habits per week on average.',
      'Feature velocity doubled thanks to reusable modules and a single source of truth design system.',
    ],
    metrics: [
      {
        id: 'retention',
        value: '+19%',
        label: '90-day retention',
        description:
          'Increase in retained users after launch of personalization engine and design refresh.',
      },
      {
        id: 'habit-completion',
        value: '+2.3×',
        label: 'Habit completion rate',
        description:
          'Users exposed to adaptive routines completed over twice as many weekly habits.',
      },
      {
        id: 'velocity',
        value: '2×',
        label: 'Feature delivery speed',
        description:
          'Measured by story points shipped per sprint after introducing shared modules.',
      },
    ],
    timeline: [
      {
        id: 'brand-foundations',
        title: 'Brand foundations',
        description:
          'Co-created the new identity, motion language, and auditory cues to elevate the mobile experience.',
        duration: 'Weeks 1-4',
      },
      {
        id: 'system-design',
        title: 'System design',
        description:
          'Crafted a cross-platform design system and migrated core flows with component documentation and theme tokens.',
        duration: 'Weeks 5-8',
      },
      {
        id: 'personalization',
        title: 'Personalization engine',
        description:
          'Built and trained models to predict motivation archetypes, integrated with real-time feature flags.',
        duration: 'Weeks 9-16',
      },
      {
        id: 'growth-loop',
        title: 'Growth & measurement',
        description:
          'Launched experimentation rituals, dashboards, and weekly growth labs to keep the team shipping.',
        duration: 'Weeks 17-22',
      },
    ],
    testimonial: {
      quote:
        'Adex elevated our product and how our team works. We shipped faster, learned faster, and built a brand people love engaging with every day.',
      person: 'Priya Patel',
      role: 'Co-founder & COO, Habit',
    },
    nextProjectSlug: 'ligula',
  },
];

const projectDetailMap: ProjectDetailMap = projectDetails.reduce(
  (acc, project) => {
    acc[project.slug] = project;
    return acc;
  },
  {} as ProjectDetailMap
);

export const getProjectDetail = (slug: string): ProjectDetail | undefined =>
  projectDetailMap[slug];

export const getAdjacentProject = (slug: string) => {
  const currentIndex = projectDetails.findIndex(item => item.slug === slug);
  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }

  const previous =
    currentIndex === 0
      ? projectDetails[projectDetails.length - 1]
      : projectDetails[currentIndex - 1];

  const next =
    currentIndex === projectDetails.length - 1
      ? projectDetails[0]
      : projectDetails[currentIndex + 1];

  return { previous, next };
};
