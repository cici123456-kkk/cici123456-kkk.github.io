// Unified Publications Data - Replace with your own publications
// Each publication can be a preprint or a conference/journal paper.
// Use isSelected: true to feature it on the homepage and CV.
const publications = [];

// Helper functions to filter publications
const getPreprints = () => publications.filter(pub => pub.isPreprint);
const getSelectedPreprints = () => publications.filter(pub => pub.isPreprint && pub.isSelected);
const getPublications = () => publications.filter(pub => !pub.isPreprint);
const getSelectedPublications = () => publications.filter(pub => !pub.isPreprint && pub.isSelected);
const getAllPublications = () => publications.filter(pub => !pub.isPreprint);

// Legacy variables for backward compatibility
const preprints = getSelectedPreprints();
const selectedPublications = getSelectedPublications();
const fullPublications = getAllPublications();

// Projects Data - Replace with your own projects
const projects = [
  {
    title: "Caesar Cipher Encryption and Decryption Tool",
    description: "Built a command-line tool for encrypting, decrypting, and brute-forcing Caesar cipher messages. Implemented the most complex test case handling mixed case and non-alphabet characters.",
    badges: [
     { url: "https://github.com/cici123456-kkk", img: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff" }
    ],
    isSelected: true,
    demoPath: ""
  },
  {
    title: "ECG Data Analysis with R",
    description: "Preprocessed ECG signals from 70 patients, detected R-peaks using the find_peaks() function, and performed statistical comparisons between normal and abnormal groups using t-tests.",
    badges: [
      { url: "https://github.com/cici123456-kkk", img: "https://img.shields.io/badge/R-276DC3?logo=r&logoColor=fff" }
    ],
    isSelected: true,
    demoPath: ""
  }
];

// Helper functions to filter projects
const getSelectedProjects = () => projects.filter(project => project.isSelected);
const getAllProjects = () => projects;

// Research Experience Data - Replace with your own experience
const researchExperience = [
  {
    period: "Month YYYY - Month YYYY",
    institution: "Your Institution Name",
    mentor: "Prof. Mentor Name",
    description: "Brief description of your research work and achievements."
  }
];

// Teaching Data - Replace with your own teaching experience
const teaching = [];

// Academic Services Data - Replace with your own services
const academicServices = [];

// Talks Data - Replace with your own talks
const talks = [];

// Honors Data - Replace with your own honors and awards
const honors = [];

// Profile Data - Replace with your own profile
const profile = {
    name: "Yunxi Zhou",
    avatar: "assets/images/avatar.jpg",
    bio: "Hi! I'm Yunxi Zhou, a first-year student majoring in Mathematics and Statistics at Your University. I enjoy coding, data analysis, and working on team projects. Feel free to reach out if you'd like to connect or collaborate!",
    location: "University College London",
    email: "zhuyunxi0322@outlook.com",
    social: {
        github: "https://github.com/cici123456-kkk"
        linkdein:www.linkedin.com/in/zhuyunxi
    }
};

// education
const education = [
    {
        degree: "B.S. in Mathematics and Statistics",
        school: "Your University",
        year: "2025 – 2029"
    }
];