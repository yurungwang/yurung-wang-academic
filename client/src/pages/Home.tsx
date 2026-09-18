import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Presentation,
  Sparkles,
  X,
} from "lucide-react";

type ScholarlyTab = "publications" | "conferences";

const researchProjects = [
  {
    period: "2026—2027",
    title:
      "A Mixed-Methods Study on the Effects of an AI-Assisted Mindfulness Digital Intervention on Healthy Ageing in Community-Dwelling Older Adults",
    body: "National Science and Technology Council (NSTC)",
    role: "Principal Investigator",
    status: "Underway",
  },
  {
    period: "2025—2026",
    title:
      "Enhancing the Effectiveness of Evidence-Based Nursing Education through Generative AI: From Learning Challenges to Precision Support",
    body: "Ministry of Education",
    role: "Principal Investigator",
    status: "Closed",
  },
  {
    period: "2024—2026",
    title:
      "The Effectiveness of a Multifaceted Mindfulness Program Integrated with Digital Technology-Assisted Learning on Healthy Aging in Community-Dwelling Older Adults: A Randomized Controlled Trial",
    body: "National Science and Technology Council (NSTC)",
    role: "Principal Investigator",
    status: "Closed",
  },
  {
    period: "2023—2024",
    title:
      "Using Virtual Reality for Experiential Learning to Improve the Learning Effectiveness of a Symptom Management Course for the Care of COVID-19 Patients",
    body: "Ministry of Education",
    role: "Principal Investigator",
    status: "Closed",
  },
  {
    period: "2023—2024",
    title:
      "Developing and Evaluating the Star Training Program on Newly Hired Nurses’ Resilience, Well-Being, and Professional Performance",
    body: "National Science and Technology Council (NSTC)",
    role: "Co-Principal Investigator",
    status: "Closed",
  },
  {
    period: "2022—2024",
    title:
      "Junior High School Technical Education Rooting Program — Medical and Nursing Curriculum at Dong-Rong Junior High School, Chiayi County",
    body: "Wang Chang-Gung Charity Trust Foundation",
    role: "Principal Investigator",
    status: "Closed",
  },
  {
    period: "2021—2022",
    title:
      "Effects of Physical Activity and Perceptions of Aging on the Perspective of Healthy Aging among Frailty Status Older Persons with Chronic Disease in the Community",
    body: "Taiwan Nurses Association",
    role: "Principal Investigator",
    status: "Closed",
  },
];

