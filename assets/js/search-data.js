// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Victorita Dolean&#39;s publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-hpsc-group",
          title: "HPSC group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "group_members-arris-tijsseling",
          title: 'Arris Tijsseling',
          description: "",
          section: "Group_members",handler: () => {
              window.location.href = "/group_members/arris-tijsseling/";
            },},{id: "group_members-barry-koren",
          title: 'Barry Koren',
          description: "",
          section: "Group_members",handler: () => {
              window.location.href = "/group_members/barry-koren/";
            },},{id: "group_members-benjamin-sanderse",
          title: 'Benjamin Sanderse',
          description: "",
          section: "Group_members",handler: () => {
              window.location.href = "/group_members/benjamin-sanderse/";
            },},{id: "group_members-job-van-heumen",
          title: 'Job Van Heumen',
          description: "",
          section: "Group_members",handler: () => {
              window.location.href = "/group_members/job-van-heumen/";
            },},{id: "group_members-michael-abdel-malik",
          title: 'Michael Abdel Malik',
          description: "",
          section: "Group_members",handler: () => {
              window.location.href = "/group_members/michael-abdel-malik/";
            },},{id: "group_members-victorita-dolean",
          title: 'Victorita Dolean',
          description: "",
          section: "Group_members",handler: () => {
              window.location.href = "/group_members/victorita-dolean/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
