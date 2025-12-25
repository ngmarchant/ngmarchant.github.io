// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-advising",
          title: "Advising",
          description: "I co-supervise graduate researchers working on a range of problems in machine learning and AI. While my current appointment limits me to co-supervision roles, I&#39;m always happy to discuss potential collaborations with prospective students and their advisors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/advising/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-i-m-presenting-our-work-on-distributed-bayesian-entity-resolution-at-the-conference-on-current-trends-in-survey-statistics-at-the-national-university-of-singapore",
          title: 'I’m presenting our work on distributed Bayesian entity resolution at the Conference on...',
          description: "",
          section: "News",},{id: "news-i-presented-my-phd-research-in-a-completion-seminar-one-of-the-final-milestones-of-my-candidature",
          title: 'I presented my PhD research in a completion seminar—one of the final milestones...',
          description: "",
          section: "News",},{id: "news-our-paper-on-distributed-bayesian-entity-resolution-was-accepted-for-publication-in-the-journal-of-computational-and-graphical-statistics",
          title: 'Our paper on distributed Bayesian entity resolution was accepted for publication in the...',
          description: "",
          section: "News",},{id: "news-i-started-a-new-position-as-a-postdoctoral-research-fellow-at-the-university-of-melbourne-working-on-adversarial-machine-learning",
          title: 'I started a new position as a Postdoctoral Research Fellow at the University...',
          description: "",
          section: "News",},{id: "news-our-paper-on-label-efficient-online-evaluation-has-been-accepted-for-presentation-at-kdd-2021",
          title: 'Our paper on label-efficient online evaluation has been accepted for presentation at KDD...',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-label-efficient-online-evaluation-at-kdd-2021-a-pre-recorded-version-of-the-talk-is-available-at-the-acm-dl",
          title: 'I presented our work on label-efficient online evaluation at KDD 2021. A pre-recorded...',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-attacking-machine-unlearning-at-aaai-2022-a-pre-recorded-video-of-the-talk-is-available-on-youtube",
          title: 'I presented our work on attacking machine unlearning at AAAI 2022. A pre-recorded...',
          description: "",
          section: "News",},{id: "news-as-a-finalist-for-the-savage-award-2022-i-was-invited-to-present-research-from-my-phd-thesis-at-isba-2022-a-recording-of-the-presentation-is-available-here",
          title: 'As a finalist for the Savage Award 2022, I was invited to present...',
          description: "",
          section: "News",},{id: "news-our-paper-on-certified-robustness-for-bounded-edit-distance-perturbations-was-accepted-at-neurips-2023",
          title: 'Our paper on certified robustness for bounded edit distance perturbations was accepted at...',
          description: "",
          section: "News",},{
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
