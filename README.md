<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/codewithsadee/adex)
  ![GitHub stars](https://img.shields.io/github/stars/codewithsadee/adex?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/codewithsadee/adex?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/codewithsadee_?style=social)](https://twitter.com/intent/follow?screen_name=codewithsadee_)
  [![YouTube Video Views](https://img.shields.io/youtube/views/5Bl3CCizSRQ?style=social)](https://youtu.be/5Bl3CCizSRQ)

  <br />
  <br />

  <h2 align="center">Adex - Business Agency Website</h2>

  Adex is a fully responsive business agency website, <br />Responsive for all devices, build using HTML, CSS, and JavaScript.

  <a href="https://codewithsadee.github.io/adex/"><strong>➥ Live Demo</strong></a>

</div>

<br />

### Demo Screenshots

![Adex Desktop Demo](./readme-images/desktop.png "Desktop Demo")

### Prerequisites

Before you begin, ensure you have met the following requirements:

* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.

### Run Locally

```bash
git clone <your-fork-url>
cd adex
npx --yes serve .
```

Or, using Python:

```bash
git clone <your-fork-url>
cd adex
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser (use the port shown in your terminal if different).

### Pages & Navigation

The template now ships with a complete navigation experience. Every item and call-to-action opens a dedicated page while preserving the original visual language:

- `index.html` – Hero slider, services highlights, case studies, CTA
- `about.html` – Studio story, principles, leadership spotlight
- `services.html` – Detailed service catalogue, engagement models, capabilities
- `projects.html` – Extended case study library and outcome metrics
- `blog.html` – Editorial hub with newsletter opt-in
- `contact.html` – Contact options, intake form, FAQ accordion (`#quote` anchors trial buttons)
- `terms.html` & `privacy.html` – Legal pages linked from the footer
- `project-*.html` – Individual case studies with deep dives for Ligula, Nullam, Ultricies, and Habit launches
- `blog-*.html` – Long-form articles covering metrics, design systems, experimentation, and retention disciplines

### Development Tips

- Reuse the shared `assets/css/style.css` and `assets/js/script.js` across every page for consistent animations and responsive behaviour.
- Update navigation/footers in one page and mirror across the others to retain parity.
- Run HTML checks before shipping:

  ```bash
  npx --yes htmlhint index.html about.html services.html projects.html blog.html contact.html terms.html privacy.html
  ```

  This repository passes the above command with zero warnings.

### Contact

If you want to contact with me you can reach me at [Twitter](https://www.twitter.com/codewithsadee).

### License

[MIT](https://choosealicense.com/licenses/mit/)