const publications = [
  {
    year: "2026",
    authors:
      "Wang, Y. R., Lin, F. M., Ye, L., Yu, L., Kang, J., Biddle, M., & Chen, C. M.",
    title:
      "Exploring the Mediating Roles of Aging Perceptions and Physical Activity on Healthy Aging Perspectives Among Older Adults With Chronic Diseases in Taiwan and China: A Cross-Sectional Study.",
    journal: "Geriatrics & Gerontology International, 26(9), e70809.",
  },
  {
    year: "2026",
    authors: "Lee, Y. C., Chang, C. H., Wang, Y. R., Tsai, Y. H., & Tai, H. C.",
    title:
      "Preparing nursing students for multilingual caregiving contexts: A quasi-experimental evaluation of a problem-based English for nursing purposes intervention.",
    journal: "Nurse Education Today, 107361.",
  },
  {
    year: "2026",
    authors: "Wang, Y. R., Hsieh, P. L., Chang, C. C., Hsiao, C. C., & Hu, M. L.",
    title:
      "Using a digital-based mindfulness curriculum to enhance healthy aging outcomes in community-dwelling older adults in Taiwan: mixed methods feasibility study.",
    journal: "JMIR Human Factors, 13, e8416.",
  },
  {
    year: "2025",
    authors: "Hsieh, P. L., Lu, Y. L., Wang, Y. R., & Chen, C. M.",
    title:
      "Exploring the Factors Related to Home Care Nurse Knowledge of, Attitudes Toward, and Care Competence for Foot Care in the Elderly.",
    journal: "The Journal of Nursing, 72(5), 58–68. (Chinese)",
  },
  {
    year: "2025",
    authors: "Chang, C. C., & Wang, Y. R.*",
    title:
      "Integrating Cultural Values and AI Technology in Nursing Education and Service Learning: Enhancing Long-Term Care at an Old Hospital.",
    journal: "Journal of Teaching Practice and Research on Higher Education, 9(1), 1–64. (Chinese)",
  },
  {
    year: "2023",
    authors: "Wang, Y. R., Lee, H. F., Hsieh, P. L., Chang, C. C., & Chen, C. M.",
    title:
      "Relationship between physical activity and perceptions of ageing from the perspective of healthy ageing among older people with frailty with chronic disease: a cross-sectional study.",
    journal: "BMC Nursing, 22, 319.",
  },
  {
    year: "2023",
    authors: "Wang, Y. R., Lee, H. F., Hsieh, P. L., & Chen, C. M.",
    title:
      "Development of the Healthy Aging Perspectives Questionnaire Among Older Adults with Chronic Disease in Taiwan.",
    journal: "Health & Social Care in the Community, 2023, 8238748.",
  },
  {
    year: "2023",
    authors: "Hsieh, P. L., Wang, Y. R., & Huang, T. C.",
    title:
      "Exploring Key Factors Influencing Nursing Students’ Cognitive Load and Willingness to Serve Older Adults: Cross-sectional Descriptive Correlational Study.",
    journal: "JMIR Serious Games, 11, e43203.",
  },
  {
    year: "2021",
    authors: "Wang, Y. R., Lee, H. F., & Chen, C. M.",
    title:
      "Validating a Brief Aging Perception Questionnaire (B-APQ) for Older Persons with Chronic Disease in Taiwan.",
    journal: "Aging & Mental Health, 25(6), 1143–1150.",
    doi: "https://doi.org/10.1080/13607863.2020.1734914",
  },
  {
    year: "2021",
    authors: "Yueh, F. J., Hsu, Y. T., Wang, Y. R., Ku, H. C., & Hsu, W. C.",
    title:
      "Efficacy of Antibiotic-Loaded Bone Cement for the Risk of Deep Infections in Total Knee Arthroplasty.",
    journal: "Formosan Journal of Medicine, 25(5), 592–602. (Chinese)",
  },
  {
    year: "2018",
    authors: "Ku, H., Cho, C., Wang, Y., Chen, L., Yueh, F., Tian, Y., Tsai, Y., & Liao, W.",
    title:
      "A Prospective Randomized Controlled Trial of Efficacy of Gum Chewing on Gastrointestinal Recovery after Laparoscopic Colorectal Surgery.",
    journal: "Journal of Society of Colon and Rectal Surgeons, 29(1), 1–7.",
  },
  {
    year: "2016",
    authors: "Lee, H., Kuo, C., Chien, T., & Wang, Y.",
    title: "A Meta-Analysis of the Effects of Coping Strategies on Reducing Nurse Burnout.",
    journal: "Applied Nursing Research, 31, 100–110.",
  },
];

