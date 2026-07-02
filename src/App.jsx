import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Beaker, Terminal, Calendar, Sun, Moon, User, Mail, Code, Database, Dna, Globe, TrendingUp, Smartphone, ExternalLink, GitBranch, Briefcase, Megaphone, MessageCircle, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- GITHUB API INTEGRATION HOOK ---
function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        const activeRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
          
        setRepos(activeRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}

// --- HUB COMPONENTS ---

const Profile = () => (
  <div className="space-y-6">
    <div className="relative w-full h-48 md:h-64 rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 mb-6 flex items-center justify-center">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
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

    <div className="p-8 bg-slate-200/50 dark:bg-slate-800/50 rounded-3xl border border-slate-300 dark:border-slate-700 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
        <h2 className="text-3xl font-bold">Ayoleyi Gbenga-Ayodeji Marvelous</h2>
      </div>
      
      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
        <span className="text-lg text-[var(--dynamic-accent)] font-bold tracking-wide">
          Aspiring CADD Researcher
        </span>
        <span className="text-slate-400 hidden md:inline">|</span>
        <span className="text-lg text-slate-600 dark:text-slate-300 font-medium">
          Certified Data Analyst
        </span>
        <span className="text-slate-400 hidden md:inline">|</span>
        <span className="text-lg text-slate-600 dark:text-slate-300 font-medium">
          Software Developer
        </span>
      </div>

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
        <h3 className="font-bold text-lg mb-2">Software Engineering</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Frontend architecture with React, build optimization with Vite, and deployment workflows using Vercel, Bash scripting, and Git/GitHub.</p>
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
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Leading a 10-week intensive data analysis track for <strong>45 students</strong>. Teaching Python (Pandas, NumPy), SQL, and Power BI. Achieved <strong>92% completion rate</strong> with students building real-world projects.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700" />
          <h4 className="font-bold text-lg">SIWES Industrial Trainee</h4>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-2">NAFDAC | 2025</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            3-month industrial attachment in the Quality Control Laboratory. Assisted in <strong>200+ pharmaceutical sample analyses</strong> using HPLC and UV-Vis spectrophotometry. Gained hands-on experience with GMP protocols and regulatory compliance.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const BioLab = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [terminalLines, setTerminalLines] = useState([]);

  const categories = ['All', 'AI Homology', 'Chemoinformatics', 'Pharmacoinformatics'];

  const researchProjects = [
    {
      id: 1,
      title: 'AI-Driven Homology for Targeted Drug Discovery',
      category: 'AI Homology',
      date: 'June 2026',
      description: 'End-to-end dry-lab pipeline: NCBI BLAST searches → homology modeling (SWISS-MODEL) → molecular docking (AutoDock Vina). Identified 3 potential inhibitors with binding energies < -8.0 kcal/mol.',
      tags: ['Python', 'NCBI BLAST', 'AutoDock Vina', 'PyMOL'],
      link: 'https://github.com/Ayoleyi-dev',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Agrospectra NDVI Analysis',
      category: 'Pharmacoinformatics',
      date: 'July 2026',
      description: 'Analyzed remote satellite imagery using Python to track vegetation changes. Processed spectral raster data to calculate health indices using array mathematics.',
      tags: ['Python', 'NumPy', 'OpenCV', 'Matplotlib'],
      link: 'https://github.com/Ayoleyi-dev/Agrospectra-NDVI-Analysis',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Automated Drug Discovery Pipeline',
      category: 'Chemoinformatics',
      date: 'June 2026',
      description: 'Bridging bio- and chemoinformatics to automate high-throughput virtual screening of small molecule libraries.',
      tags: ['R', 'Virtual Screening', 'Chemoinformatics'],
      status: 'In Progress'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? researchProjects 
    : researchProjects.filter(project => project.category === activeCategory);

  // Terminal Typing Animation Effect
  useEffect(() => {
    const commands = [
      { text: 'marvelous@probook:~$ autodock_vina --receptor protein.pdbqt --ligand ligand.pdbqt', delay: 500 },
      { text: '[INFO] Initializing grid box parameters...', delay: 1500, color: 'text-slate-400' },
      { text: '[INFO] Performing molecular docking...', delay: 2500, color: 'text-slate-400' },
      { text: '[INFO] Best binding energy: -8.4 kcal/mol', delay: 4000, color: 'text-emerald-400' },
      { text: '', delay: 4500 },
      { text: 'marvelous@probook:~$ python3 run_ndvi_analysis.py', delay: 5500 },
      { text: 'Loading Agrospectra geospatial data...', delay: 6500, color: 'text-blue-400' },
      { text: 'Processing NDVI bands... 100%', delay: 7500, color: 'text-slate-500' }
    ];

    const timers = commands.map((cmd) => {
      return setTimeout(() => {
        setTerminalLines(prev => [...prev, { text: cmd.text, color: cmd.color || 'text-slate-300' }]);
      }, cmd.delay);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

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
                    <div className="flex flex-wrap items-center justify-between gap-2 mt-4 border-t border-slate-200 dark:border-slate-800 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium text-[var(--dynamic-accent)] bg-[var(--dynamic-accent)]/10 px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-xs font-bold text-white bg-[var(--dynamic-accent)] px-3 py-1.5 rounded-lg hover:scale-105 transition-transform flex items-center gap-1 shadow-md"
                        >
                          <ExternalLink size={12} />
                          View Code
                        </a>
                      )}
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
            {terminalLines.map((line, i) => (
              <p key={i} className={line.color}>
                {line.text.includes('marvelous@probook:~$') ? (
                  <>
                    <span className="text-emerald-500 font-bold">marvelous@probook:~$ </span>
                    <span className="text-slate-300">{line.text.replace('marvelous@probook:~$ ', '')}</span>
                  </>
                ) : (
                  line.text
                )}
              </p>
            ))}
            <p className="text-[var(--dynamic-accent)] animate-pulse mt-2">_</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  const { repos, loading, error } = useGitHubRepos('Ayoleyi-dev');
  const [activeSkills, setActiveSkills] = useState([]);

  const filterSkills = [
    'Python', 'SQL', 'Power BI', 'Excel', 
    'Webscraping', 'Automation', 'EDA', 'ETL', 
    'Data Cleaning', 'Pandas'
  ];

  const liveProjects = repos.slice(0, 10).map(repo => ({
    id: repo.id,
    title: repo.name.replace(/-/g, ' '),
    tool: repo.language || 'Multi-stack',
    description: repo.description || 'An active project in my GitHub repository.',
    status: repo.archived ? 'Archived' : 'Active',
    link: repo.html_url,
    tags: repo.topics || []
  }));

  const fallbackProjects = [
    { id: 'f1', title: 'Public Health Data Warehouse', tool: 'T-SQL & Power BI', description: 'Engineered a relational data warehouse for healthcare metrics.', status: 'Active', link: 'https://github.com/Ayoleyi-dev/Public-Health-Data-Warehouse-Analytics-Pipeline', tags: ['sql', 'power-bi', 'etl'] },
    { id: 'f2', title: 'Jumia Phone Market Web Scraping', tool: 'Python & BS4', description: 'Automated ETL pipeline for e-commerce market trend analysis.', status: 'Active', link: 'https://github.com/Ayoleyi-dev/Jumia-Phone-Market-Webscraping-EDA', tags: ['python', 'webscraping', 'eda', 'pandas'] },
    { id: 'f3', title: 'Agrospectra NDVI Analysis', tool: 'Python & Geospatial', description: 'Analyzed NDVI data to assess agricultural changes.', status: 'Active', link: 'https://github.com/Ayoleyi-dev/Agrospectra-NDVI-Analysis', tags: ['python', 'geospatial', 'data-visualization'] },
    { id: 'f4', title: 'AI Document Extraction QA Validator', tool: 'Python & JSON', description: 'Programmatic verification framework for enterprise document processing workflows.', status: 'Active', link: 'https://github.com/Ayoleyi-dev/AI-Document-Extraction-QA-Validator', tags: ['python', 'automation', 'data-cleaning'] },
    { id: 'f5', title: 'Spotify EDA & Dashboards', tool: 'Python & Excel', description: 'Exploratory Data Analysis and Pivot Table dashboards.', status: 'Active', link: 'https://github.com/Ayoleyi-dev/Spotify-EDA-project', tags: ['python', 'excel', 'eda'] }
  ];

  const dataProjects = (error || repos.length === 0) ? fallbackProjects : liveProjects;

  const toggleSkill = (skill) => {
    if (skill === 'All') {
      setActiveSkills([]);
      return;
    }
    setActiveSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const filteredProjects = dataProjects.filter(project => {
    if (activeSkills.length === 0) return true;
    
    return activeSkills.some(skill => {
      const searchTarget = skill.toLowerCase().replace(' ', '');
      const inTool = project.tool.toLowerCase().includes(searchTarget);
      const inTags = project.tags.some(tag => tag.toLowerCase().replace('-', '').includes(searchTarget));
      const inTitle = project.title.toLowerCase().includes(searchTarget);
      return inTool || inTags || inTitle;
    });
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-200/50 dark:bg-slate-800/50 rounded-3xl border border-slate-300 dark:border-slate-700 backdrop-blur-sm gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <LayoutDashboard className="text-[var(--dynamic-accent)]" size={24} />
            Data Analytics Portfolio
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            {loading ? 'Syncing with GitHub API...' : 'Certified analysis across Python, SQL, Power BI, and R ecosystems.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col h-fit sticky top-24">
          <h3 className="font-bold mb-2 text-center text-lg">Core Technical Proficiency</h3>
          <p className="text-xs text-center text-slate-500 mb-6 uppercase tracking-widest font-bold">Select multiple skills to filter</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => toggleSkill('All')}
              className={`px-3 py-1.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                activeSkills.length === 0 
                  ? 'bg-[var(--dynamic-accent)] text-white border-[var(--dynamic-accent)] shadow-md' 
                  : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)]'
              }`}
            >
              All
            </button>
            {filterSkills.map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                  activeSkills.includes(skill)
                    ? 'bg-[var(--dynamic-accent)] text-white border-[var(--dynamic-accent)] shadow-md transform scale-105' 
                    : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)]'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
        
        <div className="xl:col-span-2 space-y-4">
          <h3 className="font-bold px-2 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Database size={18} className="text-[var(--dynamic-accent)]" />
              Applied Data Projects
            </span>
            <span className="text-xs text-slate-500 font-mono">Showing: {filteredProjects.length}</span>
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                >
                  <div className="flex-1">
                    <h4 className="font-bold text-lg capitalize group-hover:text-[var(--dynamic-accent)] transition-colors">{project.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-3">{project.description}</p>
                    
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map(tag => (
                          <span key={tag} className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">
                            {tag.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-1 min-w-[120px]">
                    <span className="text-xs font-mono font-bold text-[var(--dynamic-accent)] bg-[var(--dynamic-accent)]/10 px-3 py-1 rounded-lg">
                      {project.tool}
                    </span>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <span className={`text-xs font-bold px-3 py-1 rounded-lg ${project.status === 'Active' ? 'text-emerald-500 bg-emerald-500/10' : 'text-orange-500 bg-orange-500/10'}`}>
                        {project.status}
                      </span>
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[var(--dynamic-accent)] transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="p-10 text-center text-slate-500 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"
              >
                No public projects match this exact skill tag yet. Try selecting "All".
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SoftwareEngineering = () => {
  const portfolioProjects = [
    {
      title: 'Human-Like Telegram Automation Bot',
      client: 'Independent Project',
      category: 'Social Media Automation',
      description: 'Engineered an automated Telegram bot capable of dynamic, context-aware chat replies and image distribution. Designed to mimic human interaction logic and completely bypass templated-response fatigue.',
      tech: ['Python', 'Telegram API', 'Automation', 'Scripting'],
      metric: '24/7 Autonomy',
      link: 'https://github.com/Ayoleyi-dev'
    },
    {
      title: 'ULLSSA Tech Symposium Platform',
      client: 'UNILAG Departmental Initiative',
      category: 'Full-Stack Web Development',
      description: 'Engineered an interactive registration portal handling 500+ concurrent users utilizing modern React architecture and Framer Motion for UI fluidity.',
      tech: ['React', 'Framer Motion', 'Vite'],
      metric: '500+ Users',
      link: 'https://github.com/Ayoleyi-dev'
    },
    {
      title: 'High-Performance E-Commerce Engine',
      client: 'Lagos Retail Partner',
      category: 'Frontend Optimization',
      description: 'Built a zero-dependency storefront with vanilla JS, reducing page load by 40% and drastically improving mobile conversion rates.',
      tech: ['HTML5', 'Vanilla JS', 'CSS3'],
      metric: '+25% Sales',
      link: 'https://github.com/Ayoleyi-dev'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-200/50 dark:bg-slate-800/50 rounded-3xl border border-slate-300 dark:border-slate-700 backdrop-blur-sm gap-4">
        <div>
          <h2 className="text-2xl font-black mb-1 flex items-center gap-2">
            <Code className="text-[var(--dynamic-accent)]" size={24} /> 
            Software Engineering & Automation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Robust digital web architecture and programmatic automation scripts.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors group">
            <Globe className="text-[var(--dynamic-accent)] mb-3" size={24} />
            <h3 className="font-bold text-lg mb-1">Web Development</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">High-performance React and Vanilla JS web applications built for maximum speed, responsiveness, and SEO optimization.</p>
          </div>
          <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors group">
            <MessageCircle className="text-[var(--dynamic-accent)] mb-3" size={24} />
            <h3 className="font-bold text-lg mb-1">Social Media Automation</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Programmatic bot development for platforms like Telegram, capable of dynamic human-like chat replies and automated media distribution.</p>
          </div>
          <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[var(--dynamic-accent)] transition-colors group">
            <Terminal className="text-[var(--dynamic-accent)] mb-3" size={24} />
            <h3 className="font-bold text-lg mb-1">API Integration</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Seamless connection of frontend interfaces and backend scripts with RESTful APIs, webhooks, and external data ecosystems.</p>
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
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <ExternalLink size={14} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-[var(--dynamic-accent)] cursor-pointer" />
                      </a>
                    </div>
                    <p className="text-xs font-bold text-[var(--dynamic-accent)] uppercase tracking-wider mb-3">{project.client} • <span className="text-slate-400">{project.category}</span></p>
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
        Based in the Lagos/Ogun area. Available for software architecture, data analysis consultations, and bioinformatics research collaborations.
      </p>
      <a href="mailto:ayoleyi05@gmail.com" className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
        <Mail size={20} />
        Send Direct Email
      </a>
    </div>

    {/* RESUME DOWNLOAD GRID */}
    <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
      <h3 className="font-bold text-xl mb-2">Download My Resumes</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Select the resume tailored to your specific industry requirements.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="/Hybrid_Master_Resume.pdf" download className="flex items-center gap-2 px-5 py-2.5 bg-[var(--dynamic-accent)] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
          <Download size={16} /> Hybrid (Master)
        </a>
        <a href="/Bioinformatics_Resume.pdf" download className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-300 dark:border-slate-700 hover:border-[var(--dynamic-accent)] hover:text-[var(--dynamic-accent)] font-bold rounded-xl transition-all">
          <Download size={16} /> Bioinformatics
        </a>
        <a href="/Data_Analytics_Resume.pdf" download className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-300 dark:border-slate-700 hover:border-[var(--dynamic-accent)] hover:text-[var(--dynamic-accent)] font-bold rounded-xl transition-all">
          <Download size={16} /> Data Analytics
        </a>
        <a href="/Software_Engineering_Resume.pdf" download className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-300 dark:border-slate-700 hover:border-[var(--dynamic-accent)] hover:text-[var(--dynamic-accent)] font-bold rounded-xl transition-all">
          <Download size={16} /> Software Eng
        </a>
      </div>
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
    { id: 'biolab', label: 'Research Lab', icon: Beaker },
    { id: 'analytics', label: 'Data Portfolio', icon: LayoutDashboard },
    { id: 'webdev', label: 'Software Eng', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div 
      className={`min-h-screen flex flex-col md:flex-row transition-colors duration-300 ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}
      style={{ '--dynamic-accent': `hsl(${themeHue}, 80%, 55%)` }}
    >
      <aside className="w-full md:w-72 border-b md:border-b-0 md:border-r border-slate-300 dark:border-slate-800 p-4 md:p-6 flex flex-col justify-between backdrop-blur-xl z-50 shadow-xl sticky top-0 bg-slate-50/95 dark:bg-slate-950/95 md:bg-transparent">
        <div className="w-full">
          
          <div className="flex justify-between items-center md:block mb-6 md:mb-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--dynamic-accent)]">
               <img src="/ayoleyi.png" alt="Ayoleyi Gbenga-Ayodeji Marvelous" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-500 bg-clip-text text-transparent">Ayoleyi</h1>
                <span className="text-[10px] font-mono font-bold text-slate-500 mt-1 uppercase tracking-wider block">v1.2.0 • Online</span>
              </div>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="md:hidden p-2 rounded-lg border-2 border-slate-300 dark:border-slate-800 text-slate-500"
            >
              {darkMode ? <Moon size={18} className="text-yellow-400" /> : <Sun size={18} className="text-orange-500" />}
            </button>
          </div>

          <div className="relative w-full">
            <nav className="flex overflow-x-auto md:flex-col gap-2 md:gap-3 pb-2 md:pb-0 hide-scrollbar pr-8 md:pr-0">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === navItems.length - 1;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex-shrink-0 w-auto md:w-full flex items-center space-x-2 md:space-x-4 px-4 py-2.5 md:py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                      activeTab === item.id 
                        ? 'bg-[var(--dynamic-accent)] text-white shadow-md md:transform md:scale-105' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900'
                    } ${isLast ? 'opacity-70 md:opacity-100 mr-8 md:mr-0' : ''}`}
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
          
          {/* CONTEXTUAL RESUME DOWNLOAD */}
          {(() => {
            let resumeFile = "Hybrid_Master_Resume.pdf";
            let resumeLabel = "Download Master CV";
            
            if (activeTab === 'biolab') {
              resumeFile = "Bioinformatics_Resume.pdf";
              resumeLabel = "Download Bio CV";
            } else if (activeTab === 'analytics') {
              resumeFile = "Data_Analytics_Resume.pdf";
              resumeLabel = "Download Data CV";
            } else if (activeTab === 'webdev') {
              resumeFile = "Software_Engineering_Resume.pdf";
              resumeLabel = "Download Dev CV";
            }

            return (
              <a 
                href={`/${resumeFile}`}
                download={resumeFile}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[var(--dynamic-accent)] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform mb-4"
              >
                <Download size={18} />
                {resumeLabel}
              </a>
            );
          })()}

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 flex justify-between uppercase tracking-wider">
              <span>Theme Color</span>
              <span className="normal-case text-[10px]">Hue: {themeHue}°</span>
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
            <span className="text-slate-600 dark:text-slate-400">Light/Dark Mode</span>
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
              {activeTab === 'webdev' && <SoftwareEngineering />}
              {activeTab === 'contact' && <Contact />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
