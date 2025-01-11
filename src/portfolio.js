/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Phuc-Binh Pham",
  title:(
    <>
      Hi all, I'm Phuc-Binh Pham,
      <br />
      You can call me Pinky
    </>
  ),
  subTitle: emoji(
    "Enthusiastic Unity Game Developer 🎮 "
  ),
  subTitle2: "Fueled by passion, energized by coffee☕.",
  resumeLink:
    "https://drive.google.com/file/d/1e1SUZTGXHyf_LFZf_L0WwbdjZEIepjAV/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/binh0804",
  linkedin: "https://www.linkedin.com/in/knippink/",
  gmail: "phamphucbinh0804@gmail.com",
  facebook: "https://www.facebook.com/knippinkOwO/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "HCMC University of Technology and Education",
      logo: require("./assets/images/hcmuteLogo.png"),
      subHeader: "Bachelor of Infomation Technology",
      duration: "October 2020 - Oct 2024",
      desc: "GPA: 9.18/10 (3.65/4.0)",
      descBullets: [
        "Graduated with High Distinction. Top 2 in the major, top 3 in the university.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  viewSkillBars: false, //Set it to true to show Proficiency Section
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Unity Developer",
      company: "Lapis3D Vietnam",
      companylogo: require("./assets/images/Intratech_Logo.png"),
      date: "March 2024 – Current",
      companyDescription: "Lapis3D is a software development company specializing in 3D simulation applications for the shipbuilding industry.",
      roleDetails: "Developing 3D simulation applications for the shipbuilding industry to support engineers interacting with models from the server to manage and install everything from entire ships to the smallest details.",
      duration: "10 months",
      projs: [
        {
          title: "MOPIS-AM",
          teamSize: "4",
          date: "Sep 2024 - Current",
          desc: [
            "Image Gallery: Import images from device storage (for both Windows and Android versions).",
            "Image Markup: A simplified version of MS Paint.",
            "Fix bugs or enhance the assigned features."
          ],
          tech: ["Unity 3D","3D Transformation","Ship Building","Jira & Bitbucket",],
        },
        {
          title: "MOPIS",
          teamSize: "3",
          date: "March 2024 - Current",
          desc: [
            "Measurement Function: Chain dimensions, grid dimension, structure dimensions, enhanced with various special requirements for each dimension type.",
            "Print function: Capture the model as a technical drawing, and export it as a PNG image.",
            "Tube and Cable Path Improvements: Enhanced rendering for tube and cable paths for more realistic rendering.",
            "GPS-based monitoring: Check GPS to ensure the user is inside the designated area (even in offline mode).",
            "Fix or enhance the assigned features."
          ],
          tech: ["Unity 3D","3D Transformation","Ship Building","Jira & Bitbucket", "Azure DevOps"],
        }
      ]
    },
    {
      role: "Unity Game Developer",
      company: "HDGames",
      companylogo: require("./assets/images/HDGamesLogo.png"),
      date: "Sep 2022 – Feb 2024",
      companyDescription: "HDGames is a game development company specializing in casual games for mobile devices.",
      roleDetails: "Collaborate with Game Designers, Game Artists, and QA to create games in the casual genre (hyper-casual and puzzle). Maintain and develop new features for existing projects as needed.",
      duration: "1 year 5 months",
      // list of work projects, each project include title, list of description, and url for each
      projs: [
        {
          title: "Two Player Arcade Games",
          date: "Nov 2022 - Feb 2024",
          teamSize: "13 (1 PM, 6 Developers, 2 Artist, 1 Game Designer, 2 QA, 1 Monetization)",
          desc: [
            "Collaborated with Product Owners, Game Designers, Artists, and QA teams to develop engaging two-player competitive minigames, ensuring gameplay aligned with requirements.",
            "Updated game UI and art styles (reskinning) to match current trends upon request from the leader.",
            "Optimize game features for a smoother user experience: utilizing Unity Addressables for faster load times, displaying tutorial videos from YouTube quickly, enhanced scrollview smoothness.",
            "Handled minigames: Pizza Memory, Fruit Duel, Paint Fight, Happy Bird, Memory, Dots Boxes, and Mancala."
          ],
          tech:["Teamwork","Problem Solving","Strategy Games", "Performance Optimization"],
          url: "https://play.google.com/store/apps/details?id=com.fc.be.pl.tow.player.challenge.minigames",
          videoID: "scFUag19N7s"
        },
        {
          title: "Among Us vs Spider",
          date: "July 2023",
          teamSize: "8 (1 PM, 2 Developers, 2 Artist, 1 Game Designer, 2 QA)",
          desc: [
            "Hotfixing bugs and issues.",
            "Implemented a system to randomly spawn enemies within set limits.",
            "Developed a level-unlocking system based on collecting resources, making gameplay more engaging for players."
          ],
          tech: ["Hotfix","Maintenance"],
        },
        {
          title: "Melon Playground (Learning Project)",
          date: "Oct 2022 - Dec 2022",
          desc: [
            "Design and develop weapons system and items system from scratch",
            "Implement sound and visual effects for weapons: guns, bombs, swords, etc.",
            "Build games to Android platform, conducted testing, and resolved issues for optimal performance."
          ],
          tech: ["System Design","Inventory System","Game Development"],
        },
        {
          title: "Apple Worm",
          date: "Aug 2022 - Sep 2022",
          teamSize: "3 (1 PM, 2 Developers)",
          desc: [
            "Designed and implemented 100 levels with intuitive hints, enhancing game complexity, player experience and satisfaction.",
            "Conducted comprehensive testing to identify and resolve bugs and gameplay issues, significantly improving game performance and stability."
          ],
          tech: ["Level Design","Manual Testing"],
          videoID: "x_RJSFUPRlo"
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  subTitle: "Some projects I have worked on at University",
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Scholarship Section
// Similar Achievement Section but for Scholarships and Honor
const scholarshipSection = {
  title: emoji("Scholarships and Awards 🎓 "),
  subtitle:
    "Scholarships and Awards that I have accomplished",
  scholarshipsCard: [
    {
      title: "Vallet Scholarship 2023",
      subtitle:
        "Scholarships are awarded to Vietnamese students who excel in their studies and research.",
      image: require("./assets/images/vallet-scholarship.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Scholarship",
          url: ""
        }
      ]
    },
    {
      title: "Vallet Scholarship 2022",
      subtitle:
        "Scholarships are awarded to Vietnamese students who excel in their studies and research.",
      image: require("./assets/images/vallet-scholarship.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Scholarship",
          url: ""
        }
      ]
    },
    {
      title: "Academic Encouragement Scholarship HCMUTE",
      subtitle:
        "Awarded the scholarship 4 out of 7 semesters for outstanding academic performance.",
      image: require("./assets/images/hcmuteLogo.png"),
      imageAlt: "Academic Encouragement Scholarship HCMUTE",
      footerLink: [
        {
          name: "Scholarship",
          url: ""
        }
      ]
    },
    {
      title: "Student of 5 Merits HCMUTE 2021 & 2022",
      subtitle:
        "Recognizing outstanding students who excel in five areas: academic performance, morality, skills, integration, and physicality.",
      image: require("./assets/images/StudentOf5Merits_HCMUTE.png"),
      imageAlt: "Student of 5 Merits Award HCMUTE",
      footerLink: [
        {
          name: "Award",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Competition Prize, Certifications and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Hackathon HCMUTE 2023",
      subtitle:
        "Our team created a tool that automatically generates quizzes from lectures/books using ChatGPT and Google Forms API.",
      image: require("./assets/images/Hackathon_HCMUTE_2023.png"),
      imageAlt: "Hackathon HCMUTE 2023 Logo",
      footerLink: [
        {
          name: "2nd Prize",
          url: "",
        },
        {
          name: "Competition",
          url: ""
        },
        {
          name: "Hackathon",
          url: ""
        },
      ]
    },
    {
      title: "Hackathon HCMUTE 2022",
      subtitle:
        "Developed face-blurring software in a 24-hour coding challenge to protect witness identities in investigative videos.",
      image: require("./assets/images/Hackathon_HCMUTE_2022.png"),
      imageAlt: "Hackathon HCMUTE 2022 Logo",
      footerLink: [
        {
          name: "3rd Prize",
          url: ""
        },
        {
          name: "Competition",
          url: ""
        },
        {
          name: "Hackathon",
          url: ""
        },
      ]
    },
    {
      title: "MasteringIT HCMUTE 2023",
      subtitle:
        "A comprehensive IT knowledge competition covering various technology fields.",
      image: require("./assets/images/Logo_MasteringIT_HCMUTE_2023.jpg"),
      imageAlt: "MasteringIT HCMUTE 2023 Logo",
      footerLink: [
        {
          name: "Competition",
          url: ""
        },
        {
          name: "Consolation Prize",
          url: ""
        }
      ]
    },
    {
      title: "MasteringIT HCMUTE 2022",
      subtitle:
        "A comprehensive IT knowledge competition covering various technology fields.",
      image: require("./assets/images/Logo_MasteringIT_HCMUTE_2022.jpg"),
      imageAlt: "MasteringIT HCMUTE 2022 Logo",
      footerLink: [
        {
          name: "1st Prize",
          url: ""
        },
        {
          name: "Competition",
          url: ""
        },

      ]
    },
    {
      title: "Fundamentals of Digital Image and Video Processing",
      subtitle: "Covering the basics of image/video processing, practical applications, and the use of modern techniques for enhancement, recovery, and compression.",
      image: require("./assets/images/NorthwesternUniversity.png"),
      imageAlt: "Northwestern University Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://coursera.org/share/9473f23bd26ac41aadc311fa31ab97b5"
        },
        {
          name: "Image Processing",
          url: ""
        }
      ]
    },
    {
      title: "Python Data Structures",
      subtitle:
        "Learned how to organize data, work with files, and use Python for sorting and storing information in a short course.",
      image: require("./assets/images/UniversityofMichigan.png"),
      imageAlt: "University of Michigan Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/a034473299fdccbc6797a9ac45fc9c3c"
        },
        {
          name: "Python",
          url: ""
        },
        {
          name: "Data Structures",
          url: ""
        }
      ]
    },
    {
      title: "SQL for Data Science",
      subtitle:
        "A course focused on using SQL for data filtering, sorting, analysis, creating unified tables with UNION, and formatting data for analysis.",
      image: require("./assets/images/UCDavis.png"),
      imageAlt: "University of California, Davis Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/af62c77b76a92f6af638ab2f84ad50d4"
        },
        {
          name: "SQL",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84 522 942 441",
  email_address: "phucbinh0804@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  scholarshipSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
