// ─── NAV ───────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Building', href: '#building' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
]

// ─── HERO ──────────────────────────────────────────────────────────────────
export const TECH_BADGES = [
  { name: 'React',      color: '#61DAFB' },
  { name: 'FastAPI',    color: '#009688' },
  { name: 'Node.js',    color: '#68A063' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Docker',     color: '#2496ED' },
  { name: 'Git',        color: '#F05032' },
]

// ─── ABOUT ─────────────────────────────────────────────────────────────────
export const STATS = [
  { num: '20+', label: 'Projects Built'      },
  { num: '15+', label: 'Technologies Used'   },
  { num: '50+', label: 'GitHub Repositories' },
  { num: '∞',   label: 'Coffee Consumed ☕'  },
]

// ─── BUILDING ──────────────────────────────────────────────────────────────
export const BUILDING_PROJECTS = [
  {
    tag:   'Active',
    color: 'green',
    title: 'Vicina',
    desc:  'A local commerce platform connecting neighborhood businesses to customers through smart discovery, reviews, and digital storefronts. Built for the next wave of local-first commerce.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    tag:   'Active',
    color: 'green',
    title: 'Ecommerce Backend',
    desc:  'Production-grade FastAPI backend with full order management, inventory tracking, payment integration, and a clean admin dashboard. Designed for real scale.',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Stripe'],
  },
  {
    tag:   'Learning',
    color: 'blue',
    title: 'Cybersecurity Lab',
    desc:  'A private lab environment for studying network security, penetration testing basics, and building hardened auth systems. Applying OWASP principles in controlled scenarios.',
    stack: ['Linux', 'Python', 'Nmap', 'Burp Suite'],
  },
  {
    tag:   'Exploring',
    color: 'purple',
    title: 'SaaS Experiments',
    desc:  'A collection of micro-SaaS ideas being validated and prototyped. The goal: find one that solves a real problem well enough to build a business around.',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
  },
]

// ─── SKILLS ────────────────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    icon:    '⚛️',
    iconBg:  'rgba(59,130,246,0.1)',
    iconBorder: 'rgba(59,130,246,0.2)',
    title:   'Frontend',
    skills:  ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    icon:    '⚙️',
    iconBg:  'rgba(34,197,94,0.1)',
    iconBorder: 'rgba(34,197,94,0.2)',
    title:   'Backend',
    skills:  ['FastAPI', 'Node.js', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    icon:    '🗄️',
    iconBg:  'rgba(139,92,246,0.1)',
    iconBorder: 'rgba(139,92,246,0.2)',
    title:   'Database',
    skills:  ['PostgreSQL', 'MongoDB', 'Redis', 'SQLAlchemy'],
  },
  {
    icon:    '🐳',
    iconBg:  'rgba(251,191,36,0.1)',
    iconBorder: 'rgba(251,191,36,0.2)',
    title:   'DevOps',
    skills:  ['Docker', 'Git', 'Linux', 'CI/CD', 'Nginx'],
  },
  {
    icon:    '🔒',
    iconBg:  'rgba(239,68,68,0.1)',
    iconBorder: 'rgba(239,68,68,0.2)',
    title:   'Security',
    skills:  ['OWASP', 'Auth Systems', 'JWT / OAuth', 'Secure API Design'],
  },
  {
    icon:    '🚀',
    iconBg:  'rgba(20,184,166,0.1)',
    iconBorder: 'rgba(20,184,166,0.2)',
    title:   'Product',
    skills:  ['MVP Planning', 'System Design', 'API Architecture', 'Startup Building'],
  },
]

