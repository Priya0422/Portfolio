import {
  mobile,
  backend,
  creator,
  web,
  planets,
  
  java,
  python,
  sb,
  angular,
  ts,
  html,
  css,
  reactjs,
  sql,
  docker,
  md,
  aws,
  git,
  jenkins,
  javascript,

  tcs,
  dominos,
  da,

  lstm,
  profile,
  multi,

  chat,
  ir

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Spring Boot",
    icon: sb,
  },
 {
    name: "Angular",
    icon: angular,
  },
  {
    name: "TypeScript",
    icon: ts,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
 
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Mongodb",
    icon: md,
  },
  {
    name: "AWS",
    icon: aws,
  },
   {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
   {
    title: "Operational Analyst",
    company_name: "Domino's",
    icon: dominos,
    iconBg: "#FFFFFF",
    date: "Feb 2024 - Dec 2024",
    points: [
      "Designed and maintained interactive Power BI dashboards to visualise key performance metrics such as sales trends, delivery efficiency, and customer satisfaction",
      "Automated daily and weekly reporting using Power BI and Excel, reducing manual effort by 50% and improving data accuracy",
      "Collaborated with store managers and regional leads to translate insights into actionable improvements, increasing operational efficiency and reducing delivery delays"
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Truist Bank",
    icon: tcs,
    iconBg: "#FFFFFF",
    date: "Apr 2022 - Dec 2022",
    points: [
      "Engineered secure, scalable authentication services for Truist Bank’s digital platforms, integrating MFA, OTP, and SSO across mobile, web, and branch applications",
      "Developed and maintained APIs for identity and access management using Java, OAuth 2.0, JWT, and IBM DataPower, enabling seamless integration across cloud and on-prem systems",
      "Collaborated on hybrid deployments using AWS (Lambda, API Gateway, IAM, WAF) and on-prem tools like ISAM and DB2, ensuring high availability and secure session management",
      "Integrated with fraud detection and risk analysis platforms (Actimize, FraudNet) to build resilient systems that protect millions of users against digital threats"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tower Hill Insurance",
    icon: tcs,
    iconBg: "#FFFFFF",
    date: "Sep 2019 - Apr 2022",
    points: [
      "Migrated a Guidewire system to modular, scalable microservices using Java 11, Spring Boot, REST APIs, and Domain-Driven Design (DDD).",
      "Deployed containerised services on AWS EKS with CI/CD automation via Docker, Jenkins, Helm, and ArgoCD, enabling faster, reliable releases",
      "Designed and optimised Backend-for-Frontend (BFF) services to support seamless UI interactions, aligning well with front-end frameworks like Angular",
      "Integrated OAuth2-based security and ForgeRock Identity Gateway for secure service communication, demonstrating awareness of security and compliance practices",
      "Participated in load testing and monitoring, ensuring the system could handle 10,000+ requests per minute—experience transferable to tools like Prometheus, Grafana, or ELK",
      "Known for strong ownership, end-to-end understanding, and a proactive, problem-solving approach, contributing to both technical solutions and team success"
    ],
  },
  {
    title: "Backend Developer",
    company_name: "T-Mobile",
    icon: tcs,
    iconBg: "#FFFFFF",
    date: "Jan 2018 - August 2019",
    points: [
      "Built secure, compliant RESTful APIs (Trade-In, Service Agreements, Sales Receipts) supporting multi-device access and legal document archiving per regulatory standards",
      "Implemented Test-Driven Development (TDD) with JUnit, achieving high code coverage and integrated SonarQube analysis via Jenkins CI pipeline",
      " Created comprehensive Swagger API documentation, improving developer collaboration, reducing integration issues, and accelerating delivery cycles"
    ],
  },
  {
    title: "Duty Manager",
    company_name: "Domino's",
    icon: dominos,
    iconBg: "#FFFFFF",
    date: "Feb 2023 - Feb 2024",
    points: [
      "Part-time job during my master’s degree where I served 400+ customers daily in a fast-paced environment",
      "Optimised inventory management by analysing data with PowerBI, reducing stale cost by 15%",
      "Collaborated with a team of 4 and achieved a 95% score in the Operational Efficiency Audit"
    ],
  },
  {
    title: "Freelancer",
    company_name: "Data Annotation",
    icon: da,
    iconBg: "#FFFFFF",
    date: "Apr 2025 - Present",
    points: [
      "Analysing and troubleshooting programming responses to optimise AI model performance and address potential biases or inaccuracies",
      " Utilising programming languages such as Python, Java, and SQL to test and improve AI responses to user queries, such as making algorithmic and security improvements to enhance the functionality of various NLP system responses"
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "Kevin has consistently demonstrated exceptional skills and dedication as a developer. His commitment to excellence and involvement in various initiatives made them an invaluable asset to our team.",
//     name: "Vijay Kumar",
//     designation: "CEO",
//     company: "InApp",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "Kevin's contributions extended beyond technical excellence; He actively engaged in all aspects of our organization, including extracurricular activities.",
//     name: "Biju Kumar",
//     designation: "HR",
//     company: "InApp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "The kind of content that Kevin creates is unique and always the best out there. He's just amazing at anything he does!",
//     name: "Jay Louise",
//     designation: "International Team Head",
//     company: "University of Liverpool",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
  name: "Zen: Chatbot for Mental Well-Being",
  description:
    "AI-powered chatbot designed to provide 24/7 mental health support using BERT and NLP. Trained on real-world mental health data from Reddit and Quora to deliver empathetic, context-aware responses. Built with Flask for real-time web deployment.",
  tags: [
    {
      name: "transformers",
      color: "blue-text-gradient",
    },
    {
      name: "flask",
      color: "green-text-gradient",
    },
    {
      name: "python",
      color: "pink-text-gradient",
    },
    {
      name: "nlp",
      color: "orange-text-gradient",
    },
    // {
    //   name: "transformers",
    //   color: "orange-text-gradient",
    // },
  ],
  image: chat, // replace with your image import if available
  source_code_link: "https://github.com/SindhiyaSridharan/Chabot_Zen", // optional
},
  {
  name: "Explainable IR System",
  description:
    "Collaborative research project implementing a Pyserini-based search engine that delivers transparent, interpretable document rankings for academic use.",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "pyserini", color: "green-text-gradient" },
    { name: "flask", color: "pink-text-gradient" },
  ],
  image: ir, // Add your image import if available
  source_code_link: "https://github.com/Priya0422/ExplainingThroughInterface" // If public
},
  // {
  //   name: "Multi-Armed Bandits",
  //   description:
  //     "Implementation of various multi-armed bandits algorithms using Python",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "reinforcementlearning",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: multi,
  //   source_code_link: "",
  // },
];

// const creativeprojects = [
//   {
//     name: "Instagram",
//     description:"Check out my Instagram profile to view my creative works and reels",
//     tags: [
//       {
//         name: "contentcreation",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mycreativeside",
//         color: "green-text-gradient",
//       },
//     ],
//     image: profile,
//     source_code_link: "https://www.instagram.com/_kevin_mathew_/reels/?next=%2F",
//   },
// ];

//export { services, technologies, experiences, testimonials, projects };
export { services, technologies, experiences, projects};
