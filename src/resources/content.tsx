import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
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
  headline: <>Hi 👋 I'm Samay</>,
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
      BS/MS Computer Science @ Georgia Tech and Software Engineer
      <br />
      Click below to learn more about me!
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
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
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
          <>Developed a robust LLM-based workflow using MetaChain to automate the detection and labeling of access risks across 10K+ data tables, surfacing 1K+ security issues and reducing company SEV exposure; collaborated with Data and Security teams.</>,
          <>Engineered read-optimized data pipelines and workflows in Python and Hack, reducing data-collection latency by 95%+ and LLM runtime by 80%+ through batching, retries, and scheduling.</>,
          <>Built an auto-remediation system that generates secure code diffs for flagged privacy issues using an agentic LLM with a specialized set of MCP tools and integrated a live dashboard visualizing real-time risk metrics, trends, and LLM-suggested fixes.</>,
          <>Launched RAG-based internal LLM command, enabling real-time company-wide analysis on security risks and remediations, enabling privacy compliance.</>,
        ],
        images: [],
      },
      {
        company: "PTC Onshape",
        timeframe: "June 2024 - August 2024",
        role: "Software Development Intern",
        achievements: [
          <>Designed and implemented microversioning system for Onshape’s cloud-based CAD software, enabling synchronization and storage of Bill of Materials (BOM) views in CAD documents across accounts, reaching over 3 million users.</>,
          <>Developed search function for CAD design custom properties, allowing users from over 900 corporations to easily search through thousands of enterprise-wide properties by a uniquely-generated property ID.</>,
          <>Redesigned BOM template system to allow users to save and assign company-wide default BOM views, saving significant generation time for complex designs, leveraging Angular, Spring, and MongoDB; over 1400 templates generated with 1000+ daily uses.</>,
        ],
        images: [],
      },
      {
        company: "Joulea",
        timeframe: "June 2023 - August 2023",
        role: "Software Development Intern",
        achievements: [
          <>Developed CNN-based machine learning models to analyze thermal imaging data from aerial video and photo footage and identify and classify any structural and thermal anomalies with 96% accuracy.</>,
          <>Utilized computer vision, lidar data, and GPS information to build out drone path planning algorithms, optimizing data collection processes and enabling simultaneous localization and mapping (SLAM) to simulate and recreate the 3D landscape around drones.</>,
        ],
        images: [],
      },
      {
        company: "Warner Bros. Discovery",
        timeframe: "June 2022 - August 2022",
        role: "Software Development Intern",
        achievements: [
          <>Collaborated with software engineering and QA teams to develop and implement new React Native features for the TNT, TruTV, and TBS apps, improving streaming functionality and streamlining user experience for over 10,000,000 users.</>,
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
          <>Conducted pioneering research using deep learning to study different brain structures and cell types and their susceptibility to neurodegenerative diseases like Alzheimer’s, winning the APA Award for Outstanding Research in Psychological Science.</>,
          <>Worked in collaboration with the Allen Brain Institute on novel 3D brain imaging data sets, using CNN models to predict and classify signs of neurodegeneration with 98% accuracy.</>,
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

const gallery: Gallery = {
  path: "/gallery",
  label: "Resume",
  title: `Resume – ${person.name}`,
  description: `A resume by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/Samay_Desai_Resume.png",
      alt: "image",
      orientation: "vertical",
    },
  
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
