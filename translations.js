(() => {
  const english = {
    "Moi": "About me",
    "Passions": "Hobbies",
    "~/cybersécurité": "~/cybersecurity",
    "INTERACTIF / TERMINAL": "INTERACTIVE / TERMINAL",
    "toujours curieux": "curiosity mode",
    "01 / PROJETS": "01 / PROJECTS",
    "02 / COMPÉTENCES": "02 / SKILLS",
    "04 / PARCOURS": "04 / JOURNEY",
    "05 / PASSIONS": "05 / HOBBIES",
    "PROJET_01": "PROJECT_01",
    "PROJET_02": "PROJECT_02",
    "PROJET_03": "PROJECT_03",
    "PROJET_04": "PROJECT_04",
    "PROJET_05": "PROJECT_05",
    "01 / EXPLORER": "01 / EXPLORE",
    "02 / RÉFLÉCHIR": "02 / THINK",
    "03 / BOUGER": "03 / MOVE",
    "PRÊT À ÉCHANGER": "CONNECTION_READY",
    "Interface de contrôle qualité des données de volatilité": "Volatility QA Interface",
    "Laboratoires de cybersécurité &amp; défis CTF": "Labs cyber &amp; CTF",
    "© 2026 Louis Vanlaer — Portfolio cybersécurité": "© 2026 Louis Vanlaer — Cybersecurity Portfolio",
    'Projets': 'Projects', 'Compétences': 'Skills', 'Parcours': 'Background',
    'Ouvrir le terminal': 'Open terminal', 'Terminal interactif': 'Interactive terminal',
    'portfolio • interactif': 'portfolio • interactive', 'Exécuter': 'Run',
    'projets': 'projects', 'certificats de formation': 'training certificates', 'cybersécurité': 'cybersecurity',
    'Ce que je construis': 'What I build', 'Mini Blokus en Python': 'Mini Blokus in Python',
    'Mai 2025': 'May 2025', 'Septembre 2026': 'September 2026', 'Juillet': 'July', 'août 2026': 'August 2026', 'Janvier 2026': 'January 2026',
    'Projet de programmation réalisé à l’EPITA : une version simplifiée du jeu de société Blokus, développée en Python.': 'Programming project at EPITA: a simplified version of the Blokus board game, developed in Python.',
    'Jeu de société': 'Board game', 'Projet académique': 'Academic project', 'Voir les détails →': 'View details →',
    'Laboratoire SOC — Détection et réponse à incident': 'SOC Lab — Detection and Incident Response',
    'Projet prévu : centraliser des journaux Linux avec Wazuh, détecter un scénario suspect, analyser les alertes et documenter une réponse à incident dans un laboratoire local.': 'Planned project: centralize Linux logs with Wazuh, detect suspicious activity, analyze alerts and document incident response in a local lab.',
    'À réaliser': 'Planned',
    'Étude de cas en groupe sur la sécurité d’une entreprise de technologies financières spécialisée dans le paiement : classification des actifs, gouvernance des données et proposition d’un plan d’action priorisé.': 'Group case study on payment fintech security: asset classification, data governance and a proposed prioritized action plan.',
    'Analyse des risques': 'Risk analysis', 'C-I-D': 'CIA', 'Gouvernance': 'Governance',
    'Interface Python de contrôle qualité permettant de comparer des données, détecter des anomalies et faciliter leur visualisation.': 'Python quality assurance interface for comparing data, detecting anomalies and visualizing results.',
    'En savoir plus →': 'Learn more →',
    'Projet de recherche — Authentification Web2 / Web3': 'Research Project — Web2 / Web3 Authentication',
    'Projet en équipe · EPITA': 'Team project · EPITA',
    'Étude d’une application combinant connexion classique et authentification par portefeuille MetaMask, avec gestion des sessions par JWT.': 'Study of an application combining traditional login with MetaMask wallet authentication and JWT session management.',
    'Ma contribution :': 'My contribution:',
    'préparation des livrables et du support de soutenance, structuration des explications sur l’architecture et les mécanismes d’authentification, puis présentation orale du projet et de ses enjeux de sécurité.': 'preparing deliverables and presentation materials, structuring explanations of the architecture and authentication mechanisms, and presenting the project and its security implications.',
    'Documentation technique': 'Technical documentation', 'Synthèse': 'Synthesis', 'Communication orale': 'Public speaking', 'Travail en équipe': 'Teamwork', 'Voir la présentation': 'View presentation',
    'Compétences techniques': 'Technical skills',
    'Cybersécurité systèmes & réseaux': 'Systems & network cybersecurity',
    'Programmation (Python, C, Rust)': 'Programming (Python, C, Rust)',
    'IA générative & outils IA': 'Generative AI & AI tools',
    'Analyse des risques & protection des données': 'Risk analysis & data protection',
    'Laboratoires de cybersécurité & défis CTF': 'Cyber labs & CTF',
    'Niveaux indicatifs · En progression au fil de ma formation et de mes projets.': 'Indicative levels · Developing through my studies and projects.',
    'Caractères': 'Personal qualities', 'Curieux': 'Curious', 'Créatif': 'Creative', 'Sociable': 'Sociable', 'Méthodique': 'Methodical',
    'Deux parcours suivis sur LinkedIn Learning pour compléter ma formation à l’EPITA en cybersécurité et en intelligence artificielle.': 'Two LinkedIn Learning paths complementing my cybersecurity and artificial intelligence studies at EPITA.',
    'CYBERSÉCURITÉ': 'CYBERSECURITY', 'Préparer votre carrière dans la cybersécurité': 'Career Essentials in Cybersecurity',
    'Microsoft et LinkedIn · Certificat d’accomplissement': 'Microsoft and LinkedIn · Certificate of completion',
    'Obtenu le': 'Awarded on', '9 septembre 2026': '9 September 2026', '1er septembre 2026': '1 September 2026',
    'Cybersécurité': 'Cybersecurity', 'Sensibilisation à la sécurité de l’information': 'Information security awareness',
    'Gestion des menaces et des vulnérabilités': 'Threat and vulnerability management', 'Voir le certificat ↗': 'View certificate ↗',
    'INTELLIGENCE ARTIFICIELLE': 'ARTIFICIAL INTELLIGENCE', 'Préparer votre carrière dans l’IA générative': 'Career Essentials in Generative AI',
    'IA générative': 'Generative AI', 'Intelligence artificielle': 'Artificial intelligence', 'Éthique de l’informatique': 'Computer ethics',
    'EPITA — L3 Cybersécurité': 'EPITA — Third-year Cybersecurity',
    'Sécurité réseaux, Linux avancé, Rust sécurisé, Active Directory, informatique en nuage, défense informatique, analyse des risques et cryptographie.': 'Network security, advanced Linux, secure Rust, Active Directory, cloud, Blue Team, risk analysis and cryptography.',
    'Été 2026': 'Summer 2026', 'LSEG / Refinitiv — Stage Python': 'LSEG / Refinitiv — Python Internship',
    'Développement d’un outil de contrôle qualité et de visualisation de données en Python au sein d’une équipe d’analyse de données.': 'Developing a Python QA and data visualization tool within an Analytics team.',
    'Février à Mai 2026': 'February to May 2026', 'Epitech — L2 Semestre à l’étranger à Barcelone': 'Epitech — Second-year Semester Abroad in Barcelona',
    'Semestre d’études à l’étranger en deuxième année.': 'Semester abroad during my second year.',
    "Stage d'un mois": 'One-month internship', 'Association Saint-Raphaël — Agent technique': 'Association Saint-Raphaël — Technical Assistant',
    'Stage en tant qu’agent technique au sein de l’association Saint-Raphaël.': 'Internship as a technical assistant at Association Saint-Raphaël.',
    'Voir mon rapport de stage (PDF) ↗': 'View my internship report (PDF) ↗',
    'EPITA — L1 Cybersécurité': 'EPITA — First-year Cybersecurity', "1ère année au bachelor cybersécurité d'Epita.": "First year of EPITA's Bachelor's degree in Cybersecurity.",
    'Baccalauréat': 'French Baccalaureate', 'Lycée Frédéric Mistral — Bac général': 'Lycée Frédéric Mistral — General Baccalaureate',
    'Spécialités mathématiques et physique-chimie.': 'Specializations in mathematics and physics-chemistry.',
    'Mes passions': 'My interests', 'cat passions.txt': 'cat interests.txt', 'Voyages': 'Travel', 'Échecs': 'Chess', 'Sport': 'Sport',
    'Depuis mon enfance, j’ai visité plus de dix pays et découvert différentes cultures. Ces voyages m’ont ouvert à d’autres façons de vivre et ont nourri ma curiosité pour le monde.': 'Since childhood, I have visited more than ten countries and discovered different cultures. These trips have introduced me to other ways of life and fueled my curiosity about the world.',
    'Mon père m’a appris à jouer aux échecs à l’âge de cinq ans, et nous continuons à jouer ensemble. Même si j’ai arrêté les tournois il y a plusieurs années, je joue quotidiennement en ligne, où mon classement se situe autour de 1 700 Elo.': 'My father taught me chess when I was five, and we still play together. Although I stopped playing tournaments several years ago, I play online daily, with a rating of around 1,700 Elo.',
    'Le sport m’aide à me détendre et à déconnecter lorsque je passe plus de dix heures par jour devant un ordinateur. C’est un moment pour me vider la tête et retrouver un équilibre au quotidien.': 'Sport helps me relax and switch off when I spend more than ten hours a day in front of a computer. It gives me time to clear my head and maintain a healthy balance in my daily life.',
    'Envie d’en savoir plus sur mon parcours ?': 'Want to learn more about my background?',
    'Explore le terminal avec': 'Explore the terminal with', 'pour mes projets,': 'for my projects,', 'pour mon profil ou': 'for my profile or', 'pour me contacter.': 'to get in touch.', 'Retour au terminal ↑': 'Back to terminal ↑',
    'Portrait de Louis Vanlaer': 'Portrait of Louis Vanlaer', 'Vue de Barcelone depuis le parc Güell': 'View of Barcelona from Park Güell', 'Partie d’échecs entre deux joueurs': 'Two players playing chess',
    'Envoyer un e-mail à Louis Vanlaer': 'Email Louis Vanlaer', 'Profil LinkedIn de Louis Vanlaer': "Louis Vanlaer's LinkedIn profile", 'Profil GitHub de Louis Vanlaer': "Louis Vanlaer's GitHub profile", 'Profil TryHackMe de Louis Vanlaer': "Louis Vanlaer's TryHackMe profile",
    'Résultats du terminal': 'Terminal output', 'Commande du terminal': 'Terminal command',
    'Voir le certificat en cybersécurité (PDF, nouvel onglet)': 'View cybersecurity certificate (PDF, new tab)',
    'Voir le certificat en IA générative (PDF, nouvel onglet)': 'View generative AI certificate (PDF, new tab)'
  };
  english['Explorer mes projets →'] = 'Explore my projects →';
  const projectsEnglish = {
    blokus: ['Mini Blokus in Python', 'Developing a simplified version of the Blokus board game in Python as part of my studies at EPITA.', 'Objective: translate the rules into programming logic to create a digital board game.', '<strong>My contribution:</strong> developing the application code in Python.'],
    soc: [
      'SOC Lab — Detection and Incident Response',
      'Planned project — objective: follow a simulated incident from log collection to response using Wazuh and a Linux test machine.',
      'Preparation: set up working virtualization software, download the images and allocate resources for the Wazuh server and Linux VM.',
      'Installation: set up Wazuh and its agent on the Linux VM, verify communication and draw a simple lab diagram.',
      'Collection: verify SSH log ingestion, identify a normal connection and explain the useful fields: date, machine, user and source IP address.',
      'Detection: simulate a limited series of failed SSH logins on a lab test account, followed by a successful login. Locate the events and alerts from existing rules, identify the triggered rule and distinguish a typing error from repeated behavior.',
      'Investigation: reconstruct the timeline, identify the account and source, examine the successful login and write an incident report with evidence, estimated severity and analysis limitations. An alert alone does not prove a compromise.',
      'Response: test a temporary block of the test source on the VM, verify its effect, then remove the block and confirm normal operation. Keep console access to avoid locking yourself out.',
      'Deliverables: produce a reproducible README, a diagram, alert screenshots and a short report covering the timeline, response, verification and improvements. Explain in your own words how a log becomes an alert.',
      'Success criteria: reproduce a complete scenario, explain the observed evidence and demonstrate a reversible response. Custom rules and automated responses remain follow-up work after this first lab.'
    ],
    paynora: ['Mission Paynora — Asset Security and Governance', 'Group academic case study on Paynora, a payment fintech preparing a cloud migration. Objective: propose asset protection aligned with risks and business needs.', 'Work completed: defined four classification levels, from public to critical; analyzed confidentiality, integrity and availability (CIA); and formalized responsibilities in a RACI matrix.', 'Recommendations: protect data at rest, in transit and in use; define retention and destruction policies; apply encryption, access controls, backups and traceability.', 'Proposed plan: five prioritized actions over twelve months, with an estimated budget of €115,000 within a €120,000 allocation. Trade-offs explain residual risks and deferred measures, with a summary for the steering committee.'],
    qa: ['Volatility QA Interface — Internship at LSEG / Refinitiv', 'During my internship at LSEG / Refinitiv, I developed a Python application with Streamlit to support the ACE team in quality assurance of volatility data.<br>The tool compares market data and highlights discrepancies requiring review.<br>Charts and indicators help analyze results and assess the quality of volatility models.<br>I also built an Excel export and wrote documentation to make the application easier to use and maintain.', '<a class="btn" href="documents/Rapport_de_Stage_LSEG.pdf" target="_blank" rel="noopener noreferrer">Read my internship report (PDF) ↗</a>']
  };
  const frenchProjects = { ...projectData };
  const frenchPhrases = [...profilePhrases];
  const frenchHelp = responses.help;
  const frenchMap = responses.nmap;
  const frenchWhoami = responses.whoami;
  const description = document.querySelector('meta[name="description"]');
  const frenchDescription = description.content;
  const textBindings = [];
  const attributeBindings = [];
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  // Keep references to text nodes so switching languages preserves links, icons and listeners.
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, #typed-profile, #term-output, #detail, .language-switch')) continue;
    const translation = english[normalize(node.nodeValue)];
    if (translation) textBindings.push({ node, fr: node.nodeValue, en: node.nodeValue.replace(/\S[\s\S]*\S|\S/, translation) });
  }
  document.querySelectorAll('[alt], [aria-label], [title]').forEach(node => {
    for (const attribute of ['alt', 'aria-label', 'title']) {
      const fr = node.getAttribute(attribute);
      if (fr && english[fr]) attributeBindings.push({ node, attribute, fr, en: english[fr] });
    }
  });
  function setLanguage(language) {
    const en = language === 'en';
    document.documentElement.lang = language;
    document.title = en ? 'Louis Vanlaer — Cybersecurity Portfolio' : 'Louis Vanlaer — Portfolio cybersécurité';
    textBindings.forEach(binding => { binding.node.nodeValue = binding[language]; });
    attributeBindings.forEach(binding => binding.node.setAttribute(binding.attribute, binding[language]));
    description.content = en ? 'Cybersecurity portfolio of Louis Vanlaer, a student at EPITA.' : frenchDescription;
    profilePhrases = en ? ["Hello, I'm Louis Vanlaer, a third-year cybersecurity student at EPITA.", 'I am looking for a six-month cybersecurity internship starting in February 2027.', 'Available to relocate anywhere in France.'] : [...frenchPhrases];
    typedProfile.parentElement.setAttribute('aria-label', profilePhrases.join(' '));
    startProfileAnimation();
    Object.assign(projectData, en ? projectsEnglish : frenchProjects);
    if (activeProject) renderProject(activeProject);
    responses.help = en ? `Available commands:
  whoami      My profile
  status      My internship search
  projects    My project titles
  certifications  My Microsoft and LinkedIn certificates
  hobbies     My interests
  nmap        Portfolio sections
  contact     My contact details and profiles
  clear       Clear the terminal` : frenchHelp;
    responses.nmap = en ? `Portfolio map:
  Profile      Introduction and internship search
  Projects     Work, contributions and deliverables
  Skills       Areas of study and personal qualities
  Certifications  Microsoft and LinkedIn learning paths and certificates
  Background   Education and experience
  Interests    Travel, chess and sport` : frenchMap;
    responses.whoami = en ? 'Hello, I am Louis Vanlaer, a third-year Cybersecurity student at EPITA. Passionate about this field, I develop my skills through hands-on labs and personal projects. Curious and open to the different areas of cybersecurity, I am looking for a six-month internship starting in February 2027.' : frenchWhoami;
    output.textContent = '';
    commandHistory.forEach(command => runCommand(command, false));
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    try { localStorage.setItem('portfolio-language', language); } catch { /* Language switching also works when storage is unavailable. */ }
  }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  let language = 'fr';
  try { if (localStorage.getItem('portfolio-language') === 'en') language = 'en'; } catch { /* Default to French. */ }
  setLanguage(language);
})();