const conferences = [
  {
    year: "2026",
    title:
      "Culturally Adapted, Digitally Supported Mindfulness for Healthy Aging: An 8-Week Community Pilot Study in Taiwan.",
    event: "23rd IAGG World Congress of Gerontology and Geriatrics",
    place: "Amsterdam, Netherlands",
  },
  {
    year: "2025",
    title:
      "Developing a Diverse Mindfulness Course for the Elderly in the Community — A Modified Delphi Study.",
    event: "36th International Nursing Research Congress 2025",
    place: "",
  },
  {
    year: "2024",
    title:
      "Using Virtual Reality for Experiential Learning to Improve Learning Effectiveness of Symptom Management Course for COVID-19 Patient Care.",
    event: "AMEE 2024",
    place: "",
  },
  {
    year: "2023",
    title:
      "Comparisons of the Healthy Aging Perspectives among Older Persons with Chronic Disease on Both Sides of the Taiwan Straits.",
    event: "ICN Congress 2023",
    place: "",
  },
  {
    year: "2022",
    title:
      "Effects of Physical Activity and Perceptions of Aging on the Perspective of Healthy Aging among Frail Older Persons with Chronic Disease in the Community.",
    event:
      "7th International Nursing Research Conference of World Academy of Nursing Science (7th WANS)",
    place: "Taipei, Taiwan",
  },
  {
    year: "2019",
    title:
      "Comparisons of Perceptions of Aging among Older Persons with Chronic Diseases Living on Both Sides of the Taiwan Strait.",
    event: "11th Asia/Oceania Congress of Gerontology and Geriatrics (IAGG 2019)",
    place: "Taipei, Taiwan",
  },
  {
    year: "2018",
    title:
      "Development of Brief Aging Perception Questionnaire (B-APQ) among Older Persons with Chronic Disease.",
    event: "Sigma Theta Tau International’s 29th International Nursing Research Congress",
    place: "Melbourne, Australia",
  },
  {
    year: "2017",
    title:
      "Validation of the Perceptions of Aging and Healthy Aging for Older Persons with Chronic Disease in Taiwan.",
    event: "IAGG 2017",
    place: "San Francisco, USA",
  },
  {
    year: "2016",
    title:
      "Effectiveness of Multiple Exercise of Gait Function on Older People Living in the Community among Young-Old and Old-Old Elderly.",
    event: "2016 Cochrane Colloquium",
    place: "Seoul, Korea",
  },
  {
    year: "2016",
    title:
      "Meta-analysis of Exercise for Gait and Balance in Older People Living in the Community.",
    event: "Sixth Pan-Pacific Nursing Conference and First Colloquium on Chronic Illness Care",
    place: "Hong Kong",
  },
];

const education = [
  {
    date: "2012—2020",
    degree: "PhD, International Doctoral Program in Nursing",
    institution: "National Cheng Kung University · College of Medicine",
    location: "Tainan, Taiwan",
  },
  {
    date: "2017",
    degree: "Visiting Scholar",
    institution: "University of California, San Francisco",
    location: "John A. Hartford Center of Gerontological Nursing Excellence",
  },
  {
    date: "2006—2008",
    degree: "Master of Science in Nursing",
    institution: "National Cheng Kung University",
    location: "Tainan, Taiwan",
  },
  {
    date: "1990—2002",
    degree: "Bachelor of Nursing",
    institution: "Central Taiwan University of Science and Technology",
    location: "Taichung, Taiwan",
  },
];

const experience = [
  {
    date: "2026—Present",
    role: "Assistant Professor",
    organization: "National Sun Yat-sen University",
    detail: "Department of Nursing, College of Medicine",
  },
  {
    date: "2021—2026",
    role: "Assistant Professor",
    organization: "Chang Gung University of Science and Technology",
    detail: "Department of Nursing · Chiayi Campus",
  },
  {
    date: "2008—2020",
    role: "Head Nurse",
    organization: "Chi Mei Medical Center, Liouying",
    detail: "Medical Ward and Community Nursing",
  },
  {
    date: "2009—2013",
    role: "Adjunct Instructor",
    organization: "Fooyin University",
    detail: "School of Nursing",
  },
  {
    date: "2004—2006",
    role: "Clinical Specialist",
    organization: "Chi Mei Medical Center, Liouying",
    detail: "Department of Intensive Care Medicine",
  },
  {
    date: "1998—2004",
    role: "Registered Nurse",
    organization: "Chung Shan Medical University Hospital",
    detail: "Respiratory Care Center",
  },
];

