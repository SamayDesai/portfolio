import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Samay",
  lastName: "Desai",
  name: `Samay Desai`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "samaydesai@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SamayDesai",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/samaydesai-gt",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi 👋 I'm Samay!</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Software Engineer and  CS Student @ Georgia Tech
      <br />
      <br />
      Learn more about what I'm up to!
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm currently a BS/MS Computer Science student and Stamps President's Scholar at Georgia Tech, specializing in Machine Learning
        and Information Internetworks. I'm passionate about working on backend development, and I have experience ranging from machine learning and LLM work to full-stack development
        at large tech companies like Meta and smaller startup companies alike. I enjoy building projects that allow me to explore new fields of technology and computer science
        and I actively engage in research into the LLM space, especially how it can help us derive findings relating to human health.
        <br />
        <br />
        Outside of computers, you can find me adventuring outdoors, playing pickleball, trying new food, or diving into new music!
      </>
    ),
  },
  
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Meta",
        timeframe: "May 2025 - August 2025",
        role: "Software Engineer Intern",
        achievements: [
          <>Facebook Messenger Privacy/Security Team</>
        ],
        images: [],
      },
      {
        company: "PTC Onshape",
        timeframe: "June 2024 - August 2024",
        role: "Software Development Intern",
        achievements: [
          <>Fullstack Web Development Team</>,
        ],
        images: [],
      },
      {
        company: "Joulea",
        timeframe: "June 2023 - August 2023",
        role: "Software Development Intern",
        achievements: [
          <>ML Engineering Team</>
        ],
        images: [],
      },
      {
        company: "Warner Bros. Discovery",
        timeframe: "June 2022 - August 2022",
        role: "Software Development Intern",
        achievements: [
          <>TBS, TNT, TruTv Development and QA Team</>,
        ],
        images: [],
      },
    ],
  },

  research: {
    display: true,
    title: "Research Experience",
    experiences: [
      {
        company: "Social Dynamics and Well-Being Lab",
        
        timeframe: "August 2024 - Present",
        role: "Researcher",
        achievements: [
          <>Leverage multimodal language models (VLMs and LLMs) to create multimodal valence, mental health, and harmful content classifications of social media video data to determine the effect of social media on teen mental health.</>,
          <>In collaboration with the University of Cambridge, Dr. Amy Orben, and Dr. Munmun De Choudhury.</>,
        ],
      },
      {
        company: "Neural Data Science Lab",
        
        timeframe: "June 2021 - April 2022",
        role: "Researcher",
        achievements: [
          <>Using deep learning to study brain structures and cell types and their susceptibility to neurodegenerative diseases like Alzheimer’s</>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Georgia Insitute of Technology, M.S.",
        description: <>Computer Science</>,
      },
      {
        name: "Georgia Insitute of Technology, B.S.",
        description: <>Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <></>,
        tags: [
          { name: "Java" },
          { name: "Python" },
          { name: "C/C++" },
          { name: "HTML/CSS" },
          { name: "Dart" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "PHP" },
          { name: "Hack" },
          { name: "SQL" },
        ],
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: <></>,
        tags: [
          { name: "Spring" },
          { name: "Angular" },
          { name: "Tensorflow" },
          { name: "Pytorch" },
          { name: "OpenCV" },
          { name: "Scikit-learn" },
          { name: "Node" },
          { name: "Express" },
          { name: "React" },
          { name: "LangChain" },
        ],
        images: [],
      },
      {
        title: "Tools",
        description: <></>,
        tags: [
          { name: "Git" },
          { name: "Gradle" },
          { name: "MCP" },
          { name: "Google Firebase" },
          { name: "Android Studio" },
          { name: "Flutter" },
          { name: "Jira" },
          { name: "RBCommons" },
          { name: "MongoDB" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
