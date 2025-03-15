const TechStackList = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuahAnkuoLBXCwgerXUrsvg4i2kwOw9Iqf8g&s",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "DataBase",
    skills: [
      {
        name: "MySQL",
        image:
          "https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png",
      },
      {
        name: "MongoDB",
        image:
          "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvwgpiqc9FrNeVcW-NQekpPIwIcktyys_nw&s",
      },
      {
        name: "Render",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
      },
      {
        name: "Vercel",
        image: "https://cdn.intuji.com/2022/06/Logo_Vercel-1.jpg",
      },
    ],
  },
];

export default TechStackList;
