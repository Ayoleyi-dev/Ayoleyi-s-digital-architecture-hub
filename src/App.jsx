import React, { useState } from 'react';
import { LayoutDashboard, Beaker, Terminal, Calendar, Sun, Moon, User, Mail, Code, Database, Dna, Globe, TrendingUp, Smartphone, ExternalLink, GitBranch, Briefcase, Megaphone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- HUB COMPONENTS ---

const Profile = () => (
  <div className="space-y-6">
    {/* NEW ANIMATED HERO SECTION */}
    <div className="relative w-full h-48 md:h-64 rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 mb-6 flex items-center justify-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      {/* Animated Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] md:left-[25%] text-[var(--dynamic-accent)] opacity-80"
      >
        <Dna size={80} strokeWidth={1.5} />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[15%] md:right-[25%] text-emerald-500 opacity-80"
      >
        <Database size={80} strokeWidth={1.5} />
      </motion.div>

      <div className="z-10 flex flex-col items-center">
        <div className="px-6 py-2 border border-slate-700 bg-slate-800/80 backdrop-blur-md rounded-full shadow-2xl">
          <span className="font-mono text-sm tracking-widest text-slate-300">
            SYSTEM.INITIALIZE(<span className="text-[var(--dynamic-accent)]">"BIO_DATA_MATRIX"</span>)
          </span>
        </div>
      </div>
    </div>

    {/* EXISTING PROFILE CONTENT */}
    <div className="p-8 bg-slate-200/50 dark:bg-slate-800/50 rounded-3xl border border-slate-300 dark:border-slate-700 backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-2">Ayoleyi Gbenga-Ayodeji Marvelous</h2>
      <p className="text-lg text-[var(--dynamic-accent)] font-bold mb-6 tracking-wide">Bioinformatics Researcher | Certified Data Analyst | Digital Architect</p>
      <p className="text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed text-lg">
        Currently advancing through the 300-level Biochemistry program at UNILAG. I am actively transitioning from data analytics into bioinformatics and Computer-Aided Drug Discovery (CADD), bridging biological sciences with data-driven computational insights.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors">
        <Dna className="text-[var(--dynamic-accent)] mb-4" size={28} />
        <h3 className="font-bold text-lg mb-2">Computational Biology & CADD</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Homology modeling (PyMOL, SWISS-MODEL), molecular docking (AutoDock Vina), and chemoinformatics (RDKit, Biopython) within a customized WSL Ubuntu environment.</p>
      </div>
      
      <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors">
        <Database className="text-[var(--dynamic-accent)] mb-4" size={28} />
        <h3 className="font-bold text-lg mb-2">Data Analytics & ETL</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Certified analyst proficient in Python (Pandas, BeautifulSoup), T-SQL, R, and Power BI. Experienced in building ETL pipelines, dimensional modeling, and advanced Excel dashboards.</p>
      </div>
      
      <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors">
        <Code className="text-[var(--dynamic-accent)] mb-4" size={28} />
        <h3 className="font-bold text-lg mb-2">Digital Architecture</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Deployment of modern React frameworks (Vite), vanilla web technologies, Bash scripting, and comprehensive brand identity management via Git/GitHub workflows.</p>
      </div>
    </div>

    <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 mt-6">
      <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
        <Calendar className="text-[var(--dynamic-accent)]" size={24} />
        Professional Experience
      </h3>
      <div className="space-y-6 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-6">
        <div className="relative">
          <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-[var(--dynamic-accent)] shadow-[0_0_10px_var(--dynamic-accent)]" />
          <h4 className="font-bold text-lg">Assistant Tutor & Community Manager</h4>
          <p className="text-[var(--dynamic-accent)] font-bold text-sm mb-2">ULLSSA Skill Up Programme, UNILAG | May 2026 – Present</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Managing a 10-week intensive data analysis track. Responsible for curriculum delivery, student progress tracking, and providing technical mentorship in data analytics software.</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700" />
          <h4 className="font-bold text-lg">SIWES Industrial Trainee</h4>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-2">NAFDAC | 2025</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Completed a 3-month industrial attachment, gaining exposure to regulatory laboratory environments, quality assurance protocols, and operational workflows.</p>
        </div>
      </div>
    </div>
  </div>
);

const BioLab = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI Homology', 'Chemoinformatics', 'Pharmacoinformatics', 'Novel Discoveries'];

  const researchProjects = [
    {
      id: 1,
      title: 'AI-Driven Homology & Targeted Drug Discovery',
      category: 'AI Homology',
      date: 'June 2026',
      description: 'End-to-end dry-lab computational pipeline mapping protein target configurations. Features 3D homology modeling using SWISS-MODEL and active molecular docking simulations using AutoDock Vina.',
      tags: ['Python', 'AutoDock Vina', 'PyMOL']
    },
    {
      id: 2,
      title: 'Agrospectra: NDVI Crop Health Analysis',
      category: 'Pharmacoinformatics',
      date: 'July 2026',
      description: 'A specialized remote sensing pipeline designed to evaluate agricultural vegetation vitality. Processes multi-spectral image bands to calculate NDVI using matrix mathematics.',
      tags: ['Python', 'NumPy', 'OpenCV']
    },
    {
      id: 3,
      title: 'Automated Drug Discovery Pipeline',
      category: 'Chemoinformatics',
      date: 'June 2026',
      description: 'Bridging bio- and chemoinformatics to automate high-throughput virtual screening of small molecule libraries.',
      tags: ['R', 'Virtual Screening', 'Chemoinformatics']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? researchProjects 
    : researchProjects.filter(project => project.category === activeCategory);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-200/50 dark:bg-slate-800/50 rounded-3xl border border-slate-300 dark:border-slate-700 backdrop-blur-sm gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <Beaker className="text-[var(--dynamic-accent)]" size={24} /> 
            Computational Biology Lab
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Categorized research archive and computational workflows.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 flex flex-col h-[600px] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-sm p-1">
          <div className="flex-1 w-full bg-slate-50 dark:bg-slate-950 rounded-[22px] p-6 flex flex-col overflow-hidden">
            
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-[var(--dynamic-accent)] text-white shadow-md' 
                      : 'bg-slate-200 dark:bg-slate-900 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg group-hover:text-[var(--dynamic-accent)] transition-colors">{project.title}</h3>
                      <span className="text-xs font-mono text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded-md">{project.date}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-[var(--dynamic-accent)] bg-[var(--dynamic-accent)]/10 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filteredProjects.length === 0 && (
                <div className="text-center text-slate-500 py-10">
                  No projects currently populated in this category.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="h-[600px] p-6 bg-[#0c0c0c] rounded-3xl shadow-xl font-mono text-xs text-slate-300 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--dynamic-accent)] to-transparent opacity-50" />
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-800">
            <Terminal size={14} className="text-emerald-500" />
            <span className="text-slate-400 uppercase tracking-widest font-bold">WSL Ubuntu Runtime</span>
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto opacity-90">
            <p><span className="text-emerald-500 font-bold">marvelous@probook:~$</span> autodock_vina --receptor protein.pdbqt --ligand ligand.pdbqt</p>
            <p className="text-slate-400">[INFO] Performing molecular docking...</p>
            <p className="text-slate-400">[INFO] Best binding energy: -8.4 kcal/mol</p>
            
            <p className="text-emerald-500 font-bold mt-4">marvelous@probook:~$<span className="text-slate-300"> python3 run_ndvi_analysis.py</span></p>
            <p className="text-blue-400">Loading Agrospectra geospatial data...</p>
            <p className="text-slate-500">Processing NDVI bands... 100%</p>
            
            <p className="text-emerald-500 font-bold mt-4">marvelous@probook:~$<span className="text-slate-300"> sqlcmd -S localhost -d HealthWarehouse</span></p>
            <p className="text-blue-400">1&gt; SELECT COUNT(*) FROM PatientVisits;</p>
            <p className="text-slate-500">2&gt; GO</p>
            <p className="text-[var(--dynamic-accent)] animate-pulse mt-2">_</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  const dataProjects = [
    {
      title: 'Public Health Data Warehouse & Analytics Pipeline',
      tool: 'T-SQL & Power BI',
      description: 'Engineered a relational data warehouse using synthetic hospital data to perform complex SQL analysis and visualize healthcare metrics.',
      status: 'Completed',
      link: 'https://github.com/Ayoleyi-dev/Public-Health-Data-Warehouse-Analytics-Pipeline'
    },
    {
      title: 'Jumia Phone Market Web Scraping',
      tool: 'Python & BeautifulSoup',
      description: 'Built an automated ETL pipeline to scrape e-commerce data, extracting pricing and specifications for market trend analysis.',
      status: 'Completed',
      link: 'https://github.com/Ayoleyi-dev/Jumia-Phone-Market-Webscraping-EDA'
    },
    {
      title: 'AI Document Extraction QA & Annotation Validator',
      tool: 'Python & JSON',
      description: 'A programmatic verification framework executing automated type-enforcement and validation checks to isolate structural schema anomalies.',
      status: 'Completed',
      link: 'https://github.com/Ayoleyi-dev/AI-Document-Extraction-QA-Validator'
    },
    {
      title: 'COVID-19 Nigeria Power BI Dashboard',
      tool: 'Power BI & Excel',
      description: 'Developed an interactive dashboard tracking COVID-19 metrics across Nigeria, enabling data-driven public health insights.',
      status: 'Completed',
      link: 'https://github.com/Ayoleyi-dev/COVID-19-Nigeria-PowerBI-Dashboard'
    },
    {
      title: 'Spotify EDA & Chocolate Sales Dashboards',
      tool: 'Python & Advanced Excel',
      description: 'Conducted Exploratory Data Analysis on streaming data and built advanced Pivot Table dashboards for retail sales tracking.',
      status: 'Completed',
      link: 'https://github.com/Ayoleyi-dev/Excel-Chocolate-Sales-Analysis'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-200/50 dark:bg-slate-800/50 rounded-3xl border border-slate-300 dark:border-slate-700 backdrop-blur-sm gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <LayoutDashboard className="text-[var(--dynamic-accent)]" size={24} /> 
            Data Analytics Portfolio
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Certified analysis across Python, SQL, Power BI, and R ecosystems.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
          <h3 className="font-bold mb-8 text-center text-lg">Core Technical Proficiency</h3>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"/> Python (Pandas/BS4)</span>
                <span>Advanced</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-blue-500 h-full w-[90%]" /></div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"/> T-SQL & Power BI</span>
                <span>Advanced</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-emerald-500 h-full w-[85%]" /></div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"/> Bash & WSL/Ubuntu</span>
                <span>Intermediate</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-purple-500 h-full w-[75%]" /></div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 space-y-4">
          <h3 className="font-bold px-2 flex items-center gap-2">
            <Database size={18} className="text-[var(--dynamic-accent)]" />
            Applied Data Projects (Live from GitHub)
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {dataProjects.map((project, i) => (
              <div key={i} className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{project.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{project.description}</p>
                </div>
                <div className="flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-1 min-w-[120px]">
                  <span className="text-xs font-mono font-bold text-[var(--dynamic-accent)] bg-[var(--dynamic-accent)]/10 px-3 py-1 rounded-lg">
                    {project.tool}
                  </span>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg">
                      {project.status}
                    </span>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[var(--dynamic-accent)] transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WebAgency = () => {
  const portfolioProjects = [
    {
      title: 'Local E-Commerce Redesign',
      client: 'Retail Client (Lagos)',
      category: 'Web Development',
      description: 'Engineered a lightning-fast vanilla JavaScript and CSS storefront, reducing page load times by 40% and improving mobile conversion rates.',
      tech: ['HTML5', 'Vanilla JS', 'Tailwind CSS'],
      metric: '+25% Sales'
    },
    {
      title: 'Brand Identity & Ad Funnel',
      client: 'Pixel Ascent Ads',
      category: 'Digital Marketing',
      description: 'Architected a multi-platform digital ad campaign targeting university demographics, resulting in high-yield lead generation.',
      tech: ['Meta Ads', 'Figma', 'SEO'],
      metric: '3.2% CTR'
    },
    {
      title: 'ULLSSA Tech Symposium Landing Page',
      client: 'UNILAG Departmental',
      category: 'UI/UX Architecture',
      description: 'Designed and deployed an interactive registration portal for the annual science symposium, handling over 500 concurrent user sessions.',
      tech: ['React', 'Framer Motion', 'Vite'],
      metric: '500+ Users'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-200/50 dark:bg-slate-800/50 rounded-3xl border border-slate-300 dark:border-slate-700 backdrop-blur-sm gap-4">
        <div>
          <h2 className="text-2xl font-black mb-1 flex items-center gap-2">
            <Terminal className="text-[var(--dynamic-accent)]" size={24} /> 
            Pixel Ascent Ads & Web Studio
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Commercial web architecture and data-driven digital marketing.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
          <Calendar size={16} />
          Book Agency Consult
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors group">
            <Globe className="text-[var(--dynamic-accent)] mb-3" size={24} />
            <h3 className="font-bold text-lg mb-1">Vanilla Web Architecture</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">High-performance, zero-dependency websites built for maximum speed and SEO optimization.</p>
          </div>
          <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors group">
            <TrendingUp className="text-[var(--dynamic-accent)] mb-3" size={24} />
            <h3 className="font-bold text-lg mb-1">Pixel Ascent Marketing</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Data-driven digital ad campaigns, funnel optimization, and comprehensive brand identity scaling.</p>
          </div>
          <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors group">
            <Smartphone className="text-[var(--dynamic-accent)] mb-3" size={24} />
            <h3 className="font-bold text-lg mb-1">Responsive UI/UX</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Mobile-first interface design ensuring perfect functionality across all devices and screen sizes.</p>
          </div>
        </div>

        <div className="xl:col-span-2 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold flex items-center gap-2 text-lg">
              <Code size={20} className="text-[var(--dynamic-accent)]" />
              Featured Deployments
            </h3>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Systems Online
            </span>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {portfolioProjects.map((project, i) => (
              <div key={i} className="group relative p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--dynamic-accent)] opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 rounded-full" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-lg group-hover:text-[var(--dynamic-accent)] transition-colors">{project.title}</h4>
                      <ExternalLink size={14} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{project.client} • {project.category}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 pt-2 md:pt-0">
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-slate-500 mb-1 font-medium uppercase">Key Result</span>
                      <span className="text-xl font-black text-[var(--dynamic-accent)]">{project.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="max-w-4xl mx-auto mt-4 space-y-6">
    <div className="p-10 bg-slate-200/50 dark:bg-slate-800/50 rounded-3xl border border-slate-300 dark:border-slate-700 text-center backdrop-blur-sm">
      <Mail className="mx-auto text-[var(--dynamic-accent)] mb-6 animate-pulse" size={56} />
      <h2 className="text-3xl font-black mb-4">Send me an email today </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg max-w-xl mx-auto">
        Based in the Lagos/Ogun area. Available for freelance web architecture, data analysis consultations, and bioinformatics research collaborations.
      </p>
      <a href="mailto:ayoleyi05@gmail.com" className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
        <Mail size={20} />
        Send Direct Email
      </a>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <a href="https://www.linkedin.com/in/ayoleyi-gbenga-ayodeji-aa99b6395/" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#0A66C2] transition-colors group">
        <Briefcase size={32} className="mb-3 text-slate-400 group-hover:text-[#0A66C2] transition-colors" />
        <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#0A66C2]">LinkedIn</span>
      </a>
      
      <a href="https://github.com/Ayoleyi-dev" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white transition-colors group">
        <GitBranch size={32} className="mb-3 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
        <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">GitHub Portfolio</span>
      </a>
      
      <a href="https://x.com/AYOLEYING" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#1DA1F2] transition-colors group">
        <Megaphone size={32} className="mb-3 text-slate-400 group-hover:text-[#1DA1F2] transition-colors" />
        <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#1DA1F2]">X (Twitter)</span>
      </a>
      
      <a href="https://wa.me/qr/YK522NYXDRYLI1" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#25D366] transition-colors group">
        <MessageCircle size={32} className="mb-3 text-slate-400 group-hover:text-[#25D366] transition-colors" />
        <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#25D366]">WhatsApp Direct</span>
      </a>
    </div>
  </div>
);


// --- MAIN APPLICATION ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [themeHue, setThemeHue] = useState(200);

  const navItems = [
    { id: 'profile', label: 'Identity & Skills', icon: User },
    { id: 'biolab', label: 'Bioinformatics Lab', icon: Beaker },
    { id: 'analytics', label: 'Data Analytics', icon: LayoutDashboard },
    { id: 'webdev', label: 'Web Dev & Agency', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div 
      className={`min-h-screen flex flex-col md:flex-row transition-colors duration-300 ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}
      style={{ '--dynamic-accent': `hsl(${themeHue}, 80%, 55%)` }}
    >
      <aside className="w-full md:w-72 border-b md:border-b-0 md:border-r border-slate-300 dark:border-slate-800 p-4 md:p-6 flex flex-col justify-between backdrop-blur-xl z-50 shadow-xl sticky top-0 bg-slate-50/95 dark:bg-slate-950/95 md:bg-transparent">
        <div className="w-full">
          
          <div className="flex justify-between items-center md:block mb-2 md:mb-10">
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-500 bg-clip-text text-transparent">Portfolio Engine</h1>
              <span className="hidden md:block text-xs font-mono text-slate-500 mt-1">v1.1.0 Alpha</span>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="md:hidden p-2 rounded-lg border-2 border-slate-300 dark:border-slate-800 text-slate-500"
            >
              {darkMode ? <Moon size={18} className="text-yellow-400" /> : <Sun size={18} className="text-orange-500" />}
            </button>
          </div>

          <div className="md:hidden flex items-center mb-2 px-1">
             <span className="text-[10px] font-black uppercase tracking-widest text-[var(--dynamic-accent)] animate-pulse flex items-center gap-1 opacity-80">
               Swipe Menu <span className="text-sm leading-none">→</span>
             </span>
          </div>

          <div className="relative w-full">
            <nav className="flex overflow-x-auto md:flex-col gap-2 md:gap-3 pb-2 md:pb-0 hide-scrollbar pr-12 md:pr-0">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex-shrink-0 w-auto md:w-full flex items-center space-x-2 md:space-x-4 px-4 py-2.5 md:py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                      activeTab === item.id 
                        ? 'bg-[var(--dynamic-accent)] text-white shadow-md md:transform md:scale-105' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900'
                    }`}
                  >
                    <Icon size={18} className="md:w-5 md:h-5" />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </button>
                );
              })}
            </nav>
            <div className="absolute top-0 right-0 bottom-2 w-12 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none md:hidden" />
          </div>
          
        </div>

        <div className="hidden md:block space-y-6 pt-6 border-t border-slate-300 dark:border-slate-800 mt-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 flex justify-between uppercase tracking-wider">
              <span>System Hue</span>
            </label>
            <input 
              type="range" 
              min="0" 
              max="360" 
              value={themeHue} 
              onChange={(e) => setThemeHue(Number(e.target.value))}
              className="w-full cursor-pointer h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none"
              style={{ accentColor: `var(--dynamic-accent)` }}
            />
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold border-2 border-slate-300 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors"
          >
            <span className="text-slate-600 dark:text-slate-400">Environment</span>
            {darkMode ? <Moon size={18} className="text-yellow-400" /> : <Sun size={18} className="text-orange-500" />}
          </button>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-10 overflow-y-auto relative w-full">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[var(--dynamic-accent)] opacity-10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />
        
        <header className="mb-8 md:mb-12 flex justify-between items-center relative z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-1">
              {navItems.find(i => i.id === activeTab)?.label}
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium hidden sm:block">Interactive operations interface.</p>
          </div>
        </header>

        <div className="relative z-10 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {activeTab === 'profile' && <Profile />}
              {activeTab === 'biolab' && <BioLab />}
              {activeTab === 'analytics' && <Analytics />}
              {activeTab === 'webdev' && <WebAgency />}
              {activeTab === 'contact' && <Contact />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
