const data = {
  profile: {
    firstname: "Seraj",
    lastname: " Vahdati",
    links: [
      { type: "github", url: "https://github.com/seraj" },
      { type: "linkedin", url: "https://linkedin.com/in/svahdati" },
    ],
    propic: "profilePic.jpg",
    summary: (
      <>
        Senior Front End Engineer with 12+ years of experience building scalable
        web applications that serve millions of users. Expert in React, Next.js,
        and TypeScript, with a proven track record of delivering 35%+
        performance improvements and leading cross-functional teams.
        Successfully architected and implemented solutions at WebcentriQ,
        Setflow, Goki, and Omid Analyzer, with extensive experience in test
        automation, design systems, and modern web optimization techniques.
      </>
    ),
    bio: (
      <>
        Senior <b>Front End Engineer</b>
      </>
    ),
    username: "seraj",
  },
  works: [
    {
      company: "WebcentriQ",
      link: "https://webcentriq.com/",
      location: "United States (Remote)",
      title: "Senior Front End Engineer",
      time_start: "2024-09-01",
      present: 1,
      description: [
        "Architected and implemented project structure for company projects, establishing best practices and scalable architecture for long-term maintainability.",
        <>
          Developed <b>app.webcentriq.com</b> platform using <b>Next.js</b>,
          Tailwind CSS, and <b>shadcn/ui</b>, delivering a modern and responsive
          user experience.
        </>,
        <>
          Implemented comprehensive end-to-end testing suite for Scaleward using{" "}
          <b>Playwright</b>, ensuring robust test coverage and improved code
          quality.
        </>,
        <>
          Built and maintained the <b>ProMom</b> consumer-facing web panel using{" "}
          <b>Next.js 16</b>, <b>React 19</b>, <b>TypeScript</b>, and{" "}
          <b>Tailwind CSS 4</b> within a large-scale monorepo, delivering
          features across pregnancy and parenting platform modules.
        </>,
        <>
          Developed reusable UI systems, feature-based architecture with{" "}
          <b>TanStack Query</b> and <b>Zustand</b>, and centralized API service
          layers with OpenAPI type generation.
        </>,
        <>
          Contributed to the <b>NestJS</b> backend with <b>TypeORM</b>,{" "}
          <b>PostgreSQL</b>, and <b>Redis/Bull</b> queue workers, implementing
          REST APIs, database migrations, and Joi-validated DTOs.
        </>,
        <>
          Collaborated on the <b>iOS</b> app built with <b>Swift</b>,{" "}
          <b>UIKit</b>, and <b>SnapKit</b> following MVVM-C architecture,
          ensuring feature parity across web and mobile platforms.
        </>,
        "Optimized application performance through code splitting, lazy loading, and bundle optimization, improving load times significantly.",
        "Led knowledge-sharing sessions on AI tools, modern development workflows, and front-end testing best practices with the development team.",
      ],
    },
    {
      company: "Setflow",
      link: "https://setflow.io",
      location: "Italy, Milan (Remote)",
      title: "Senior Front End Engineer",
      time_start: "2023-07-01",
      time_end: "2024-09-01",
      present: 0,
      description: [
        <>
          Architected and implemented authentication system, resulting in a 15%
          improvement in application load time and enhanced security.
        </>,
        "Developed advanced Annotation and Map components with real-time collaboration features, enhancing user interaction and workflow efficiency.",
        <>
          Engineered new features using <b>Next.js</b>, TypeScript, and{" "}
          <b>shadcn/ui</b>, following modern design patterns and best practices.
        </>,
      ],
    },
    {
      company: "Goki",
      link: "https://goki.travel",
      location: "Australia, Sydney (Remote)",
      title: "Senior Front End Engineer",
      time_start: "2022-06-22",
      time_end: "2023-07-01",
      present: 0,
      description: [
        "Developed and shipped new features using React.js, TypeScript, styled-components, and Ant Design, improving user experience and platform capabilities.",
        <>
          Optimized API integration logic by implementing{" "}
          <b>Universal API Consumer (UAC)</b>, reducing code duplication and
          improving maintainability.
        </>,
        "Refactored legacy codebase to modern React patterns, improving code maintainability, readability, and team velocity.",
        "Conducted 100+ code reviews, maintaining 95% adherence to coding standards and mentoring junior developers.",
      ],
    },
    {
      company: "Omid Analyzer",
      link: "https://omid.ir",
      title: "Senior Front End Engineer",
      location: "Tehran, Iran",
      time_start: "2020-03-01",
      time_end: "2022-06-22",
      present: 0,
      description: [
        "Led development, redesign, and maintenance of all front-end products using React.js, TypeScript, Redux, Webpack, and ES6, serving thousands of daily users.",
        "Built a comprehensive Design System from scratch, improving developer experience and reducing development costs by 20%.",
        "Established and championed Git Flow best practices, component architecture standards, and clean code principles across the team.",
        "Led product redesign initiative using Sketch, improving user satisfaction and interface consistency.",
      ],
    },
    {
      company: "LogicKit",
      location: "USA, Los Angeles (Remote)",
      title: "Lead Front End Developer",
      time_start: "2018-11-01",
      time_end: "2020-04-01",
      present: 0,
      description: [
        "Managed and mentored a team of 3 Front End Developers, establishing code standards and conducting regular code reviews.",
        "Led complete website rewrite initiative, resulting in a 35% increase in sales conversion and improved user engagement.",
        <>
          Architected and maintained UI KIT package library with React,{" "}
          <b>TypeScript</b>, and <b>Styled-Components</b>, enabling consistent
          design across products.
        </>,
        "Implemented robust state management using Apollo GraphQL and Redux for complex, data-driven user interfaces.",
        "Optimized build pipeline by migrating from Create React App to custom Webpack configuration, reducing bundle size and build times.",
      ],
    },
    {
      company: "Bimebazar",
      link: "https://bimebazar.com",
      title: "Front End Developer",
      location: "Tehran, Iran",
      time_start: "2016-05-01",
      time_end: "2018-10-01",
      present: 0,
      description: [
        <>
          <b>Led complete migration</b> from legacy HTML, CSS, and jQuery
          codebase to modern React, <b>Redux</b>, and Webpack stack, achieving a
          50% performance improvement.
        </>,
        "Optimized Core Web Vitals metrics including LCP and CLS, resulting in a 40% improvement in user experience scores.",
        "Led product redesign initiative using Sketch, modernizing the user interface and improving conversion rates.",
      ],
    },
    {
      company: "Karina Mobile Solutions",
      link: "https://www.linkedin.com/company/karina-mobile-solutions/",
      title: "Front End Developer & User Interface Designer",
      location: "Tehran, Iran",
      time_start: "2012-01-01",
      time_end: "2014-02-01",
      present: 0,
      description: [
        "Designed CSS templates for use across all website pages, working with CSS backgrounds, positioning, text, borders, margins, padding, and tables.",
        "Applied optimization techniques to reduce page size and load times, enhancing user experience using sprites.",
        "Developed user interfaces using HTML, CSS, jQuery, JavaScript, and WordPress.",
      ],
    },
    {
      company: "Freelancer",
      title: "Web Developer & User Interface Designer",
      location: "Tehran, Iran",
      time_start: "2008-08-01",
      time_end: "2012-01-01",
      present: 0,
    },
  ],
  educations: [
    {
      name: "Azad University",
      time_start: "2015-09-01",
      time_end: "2017-05-01",
      present: 0,
      location: "Ilam, Iran",
      degree: "Bachelor",
      field: "Software Engineering",
      description: "",
    },
    {
      name: "Raja University",
      time_start: "2013-01-01",
      time_end: "2015-05-01",
      present: 0,
      location: "Qazvin, Iran",
      degree: "Associate Degree",
      field: "Software Engineering",
      description: "",
    },
  ],
  skills: {
    main: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Zustand",
      "GraphQL",
    ],
    testing: ["Playwright", "Cypress", "Jest"],
    styling: ["Tailwind CSS", "shadcn/ui", "Styled-Components"],
    tools: ["Git", "Webpack", "Linux"],
    backend: [
      "Node.js",
      "NestJs",
      "Express.js",
      "Python",
      "Django",
      "PHP",
      "SQL",
    ],
    language: [
      "English (Professional)",
      "Persian (Native)",
      "Kurdish (Native)",
    ],
  },
  portfolio: [
    {
      title: "Omid Website",
      thumb: "works/omid/thumbnail.jpg",
      present: 0,
      time_start: "2022-03-01",
      time_end: null,
      website: "http://omid.ir",
      description: null,
      content: "",
      attachments: {
        photo: [
          "works/omid/screen1.png",
          "works/omid/screen2.png",
          "works/omid/screen3.png",
          "works/omid/screen4.png",
          "works/omid/screen5.png",
        ],
      },
      tags: ["Dark Theme", "nextjs", "reactjs", "omid"],
      tools: ["javascript", "material ui", "NextJs", "ReactJs"],
    },
    {
      title: "Zamineh Online Book",
      thumb: "works/zamineh/thumbnail.jpg",
      present: 0,
      time_start: "2018-09-01",
      time_end: null,
      website: "https://zamineh.net/mag",
      description: null,
      content: "Zamineh Online book reader",
      attachments: {
        photo: [
          "works/zamineh/screen1.png",
          "works/zamineh/screen2.png",
          "works/zamineh/screen3.png",
        ],
      },
      tags: ["Web Design"],
      tools: ["scss", "HTML", "jQuery"],
    },
    {
      title: "Dibaache",
      thumb: "works/dibaache/thumbnail.jpg",
      present: 0,
      time_start: "2020-09-01",
      time_end: null,
      website: "http://dibaache.com",
      description: null,
      content: "",
      attachments: {
        photo: [
          "works/dibaache/screen1.png",
          "works/dibaache/screen2.png",
          "works/dibaache/screen3.png",
        ],
      },
      tags: ["News Website", "reactjs", "nextjs"],
      tools: [
        "Workbox",
        "Redux",
        "typescript",
        "styled component",
        "ReactJs",
        "NextJs",
      ],
    },
    {
      title: "1250 Game",
      thumb: "works/1250game/thumbnail.jpg",
      present: 0,
      time_start: "2020-02-01",
      time_end: null,
      website: "http://seraj.me/games/1250/",
      description: null,
      content: "1 to 50 game made with javascript",
      attachments: { photo: ["works/1250game/screen1.png"] },
      tags: ["Game Development", "javaScript"],
      tools: ["HTML - CSS", "ECMAScript 6", "javascript"],
    },
    {
      title: "Bimebazar Android App UI",
      thumb: "works/bimebazar-mobile/thumbnail.jpg",
      present: 0,
      time_start: "2018-04-01",
      time_end: null,
      website: "http://bimebazar.com",
      description: null,
      content: "",
      attachments: {
        photo: [
          "works/bimebazar-mobile/screen1.jpg",
          "works/bimebazar-mobile/screen2.png",
          "works/bimebazar-mobile/screen3.png",
          "works/bimebazar-mobile/screen4.png",
          "works/bimebazar-mobile/screen5.png",
          "works/bimebazar-mobile/screen6.png",
          "works/bimebazar-mobile/screen7.png",
          "works/bimebazar-mobile/screen8.png",
          "works/bimebazar-mobile/screen9.png",
          "works/bimebazar-mobile/screen10.png",
          "works/bimebazar-mobile/screen11.png",
          "works/bimebazar-mobile/screen12.png",
          "works/bimebazar-mobile/screen13.png",
        ],
      },
      tags: [
        "design",
        "sketch",
        "UX",
        "UI",
        "UI /UX",
        "Android App",
        "bimebazar",
      ],
      tools: ["sketch"],
    },
    {
      title: "Taavoni 45 Landing Page",
      thumb: "works/bimebazar-t45/thumbnail.jpg",
      present: 0,
      time_start: "2017-11-22",
      time_end: null,
      website: "https://bimebazar.ir/landing/t45",
      description: null,
      content: "طراحی و اجرای لندینگ پیج تعاونی ۴۵ بیمه بازار",
      attachments: { photo: ["works/bimebazar-t45/screen1.png"] },
      tags: ["bimebazar", "UI", "Landing page", "UI Design"],
      tools: ["HTML5", "CSS3", "Photoshop", "Visual Studio Code"],
    },
    {
      title: "Bimebazar.com Website",
      thumb: "works/bimebazar/thumbnail.jpg",
      present: 0,
      time_start: "2017-10-23",
      time_end: null,
      website: "http://bimebazar.ir",
      description: null,
      content:
        "طراحی رابط کاربری و کدنویسی وبسایت بیمه بازار\nhttps://bimebazar.ir",
      attachments: {
        photo: ["works/bimebazar/screen1.png", "works/bimebazar/screen2.png"],
      },
      tags: [
        "sketch",
        "User Interface",
        "UI /UX",
        "UI Design",
        "طراحی رابط کاربری",
        "بیمه بازار",
      ],
      tools: ["Adobe Illustrator", "Visual Studio Code", "sketch"],
    },
    {
      title: "Flight Search Concept app",
      thumb: "works/flight-search-concept/thumbnail.jpg",
      present: 0,
      time_start: null,
      time_end: null,
      website: "",
      description: null,
      content: "Flight Search Concept app ",
      attachments: {
        photo: [
          "works/flight-search-concept/screen1.png",
          "works/flight-search-concept/screen2.png",
          "works/flight-search-concept/screen3.png",
          "works/flight-search-concept/screen4.png",
          "works/flight-search-concept/screen5.png",
          "works/flight-search-concept/screen6.png",
        ],
      },
      tags: [
        "User Interface",
        "Mobile Ui",
        "UI",
        "بلیط هواپیما",
        "پرواز",
        "اپ موبایل",
        "رابط کاربری موبایل",
        "طراحی رابط کاربری",
        "کانسپت",
      ],
      tools: ["sketch"],
    },
    {
      title: "IRPPT Shop",
      thumb: "works/irppt/thumbnail.jpg",
      present: 0,
      time_start: "2017-03-01",
      time_end: null,
      website: "http://irppt.com",
      description: null,
      content: "کدنویسی و اجرای پروژه بر روی سیستم مدیریت محتوای وردپرس.",
      attachments: { photo: ["works/irppt/screen1.png"] },
      tags: [
        "واکنش گرا",
        "ریسپانسیو",
        "گرید",
        "فروشگاه",
        "وردپرس",
        "کد نویسی",
        "رابط کاربری",
        "طراحی وب",
      ],
      tools: ["Visual Studio Code", "Adobe Photoshop CC 2017"],
    },
    {
      title: "Famous's Website UI",
      thumb: "works/famous/thumbnail.jpg",
      present: 0,
      time_start: "2016-11-01",
      time_end: null,
      website: "",
      description: null,
      content: "طراحی تک صفحه ایی وبسایت فیمس.پروژه ی استارت آپی",
      attachments: { photo: ["works/famous/screen1.png"] },
      tags: [
        "Wordpress",
        "User Interface",
        "UI Design",
        "طراحی رابط کاربری",
        "طراحی وب",
        "jquery",
        "CSS3",
        "HTML5",
      ],
      tools: ["Sublime Text", "Photoshop"],
    },
    {
      title: "ILAMCHTO.IR Website",
      thumb: "works/ilamchto/thumbnail.jpg",
      present: 0,
      time_start: "2017-02-01",
      time_end: null,
      website: "http://ilamchto.ir",
      description: null,
      content:
        "طراحی اینترفیس وبسایت اداره کل میراث فرهنگی , صنایع دستی گردشگری استان ایلام و انتقال کامل نسخه قدیمی وبسایت از جوملا به وردپرس.",
      attachments: { photo: ["works/ilamchto/screen1.png"] },
      tags: [
        "Wordpress theme",
        "UX Design",
        "UI Design",
        "CSS3",
        "HTML5",
        "وردپرس",
        "طراحی رابط کاربری",
        "طراحی وبسایت",
      ],
      tools: ["Adobe Photoshop", "Sublime Text"],
    },
  ],
  contacts: {
    tel: { number: "+989120535594", text: "(+98) 912 053 5594" },
    email: "svahdati71@gmail.com",
    website: "http://seraj.me",
    location: "Tehran, Iran",
    linkedin: "linkedin.com/in/svahdati",
  },
  achievements: [
    "Led complete migration from legacy stack to React, achieving 50% performance improvement at Bimebazar",
    "Conducted 100+ code reviews with 95% coding standard adherence at Goki",
    "Developed Design System from scratch, reducing development costs by 20% at Omid Analyzer",
    "Led website rewrite resulting in 35% increase in sales conversion at LogicKit",
    "Architected and implemented comprehensive testing suite using Playwright at WebcentriQ",
  ],
  custom_data: [],
};

const {
  profile,
  works,
  educations,
  skills,
  portfolio,
  contacts,
  achievements,
} = data;

export {
  achievements,
  contacts,
  educations,
  portfolio,
  profile,
  skills,
  works,
};