// ─── SERVICES ──────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    icon:       '⚡',
    iconClass:  'text-blue-a   bg-[rgba(59,130,246,0.1)]  border-[rgba(59,130,246,0.2)]',
    title:      'Full Stack Development',
    desc:       'End-to-end web applications — from database schema to deployed frontend. I handle the full product lifecycle with production constraints in mind.',
    cta:        'Start a project →',
  },
  {
    icon:       '🎨',
    iconClass:  'text-purple-a bg-[rgba(139,92,246,0.1)]  border-[rgba(139,92,246,0.2)]',
    title:      'Frontend Development',
    desc:       'Modern responsive user interfaces using React. Performant, accessible, and built with design systems that scale across large codebases.',
    cta:        'Start a project →',
  },
  {
    icon:       '🔧',
    iconClass:  'text-green-400 bg-[rgba(34,197,94,0.1)]  border-[rgba(34,197,94,0.2)]',
    title:      'Backend Development',
    desc:       'FastAPI, Node.js, databases, APIs, authentication systems, and the background jobs that keep production apps running smoothly.',
    cta:        'Start a project →',
  },
  {
    icon:       '🔌',
    iconClass:  'text-yellow-400 bg-[rgba(251,191,36,0.1)] border-[rgba(251,191,36,0.2)]',
    title:      'API Development & Integration',
    desc:       'Scalable APIs with proper versioning, rate limiting, and docs. Clean third-party integrations that don\'t become technical debt.',
    cta:        'Start a project →',
  },
  {
    icon:       '💡',
    iconClass:  'text-teal-400  bg-[rgba(20,184,166,0.1)]  border-[rgba(20,184,166,0.2)]',
    title:      'Technical Consulting',
    desc:       'Architecture reviews, MVP planning, and product guidance for early-stage founders. I help you build the right system, not just a working one.',
    cta:        'Book a session →',
  },
]

// ─── FEATURED PROJECTS ─────────────────────────────────────────────────────
export const FEATURED_PROJECTS = [
  {
    emoji:    '🛍️',
    codename: 'ecom-platform',
    title:    'Ecommerce Platform',
    desc:     'Multi-vendor marketplace with cart, payments, inventory management, and a full seller dashboard. Handles real concurrent transactions.',
    stack:    ['React', 'FastAPI', 'PostgreSQL', 'Stripe', 'Docker'],
    github:   '#',
    demo:     '#',
    demoLabel:'Live Demo',
  },
  {
    emoji:    '📹',
    codename: 'stream-app',
    title:    'Video Streaming App',
    desc:     'Full-featured video platform with upload, transcoding pipeline, user subscriptions, and adaptive playback. Built for scale from the start.',
    stack:    ['Node.js', 'FFmpeg', 'MongoDB', 'AWS S3', 'React'],
    github:   '#',
    demo:     '#',
    demoLabel:'Live Demo',
  },
  {
    emoji:    '🏘️',
    codename: 'vicina',
    title:    'Vicina — Local Commerce',
    desc:     'Neighborhood commerce platform with smart discovery, local business profiles, and community-driven reviews. Currently in active development.',
    stack:    ['React', 'FastAPI', 'PostgreSQL', 'Maps API'],
    github:   '#',
    demo:     '#',
    demoLabel:'Preview',
  },
]

// ─── ARCHIVE ───────────────────────────────────────────────────────────────
export const ARCHIVE_TABS = [
  { id: 'fullstack', label: 'Full Stack'          },
  { id: 'frontend',  label: 'Frontend'            },
  { id: 'backend',   label: 'Backend'             },
  { id: 'hobby',     label: 'Hobby & Experiments' },
]

