import type { BlogPostDetail } from '@/types';

export const blogPosts: BlogPostDetail[] = [
  {
    slug: 'designing-retention-loops',
    title: 'Designing retention loops for modern mobile apps',
    excerpt:
      'Map triggers, actions, rewards, and investment to craft mobile experiences that keep customers coming back with intention.',
    heroEyebrow: 'Lifecycle design',
    heroDescription:
      'Tie triggers, routines, and rewards together so your mobile app delivers value in every moment—not just day one.',
    heroImage: '/assets/images/blog-4.jpg',
    heroImageAlt: 'Designing retention loops for modern mobile apps',
    breadcrumbCurrent: 'Retention loops',
    date: '2024-09-15',
    dateLabel: '15 Sep 2024',
    author: 'Darius M.',
    authorBio:
      'Darius leads lifecycle strategy at Adex. He pairs machine learning experimentation with creativity to craft responsible retention programs.',
    readingTime: '10 minutes',
    topics: ['Lifecycle', 'Mobile Growth'],
    sections: [
      {
        id: 'map-the-loop',
        heading: 'Map the full loop before optimizing the moment',
        paragraphs: [
          'Every habit loop needs a trigger, action, reward, and investment. Mapping loops across your product surfaces makes it easier to spot gaps where customers drop. Start with a storyboard of the ideal journey and annotate actual data.',
          'We run workshops that visualize the loop on whiteboards and overlay analytics to find where intent decays. It’s the fastest path to high-leverage fixes.',
        ],
        aside: {
          type: 'list',
          title: 'Loop inventory template',
          listItems: [
            {
              text: 'Push trigger → check-in reminder',
              icon: 'checkmark-circle-outline',
            },
            {
              text: 'Action → complete daily ritual',
              icon: 'checkmark-circle-outline',
            },
            {
              text: 'Reward → streak visual + insight',
              icon: 'checkmark-circle-outline',
            },
            {
              text: 'Investment → customize tomorrow’s goals',
              icon: 'checkmark-circle-outline',
            },
          ],
        },
      },
      {
        id: 'design-rituals',
        heading: 'Design rituals that respect attention',
        paragraphs: [
          'Retention loops should never feel manipulative. Give users the ability to customize cadence and channel. Offer intentional “rest days” that maintain the streak while protecting wellbeing.',
        ],
        aside: {
          type: 'table',
          title: 'Signals we monitor',
          table: {
            headers: ['Signal', 'Leading indicator', 'Healthy range'],
            rows: [
              [
                'Notification disable rate',
                'Opt-out reason selection',
                '< 12%',
              ],
              ['Streak drop-off', 'Missed action count', '< 2 misses per week'],
              ['Sentiment pulse', 'In-app mood survey', '> 4.2 / 5'],
            ],
          },
        },
      },
      {
        id: 'close-the-loop',
        heading: 'Close the loop with storytelling',
        paragraphs: [
          'Progress shouldn’t hide in charts. Translate data into stories. Weekly digest emails and in-app highlights remind members why the ritual matters and show how the community is thriving.',
        ],
        aside: {
          type: 'tags',
          title: 'Retention playbook',
          tags: [
            'Weekly digest builder',
            'Milestone celebration kit',
            'Win-back script library',
            'Community spotlight queue',
          ],
        },
      },
    ],
    cta: {
      heading: 'Want retention loops designed for real life?',
      buttonLabel: 'Let’s build a lifecycle system',
      buttonHref: '/contact#quote',
    },
  },
  {
    slug: 'operationalizing-experimentation',
    title: 'Operationalizing experimentation at scale',
    excerpt:
      'Discover how to build a responsible experimentation culture that balances speed with statistical rigor.',
    heroEyebrow: 'Growth science',
    heroDescription:
      'Build a culture where tests are ethical, decisions are evidence-based, and teams focus on impact instead of volume.',
    heroImage: '/assets/images/blog-3.jpg',
    heroImageAlt: 'Operationalizing experimentation at scale',
    breadcrumbCurrent: 'Experimentation',
    date: '2024-08-09',
    dateLabel: '09 Aug 2024',
    author: 'Isabella R.',
    authorBio:
      'Isabella leads experimentation programs at Adex. She previously launched growth teams at marketplaces serving over 30 million customers in EMEA.',
    readingTime: '8 minutes',
    topics: ['Experimentation', 'Product Growth'],
    sections: [
      {
        id: 'ethical-guardrails',
        heading: 'Define your ethical guardrails first',
        paragraphs: [
          'Responsible experimentation protects users and unlocks creativity. Establish bright-line rules for eligibility, frequency, and opt-outs before you run your first test. Document them publicly to keep teams aligned.',
          'At Adex we help teams form an ethics council that reviews high-impact experiments, especially those involving pricing, privacy, or vulnerable segments.',
        ],
        aside: {
          type: 'list',
          title: 'Ethical checklist',
          listItems: [
            {
              text: 'Define sensitive segments and required approvals.',
              icon: 'checkmark-circle-outline',
            },
            {
              text: 'Set exposure caps and rollback protocols.',
              icon: 'checkmark-circle-outline',
            },
            {
              text: 'Communicate learnings back to user-facing teams.',
              icon: 'checkmark-circle-outline',
            },
          ],
        },
      },
      {
        id: 'standardize-rituals',
        heading: 'Standardize experimentation rituals',
        paragraphs: [
          'A single source of truth prevents the dreaded spreadsheet sprawl. We implement an experiment repository with hypotheses, design, status, and outcomes. Weekly office hours keep squads accountable and reduce duplicative tests.',
          'Use pre-registration forms to lock in metrics and guard against p-hacking. If an experiment changes scope mid-flight, pause and rewrite the plan.',
        ],
        aside: {
          type: 'timeline',
          title: 'Workflow blueprint',
          timelineItems: [
            {
              marker: 'Monday',
              title: 'Backlog review',
              text: 'Prioritize experiments based on expected impact, confidence, and ease.',
            },
            {
              marker: 'Wednesday',
              title: 'Design critique',
              text: 'Cross-functional team reviews hypotheses, UX, and instrumentation.',
            },
            {
              marker: 'Friday',
              title: 'Readout',
              text: 'Summaries highlight outcomes, confidence interval, and next actions.',
            },
          ],
        },
      },
      {
        id: 'data-literacy',
        heading: 'Invest in data literacy across the org',
        paragraphs: [
          'When teams understand statistical power, experiment velocity accelerates without sacrificing rigor. Create shared training on sample sizing, instrumentation, and interpreting results.',
          'We encourage a “decision memo” for every significant experiment. It ties qualitative insight to quantitative evidence so leaders can act quickly.',
        ],
        aside: {
          type: 'tags',
          title: 'Foundational resources',
          tags: [
            'Power calculator',
            'Experiment brief template',
            'Experimentation glossary',
            'Highlight reel of wins',
          ],
        },
      },
    ],
    cta: {
      heading: 'Ready to scale your experimentation engine responsibly?',
      buttonLabel: 'Partner with our growth lab',
      buttonHref: '/contact#quote',
    },
  },
  {
    slug: 'scaling-design-systems',
    title: 'Scaling design systems for blended teams',
    excerpt:
      'Lessons from rolling out reusable UI foundations that keep quality high while shipping faster across web and native ecosystems.',
    heroEyebrow: 'Design operations',
    heroDescription:
      'Governance and rituals for distributed design systems shipping across web, native, and marketing touchpoints.',
    heroImage: '/assets/images/blog-2.jpg',
    heroImageAlt: 'Scaling design systems for blended teams',
    breadcrumbCurrent: 'Design systems',
    date: '2024-06-28',
    dateLabel: '28 Jun 2024',
    author: 'Zane L.',
    authorBio:
      'Zane directs the design systems practice at Adex. He previously led component architecture at two Fortune 100 companies operating cross-continent squads.',
    readingTime: '9 minutes',
    topics: ['Design Ops', 'Collaboration'],
    sections: [
      {
        id: 'source-of-intent',
        heading: 'Create a single source of intent',
        paragraphs: [
          'Component libraries aren’t enough. You need a north-star narrative describing who the system serves, where it’s used, and how decisions are made. At Adex we co-create a product manifesto that orients every contribution back to user needs.',
          'This becomes the onboarding path for agencies, contractors, and vendors. Within two weeks they should know the tokens, component rules, and contribution path.',
        ],
        subsections: [
          {
            heading: 'Artifacts we rely on',
            listItems: [
              {
                text: 'Design system map linking products, surfaces, and KPIs.',
                icon: 'checkmark-circle-outline',
              },
              {
                text: 'Decision log capturing tradeoffs and rationale for component variants.',
                icon: 'checkmark-circle-outline',
              },
              {
                text: 'Contribution ladder making expectations explicit for internal and external makers.',
                icon: 'checkmark-circle-outline',
              },
            ],
          },
        ],
        aside: {
          type: 'tags',
          title: 'Kick-off checklist',
          tags: [
            'Design tokens catalog',
            'Component RFC template',
            'Accessibility statement',
            'Sandbox environment',
            'Release governance doc',
          ],
        },
      },
      {
        id: 'distribute-ownership',
        heading: 'Distribute ownership without chaos',
        paragraphs: [
          'We structure blended squads with clear swimlanes: core system, feature pod, and go-to-market. Every change requests a design review, code review, and documentation update. The key is keeping these cycles lightweight—ship weekly, not quarterly.',
          'Rotating maintainers ensure fresh eyes on governance. Pair those rotations with automated quality gates to maintain consistency.',
        ],
        aside: {
          type: 'cards',
          title: 'Automation wins',
          cards: [
            {
              title: 'Visual regression suite',
              text: 'Percy snapshots run on every pull request, catching unexpected deviations before they hit production.',
            },
            {
              title: 'Token linting',
              text: 'Git hooks validate naming conventions, scaling guardrails across internal and agency commits.',
            },
          ],
        },
      },
      {
        id: 'celebrate-adoption',
        heading: 'Celebrate adoption, not velocity',
        paragraphs: [
          'Track the percentage of product surface area using the system, not just components shipped. Every month we host a demo day featuring before/after stories from squads. It’s the antidote to rogue forks.',
        ],
        aside: {
          type: 'list',
          title: 'Signals to monitor',
          listItems: [
            {
              text: 'Release cadence measured in weeks, not months.',
              icon: 'checkmark-circle-outline',
            },
            {
              text: 'Support tickets resolved within 48 hours.',
              icon: 'checkmark-circle-outline',
            },
            {
              text: 'Designers authoring their own documentation updates.',
              icon: 'checkmark-circle-outline',
            },
          ],
        },
      },
    ],
    cta: {
      heading: 'Need a design system partner that can scale with you?',
      buttonLabel: 'Co-create with Adex',
      buttonHref: '/contact#quote',
    },
  },
  {
    slug: 'product-metrics-that-matter',
    title: 'Product metrics that matter in early stage',
    excerpt:
      'Move beyond vanity dashboards with a framework for mapping moment-based metrics to each phase of the product lifecycle.',
    heroEyebrow: 'Product leadership',
    heroDescription:
      'How to connect learning loops, activation intent, and retention to the value narrative of your earliest customers.',
    heroImage: '/assets/images/blog-1.jpg',
    heroImageAlt: 'Product metrics that matter in early stage',
    breadcrumbCurrent: 'Metrics that matter',
    date: '2024-02-12',
    dateLabel: '12 Feb 2024',
    author: 'Tara V.',
    authorBio:
      'Tara is a product partner at Adex coaching founding teams on discovery pipelines and traction modeling. Previously VP Product at two YC-backed startups.',
    readingTime: '11 minutes',
    topics: ['Product Strategy', 'Analytics'],
    sections: [
      {
        id: 'leading-signals',
        heading: 'Start with qualitative leading signals',
        paragraphs: [
          'Before instrumenting dashboards, align on what progress looks like for your earliest cohorts. Are they exploring, activating, or compounding value? Use pre-launch interviews to develop moment maps that make it obvious which events signal forward motion.',
          'At Adex we ask founders to anchor on a simple statement: “Users win when...” Then we instrument the behaviors that prove that statement true. Anything else is a vanity metric.',
        ],
        subsections: [
          {
            heading: 'Learning loop framework',
            timelineItems: [
              {
                marker: 'Step 1',
                title: 'Intent captured',
                text: 'You’ve earned a trial, waitlist signup, or integration request. Capture where it came from and confirm the job to be done.',
              },
              {
                marker: 'Step 2',
                title: 'Activation moment',
                text: 'Define the first time someone actually receives value—often a data import, completed workflow, or first collaboration.',
              },
              {
                marker: 'Step 3',
                title: 'Habit loop',
                text: 'Track whether they repeat the behavior within the expected cadence. If not, schedule a research call to uncover friction.',
              },
            ],
          },
        ],
        aside: {
          type: 'list',
          title: 'Metrics cheat sheet',
          listItems: [
            {
              text: 'North star: # of weekly activated teams completing the key workflow.',
              icon: 'checkmark-circle-outline',
            },
            {
              text: 'Guardrail: % of users who drop off before activation after 7 days.',
              icon: 'checkmark-circle-outline',
            },
            {
              text: 'Leading indicator: volume of triggered aha moments per cohort.',
              icon: 'checkmark-circle-outline',
            },
          ],
          paragraphs: [
            'Notice how the metrics ladder up to value delivered, not output shipped.',
          ],
        },
      },
      {
        id: 'activation-story',
        heading: 'Instrument activation as a story, not a step',
        paragraphs: [
          'Activation isn’t a button click. It’s the moment when a user experiences meaningful value. Tie events together into journeys and score them to spot cohorts that need a nudge.',
        ],
        table: {
          headers: ['Stage', 'Primary signal', 'Support signal', 'Playbook'],
          rows: [
            [
              'Discovery',
              'Onboarding survey submitted',
              'Calendar connected',
              'Send welcome call invite',
            ],
            [
              'Activation',
              'First automation enabled',
              'Data import > 500 records',
              'Surface advanced templates',
            ],
            [
              'Habit',
              'Weekly usage > 3 sessions',
              'Teammate invited',
              'Launch customer story',
            ],
          ],
        },
        aside: {
          type: 'text',
          title: 'Avoid these traps',
          paragraphs: [
            'We regularly see founders over-index on signups, or try to optimize long-term LTV before they’ve validated repeatable activation. Start with the earliest signals that prove your problem is real and urgent.',
            'Build rituals around reviewing data weekly with your cross-functional squad. Metrics should guide decisions, not live in a deck.',
          ],
        },
      },
      {
        id: 'roadmap-bets',
        heading: 'Translate insight into roadmap bets',
        paragraphs: [
          'Pair every metric with a qualitative insight. When activation dips, listen to the customer calls driving the change. When retention jumps, capture what’s different about that cohort. This is how your roadmap earns the right to exist.',
        ],
        aside: {
          type: 'tags',
          title: 'Try this next',
          tags: [
            '30-minute activation replay',
            'Weekly metrics retro',
            'Quant + qual dashboard',
            'Customer research panel',
          ],
        },
      },
    ],
    cta: {
      heading: 'Need help instrumenting your first metric stack?',
      buttonLabel: 'Book a strategy audit',
      buttonHref: '/contact#quote',
    },
  },
];

const blogPostMap = blogPosts.reduce<Record<string, BlogPostDetail>>(
  (acc, post) => {
    acc[post.slug] = post;
    return acc;
  },
  {}
);

export const getBlogPostBySlug = (slug: string) => blogPostMap[slug];

export const getSortedBlogPosts = () =>
  [...blogPosts].sort((a, b) => (a.date > b.date ? -1 : 1));
