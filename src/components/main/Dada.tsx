export type Project = {
  src: string;
  alt: string;
  link: string;
  technologies: string[];
}

export const technologies = [
  { src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", alt: "JavaScript" },
  { src: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000", alt: "React" },
  { src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000", alt: "TypeScript" },
  { src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMzY2M2MzkiIGQ9Ik00IDJoMTAuNWE2IDYgMCAwIDEgMy4wNTQgMTEuMTY2QTYgNiAwIDAgMSAyMCAxOHYzaC0ydi0zYTQgNCAwIDAgMC00LTRINHYtMmgxMC41YTQgNCAwIDAgMCAwLThINHptNyAxOUg0di0yaDd6Ii8+PC9zdmc+", alt: "Remix" },
  { src: "https://img.icons8.com/?size=100&id=EAUyKy3IwmqM&format=png&color=000000", alt: "HTML5" },
  { src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", alt: "CSS3" },
  { src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", alt: "Node.JS" },
  { src: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000", alt: "TailwindCSS" },
]; 

export const projects: Project[] = [
  {
    src: "https://i.postimg.cc/gcK5Z4z5/Captura-de-tela-2024-09-23-144835.png",
    alt: "Site Conversor e Calculadora",
    link: "https://conversorecalculadora.netlify.app/",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    src: "https://i.postimg.cc/LsRD55qd/Captura-de-tela-2024-09-17-152849.png",
    alt: "Site Studio WorkArt",
    link: "https://studioworkart.netlify.app/",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    src: "https://i.postimg.cc/4dyjmKDL/Em-desenvolvimento.png",
    alt: "Projeto em desenvolvimento",
    link: "",
    technologies: ["HTML5", "CSS3", "TypeScript", "React"],
  },
  {
    src: "https://i.postimg.cc/4dyjmKDL/Em-desenvolvimento.png",
    alt: "Projeto em desenvolvimento",
    link: "",
    technologies: ["HTML5", "CSS3", "TypeScript", "React"],
  }
];