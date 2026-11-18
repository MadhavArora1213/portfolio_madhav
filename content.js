/* ============================================================
   All hero copy lives here — edit text freely without touching
   animation logic (script.js) or presentation (styles.css).
   index.html carries the same strings as a no-JS fallback.
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#method" },
    { label: "Contact", href: "#contact" },
  ],

  cta: { label: "Let’s Talk", href: "#contact" },

  headline: "Madhav",
  role: ["Full Stack", "Developer"],
  meta: ["Web", "Apps", "AI"],

  notification: {
    name: "Madhav Arora",
    time: "now",
    lead: "Full Stack",
    message: "developer — building production web apps, end to end.",
  },

  section2: {
    sideLeft: ["Madhav Arora", "Solutions."],
    sideRight: ["Passion.", "Curiosity."],
  },

  /* My Works — add projects here (image + metadata per card); the Works
     carousel builds itself from this array. `teaser: true` cards are
     decorative edge slices and never become the active project.
     `url` (optional): clicking the card or its "View Project" button opens
     this link in a new tab — set it to the live site (or repo) per project.
     Projects without a url fall back to the local detail overlay. */
  works: {
    brand: "Madhav Arora",
    projects: [
      { key: "grizon",        name: "Grizon AI Platform", img: "assets/work-grizon.jpg", w: 498, h: 405,
        cat: "AI · SaaS Platform", year: "2026", accent: "#4da3ff",
        title: "Multi-agent AI platform — document chat, RAG-powered search, and agents that handle multi-step work end to end",
        url: "https://app.grizonai.com/" },
      { key: "admissionseason", name: "AdmissionSeason",   img: "assets/work-admission.png", w: 1918, h: 828,
        cat: "EdTech · Web", year: "2025", accent: "#a8e063",
        title: "College discovery platform — search, compare & shortlist colleges, and predict your admission chances before you apply",
        url: "https://admissionseason.com/" },
      { key: "urbanoutfit",   name: "Urban Outfit",       img: "assets/work-urban.png", w: 1918, h: 832,
        cat: "E-commerce · Web", year: "2025", accent: "#f28b3c",
        title: "Fashion e-commerce store — size & colour variants, user accounts, and smooth checkout with UPI / COD",
        url: "https://urbanoutfitshop.com/" },
      { key: "wolfnutrition", name: "Wolf Nutrition",     img: "assets/word-wolf.png", w: 1918, h: 832,
        cat: "E-commerce · Web", year: "2025", accent: "#f2c14e",
        title: "Ayurvedic wellness store — curated product bundles, prepaid checkout, and WhatsApp order support",
        url: "https://www.wolfnutrition.store/" },
      { key: "ctvms",         name: "CT VMS",              img: "assets/work-ctvms.jpg", w: 538, h: 316,
        cat: "Mobile · IoT", year: "2025", accent: "#a78bfa",
        title: "Campus visitor gate-pass system — 8+ role access control, live entry records, Raspberry Pi-powered gates",
        url: "https://play.google.com/store/apps/details?id=com.ctgroup.gatepassapp&hl=en_IN" },
    ],
  },

  /* ---- BIG ROBOT section (the original large Nexbot experience) ----
     All copy is editable here; the 3D and the scroll journey never
     touch these strings. */
  bigRobot: {
    labels: { left: "Full Stack Developer", right: "Web · AI · Systems" },
    eyebrow: "( 05 · The Mind )",
    titleLines: ["I build web platforms", "that ship and scale."],
    description: "B.Tech CSE grad (CGPA 8.63/10) — I care about maintainable, testable, high-performance code from database to pixel.",
    hint: "Scroll to move through the ideas.",

    /* the panels that travel through the 3D space — add or edit freely */
    techIdeas: [
      {
        no: "01",
        title: "AI & Multi-Agent Systems",
        description: "LangChain, LangGraph and RAG — including sandboxed, safe execution of AI-generated code.",
        tags: ["LangChain", "LangGraph", "RAG", "LLMs", "AWS", "GCP"],
      },
      {
        no: "02",
        title: "Full Stack Engineering",
        description: "MERN, Next.js and TypeScript — from REST APIs and databases to pixel-perfect frontends.",
        tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
      },
    ],

  },

  /* ---- EDITORIAL / SKILLS section (scroll-choreographed) ----
     The statement enters from the left, the skills from the right,
     one item at a time. Copy only — the timeline lives in script.js. */
  editorial: {
    eyebrow: "( 06 · The Method )",
    statement: ["Code is my medium.", "Shipping is my proof."],
    note: "I build, test and deploy web platforms end to end — database to pixel.",
    skills: {
      title: "I Work With",
      groups: [
        { name: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"] },
        { name: "Frontend", items: ["React.js", "Next.js", "React Native", "Redux", "Tailwind CSS"] },
        { name: "Backend", items: ["Node.js", "Express.js", "Flask", "REST APIs", "WebSockets"] },
        { name: "Data & Cloud", items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"] },
      ],
    },
    mindset: {
      title: "Learn → Build → Test → Ship",
      lines: [
        "I learn by building.",
        "I build for production.",
        "I test before it ships.",
        "And I improve from what real users teach me.",
      ],
    },
    exploring: {
      title: "Currently Exploring",
      items: [
        "Multi-agent AI systems with LangGraph",
        "RAG pipelines and evaluation",
        "System design and architecture",
        "Web performance budgets",
        "Cross-platform apps with React Native",
      ],
    },
    ending: { lines: ["Still learning.", "Still shipping.", "Still curious."], note: "And probably always will be." },
  },

  /* ---- SMALL ROBOT section (its own minimal chapter) ---- */
  smallRobot: {
    eyebrow: "( 06 · Still Curious )",
    titleLines: ["Always looking", "for the next thing."],
    description: "A small machine, quietly paying attention — the way I try to.",
    note: "Move your cursor · it follows",
  },

  /* ---- FOOTER ----
     Edit freely. `social` is empty on purpose: add entries like
     { label: "GitHub", href: "https://github.com/..." } and they
     appear automatically. Remove `email` if you would rather not
     publish an address. */
  footer: {
    eyebrow: "( 07 \u00b7 Contact )",
    headline: ["Let\u2019s build", "something good."],
    line: "Open to full-time roles, freelance work and interesting problems.",
    email: "madhavarora132005@gmail.com",
    emailLabel: "Say hello",
    columns: [
      {
        title: "Sections",
        items: [
          { label: "Hero", href: "#top" },
          { label: "Creative", href: "#work" },
          { label: "About", href: "#section-03" },
          { label: "Selected Works", href: "#projects" },
          { label: "The Mind", href: "#think" },
        ],
      },
      {
        title: "Method",
        items: [
          { label: "How I think", href: "#method" },
          { label: "What I work with", href: "#method" },
          { label: "Currently exploring", href: "#method" },
          { label: "Still curious", href: "#curious" },
        ],
      },
    ],
    social: [
      { label: "GitHub", href: "https://github.com/MadhavArora1213" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/madhav-arora-32b056254" },
    ],
    legal: "\u00a9 2026 Madhav Arora",
    note: "Built with code and curiosity.",
    backToTop: "Back to top",
  },

  /* About Me chapter — replace these placeholder strings with the final copy. */
  about: {
    boxes: {
      who:   { title: "Who I Am",   sub: "Madhav Arora — full stack developer." },
      what:  { title: "What I Do",  sub: "Web · Apps · AI" },
      think: { title: "How I Think", sub: "Idea · Design · Develop · Deploy · Impact" },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "Madhav Arora",
        text: "I turn rough ideas into things people actually use — from first sketch to final deploy. I sweat the details others skip: the 100ms that makes an app feel instant, the edge case nobody tested, and code that still reads clean a year later.",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "Code Into Solutions.",
        text: "MERN, Next.js and TypeScript — web platforms, e-commerce, cross-platform apps and AI systems. Built, tested and shipped to production.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Idea to Impact",
        text: "Idea · Design · Develop · Deploy · Impact — with testing and OWASP security at every step.",
      },
    },
  },
};
