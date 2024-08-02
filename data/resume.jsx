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
        I&apos;m a passionate Senior Front End Engineer with extensive
        experience in building high-performance web applications. I specialize
        in React, Next.js, and TypeScript, and I love working with the latest
        web technologies. My journey includes enhancing user experiences and
        optimizing applications for companies like Setflow, Goki, and Omid
        Analyzer. With a strong foundation in JavaScript, HTML, and CSS,
        I&apos;ve led teams, conducted numerous code reviews, and implemented
        innovative solutions that drive performance and usability. Always eager
        to learn and grow, I&apos;m excited to continue pushing the boundaries
        of web development.
      </>
    ),
    bio: (
      <>
        Senior <b>Front end Engineer</b>
      </>
    ),
    username: "seraj",
  },
  works: [
    {
      company: "Setflow",
      link: "https://setflow.io",
      location: "Italy, Milan (Remote)",
      title: "Senior Front End Engineer",
      time_start: "2023-07-01",
      present: 1,
      description: [
        <>Implemented Authentication, resulting in a 15% performance boost.</>,
        "Implemented Annotation and Map components to elevate user interaction and functionality.",
        <>
          Developed new features using <b>Nextjs</b>, Typescript, and{" "}
          <b>shadcn</b>.
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
        "Develop new features using reactjs, typescript, styled-components and antd.",
        <>
          Improve the API logic by implementing <b>UAC</b> (Universal Api
          Consumer)
        </>,
        "Rewrote existing codebase to improve maintainability and readability.",
        "Conducted 100+ code reviews, maintaining a 95% adherence to coding standards.",
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
        "Develop, Redesign, maintaining, and improving all front-end products using Reactjs, Typescript, Redux, Webpack, and ES6.",
        "Developed a Design System, improving DX and reducing the development cost by 20%.",
        "improve the culture of Git Flow, Component structure, and clean code strategy.",
        "Redesign the product using sketch.",
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
        "Managed a team of 3 Front End Developers.",
        "Led the efforts to rewrite the new website resulting in a 35% sales improvement.",
        <>
          Building and maintaining UI KIT package library with React,{" "}
          <b>TypeScript</b> and <b>Styled-Components</b>.
        </>,
        "Maintain state using Apollo and Redux for complex user interfaces",
        "Change the building Process from RCA to custom webpack build config.",
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
          <b>Migrate</b> the project from pure HTML, CSS, and jQuery to React,{" "}
          <b>Redux</b>, and Webpack, with a 50% performance boost
        </>,
        "Optimized website Web Vitals, including LCP and CLS, resulting in a 40% improvement.",
        "Redesign the product using sketch.",
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
        "Designed CSS templates for use in all pages on the website working with CSS Background, positioning, text, border, margin, padding, and table.",
        "Applied optimization techniques to reduce page size and load times to enhance user experience using sprites.",
        "Developed user interface by using the HTML, CSS, Jquery, Javascript and Wordpress.",
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
      field: "Software Engineer",
      description: "",
    },
    {
      name: "Raja University",
      time_start: "2013-01-01",
      time_end: "2015-05-01",
      present: 0,
      location: "Qazvin, Iran",
      degree: "Associate Degree",
      field: "Software Engineer",
      description: "",
    },
  ],
  skills: {
    tools: ["Git", "Linux", "Jest"],
    main: [
      "React",
      "Nextjs",
      "Typescript",
      "Javascript",
      "Shadcn",
      "Tailwind",
      "Zustand",
      "Webpack",
      "GraphQL",
      "Redux",
    ],
    others: ["Python", "PHP", "SQL", "Django", "NodeJs", "ExpressJs"],
    language: ["Persian", "English", "Kurdish"],
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
      attachments: {
        photo: ["works/1250game/screen1.png"],
      },
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
      attachments: {
        photo: ["works/bimebazar-t45/screen1.png"],
      },
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
      attachments: {
        photo: ["works/irppt/screen1.png"],
      },
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
      attachments: {
        photo: ["works/famous/screen1.png"],
      },
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
      attachments: {
        photo: ["works/ilamchto/screen1.png"],
      },
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
    {
      title: "Decoration UI",
      thumb: "works/decore-ui/thumbnail.jpg",
      present: 0,
      time_start: "2014-12-01",
      time_end: null,
      website: "",
      description: null,
      content: " \n",
      attachments: {
        photo: ["works/decore-ui/screen1.png"],
      },
      tags: [
        "seraj",
        "svahdati",
        "jquery",
        "css",
        "html",
        "UX",
        "Wordpress",
        "UI",
      ],
      tools: ["Sublime Text", "فتوشاپ"],
    },
    {
      title: "Bebinin magazine website",
      thumb: "works/bebinin/thumbnail.jpg",
      present: 0,
      time_start: "2013-03-01",
      time_end: null,
      website: "",
      description: null,
      content: "طراحی مجله‌ی اینترنتی ببینین در سال 1392",
      attachments: {
        photo: ["works/bebinin/screen1.jpg"],
      },
      tags: [
        "Web Design",
        "UI /UX",
        "UX Design",
        "UI Design",
        "Wordpress theme",
        "Magazine",
      ],
      tools: [],
    },
    {
      title: "Kandi magazine website",
      thumb: "works/kandi-mag/thumbnail.jpg",
      present: 0,
      time_start: "2014-09-01",
      time_end: null,
      website: "",
      description: null,
      content: "مجله ی اینترنتی کندی",
      attachments: {
        photo: ["works/kandi-mag/sreen1.jpg"],
      },
      tags: ["User Interface", "Wordpress", "CSS3", "HTML5"],
      tools: ["ColorSchemer Studio", "Sublime Text", "Adobe Photoshop"],
    },
    {
      title: "Jananeh website",
      thumb: "works/jananeh-mag/thumbnail.jpg",
      present: 0,
      time_start: "2013-04-01",
      time_end: null,
      website: "",
      description: null,
      content: "وبسایت جانانه سال 1392",
      attachments: {
        photo: ["works/jananeh-mag/thumbnail.jpg"],
      },
      tags: [
        "Wordpress",
        "responsive",
        "CSS3",
        "css",
        "html",
        "طراحی گرافیک",
        "طراحی وب سالت",
      ],
      tools: ["ColorSchemer Studio", "Sublime Text", "Adobe Photoshop"],
    },
    {
      title: "Tehran98 magazine website",
      thumb: "works/tehran98-mag/thumbnail.jpg",
      present: 0,
      time_start: "2013-06-01",
      time_end: null,
      website: "",
      description: null,
      content:
        "این طراحی سال 1392 انجام شده و با برای سیستم مدیریت محتوای وردپرس طراحی شده است.",
      attachments: {
        photo: ["works/tehran98-mag/screen1.jpg"],
      },
      tags: [
        "Magazine",
        "tehran98",
        "User Interface",
        "UX",
        "UI",
        "طراحی قالب وردپرس",
        "وردپرس",
        "طراحی وب",
      ],
      tools: [],
    },
    {
      title: "Moslom Mohammadian's Website",
      thumb: "works/mmuh-website/thumbnail.jpg",
      present: 0,
      time_start: "2011-10-23",
      time_end: null,
      website: "",
      description: null,
      content:
        "وبسایت جناب مسلم محمدیان از نامزد های برجسته انتخابات مجلس سال 1390",
      attachments: {
        photo: ["works/mmuh-website/screen1.jpg"],
      },
      tags: ["Wordpress theme", "CSS3", "html", "UI Design"],
      tools: ["Adobe Photoshop", "Sublime Text"],
    },
    {
      title: "My Portfolio",
      thumb: "works/svahdati/thumbnail.jpg",
      present: 0,
      time_start: "2011-09-01",
      time_end: null,
      website: "http://svahdati.com",
      description: null,
      content: "طراحی برای سال 1390 میباشد",
      attachments: {
        photo: ["works/svahdati/screen1.jpg"],
      },
      tags: [
        "UX Design",
        "UI Design",
        "CSS3",
        "HTML5",
        "Wordpress",
        "طراحی وب",
      ],
      tools: [],
    },
  ],
  contacts: {
    tel: { number: "+989120535594", text: "(+98) 912 053 5594" },
    email: "svahdati71@gmail.com",
    website: "http://seraj.me",
    location: "Tehran, Iran",
    linkedin: "linkedin.com/in/svahdati",
  },
  achievements: [],
  custom_data: [],
};

const { profile, works, educations, skills, portfolio, contacts } = data;

export { contacts, educations, portfolio, profile, skills, works };