const focusAreas = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Healthy ageing",
    text: "How perceptions of ageing, physical activity, frailty, and chronic illness shape later-life wellbeing.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Mindfulness × technology",
    text: "Culturally adapted digital interventions that make mindfulness accessible in community settings.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Nursing education",
    text: "AI, virtual reality, and evidence-based learning designs that strengthen clinical education and care.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <div className="section-heading__row">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ScholarlyTab>("publications");

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  const navItems = [
    ["About", "#about"],
    ["Research", "#research"],
    ["Publications", "#publications"],
    ["Experience", "#experience"],
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Yu-Rung Wang home">
          <span className="wordmark__monogram">YW</span>
          <span className="wordmark__text">
            <strong>Yu-Rung Wang</strong>
            <small>PhD · RN · Researcher</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="mailto:daisy025@gmail.com">
            Get in touch <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label} <ChevronRight size={16} />
              </a>
            ))}
            <a href="mailto:daisy025@gmail.com">
              Email Yu-Rung <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__grain" aria-hidden="true" />
          <div className="hero__content">
            <div className="hero__copy">
              <p className="hero__kicker">
                <span /> Nursing science for longer, healthier lives
              </p>
              <h1>
                Care, evidence,
                <br />
                <em>and human possibility.</em>
              </h1>
              <p className="hero__intro">
                I am <strong>Yu-Rung Wang</strong>, a nurse scientist and educator advancing
                healthy ageing through mindfulness, physical activity, digital innovation,
                and compassionate community care.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#research">
                  Explore my research <ArrowDown size={17} />
                </a>
                <a className="button button--ghost" href="mailto:daisy025@gmail.com">
                  <Mail size={17} /> Email me
                </a>
              </div>
            </div>

            <div className="hero__visual">
              <div className="hero__image-frame">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663414221053/ZLpAaHwNavLybghZ.jpg"
                  alt="An older Asian woman practicing mindfulness meditation in a green park"
                />
                <div className="hero__image-wash" />
              </div>
              <div className="hero__note hero__note--top">
                <span className="note-dot" />
                <p>
                  <strong>Current appointment</strong>
                  Assistant Professor, National Sun Yat-sen University
                </p>
              </div>
              <div className="hero__note hero__note--bottom">
                <span className="hero__note-number">7</span>
                <p>recent funded research projects</p>
              </div>
              <div className="hero__orbit" aria-hidden="true">
                <span>evidence</span>
                <span>practice</span>
                <span>impact</span>
              </div>
            </div>
          </div>

          <div className="hero__footer">
            <p>
              <MapPin size={15} /> Kaohsiung, Taiwan
            </p>
            <div className="hero__metrics" aria-label="Academic profile statistics">
              <span><strong>12</strong> Publications</span>
              <span><strong>10</strong> Conferences</span>
              <span><strong>25+</strong> Years in nursing</span>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about__intro reveal">
            <span className="eyebrow">Profile / 01</span>
            <p className="about__statement">
              Bridging <em>clinical wisdom</em> and emerging technology to help older adults
              live with greater health, agency, and dignity.
            </p>
          </div>
          <div className="about__body reveal">
            <div className="about__label">A practice-informed perspective</div>
            <div>
              <p>
                My scholarship grows from more than two decades across bedside nursing,
                intensive care, community health, leadership, and higher education. This
                continuum keeps my research grounded in the real needs of patients, families,
                nurses, and communities.
              </p>
              <p>
                At the Department of Nursing, College of Medicine, National Sun Yat-sen
                University, I investigate practical pathways to healthy ageing—combining
                behavioural science with AI-assisted learning, immersive technology, and
                culturally responsive care.
              </p>
            </div>
          </div>
        </section>

        <section className="focus-section section">
          <SectionHeading
            eyebrow="Research focus / 02"
            title="Three connected lines of inquiry"
            text="From lived experience to scalable intervention, each line is designed to translate evidence into meaningful care."
          />
          <div className="focus-grid">
            {focusAreas.map((item) => {
              const Icon = item.icon;
              return (
                <article className="focus-card reveal" key={item.number}>
                  <div className="focus-card__top">
                    <span>{item.number}</span>
                    <Icon size={23} strokeWidth={1.6} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="projects-section section" id="research">
          <SectionHeading
            eyebrow="Funded research / 03"
            title="Research projects"
            text="Seven recent projects spanning healthy ageing, digital mindfulness, generative AI, immersive learning, and nursing workforce wellbeing."
          />

          <div className="project-list">
            {researchProjects.map((project, index) => (
              <article className="project-card reveal" key={`${project.period}-${project.title}`}>
                <div className="project-card__index">{String(index + 1).padStart(2, "0")}</div>
                <div className="project-card__main">
                  <div className="project-card__meta">
                    <span>{project.period}</span>
                    <span className={project.status === "Underway" ? "status status--live" : "status"}>
                      {project.status === "Underway" && <i />}
                      {project.status}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <div className="project-card__footer">
                    <span>{project.body}</span>
                    <strong>{project.role}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="scholarship-section section" id="publications">
          <div className="scholarship-section__heading">
            <SectionHeading
              eyebrow="Scholarship / 04"
              title="Published & presented"
              text="Peer-reviewed articles and international conference contributions from 2016 to 2026."
            />
            <div className="tab-switcher" role="tablist" aria-label="Scholarly work type">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "publications"}
                className={activeTab === "publications" ? "active" : ""}
                onClick={() => setActiveTab("publications")}
              >
                Publications <span>12</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "conferences"}
                className={activeTab === "conferences" ? "active" : ""}
                onClick={() => setActiveTab("conferences")}
              >
                Conferences <span>10</span>
              </button>
            </div>
          </div>

          {activeTab === "publications" ? (
            <div className="publication-list" role="tabpanel">
              {publications.map((publication, index) => (
                <article className="publication-row" key={`${publication.year}-${index}`}>
                  <div className="publication-row__number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="publication-row__year">{publication.year}</div>
                  <div className="publication-row__content">
                    <p className="publication-row__authors">{publication.authors}</p>
                    <h3>{publication.title}</h3>
                    <p className="publication-row__journal">{publication.journal}</p>
                  </div>
                  {publication.doi ? (
                    <a
                      className="publication-row__link"
                      href={publication.doi}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open publication DOI"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <span className="publication-row__mark"><BookOpen size={17} /></span>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="conference-grid" role="tabpanel">
              {conferences.map((conference, index) => (
                <article className="conference-card" key={`${conference.year}-${index}`}>
                  <div className="conference-card__meta">
                    <span>{conference.year}</span>
                    <Presentation size={18} />
                  </div>
                  <h3>{conference.title}</h3>
                  <p>{conference.event}</p>
                  {conference.place && <small>{conference.place}</small>}
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="journey-section section" id="experience">
          <SectionHeading
            eyebrow="Academic journey / 05"
            title="From clinical care to scholarship"
            text="A career built across direct care, nursing leadership, research, and education."
          />

          <div className="journey-layout">
            <div className="journey-column">
              <div className="journey-column__title">
                <Microscope size={20} />
                <h3>Experience</h3>
              </div>
              <div className="timeline">
                {experience.map((item) => (
                  <article className="timeline-item" key={`${item.date}-${item.role}`}>
                    <span className="timeline-item__dot" />
                    <time>{item.date}</time>
                    <h4>{item.role}</h4>
                    <p>{item.organization}</p>
                    <small>{item.detail}</small>
                  </article>
                ))}
              </div>
              <div className="leadership-note">
                <span>Leadership</span>
                <p>
                  Department Leader, Chang Gung University of Science and Technology,
                  Chiayi Campus <strong>2025—2026</strong>
                </p>
              </div>
            </div>

            <div className="journey-column journey-column--education">
              <div className="journey-column__title">
                <GraduationCap size={21} />
                <h3>Education</h3>
              </div>
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-item" key={`${item.date}-${item.degree}`}>
                    <time>{item.date}</time>
                    <h4>{item.degree}</h4>
                    <p>{item.institution}</p>
                    <small>{item.location}</small>
                  </article>
                ))}
              </div>
              <blockquote>
                “Research is most meaningful when it returns to the community as better care.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-section__inner">
            <span className="eyebrow eyebrow--light">Collaboration / 06</span>
            <div className="contact-section__grid">
              <div>
                <h2>Let’s advance healthy ageing, together.</h2>
                <p>
                  I welcome thoughtful conversations about research, teaching, community
                  partnerships, and international collaboration in nursing and gerontology.
                </p>
              </div>
              <div className="contact-section__actions">
                <a className="contact-mail" href="mailto:daisy025@gmail.com">
                  <span>
                    <small>Email</small>
                    daisy025@gmail.com
                  </span>
                  <ArrowUpRight size={22} />
                </a>
                <p><MapPin size={15} /> No. 70 Lien-hai Road, Kaohsiung, Taiwan 804201</p>
                <p>+886-7-5252000 ext. 7381</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer__brand">
          <span className="wordmark__monogram wordmark__monogram--footer">YW</span>
          <p>
            <strong>Yu-Rung Wang, PhD, RN</strong>
            Nursing research for healthier ageing.
          </p>
        </div>
        <p className="footer__note">Academic profile · Curriculum vitae updated 2026</p>
        <a href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}

export default Home;
