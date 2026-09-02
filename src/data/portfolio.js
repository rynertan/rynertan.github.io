import bibText from './publications.bib?raw';
import { parseBibtex } from '../utils/parseBibtex';

export const portfolioData = {
  name: "Ryner Tan",
  title: "PhD Student",
  lastUpdated: "Aug 2026",
  bio: "I am a first year PhD student at [iNLP Lab](https://isakzhang.github.io/group.html) in [Singapore University of Technology and Design](https://www.sutd.edu.sg), advised by Prof. [Wenxuan Zhang](https://isakzhang.github.io/). My research interests lie in multimodal reasoning and safety.\n Before my PhD, I did two Machine Learning internships at [Tencent](https://www.tencent.com/en-us/) before completing my undergrad at SUTD with a specialisation in Artificial Intelligence in 2025. ",
  links: [
    { name: "Email", url: "mailto:ryner_tan@mymail.sutd.edu.sg" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=7PVRnVEAAAAJ&hl=en" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ryner-tan/" },
    { name: "GitHub", url: "https://github.com/rynertan" }

  ],
  updates: [
    { date: "Aug 2026", text: "[GlobeAudio](https://arxiv.org/abs/2606.08194) is accepted to [EMNLP 2026](https://2026.emnlp.org/) Findings!" },
    { date: "Aug 2026", text: "We released [Myna-Hokkien](https://inlp-lab.github.io/Myna-Hokkien/), first of the Myna model family. Check it out!" },
    { date: "Aug 2026", text: "MoltNet is accepted to COLM 2026 and WAB Workshop @ COLM 2026!" },
    { date: "Sep 2025", text: "Started my CS PhD at iNLP Lab @ SUTD, awarded SUTD PhD Fellowship" },
    { date: "May 2025", text: "Graduated from SUTD with a Bachelors in Computer Science and Design" }
  ],
  services: [
    "Local Chair: [The 2026 Singapore Symposium on Natural Language Processing (SSNLP 2026)](https://ssnlp2026.github.io/)",
    "Teaching Assistant: 50.001 Information Systems & Programming (Spring 2026)"
  ],
  publications: parseBibtex(bibText)
};