export const ARCHIVE_DATA = {
  fullstack: [
    { title: 'Ecommerce Platform',  desc: 'Multi-vendor marketplace with full payment processing and seller dashboards.',      stack: ['React', 'FastAPI', 'PostgreSQL'] },
    { title: 'Video Streaming App', desc: 'Upload, transcode, and stream video content with subscription tiers.',              stack: ['Node.js', 'MongoDB', 'S3']       },
    { title: 'SaaS Starter Kit',    desc: 'Opinionated fullstack boilerplate for building SaaS products fast.',               stack: ['Next.js', 'Supabase', 'Stripe']  },
    { title: 'Vicina',              desc: 'Local commerce platform connecting neighborhoods with local businesses.',           stack: ['React', 'FastAPI']                },
  ],
  frontend: [
    { title: 'SaaS Landing Page',   desc: 'High-conversion landing page with animated sections and feature showcases.',       stack: ['React', 'Tailwind', 'Framer Motion'] },
    { title: 'Analytics Dashboard', desc: 'Real-time data dashboard with charts, filters, and exportable reports.',          stack: ['React', 'Recharts', 'TypeScript']    },
    { title: 'Design System',       desc: 'Component library with dark mode, accessible patterns, and Storybook docs.',      stack: ['React', 'Storybook']                 },
  ],
  backend: [
    { title: 'Auth Microservice',   desc: 'JWT-based authentication with refresh tokens, 2FA, and role-based permissions.',  stack: ['FastAPI', 'Redis', 'PostgreSQL']  },
    { title: 'FastAPI Ecom API',    desc: 'REST API for ecommerce: products, orders, inventory, with Stripe webhooks.',      stack: ['FastAPI', 'SQLAlchemy', 'Celery'] },
    { title: 'Notification Service',desc: 'Event-driven notification microservice supporting email, SMS, and push.',         stack: ['Node.js', 'RabbitMQ', 'SendGrid'] },
  ],
  hobby: [
    { title: 'Port Scanner CLI',    desc: 'Python CLI tool for scanning open ports and detecting common vulnerabilities.',   stack: ['Python', 'Socket', 'Click']       },
    { title: 'AI Commit Writer',    desc: 'Git hook that uses AI to generate meaningful commit messages from diffs.',        stack: ['Python', 'OpenAI API', 'Git']     },
    { title: 'Log Analyzer',        desc: 'Automation script that parses server logs and surfaces anomalies via Slack.',    stack: ['Python', 'Bash', 'Slack API']     },
    { title: 'Homelab Setup',       desc: 'Self-hosted Proxmox lab for experimenting with networking, VMs, and security.',  stack: ['Linux', 'Proxmox', 'Docker']      },
  ],
}

// ─── TIMELINE ──────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    year:   '2022',
    event:  'Started Programming',
    detail: 'First lines of Python. Built small scripts. Realized software could build almost anything — and that was enough to go all in.',
  },
  {
    year:   '2023',
    event:  'Learned the MERN Stack',
    detail: 'Went deep on MongoDB, Express, React, and Node.js. Built the first real web apps — messy, educational, and shipped.',
  },
  {
    year:   '2024',
    event:  'First Full Stack Deployments',
    detail: 'Moved beyond localhost. Deployed applications to real infrastructure, dealt with production bugs, and learned that shipping is a skill.',
  },
  {
    year:   '2026',
    event:  'Cybersecurity Interest & Startup Path',
    detail: 'Started studying application security formally. Launched Vicina. Began thinking like a founder, not just an engineer.',
  },
  {
    year:   '2026',
    event:  'FastAPI & Backend Engineering Focus',
    detail: "Shifted attention to Python-based backend systems. Fell in love with FastAPI's type safety and performance. Built the first production APIs.",
  },
  {
    year:   'Now',
    isNow:  true,
    event:  'Building, Shipping, Learning',
    detail: 'Actively building products, studying systems design and security, and looking for the right team or opportunity to grow into senior engineering.',
  },
]

// ─── GITHUB ────────────────────────────────────────────────────────────────
export const GITHUB_STATS = [
  { num: '42+',  label: 'Repositories'   },
  { num: '190+', label: 'Commits (2025)' },
  { num: '1',  label: 'Stars Earned'   },
  { num: '4',    label: 'Active Projects' },
]

export const LANG_BARS = [
  { name: 'JavaScript', pct: 72, color: '#fbbf24' },
  { name: 'Python',     pct: 67, color: '#3b82f6' },
  { name: 'TypeScript', pct: 38, color: '#2dd4bf' },
  { name: 'SQL',        pct: 20, color: '#8b5cf6' },
  { name: 'Shell',      pct: 12, color: '#f87171' },
]


// ─── CONTACT ───────────────────────────────────────────────────────────────
export const CONTACT_LINKS = [
  { icon: '📧', label: 'Email',       value: 'afsalshamsudeen2@gmail.com',          href: 'mailto:alex@example.com' },
  { icon: '💼', label: 'LinkedIn',    value: 'linkedin.com/in/afsalshamsudeen',  href: '#'                       },
  { icon: '🐙', label: 'GitHub',      value: 'github.com/afsalshamsudeen',   href: '#'                       },
  { icon: '𝕏',  label: 'Twitter / X', value: '@afsalshamsudeen',              href: '#'                       },
]
