// src/data/studyData.js

export const branches = [
    { id: 'cse', name: 'Computer Science & Engineering', icon: '💻', color: '#F59E0B' },
    { id: 'ece', name: 'Electronics & Communication', icon: '📡', color: '#FB923C' },
    { id: 'me',  name: 'Mechanical Engineering', icon: '⚙️', color: '#9CA3AF' },
    { id: 'ce',  name: 'Civil Engineering', icon: '🏗️', color: '#D1D5DB' },
    { id: 'ee',  name: 'Electrical Engineering', icon: '⚡', color: '#FCD34D' }
];

export const subjectColors = {
    'dsa':       { bg: 'rgba(245,158,11,0.06)',  border: '#F59E0B', text: '#FDE68A', icon: '🧮' },
    'coa':       { bg: 'rgba(251,146,60,0.06)',  border: '#FB923C', text: '#FFEDD5', icon: '🖥️' },
    'dbms':      { bg: 'rgba(245,158,11,0.06)',   border: '#F59E0B', text: '#FDE68A', icon: '🗄️' },
    'os':        { bg: 'rgba(156,163,175,0.06)',   border: '#9CA3AF', text: '#F3F4F6', icon: '🐧' },
    'cn':        { bg: 'rgba(209,213,219,0.06)',   border: '#D1D5DB', text: '#F9FAFB', icon: '🌐' },
    'math':      { bg: 'rgba(245,158,11,0.06)',   border: '#F59E0B', text: '#FDE68A', icon: '📐' },
    'physics':   { bg: 'rgba(251,146,60,0.06)',  border: '#FB923C', text: '#FFEDD5', icon: '⚛️' },
    'chemistry': { bg: 'rgba(156,163,175,0.06)',   border: '#9CA3AF', text: '#F3F4F6', icon: '🧪' },
    'english':   { bg: 'rgba(209,213,219,0.06)',   border: '#D1D5DB', text: '#F9FAFB', icon: '📖' },
    'bee':       { bg: 'rgba(245,158,11,0.06)',   border: '#F59E0B', text: '#FDE68A', icon: '⚡' },
    'emft':      { bg: 'rgba(251,146,60,0.06)',  border: '#FB923C', text: '#FFEDD5', icon: '🧲' },
    'signals':   { bg: 'rgba(156,163,175,0.06)',  border: '#9CA3AF', text: '#F3F4F6', icon: '📊' },
    'micro':     { bg: 'rgba(209,213,219,0.06)',   border: '#D1D5DB', text: '#F9FAFB', icon: '🔬' },
    'thermo':    { bg: 'rgba(245,158,11,0.06)',   border: '#F59E0B', text: '#FDE68A', icon: '🌡️' },
    'fluid':     { bg: 'rgba(251,146,60,0.06)',   border: '#FB923C', text: '#FFEDD5', icon: '💧' },
    'som':       { bg: 'rgba(156,163,175,0.06)',   border: '#9CA3AF', text: '#F3F4F6', icon: '🏋️' },
    'survey':    { bg: 'rgba(209,213,219,0.06)',   border: '#D1D5DB', text: '#F9FAFB', icon: '📏' },
    'concrete':  { bg: 'rgba(245,158,11,0.06)',    border: '#F59E0B', text: '#FDE68A', icon: '🧱' },
    'machines':  { bg: 'rgba(251,146,60,0.06)',  border: '#FB923C', text: '#FFEDD5', icon: '🔌' },
    'pse':       { bg: 'rgba(156,163,175,0.06)',   border: '#9CA3AF', text: '#F3F4F6', icon: '🔋' },
    'webtech':   { bg: 'rgba(209,213,219,0.06)',  border: '#D1D5DB', text: '#F9FAFB', icon: '🌐' },
    'toc':       { bg: 'rgba(245,158,11,0.06)',  border: '#F59E0B', text: '#FDE68A', icon: '🧠' },
    'cloud':     { bg: 'rgba(251,146,60,0.06)',   border: '#FB923C', text: '#FFEDD5', icon: '☁️' },
    'or':        { bg: 'rgba(156,163,175,0.06)',   border: '#9CA3AF', text: '#F3F4F6', icon: '📊' },
    'statsml':   { bg: 'rgba(209,213,219,0.06)',  border: '#D1D5DB', text: '#F9FAFB', icon: '📈' },
    'psa':       { bg: 'rgba(245,158,11,0.06)',  border: '#F59E0B', text: '#FDE68A', icon: '🧩' },
    'ai':        { bg: 'rgba(251,146,60,0.06)',   border: '#FB923C', text: '#FFEDD5', icon: '🤖' },
    'java':      { bg: 'rgba(156,163,175,0.06)',   border: '#9CA3AF', text: '#F3F4F6', icon: '☕' },
    'stats':     { bg: 'rgba(209,213,219,0.06)',   border: '#D1D5DB', text: '#F9FAFB', icon: '📈' },
    'default':   { bg: 'rgba(245,158,11,0.06)',  border: '#F59E0B', text: '#FDE68A', icon: '📘' },
};

export const semesters = {
    'cse': {
        1: [
            {
                id: 'math-1', key: 'math', title: 'Engineering Mathematics-I', code: 'AAS0103',
                units: [
                    {
                        title: 'Unit 1: Matrices',
                        aiSummary: 'Matrices are rectangular arrays of numbers. Key Topics: Types of matrices (symmetric, skew-symmetric, orthogonal), Rank of a matrix using echelon form, Cayley-Hamilton theorem for finding inverse, Eigenvalues and Eigenvectors — essential for stability analysis. Important: Practice characteristic equations and diagonalization.',
                        ppts: [{ title: 'Matrices Complete Lecture', size: '3.2 MB' }],
                        notes: [{ title: 'Quick Revision - Matrices', desc: 'All formulas & solved examples' }],
                        youtube: [
                            { title: 'Matrices & Determinants Complete Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' },
                            { title: 'Eigenvalues and Eigenvectors', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g' },
                            { title: 'Cayley-Hamilton Theorem - Proof & Problems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' },
                            { title: 'Diagonalization of a Matrix', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 2: Differential Calculus-I',
                        aiSummary: 'Covers successive differentiation, Leibniz theorem, Rolle\'s theorem, Mean Value theorems (Lagrange & Cauchy), Taylor and Maclaurin series expansions. Tip: Master the expansion formulas — they appear every exam.',
                        ppts: [{ title: 'Differential Calculus Slides', size: '2.8 MB' }],
                        notes: [{ title: 'Formulas Sheet - Calculus', desc: 'All differentiation rules + solved PYQs' }],
                        youtube: [
                            { title: 'Leibniz Theorem - Successive Differentiation', channel: 'Bhagwan Singh Vishwakarma', url: 'https://www.youtube.com/watch?v=Zc2l2U9V620' },
                            { title: 'Taylor\'s & Maclaurin\'s Series Expansion', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=R9Ym08c8KCc' },
                            { title: 'Rolle\'s & Mean Value Theorems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=vV68Q7-nQ1Y' },
                            { title: 'Jacobian & Partial Differentiation', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' }
                        ]
                    },
                    {
                        title: 'Unit 3: Differential Calculus-II',
                        aiSummary: 'Focuses on partial differentiation, Euler\'s theorem on homogeneous functions, total derivatives, and Taylor\'s theorem for two variables.',
                        ppts: [{ title: 'Calculus-II PPT', size: '3.1 MB' }],
                        notes: [{ title: 'Calculus-II Revision Sheet', desc: 'Euler\'s theorem & partial derivatives' }],
                        youtube: [
                            { title: 'Euler\'s Theorem Homogeneous Functions', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' },
                            { title: 'Total Differentiation & Chain Rule', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=q4c33f2T-8g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Multivariable Calculus',
                        aiSummary: 'Covers double and triple integrals, change of order of integration, coordinate transformations (Polar/Spherical/Cylindrical) using Jacobians, and Dirichlet\'s integrals.',
                        ppts: [{ title: 'Multivariable Calculus PPT', size: '4.5 MB' }],
                        notes: [{ title: 'Integrals Cheatsheet', desc: 'Double/triple integrals & area/volume' }],
                        youtube: [
                            { title: 'Double Integrals Concepts', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=3M6Z6Qj023w' },
                            { title: 'Change of Order of Integration', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=xH6S3nQvM5E' },
                            { title: 'Dirichlet\'s Theorem & Triple Integrals', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=48_S69sXU_A' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-I',
                        aiSummary: 'Quantitative aptitude concepts: Number systems, Profit & Loss, Percentage, Simple and Compound Interest, and Ratio & Proportion.',
                        ppts: [{ title: 'Aptitude-I PDF', size: '1.9 MB' }],
                        notes: [{ title: 'Aptitude Formulas Sheet', desc: 'Shortcuts and speed math tricks' }],
                        youtube: [
                            { title: 'Quantitative Aptitude Complete Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' },
                            { title: 'Profit, Loss & Discount Tricks', channel: 'Feel Free to Learn', url: 'https://www.youtube.com/watch?v=jiEaKYI0ATY' }
                        ]
                    }
                ]
            },
            {
                id: 'bee-1', key: 'bee', title: 'Basic Electrical and Electronics Engineering', code: 'AEC0101',
                units: [
                    {
                        title: 'Unit 1: D.C Circuit Analysis and Network Theorems',
                        aiSummary: 'Covers active & passive elements, sources, Kirchhoff\'s laws, nodal & loop analysis, Superposition, Thevenin\'s, Norton\'s, and Maximum Power Transfer theorems.',
                        ppts: [{ title: 'DC Circuit Basics', size: '2.5 MB' }],
                        notes: [{ title: 'Circuit Theorems Guide', desc: 'Solved mesh/nodal analysis problems' }],
                        youtube: [
                            { title: 'Kirchhoff\'s Laws & Nodal Analysis', channel: 'Gate Smashers', url: 'https://youtu.be/FjaJEo7knF4' },
                            { title: 'Thevenin\'s & Superposition Theorems', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Steady State Analysis of AC Circuit',
                        aiSummary: 'AC fundamentals, phasors, RLC series & parallel circuits, resonance, and three-phase balanced star/delta connections.',
                        ppts: [{ title: 'AC Analysis Slides', size: '3.0 MB' }],
                        notes: [{ title: 'AC Formulas & Phasor Diagrams', desc: 'Power factor and RLC relations' }],
                        youtube: [
                            { title: 'Single Phase AC Circuits', channel: 'Gate Smashers', url: 'https://youtu.be/ulGKCeOoR88' }
                        ]
                    },
                    {
                        title: 'Unit 3: Single Phase Transformer & Power Systems',
                        aiSummary: 'Transformer operating principle, EMF equation, equivalent circuit, losses, efficiency. Basics of MCB, ELCB, and earthing.',
                        ppts: [{ title: 'Transformer & Power Systems', size: '3.4 MB' }],
                        notes: [{ title: 'Transformer Derivations', desc: 'Equivalent circuit and sessional notes' }],
                        youtube: [
                            { title: 'Single Phase Transformer EMF Equation', channel: 'Neso Academy', url: 'https://youtu.be/GgckE4H5AJE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Diode and Their Applications',
                        aiSummary: 'PN junction diode properties, rectifiers, clippers, clampers, Zener diode regulator, LEDs, and basic display devices.',
                        ppts: [{ title: 'Semiconductor Diode PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Diode Circuit Cheat Sheet', desc: 'Full-wave/half-wave rectifier formulas' }],
                        youtube: [
                            { title: 'PN Junction Diode & Rectifiers', channel: 'Neso Academy', url: 'https://youtu.be/EdUAecpYVWQ' }
                        ]
                    },
                    {
                        title: 'Unit 5: Operational Amplifiers & Op-Amp Applications',
                        aiSummary: 'Op-amp characteristics, inverting/non-inverting configuration, summing amplifier, integrator, differentiator, sensors, and IoT introduction.',
                        ppts: [{ title: 'Op-Amps & IoT', size: '3.1 MB' }],
                        notes: [{ title: 'Op-Amp Solved Circuits', desc: 'Ideal op-amp properties and formulas' }],
                        youtube: [
                            { title: 'Introduction to Operational Amplifiers', channel: 'Neso Academy', url: 'https://youtu.be/AuZ00cQ0UrE' }
                        ]
                    }
                ]
            },
            {
                id: 'python-1', key: 'java', title: 'Problem Solving using Python', code: 'ACSE0101',
                units: [
                    {
                        title: 'Unit 1: Basics of python programming',
                        aiSummary: 'Introduction to python environment, variables, data types, standard input/output, operators, and basic expression evaluation.',
                        ppts: [{ title: 'Python Basics PPT', size: '2.0 MB' }],
                        notes: [{ title: 'Python Syntax Cheatsheet', desc: 'Variables, operators & formatting' }],
                        youtube: [
                            { title: 'Python Programming Course', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=aqvDMCY516A' }
                        ]
                    },
                    {
                        title: 'Unit 2: Decision Control Statements',
                        aiSummary: 'Flow control, conditional branching (if, if-else, elif), loops (while, for), break, continue, and pass control statements.',
                        ppts: [{ title: 'Control Statements Slides', size: '2.2 MB' }],
                        notes: [{ title: 'Conditional Statements Guide', desc: 'Nested loops and branching examples' }],
                        youtube: [
                            { title: 'Loops & Conditionals in Python', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Function and Modules',
                        aiSummary: 'Defining functions, argument passing, return values, scope of variables, recursion, lambda functions, and modules/packages creation.',
                        ppts: [{ title: 'Functions & Modules', size: '2.6 MB' }],
                        notes: [{ title: 'Python Functions Reference', desc: 'Scope, namespace, and standard imports' }],
                        youtube: [
                            { title: 'Functions & Recursion', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Basic Data structures in Python',
                        aiSummary: 'Lists, tuples, sets, and dictionaries operations, comprehensions, built-in methods, and structural comparison.',
                        ppts: [{ title: 'Python Data Structures', size: '3.1 MB' }],
                        notes: [{ title: 'Lists & Dicts Cheatsheet', desc: 'Common methods and operations' }],
                        youtube: [
                            { title: 'Lists, Tuples & Dictionaries', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: File and Exception handling',
                        aiSummary: 'File operations (read, write, append), file pointers, exceptions, try-except-finally blocks, and custom exceptions.',
                        ppts: [{ title: 'Files & Exceptions', size: '2.4 MB' }],
                        notes: [{ title: 'Error Handling Reference', desc: 'Standard exception classes & file modes' }],
                        youtube: [
                            { title: 'Exception Handling in Python', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            },
            {
                id: 'english-1', key: 'english', title: 'Professional Communication', code: 'AASL0101',
                units: [
                    {
                        title: 'Unit 1: Introduction & Reading Skills',
                        aiSummary: 'Basics of technical communication, reading speed, comprehension techniques, and vocabulary enhancement.',
                        ppts: [{ title: 'PC Unit 1 Slides', size: '1.4 MB' }],
                        notes: [{ title: 'Communication Basics', desc: 'LSRW skills and active reading' }],
                        youtube: [
                            { title: 'Professional Communication Intro', channel: 'Ekeeda', url: 'https://www.youtube.com/watch?v=oBq7YqkG-4Y' }
                        ]
                    },
                    {
                        title: 'Unit 2: Writing Skills',
                        aiSummary: 'Sentence structures, paragraph writing, technical descriptions, letters, resumes, and report writing.',
                        ppts: [{ title: 'Writing Formats PPT', size: '1.8 MB' }],
                        notes: [{ title: 'Letter & Resume Guide', desc: 'Standard business formats' }],
                        youtube: [
                            { title: 'Technical Writing & Resumes', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 3: Listening Skills',
                        aiSummary: 'Importance of listening, barriers to active listening, note-taking techniques, and audio comprehension.',
                        ppts: [{ title: 'Listening Skills PPT', size: '1.2 MB' }],
                        notes: [{ title: 'Active Listening Tips', desc: 'Note-taking structures' }],
                        youtube: [
                            { title: 'Active Listening in Communication', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Speaking Skills',
                        aiSummary: 'Phonetics, stress, intonation, group discussions, public speaking, and body language.',
                        ppts: [{ title: 'Phonetics & GD PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Speaking Guidelines', desc: 'Body language & GD cheat sheet' }],
                        youtube: [
                            { title: 'Speaking & GD Strategies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: Public Speaking & Presentation',
                        aiSummary: 'Design and delivery of formal presentations, handling questions, and stage presence.',
                        ppts: [{ title: 'Presentation Skills', size: '1.7 MB' }],
                        notes: [{ title: 'Presentation Cheat Sheet', desc: 'Structure, slide rules & public speaking' }],
                        youtube: [
                            { title: 'Mastering Presentations', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            }
        ],
        2: [
            {
                id: 'math-2', key: 'math', title: 'Engineering Mathematics-II', code: 'AAS0203',
                units: [
                    {
                        title: 'Unit 1: Ordinary Differential Equation of Higher Order',
                        aiSummary: 'Linear differential equations of n-th order with constant coefficients, complementary functions, particular integrals, and Cauchy-Euler equations.',
                        ppts: [{ title: 'Differential Equations PPT', size: '3.1 MB' }],
                        notes: [{ title: 'ODE Cheatsheet', desc: 'P.I. and C.F. shortcut methods' }],
                        youtube: [
                            { title: 'Higher Order Linear Differential Equations', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=Ql42qcOLKfo' }
                        ]
                    },
                    {
                        title: 'Unit 2: Sequences and series',
                        aiSummary: 'Infinite series convergence, Ratio test, Comparison test, Cauchy\'s root test, Rabee\'s test, and Fourier series representations.',
                        ppts: [{ title: 'Series Convergence Slides', size: '2.5 MB' }],
                        notes: [{ title: 'Convergence Tests Reference', desc: 'All test formulas & sessional notes' }],
                        youtube: [
                            { title: 'Sequences & Series Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=HUKR4LWrZ14' }
                        ]
                    },
                    {
                        title: 'Unit 3: Laplace Transform',
                        aiSummary: 'Laplace transforms properties, transform of derivatives/integrals, inverse Laplace, Dirac delta, and solving linear ODEs.',
                        ppts: [{ title: 'Laplace Transforms Complete', size: '3.5 MB' }],
                        notes: [{ title: 'Laplace Formulas Sheet', desc: 'Properties, shifts, and inverse guides' }],
                        youtube: [
                            { title: 'Laplace Transform Complete Series', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/nmp-5tSp-UY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Vector Calculus',
                        aiSummary: 'Gradient, divergence, curl, line/surface/volume integrals, Green\'s, Gauss divergence, and Stokes\' theorems.',
                        ppts: [{ title: 'Vector Calculus Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Vector Theorems Solved PYQs', desc: 'Stokes, Gauss, and Green proofs' }],
                        youtube: [
                            { title: 'Vector Calculus Revision', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/IwgqKjA6wko' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-II',
                        aiSummary: 'Aptitude topics: Partnership, problems on ages, mixtures, direction sense, blood relations, and interest.',
                        ppts: [{ title: 'Aptitude-II PDF', size: '1.8 MB' }],
                        notes: [{ title: 'Aptitude Hacks & Shortcuts', desc: 'Ages, partnership & direction tricks' }],
                        youtube: [
                            { title: 'Aptitude Practice Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' }
                        ]
                    }
                ]
            },
            {
                id: 'design-1', key: 'default', title: 'Design Thinking-I', code: 'ACSE0203',
                units: [
                    {
                        title: 'Unit 1: Introduction',
                        aiSummary: 'Basics of design thinking, iterative cycle, empathy mapping, user-centered mindset, and case studies.',
                        ppts: [{ title: 'Design Thinking Intro', size: '1.8 MB' }],
                        notes: [{ title: 'Design Cycle Summary', desc: 'Empathize, Define, Ideate, Prototype, Test' }],
                        youtube: [
                            { title: 'Design Thinking for Beginners', channel: 'NPTEL', url: 'https://swayam.gov.in/nd1_noc19_mg60/preview' }
                        ]
                    },
                    {
                        title: 'Unit 2: Ethical Values and Empathy',
                        aiSummary: 'Role of empathy in user research, ethical guidelines, interviews, observation, and developing user personas.',
                        ppts: [{ title: 'Empathy & Ethics Slides', size: '2.0 MB' }],
                        notes: [{ title: 'User Research Guidelines', desc: 'Interview scripts & observation logs' }],
                        youtube: [
                            { title: 'Empathy Mapping Techniques', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Problem Statement & Ideation',
                        aiSummary: 'Defining the problem, POV statement, brainstorming techniques, SCAMPER method, and selecting solutions.',
                        ppts: [{ title: 'Problem Definition & Ideation', size: '2.4 MB' }],
                        notes: [{ title: 'Brainstorming Guidelines', desc: 'POV definitions & ideation rules' }],
                        youtube: [
                            { title: 'Ideation & Prototyping Basics', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 4: Critical Thinking',
                        aiSummary: 'Critical thinking fundamentals, evaluating arguments, identifying logical fallacies, and decision models.',
                        ppts: [{ title: 'Critical Thinking Slides', size: '1.6 MB' }],
                        notes: [{ title: 'Logical Fallacies Cheat Sheet', desc: 'Types of fallacies with examples' }],
                        youtube: [
                            { title: 'Critical Thinking & Fallacies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 5: Logic and Argumentation',
                        aiSummary: 'Propositional logic, syllogisms, forming valid arguments, and group exercises in structural debate.',
                        ppts: [{ title: 'Logic & Arguments PPT', size: '2.2 MB' }],
                        notes: [{ title: 'Deductive vs Inductive Logic', desc: 'Valid argument forms cheatsheet' }],
                        youtube: [
                            { title: 'Formal Logic & Syllogisms', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    }
                ]
            },
            {
                id: 'physics-1', key: 'physics', title: 'Engineering Physics', code: 'AAS0201A',
                units: [
                    {
                        title: 'Unit 1: Relativistic Mechanics',
                        aiSummary: 'Frame of reference, Michelson-Morley experiment, Galilean transformations, Lorentz transformations, length contraction, time dilation, and E=mc^2.',
                        ppts: [{ title: 'Relativity Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Relativistic Derivations', desc: 'Time dilation & mass-energy relation proofs' }],
                        youtube: [
                            { title: 'Relativity Complete Lecture', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Quantum Mechanics',
                        aiSummary: 'De-Broglie hypothesis, wave-particle duality, Heisenberg uncertainty principle. Schrodinger wave equation (time-dependent and time-independent), wave function physical significance, particle in a 1D box. Practice energy level derivations.',
                        ppts: [{ title: 'Quantum Mechanics Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Quantum Physics Formula Guide', desc: 'Solved 1D box derivations' }],
                        youtube: [
                            { title: 'Quantum Mechanics Playlist', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Wave Optics',
                        aiSummary: 'Interference: Young\'s double-slit experiment, Newton\'s rings, thin film interference. Diffraction: Fresnel vs Fraunhofer, single slit diffraction pattern. Polarization: Brewster\'s law, Malus law, double refraction. Key formulas: fringe width = λD/d, resolving power of grating = nN.',
                        ppts: [{ title: 'Wave Optics Lecture', size: '2.1 MB' }],
                        notes: [{ title: 'Optics Quick Notes', desc: 'Derivations and numericals' }],
                        youtube: [
                            { title: 'Wave Optics Complete', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Physics and Information Storage',
                        aiSummary: 'Energy bands, intrinsic & extrinsic semiconductors, Fermi level, carrier concentration, Hall effect, and basic magnetic memory storage systems.',
                        ppts: [{ title: 'Semiconductor Devices PPT', size: '2.8 MB' }],
                        notes: [{ title: 'Carrier Concentration & Fermi Level', desc: 'Equations and Hall effect calculations' }],
                        youtube: [
                            { title: 'Semiconductors in Physics', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=h6sXoB2eIig' }
                        ]
                    },
                    {
                        title: 'Unit 5: Fiber Optics & Laser',
                        aiSummary: 'Laser: Spontaneous and stimulated emission, Einstein\'s coefficients, population inversion, Ruby laser, He-Ne laser. Fiber Optics: Principle of propagation, acceptance angle, numerical aperture, fractional refractive index change, single/multi-mode fibers. Tip: Numerical questions are highly common from numerical aperture.',
                        ppts: [{ title: 'Lasers & Fiber Optics PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Fiber Optics Cheat Sheet', desc: 'Formulas and step-by-step solved numerics' }],
                        youtube: [
                            { title: 'Lasers & Fiber Optics course', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=u8-FidK7zV8' }
                        ]
                    }
                ]
            },
            {
                id: 'python-2', key: 'java', title: 'Problem Solving using Advanced Python', code: 'ACSE0202',
                units: [
                    {
                        title: 'Unit 1: Classes and Objects',
                        aiSummary: 'OOP fundamentals in Python: defining classes, instantiating objects, constructor methods (__init__), class vs instance attributes, and method types.',
                        ppts: [{ title: 'Classes & Objects Slides', size: '2.3 MB' }],
                        notes: [{ title: 'Python OOP Cheatsheet', desc: 'Syntax for classes, objects, and attributes' }],
                        youtube: [
                            { title: 'Python Classes and Objects', channel: 'Telusko', url: 'https://nptel.ac.in/courses/106/106/106106145/' }
                        ]
                    },
                    {
                        title: 'Unit 2: Object Oriented Concepts',
                        aiSummary: 'Inheritance, method overriding, super() function, polymorphism, encapsulation, private attributes, operator overloading, and special methods (__str__, __len__).',
                        ppts: [{ title: 'OOP Core Concepts', size: '2.7 MB' }],
                        notes: [{ title: 'Polymorphism & Inheritance', desc: 'Overriding and multiple inheritance rules' }],
                        youtube: [
                            { title: 'Python OOP Inheritance', channel: 'Python Course', url: 'https://www.python-course.eu/python3_inheritance.php' }
                        ]
                    },
                    {
                        title: 'Unit 3: Functional Programming',
                        aiSummary: 'Functional concepts in Python: map(), filter(), reduce() functions, list/dictionary comprehensions, generators, and iterators.',
                        ppts: [{ title: 'Functional Programming PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Functional Python Cheatsheet', desc: 'Lambda, mapping, and list comprehension tips' }],
                        youtube: [
                            { title: 'Functional Python Programming', channel: 'Real Python', url: 'https://realpython.com/courses/functional-programming-python/' }
                        ]
                    },
                    {
                        title: 'Unit 4: GUI Programming',
                        aiSummary: 'GUI development in Python using Tkinter: creating windows, widgets (Labels, Buttons, Entries), layouts (Pack, Grid), and event handling.',
                        ppts: [{ title: 'Tkinter GUI Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Tkinter Widgets Reference', desc: 'GUI element grids and event bindings' }],
                        youtube: [
                            { title: 'Python Tkinter GUI Tutorial', channel: 'Real Python', url: 'https://realpython.com/python-gui-tkinter/' }
                        ]
                    },
                    {
                        title: 'Unit 5: Libraries in Python',
                        aiSummary: 'Intro to NumPy, Pandas, and Matplotlib libraries for data manipulation and visualization.',
                        ppts: [{ title: 'Python Libraries PPT', size: '3.8 MB' }],
                        notes: [{ title: 'Data Analytics Cheatsheet', desc: 'Numpy arrays and Pandas dataframe basics' }],
                        youtube: [
                            { title: 'NumPy, Pandas & Matplotlib Course', channel: 'NPTEL', url: 'https://nptel.ac.in/courses/106/107/106107220/' }
                        ]
                    }
                ]
            }
        ],
        3: [
          {
            id: 'dsa-1', key: 'dsa', title: 'Data Structures & Algorithms I', code: 'BMICSE0301',
            units: [
                {
                    title: 'Unit 1: Arrays & Linked Lists',
                    aiSummary: 'Fundamental data structures. Array operations, time complexity. Linked list types: singly, doubly, circular. Implementation and applications.',
                    ppts: [{ title: 'DSA Basics', size: '4.1 MB' }],
                    notes: [{ title: 'DSA Cheat Sheet', desc: 'Operations and complexities' }],
                    youtube: [{ title: 'DSA Complete Course', channel: 'Abdul Bari', url: 'https://youtube.com' }]
                }
            ]
          }
        ],
        4: [
            {
                id: 'dsa2-1', key: 'dsa', title: 'Data Structures & Algorithms II', code: 'BMICSE0401',
                units: [
                    {
                        title: 'Unit 1: Graph Algorithms',
                        aiSummary: 'Graph G = (V, E). Representations: Adjacency Matrix, Adjacency List. BFS, DFS. Shortest Path: Dijkstra, Bellman-Ford. MST: Prim\'s, Kruskal\'s.',
                        ppts: [{ title: 'Graph Algorithms PPT', size: '3.5 MB', url: '/pdfs/dsa2/DSA-II Unit-V.pptx' }],
                        notes: [{ title: 'Graph Cheat Sheet', desc: 'BFS, DFS, Dijkstra, Kruskal, Prim' }],
                        youtube: [{ title: 'Graph Traversals', channel: 'Abdul Bari', url: 'https://youtube.com' }]
                    }
                ]
            },
            {
                id: 'dbms-1', key: 'dbms', title: 'Database Management Systems', code: 'BMICSE0402',
                units: [
                    {
                        title: 'Unit 1: ER Modeling',
                        aiSummary: 'Database design using ER Model: Entities, Attributes, Relationships. Cardinality. Normalization: 1NF, 2NF, 3NF, BCNF.',
                        ppts: [
                            { title: 'ER Model & Design PPT', size: '2.5 MB', url: '/pdfs/dbms/dbms4.pdf' },
                            { title: 'Database Design Advanced', size: '1.8 MB', url: '/pdfs/dbms/dbms5.pdf' }
                        ],
                        notes: [{ title: 'ER Diagram Cheat Sheet', desc: 'Symbols and mapping rules' }],
                        youtube: [{ title: 'DBMS Full Course', channel: 'Gate Smashers', url: 'https://youtube.com' }]
                    }
                ]
            },
            {
                id: 'os-1', key: 'os', title: 'Operating Systems', code: 'BMICSE0403',
                units: [
                    {
                        title: 'Unit 1: Introduction to OS',
                        aiSummary: 'Functions of OS, types of OS. Process management, CPU scheduling, memory management, file systems.',
                        ppts: [{ title: 'OS Introduction PPT', size: '2.8 MB' }],
                        notes: [{ title: 'OS Quick Notes', desc: 'Summary of all OS concepts' }],
                        youtube: [{ title: 'OS Full Course', channel: 'Gate Smashers', url: 'https://youtube.com' }]
                    }
                ]
            }
        ],
        5: [
            {
                id: 'webtech-1', key: 'webtech', title: 'Web Technologies', code: 'KCS501',
                units: [
                    { title: 'Unit 1: HTML5 & CSS3', aiSummary: 'HTML5 semantic elements, forms, media. CSS3 selectors, box model, flexbox, grid layout, animations and transitions.', ppts: [{ title: 'HTML & CSS PPT', size: '3.0 MB' }], notes: [{ title: 'CSS Quick Reference', desc: 'Flexbox and grid cheat sheet' }], youtube: [{ title: 'HTML & CSS Full Course', channel: 'Traversy Media', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: JavaScript & DOM', aiSummary: 'JavaScript ES6+ features: arrow functions, promises, async/await, destructuring. DOM manipulation, event handling, AJAX and Fetch API.', ppts: [{ title: 'JavaScript Essentials', size: '3.5 MB' }], notes: [{ title: 'JS Cheat Sheet', desc: 'ES6 features and DOM methods' }], youtube: [{ title: 'JavaScript Crash Course', channel: 'Traversy Media', url: 'https://youtube.com' }] },
                    { title: 'Unit 3: PHP & MySQL', aiSummary: 'PHP syntax, arrays, functions, OOP. MySQL queries, joins, stored procedures. CRUD operations and form handling.', ppts: [{ title: 'PHP & MySQL', size: '2.8 MB' }], notes: [{ title: 'PHP Quick Reference', desc: 'Common PHP functions' }], youtube: [{ title: 'PHP Full Course', channel: 'Traversy Media', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'toc-1', key: 'toc', title: 'Theory of Computation', code: 'KCS502',
                units: [
                    { title: 'Unit 1: Finite Automata', aiSummary: 'DFA, NFA, epsilon-NFA. Equivalence of DFA and NFA, minimization of DFA. Regular languages, regular expressions, Pumping Lemma.', ppts: [{ title: 'Finite Automata PPT', size: '3.2 MB', url: '/pdfs/toc/toc_unit1.pdf' }], notes: [{ title: 'Automata Notes', desc: 'DFA/NFA constructions' }], youtube: [{ title: 'Theory of Computation', channel: 'Neso Academy', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Context-Free Languages', aiSummary: 'Context-free grammars, parse trees, ambiguity. Pushdown automata (PDA). Pumping Lemma for CFLs. Chomsky Normal Form.', ppts: [{ title: 'CFG & PDA PPT', size: '2.9 MB' }], notes: [{ title: 'CFL Notes', desc: 'Grammar simplifications' }], youtube: [{ title: 'CFG and PDA', channel: 'Neso Academy', url: 'https://youtube.com' }] },
                    { title: 'Unit 3: Turing Machines', aiSummary: 'Turing machine model, variants. Decidable and undecidable problems, Halting Problem. Complexity classes P, NP, NP-Complete.', ppts: [{ title: 'Turing Machines', size: '3.0 MB' }], notes: [{ title: 'TM Notes', desc: 'Decidability and complexity' }], youtube: [{ title: 'Turing Machines', channel: 'Neso Academy', url: 'https://youtube.com' }] },
                    { title: 'Unit 4: Decidability & P/NP Complexity', aiSummary: 'Recursive and recursively enumerable languages, decidable and undecidable problems. Post Correspondence Problem (PCP), Halting Problem. Introduction to complexity theory: Time complexity, space complexity, Classes P, NP, NP-hard, NP-Complete, and Cook-Levin theorem.', ppts: [{ title: 'Decidability & Complexity Slides', size: '2.7 MB' }], notes: [{ title: 'Complexity Theory Quick Revision', desc: 'Definitions of P, NP, NP-Complete, NPC proofs' }], youtube: [{ title: 'Decidability and Complexity', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=78t6NlM27eE' }] }
                ]
            },
            {
                id: 'ai-1', key: 'ai', title: 'Artificial Intelligence', code: 'KCS503',
                units: [
                    { title: 'Unit 1: Problem Solving & Search', aiSummary: 'State space search, uninformed search (BFS, DFS, IDS), informed search (A*, heuristics). Admissibility and consistency of heuristics.', ppts: [{ title: 'AI Search Algorithms', size: '3.4 MB' }], notes: [{ title: 'Search Algorithms', desc: 'Comparison and complexity' }], youtube: [{ title: 'AI Fundamentals', channel: 'NPTEL', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Knowledge Representation', aiSummary: 'Propositional and predicate logic, resolution, unification. Semantic networks, frames, production rules, forward and backward chaining.', ppts: [{ title: 'Knowledge Representation', size: '2.7 MB' }], notes: [{ title: 'Logic & Inference', desc: 'Resolution and unification' }], youtube: [{ title: 'Knowledge Representation', channel: 'NPTEL', url: 'https://youtube.com' }] },
                    { title: 'Unit 3: Machine Learning Basics', aiSummary: 'Supervised, unsupervised, reinforcement learning. Linear regression, classification, decision trees, neural network fundamentals.', ppts: [{ title: 'ML Basics', size: '3.8 MB' }], notes: [{ title: 'ML Algorithms', desc: 'Overview with use cases' }], youtube: [{ title: 'Machine Learning', channel: 'Sentdex', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'cn-1', key: 'cn', title: 'Computer Networks', code: 'KCS504',
                units: [
                    { title: 'Unit 1: Network Models & Physical Layer', aiSummary: 'OSI and TCP/IP models, layer functions. Transmission media, multiplexing, switching (circuit, packet, message). Shannon\'s capacity theorem.', ppts: [{ title: 'Computer Networks I', size: '3.3 MB' }], notes: [{ title: 'OSI vs TCP/IP', desc: 'Layer-by-layer comparison' }], youtube: [{ title: 'Computer Networks', channel: 'Gate Smashers', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Data Link & Network Layer', aiSummary: 'Error detection (CRC, checksum), flow control (sliding window). IP addressing, subnetting, routing algorithms (Dijkstra, Bellman-Ford in networking context).', ppts: [{ title: 'Data Link & Network', size: '3.1 MB' }], notes: [{ title: 'Subnetting Guide', desc: 'CIDR and subnet masks' }], youtube: [{ title: 'Network Layer', channel: 'Gate Smashers', url: 'https://youtube.com' }] },
                    { title: 'Unit 3: Transport & Application Layer', aiSummary: 'TCP vs UDP, connection establishment (3-way handshake), congestion control. HTTP, HTTPS, DNS, SMTP, FTP protocols. Socket programming basics.', ppts: [{ title: 'Transport & Application', size: '2.9 MB' }], notes: [{ title: 'Protocol Notes', desc: 'TCP/UDP and application protocols' }], youtube: [{ title: 'Transport Layer', channel: 'Gate Smashers', url: 'https://youtube.com' }] }
                ]
            }
        ],
        6: [
            {
                id: 'cloud-1', key: 'cloud', title: 'Cloud Computing', code: 'KCS601',
                units: [
                    { title: 'Unit 1: Cloud Fundamentals', aiSummary: 'Cloud computing definition, characteristics, service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid). Virtualization technologies.', ppts: [{ title: 'Cloud Computing Basics', size: '3.1 MB' }], notes: [{ title: 'Cloud Models', desc: 'Service and deployment models' }], youtube: [{ title: 'Cloud Computing', channel: 'Simplilearn', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: AWS & Azure Fundamentals', aiSummary: 'AWS core services: EC2, S3, RDS, Lambda. Azure: VMs, Blob Storage, Azure Functions. Cloud pricing models and cost optimization.', ppts: [{ title: 'AWS & Azure', size: '3.6 MB' }], notes: [{ title: 'Cloud Services Cheat Sheet', desc: 'AWS vs Azure comparison' }], youtube: [{ title: 'AWS for Beginners', channel: 'TechWorld with Nana', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'infosec-1', key: 'cn', title: 'Information Security', code: 'KCS602',
                units: [
                    { title: 'Unit 1: Cryptography', aiSummary: 'Symmetric encryption (AES, DES), asymmetric encryption (RSA), hashing (SHA). Digital signatures, PKI, SSL/TLS protocol.', ppts: [{ title: 'Cryptography PPT', size: '3.4 MB' }], notes: [{ title: 'Crypto Notes', desc: 'Algorithms and applications' }], youtube: [{ title: 'Cryptography Course', channel: 'Computerphile', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Network Security', aiSummary: 'Firewalls, IDS/IPS, VPNs. Common attacks: MITM, DDoS, SQL injection, XSS. OWASP Top 10 vulnerabilities and mitigations.', ppts: [{ title: 'Network Security', size: '2.9 MB' }], notes: [{ title: 'Security Attacks', desc: 'Attack types and countermeasures' }], youtube: [{ title: 'Network Security', channel: 'Cybrary', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'statsml-1', key: 'statsml', title: 'Statistics & Machine Learning', code: 'KCS603',
                units: [
                    { title: 'Unit 1: Probability & Statistics', aiSummary: 'Probability distributions (Normal, Binomial, Poisson), statistical inference, hypothesis testing, confidence intervals.', ppts: [{ title: 'Statistics PPT', size: '2.8 MB' }], notes: [{ title: 'Stats Formulas', desc: 'Distributions and tests' }], youtube: [{ title: 'Statistics for Data Science', channel: 'StatQuest', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Supervised Learning', aiSummary: 'Linear and logistic regression, SVMs, decision trees, random forests, ensemble methods. Model evaluation: precision, recall, F1, ROC curve.', ppts: [{ title: 'Supervised Learning', size: '3.5 MB' }], notes: [{ title: 'ML Algorithms', desc: 'Pros/cons comparison table' }], youtube: [{ title: 'Machine Learning A-Z', channel: 'StatQuest', url: 'https://youtube.com' }] },
                    { title: 'Unit 3: Unsupervised & Deep Learning', aiSummary: 'K-means, hierarchical clustering, PCA. Neural networks, backpropagation, CNNs for image recognition, RNNs for sequences.', ppts: [{ title: 'Deep Learning Intro', size: '4.0 MB' }], notes: [{ title: 'Neural Networks', desc: 'Architecture and training' }], youtube: [{ title: 'Deep Learning', channel: '3Blue1Brown', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'compiler-1', key: 'toc', title: 'Compiler Design', code: 'KCS604',
                units: [
                    { title: 'Unit 1: Lexical & Syntax Analysis', aiSummary: 'Phases of compilation. Lexical analysis: tokens, patterns, lexemes. Syntax analysis: top-down (LL) and bottom-up (LR) parsing, parse trees.', ppts: [{ title: 'Compiler Design', size: '3.3 MB' }], notes: [{ title: 'Parsing Techniques', desc: 'LL and LR parsing' }], youtube: [{ title: 'Compiler Design', channel: 'NPTEL', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Semantic Analysis & Code Generation', aiSummary: 'Semantic analysis, type checking, symbol table. Intermediate code generation (TAC, quadruples). Code optimization and target code generation.', ppts: [{ title: 'Code Generation', size: '2.8 MB' }], notes: [{ title: 'Compiler Phases', desc: 'All phases with examples' }], youtube: [{ title: 'Code Generation', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ],
        7: [
            {
                id: 'softeng-1', key: 'ai', title: 'Software Engineering', code: 'KCS701',
                units: [
                    { title: 'Unit 1: SDLC & Agile', aiSummary: 'Software development life cycle models: waterfall, spiral, incremental. Agile: Scrum framework, sprints, user stories, Kanban. DevOps principles.', ppts: [{ title: 'Software Engineering', size: '3.2 MB' }], notes: [{ title: 'SDLC Models', desc: 'Comparison of models' }], youtube: [{ title: 'Software Engineering', channel: 'NPTEL', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Software Testing', aiSummary: 'Black-box and white-box testing, unit testing, integration testing. Test-driven development (TDD), code coverage, static analysis.', ppts: [{ title: 'Software Testing', size: '2.9 MB' }], notes: [{ title: 'Testing Techniques', desc: 'Testing strategies guide' }], youtube: [{ title: 'Software Testing', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'distributed-1', key: 'cn', title: 'Distributed Systems', code: 'KCS702',
                units: [
                    { title: 'Unit 1: Distributed System Fundamentals', aiSummary: 'Characteristics, transparency, CAP theorem. Remote Procedure Calls (RPC), message passing. Consistency models and replication.', ppts: [{ title: 'Distributed Systems', size: '3.6 MB' }], notes: [{ title: 'CAP Theorem', desc: 'Consistency, Availability, Partition' }], youtube: [{ title: 'Distributed Systems', channel: 'Martin Kleppmann', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Consensus & Fault Tolerance', aiSummary: 'Consensus algorithms: Paxos, Raft. Leader election, Byzantine fault tolerance. MapReduce and distributed data processing (Hadoop, Spark basics).', ppts: [{ title: 'Consensus Algorithms', size: '3.1 MB' }], notes: [{ title: 'Consensus Notes', desc: 'Paxos and Raft explained' }], youtube: [{ title: 'Distributed Consensus', channel: 'MIT OpenCourseWare', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'java-1', key: 'java', title: 'Advanced Java & J2EE', code: 'KCS703',
                units: [
                    { title: 'Unit 1: Core Java Advanced', aiSummary: 'Collections framework, generics, streams API, lambda expressions, multithreading, concurrency utilities. Design patterns in Java.', ppts: [{ title: 'Advanced Java', size: '3.8 MB' }], notes: [{ title: 'Java Collections', desc: 'HashMap, ArrayList, TreeMap' }], youtube: [{ title: 'Advanced Java', channel: 'Derek Banas', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: J2EE & Spring Framework', aiSummary: 'Servlets, JSP, JDBC. Spring Boot: dependency injection, REST APIs, Spring Data JPA, Spring Security basics.', ppts: [{ title: 'Spring Framework', size: '4.2 MB' }], notes: [{ title: 'Spring Boot Guide', desc: 'Annotations and REST' }], youtube: [{ title: 'Spring Boot', channel: 'Amigoscode', url: 'https://youtube.com' }] }
                ]
            }
        ],
        8: [
            {
                id: 'psa-1', key: 'psa', title: 'Project Management', code: 'KCS801',
                units: [
                    { title: 'Unit 1: Project Planning & Risk', aiSummary: 'Project scope, WBS, Gantt charts, PERT/CPM. Risk identification, assessment, and mitigation strategies. Project cost estimation.', ppts: [{ title: 'Project Management', size: '3.0 MB' }], notes: [{ title: 'PM Techniques', desc: 'PERT, CPM and risk methods' }], youtube: [{ title: 'Project Management', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ethics-1', key: 'default', title: 'Professional Ethics & IPR', code: 'KNC801',
                units: [
                    { title: 'Unit 1: Engineering Ethics', aiSummary: 'Professional responsibility, codes of ethics (IEEE, ACM). Intellectual property rights: patents, copyrights, trademarks. Cyber law and IT Act.', ppts: [{ title: 'Ethics & IPR', size: '2.2 MB' }], notes: [{ title: 'Ethics Notes', desc: 'Core ethical principles' }], youtube: [{ title: 'Engineering Ethics', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ]
    },
    'ece': {
        1: [
            {
                id: 'math-1', key: 'math', title: 'Engineering Mathematics-I', code: 'AAS0103',
                units: [
                    {
                        title: 'Unit 1: Matrices',
                        aiSummary: 'Matrices are rectangular arrays of numbers. Key Topics: Types of matrices (symmetric, skew-symmetric, orthogonal), Rank of a matrix using echelon form, Cayley-Hamilton theorem for finding inverse, Eigenvalues and Eigenvectors — essential for stability analysis. Important: Practice characteristic equations and diagonalization.',
                        ppts: [{ title: 'Matrices Complete Lecture', size: '3.2 MB' }],
                        notes: [{ title: 'Quick Revision - Matrices', desc: 'All formulas & solved examples' }],
                        youtube: [
                            { title: 'Matrices & Determinants Complete Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' },
                            { title: 'Eigenvalues and Eigenvectors', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g' },
                            { title: 'Cayley-Hamilton Theorem - Proof & Problems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' },
                            { title: 'Diagonalization of a Matrix', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 2: Differential Calculus-I',
                        aiSummary: 'Covers successive differentiation, Leibniz theorem, Rolle\'s theorem, Mean Value theorems (Lagrange & Cauchy), Taylor and Maclaurin series expansions. Tip: Master the expansion formulas — they appear every exam.',
                        ppts: [{ title: 'Differential Calculus Slides', size: '2.8 MB' }],
                        notes: [{ title: 'Formulas Sheet - Calculus', desc: 'All differentiation rules + solved PYQs' }],
                        youtube: [
                            { title: 'Leibniz Theorem - Successive Differentiation', channel: 'Bhagwan Singh Vishwakarma', url: 'https://www.youtube.com/watch?v=Zc2l2U9V620' },
                            { title: 'Taylor\'s & Maclaurin\'s Series Expansion', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=R9Ym08c8KCc' },
                            { title: 'Rolle\'s & Mean Value Theorems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=vV68Q7-nQ1Y' },
                            { title: 'Jacobian & Partial Differentiation', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' }
                        ]
                    },
                    {
                        title: 'Unit 3: Differential Calculus-II',
                        aiSummary: 'Focuses on partial differentiation, Euler\'s theorem on homogeneous functions, total derivatives, and Taylor\'s theorem for two variables.',
                        ppts: [{ title: 'Calculus-II PPT', size: '3.1 MB' }],
                        notes: [{ title: 'Calculus-II Revision Sheet', desc: 'Euler\'s theorem & partial derivatives' }],
                        youtube: [
                            { title: 'Euler\'s Theorem Homogeneous Functions', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' },
                            { title: 'Total Differentiation & Chain Rule', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=q4c33f2T-8g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Multivariable Calculus',
                        aiSummary: 'Covers double and triple integrals, change of order of integration, coordinate transformations (Polar/Spherical/Cylindrical) using Jacobians, and Dirichlet\'s integrals.',
                        ppts: [{ title: 'Multivariable Calculus PPT', size: '4.5 MB' }],
                        notes: [{ title: 'Integrals Cheatsheet', desc: 'Double/triple integrals & area/volume' }],
                        youtube: [
                            { title: 'Double Integrals Concepts', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=3M6Z6Qj023w' },
                            { title: 'Change of Order of Integration', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=xH6S3nQvM5E' },
                            { title: 'Dirichlet\'s Theorem & Triple Integrals', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=48_S69sXU_A' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-I',
                        aiSummary: 'Quantitative aptitude concepts: Number systems, Profit & Loss, Percentage, Simple and Compound Interest, and Ratio & Proportion.',
                        ppts: [{ title: 'Aptitude-I PDF', size: '1.9 MB' }],
                        notes: [{ title: 'Aptitude Formulas Sheet', desc: 'Shortcuts and speed math tricks' }],
                        youtube: [
                            { title: 'Quantitative Aptitude Complete Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' },
                            { title: 'Profit, Loss & Discount Tricks', channel: 'Feel Free to Learn', url: 'https://www.youtube.com/watch?v=jiEaKYI0ATY' }
                        ]
                    }
                ]
            },
            {
                id: 'bee-1', key: 'bee', title: 'Basic Electrical and Electronics Engineering', code: 'AEC0101',
                units: [
                    {
                        title: 'Unit 1: D.C Circuit Analysis and Network Theorems',
                        aiSummary: 'Covers active & passive elements, sources, Kirchhoff\'s laws, nodal & loop analysis, Superposition, Thevenin\'s, Norton\'s, and Maximum Power Transfer theorems.',
                        ppts: [{ title: 'DC Circuit Basics', size: '2.5 MB' }],
                        notes: [{ title: 'Circuit Theorems Guide', desc: 'Solved mesh/nodal analysis problems' }],
                        youtube: [
                            { title: 'Kirchhoff\'s Laws & Nodal Analysis', channel: 'Gate Smashers', url: 'https://youtu.be/FjaJEo7knF4' },
                            { title: 'Thevenin\'s & Superposition Theorems', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Steady State Analysis of AC Circuit',
                        aiSummary: 'AC fundamentals, phasors, RLC series & parallel circuits, resonance, and three-phase balanced star/delta connections.',
                        ppts: [{ title: 'AC Analysis Slides', size: '3.0 MB' }],
                        notes: [{ title: 'AC Formulas & Phasor Diagrams', desc: 'Power factor and RLC relations' }],
                        youtube: [
                            { title: 'Single Phase AC Circuits', channel: 'Gate Smashers', url: 'https://youtu.be/ulGKCeOoR88' }
                        ]
                    },
                    {
                        title: 'Unit 3: Single Phase Transformer & Power Systems',
                        aiSummary: 'Transformer operating principle, EMF equation, equivalent circuit, losses, efficiency. Basics of MCB, ELCB, and earthing.',
                        ppts: [{ title: 'Transformer & Power Systems', size: '3.4 MB' }],
                        notes: [{ title: 'Transformer Derivations', desc: 'Equivalent circuit and sessional notes' }],
                        youtube: [
                            { title: 'Single Phase Transformer EMF Equation', channel: 'Neso Academy', url: 'https://youtu.be/GgckE4H5AJE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Diode and Their Applications',
                        aiSummary: 'PN junction diode properties, rectifiers, clippers, clampers, Zener diode regulator, LEDs, and basic display devices.',
                        ppts: [{ title: 'Semiconductor Diode PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Diode Circuit Cheat Sheet', desc: 'Full-wave/half-wave rectifier formulas' }],
                        youtube: [
                            { title: 'PN Junction Diode & Rectifiers', channel: 'Neso Academy', url: 'https://youtu.be/EdUAecpYVWQ' }
                        ]
                    },
                    {
                        title: 'Unit 5: Operational Amplifiers & Op-Amp Applications',
                        aiSummary: 'Op-amp characteristics, inverting/non-inverting configuration, summing amplifier, integrator, differentiator, sensors, and IoT introduction.',
                        ppts: [{ title: 'Op-Amps & IoT', size: '3.1 MB' }],
                        notes: [{ title: 'Op-Amp Solved Circuits', desc: 'Ideal op-amp properties and formulas' }],
                        youtube: [
                            { title: 'Introduction to Operational Amplifiers', channel: 'Neso Academy', url: 'https://youtu.be/AuZ00cQ0UrE' }
                        ]
                    }
                ]
            },
            {
                id: 'python-1', key: 'java', title: 'Problem Solving using Python', code: 'ACSE0101',
                units: [
                    {
                        title: 'Unit 1: Basics of python programming',
                        aiSummary: 'Introduction to python environment, variables, data types, standard input/output, operators, and basic expression evaluation.',
                        ppts: [{ title: 'Python Basics PPT', size: '2.0 MB' }],
                        notes: [{ title: 'Python Syntax Cheatsheet', desc: 'Variables, operators & formatting' }],
                        youtube: [
                            { title: 'Python Programming Course', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=aqvDMCY516A' }
                        ]
                    },
                    {
                        title: 'Unit 2: Decision Control Statements',
                        aiSummary: 'Flow control, conditional branching (if, if-else, elif), loops (while, for), break, continue, and pass control statements.',
                        ppts: [{ title: 'Control Statements Slides', size: '2.2 MB' }],
                        notes: [{ title: 'Conditional Statements Guide', desc: 'Nested loops and branching examples' }],
                        youtube: [
                            { title: 'Loops & Conditionals in Python', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Function and Modules',
                        aiSummary: 'Defining functions, argument passing, return values, scope of variables, recursion, lambda functions, and modules/packages creation.',
                        ppts: [{ title: 'Functions & Modules', size: '2.6 MB' }],
                        notes: [{ title: 'Python Functions Reference', desc: 'Scope, namespace, and standard imports' }],
                        youtube: [
                            { title: 'Functions & Recursion', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Basic Data structures in Python',
                        aiSummary: 'Lists, tuples, sets, and dictionaries operations, comprehensions, built-in methods, and structural comparison.',
                        ppts: [{ title: 'Python Data Structures', size: '3.1 MB' }],
                        notes: [{ title: 'Lists & Dicts Cheatsheet', desc: 'Common methods and operations' }],
                        youtube: [
                            { title: 'Lists, Tuples & Dictionaries', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: File and Exception handling',
                        aiSummary: 'File operations (read, write, append), file pointers, exceptions, try-except-finally blocks, and custom exceptions.',
                        ppts: [{ title: 'Files & Exceptions', size: '2.4 MB' }],
                        notes: [{ title: 'Error Handling Reference', desc: 'Standard exception classes & file modes' }],
                        youtube: [
                            { title: 'Exception Handling in Python', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            },
            {
                id: 'english-1', key: 'english', title: 'Professional Communication', code: 'AASL0101',
                units: [
                    {
                        title: 'Unit 1: Introduction & Reading Skills',
                        aiSummary: 'Basics of technical communication, reading speed, comprehension techniques, and vocabulary enhancement.',
                        ppts: [{ title: 'PC Unit 1 Slides', size: '1.4 MB' }],
                        notes: [{ title: 'Communication Basics', desc: 'LSRW skills and active reading' }],
                        youtube: [
                            { title: 'Professional Communication Intro', channel: 'Ekeeda', url: 'https://www.youtube.com/watch?v=oBq7YqkG-4Y' }
                        ]
                    },
                    {
                        title: 'Unit 2: Writing Skills',
                        aiSummary: 'Sentence structures, paragraph writing, technical descriptions, letters, resumes, and report writing.',
                        ppts: [{ title: 'Writing Formats PPT', size: '1.8 MB' }],
                        notes: [{ title: 'Letter & Resume Guide', desc: 'Standard business formats' }],
                        youtube: [
                            { title: 'Technical Writing & Resumes', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 3: Listening Skills',
                        aiSummary: 'Importance of listening, barriers to active listening, note-taking techniques, and audio comprehension.',
                        ppts: [{ title: 'Listening Skills PPT', size: '1.2 MB' }],
                        notes: [{ title: 'Active Listening Tips', desc: 'Note-taking structures' }],
                        youtube: [
                            { title: 'Active Listening in Communication', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Speaking Skills',
                        aiSummary: 'Phonetics, stress, intonation, group discussions, public speaking, and body language.',
                        ppts: [{ title: 'Phonetics & GD PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Speaking Guidelines', desc: 'Body language & GD cheat sheet' }],
                        youtube: [
                            { title: 'Speaking & GD Strategies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: Public Speaking & Presentation',
                        aiSummary: 'Design and delivery of formal presentations, handling questions, and stage presence.',
                        ppts: [{ title: 'Presentation Skills', size: '1.7 MB' }],
                        notes: [{ title: 'Presentation Cheat Sheet', desc: 'Structure, slide rules & public speaking' }],
                        youtube: [
                            { title: 'Mastering Presentations', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            }
        ],
        2: [
            {
                id: 'math-2', key: 'math', title: 'Engineering Mathematics-II', code: 'AAS0203',
                units: [
                    {
                        title: 'Unit 1: Ordinary Differential Equation of Higher Order',
                        aiSummary: 'Linear differential equations of n-th order with constant coefficients, complementary functions, particular integrals, and Cauchy-Euler equations.',
                        ppts: [{ title: 'Differential Equations PPT', size: '3.1 MB' }],
                        notes: [{ title: 'ODE Cheatsheet', desc: 'P.I. and C.F. shortcut methods' }],
                        youtube: [
                            { title: 'Higher Order Linear Differential Equations', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=Ql42qcOLKfo' }
                        ]
                    },
                    {
                        title: 'Unit 2: Sequences and series',
                        aiSummary: 'Infinite series convergence, Ratio test, Comparison test, Cauchy\'s root test, Rabee\'s test, and Fourier series representations.',
                        ppts: [{ title: 'Series Convergence Slides', size: '2.5 MB' }],
                        notes: [{ title: 'Convergence Tests Reference', desc: 'All test formulas & sessional notes' }],
                        youtube: [
                            { title: 'Sequences & Series Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=HUKR4LWrZ14' }
                        ]
                    },
                    {
                        title: 'Unit 3: Laplace Transform',
                        aiSummary: 'Laplace transforms properties, transform of derivatives/integrals, inverse Laplace, Dirac delta, and solving linear ODEs.',
                        ppts: [{ title: 'Laplace Transforms Complete', size: '3.5 MB' }],
                        notes: [{ title: 'Laplace Formulas Sheet', desc: 'Properties, shifts, and inverse guides' }],
                        youtube: [
                            { title: 'Laplace Transform Complete Series', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/nmp-5tSp-UY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Vector Calculus',
                        aiSummary: 'Gradient, divergence, curl, line/surface/volume integrals, Green\'s, Gauss divergence, and Stokes\' theorems.',
                        ppts: [{ title: 'Vector Calculus Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Vector Theorems Solved PYQs', desc: 'Stokes, Gauss, and Green proofs' }],
                        youtube: [
                            { title: 'Vector Calculus Revision', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/IwgqKjA6wko' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-II',
                        aiSummary: 'Aptitude topics: Partnership, problems on ages, mixtures, direction sense, blood relations, and interest.',
                        ppts: [{ title: 'Aptitude-II PDF', size: '1.8 MB' }],
                        notes: [{ title: 'Aptitude Hacks & Shortcuts', desc: 'Ages, partnership & direction tricks' }],
                        youtube: [
                            { title: 'Aptitude Practice Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' }
                        ]
                    }
                ]
            },
            {
                id: 'design-1', key: 'default', title: 'Design Thinking-I', code: 'ACSE0203',
                units: [
                    {
                        title: 'Unit 1: Introduction',
                        aiSummary: 'Basics of design thinking, iterative cycle, empathy mapping, user-centered mindset, and case studies.',
                        ppts: [{ title: 'Design Thinking Intro', size: '1.8 MB' }],
                        notes: [{ title: 'Design Cycle Summary', desc: 'Empathize, Define, Ideate, Prototype, Test' }],
                        youtube: [
                            { title: 'Design Thinking for Beginners', channel: 'NPTEL', url: 'https://swayam.gov.in/nd1_noc19_mg60/preview' }
                        ]
                    },
                    {
                        title: 'Unit 2: Ethical Values and Empathy',
                        aiSummary: 'Role of empathy in user research, ethical guidelines, interviews, observation, and developing user personas.',
                        ppts: [{ title: 'Empathy & Ethics Slides', size: '2.0 MB' }],
                        notes: [{ title: 'User Research Guidelines', desc: 'Interview scripts & observation logs' }],
                        youtube: [
                            { title: 'Empathy Mapping Techniques', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Problem Statement & Ideation',
                        aiSummary: 'Defining the problem, POV statement, brainstorming techniques, SCAMPER method, and selecting solutions.',
                        ppts: [{ title: 'Problem Definition & Ideation', size: '2.4 MB' }],
                        notes: [{ title: 'Brainstorming Guidelines', desc: 'POV definitions & ideation rules' }],
                        youtube: [
                            { title: 'Ideation & Prototyping Basics', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 4: Critical Thinking',
                        aiSummary: 'Critical thinking fundamentals, evaluating arguments, identifying logical fallacies, and decision models.',
                        ppts: [{ title: 'Critical Thinking Slides', size: '1.6 MB' }],
                        notes: [{ title: 'Logical Fallacies Cheat Sheet', desc: 'Types of fallacies with examples' }],
                        youtube: [
                            { title: 'Critical Thinking & Fallacies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 5: Logic and Argumentation',
                        aiSummary: 'Propositional logic, syllogisms, forming valid arguments, and group exercises in structural debate.',
                        ppts: [{ title: 'Logic & Arguments PPT', size: '2.2 MB' }],
                        notes: [{ title: 'Deductive vs Inductive Logic', desc: 'Valid argument forms cheatsheet' }],
                        youtube: [
                            { title: 'Formal Logic & Syllogisms', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    }
                ]
            },
            {
                id: 'physics-1', key: 'physics', title: 'Engineering Physics', code: 'AAS0201A',
                units: [
                    {
                        title: 'Unit 1: Relativistic Mechanics',
                        aiSummary: 'Frame of reference, Michelson-Morley experiment, Galilean transformations, Lorentz transformations, length contraction, time dilation, and E=mc^2.',
                        ppts: [{ title: 'Relativity Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Relativistic Derivations', desc: 'Time dilation & mass-energy relation proofs' }],
                        youtube: [
                            { title: 'Relativity Complete Lecture', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Quantum Mechanics',
                        aiSummary: 'De-Broglie hypothesis, wave-particle duality, Heisenberg uncertainty principle. Schrodinger wave equation (time-dependent and time-independent), wave function physical significance, particle in a 1D box. Practice energy level derivations.',
                        ppts: [{ title: 'Quantum Mechanics Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Quantum Physics Formula Guide', desc: 'Solved 1D box derivations' }],
                        youtube: [
                            { title: 'Quantum Mechanics Playlist', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Wave Optics',
                        aiSummary: 'Interference: Young\'s double-slit experiment, Newton\'s rings, thin film interference. Diffraction: Fresnel vs Fraunhofer, single slit diffraction pattern. Polarization: Brewster\'s law, Malus law, double refraction. Key formulas: fringe width = λD/d, resolving power of grating = nN.',
                        ppts: [{ title: 'Wave Optics Lecture', size: '2.1 MB' }],
                        notes: [{ title: 'Optics Quick Notes', desc: 'Derivations and numericals' }],
                        youtube: [
                            { title: 'Wave Optics Complete', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Physics and Information Storage',
                        aiSummary: 'Energy bands, intrinsic & extrinsic semiconductors, Fermi level, carrier concentration, Hall effect, and basic magnetic memory storage systems.',
                        ppts: [{ title: 'Semiconductor Devices PPT', size: '2.8 MB' }],
                        notes: [{ title: 'Carrier Concentration & Fermi Level', desc: 'Equations and Hall effect calculations' }],
                        youtube: [
                            { title: 'Semiconductors in Physics', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=h6sXoB2eIig' }
                        ]
                    },
                    {
                        title: 'Unit 5: Fiber Optics & Laser',
                        aiSummary: 'Laser: Spontaneous and stimulated emission, Einstein\'s coefficients, population inversion, Ruby laser, He-Ne laser. Fiber Optics: Principle of propagation, acceptance angle, numerical aperture, fractional refractive index change, single/multi-mode fibers. Tip: Numerical questions are highly common from numerical aperture.',
                        ppts: [{ title: 'Lasers & Fiber Optics PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Fiber Optics Cheat Sheet', desc: 'Formulas and step-by-step solved numerics' }],
                        youtube: [
                            { title: 'Lasers & Fiber Optics course', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=u8-FidK7zV8' }
                        ]
                    }
                ]
            },
            {
                id: 'python-2', key: 'java', title: 'Problem Solving using Advanced Python', code: 'ACSE0202',
                units: [
                    {
                        title: 'Unit 1: Classes and Objects',
                        aiSummary: 'OOP fundamentals in Python: defining classes, instantiating objects, constructor methods (__init__), class vs instance attributes, and method types.',
                        ppts: [{ title: 'Classes & Objects Slides', size: '2.3 MB' }],
                        notes: [{ title: 'Python OOP Cheatsheet', desc: 'Syntax for classes, objects, and attributes' }],
                        youtube: [
                            { title: 'Python Classes and Objects', channel: 'Telusko', url: 'https://nptel.ac.in/courses/106/106/106106145/' }
                        ]
                    },
                    {
                        title: 'Unit 2: Object Oriented Concepts',
                        aiSummary: 'Inheritance, method overriding, super() function, polymorphism, encapsulation, private attributes, operator overloading, and special methods (__str__, __len__).',
                        ppts: [{ title: 'OOP Core Concepts', size: '2.7 MB' }],
                        notes: [{ title: 'Polymorphism & Inheritance', desc: 'Overriding and multiple inheritance rules' }],
                        youtube: [
                            { title: 'Python OOP Inheritance', channel: 'Python Course', url: 'https://www.python-course.eu/python3_inheritance.php' }
                        ]
                    },
                    {
                        title: 'Unit 3: Functional Programming',
                        aiSummary: 'Functional concepts in Python: map(), filter(), reduce() functions, list/dictionary comprehensions, generators, and iterators.',
                        ppts: [{ title: 'Functional Programming PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Functional Python Cheatsheet', desc: 'Lambda, mapping, and list comprehension tips' }],
                        youtube: [
                            { title: 'Functional Python Programming', channel: 'Real Python', url: 'https://realpython.com/courses/functional-programming-python/' }
                        ]
                    },
                    {
                        title: 'Unit 4: GUI Programming',
                        aiSummary: 'GUI development in Python using Tkinter: creating windows, widgets (Labels, Buttons, Entries), layouts (Pack, Grid), and event handling.',
                        ppts: [{ title: 'Tkinter GUI Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Tkinter Widgets Reference', desc: 'GUI element grids and event bindings' }],
                        youtube: [
                            { title: 'Python Tkinter GUI Tutorial', channel: 'Real Python', url: 'https://realpython.com/python-gui-tkinter/' }
                        ]
                    },
                    {
                        title: 'Unit 5: Libraries in Python',
                        aiSummary: 'Intro to NumPy, Pandas, and Matplotlib libraries for data manipulation and visualization.',
                        ppts: [{ title: 'Python Libraries PPT', size: '3.8 MB' }],
                        notes: [{ title: 'Data Analytics Cheatsheet', desc: 'Numpy arrays and Pandas dataframe basics' }],
                        youtube: [
                            { title: 'NumPy, Pandas & Matplotlib Course', channel: 'NPTEL', url: 'https://nptel.ac.in/courses/106/107/106107220/' }
                        ]
                    }
                ]
            }
        ],
        3: [
            {
                id: 'ece-signals-1', key: 'signals', title: 'Signals & Systems', code: 'KEC301',
                units: [
                    { title: 'Unit 1: Signal Classification', aiSummary: 'Continuous and discrete time signals. Periodic, aperiodic, energy and power signals. Basic signal operations: shifting, scaling, reversal.', ppts: [{ title: 'Signals & Systems', size: '3.2 MB' }], notes: [{ title: 'Signal Types', desc: 'Classification and operations' }], youtube: [{ title: 'Signals & Systems', channel: 'Neso Academy', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: LTI Systems', aiSummary: 'Linear Time-Invariant systems, convolution, impulse response, BIBO stability, frequency response.', ppts: [{ title: 'LTI Systems', size: '2.8 MB' }], notes: [{ title: 'Convolution Notes', desc: 'Step-by-step methods' }], youtube: [{ title: 'LTI Systems Explained', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ece-digital-1', key: 'micro', title: 'Digital Electronics', code: 'KEC302',
                units: [
                    { title: 'Unit 1: Number Systems & Boolean Algebra', aiSummary: 'Binary, octal, hexadecimal systems. Boolean algebra, De Morgan\'s laws, Karnaugh maps for minimization.', ppts: [{ title: 'Digital Electronics', size: '2.6 MB' }], notes: [{ title: 'K-Map Reference', desc: '2,3,4 variable K-maps' }], youtube: [{ title: 'Digital Electronics', channel: 'Neso Academy', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ece-emft-1', key: 'emft', title: 'Electromagnetic Field Theory', code: 'KEC303',
                units: [
                    { title: 'Unit 1: Electrostatics', aiSummary: 'Coulomb\'s law, Gauss\'s law, electric potential, dielectrics, boundary conditions. Vector calculus: gradient, divergence, curl.', ppts: [{ title: 'EMFT Basics', size: '3.4 MB' }], notes: [{ title: 'Maxwell\'s Equations', desc: 'All four equations explained' }], youtube: [{ title: 'EMFT Full Course', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ],
        4: [
            {
                id: 'ece-analog-1', key: 'emft', title: 'Analog Circuits', code: 'KEC401',
                units: [
                    { title: 'Unit 1: BJT Amplifiers', aiSummary: 'BJT biasing, small-signal model, CE, CB, CC configurations. Frequency response, Miller effect, gain-bandwidth product.', ppts: [{ title: 'Analog Circuits', size: '3.1 MB' }], notes: [{ title: 'Amplifier Notes', desc: 'Configurations and analysis' }], youtube: [{ title: 'Analog Electronics', channel: 'Neso Academy', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ece-comm-1', key: 'signals', title: 'Analog Communication', code: 'KEC402',
                units: [
                    { title: 'Unit 1: Amplitude Modulation', aiSummary: 'AM, DSB-SC, SSB modulation and demodulation. Frequency spectrum, bandwidth, power analysis, AM radio systems.', ppts: [{ title: 'Analog Comm', size: '2.9 MB' }], notes: [{ title: 'Modulation Summary', desc: 'Types and key formulas' }], youtube: [{ title: 'Analog Communication', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ]
    },
    'me': {
        1: [
            {
                id: 'math-1', key: 'math', title: 'Engineering Mathematics-I', code: 'AAS0103',
                units: [
                    {
                        title: 'Unit 1: Matrices',
                        aiSummary: 'Matrices are rectangular arrays of numbers. Key Topics: Types of matrices (symmetric, skew-symmetric, orthogonal), Rank of a matrix using echelon form, Cayley-Hamilton theorem for finding inverse, Eigenvalues and Eigenvectors — essential for stability analysis. Important: Practice characteristic equations and diagonalization.',
                        ppts: [{ title: 'Matrices Complete Lecture', size: '3.2 MB' }],
                        notes: [{ title: 'Quick Revision - Matrices', desc: 'All formulas & solved examples' }],
                        youtube: [
                            { title: 'Matrices & Determinants Complete Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' },
                            { title: 'Eigenvalues and Eigenvectors', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g' },
                            { title: 'Cayley-Hamilton Theorem - Proof & Problems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' },
                            { title: 'Diagonalization of a Matrix', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 2: Differential Calculus-I',
                        aiSummary: 'Covers successive differentiation, Leibniz theorem, Rolle\'s theorem, Mean Value theorems (Lagrange & Cauchy), Taylor and Maclaurin series expansions. Tip: Master the expansion formulas — they appear every exam.',
                        ppts: [{ title: 'Differential Calculus Slides', size: '2.8 MB' }],
                        notes: [{ title: 'Formulas Sheet - Calculus', desc: 'All differentiation rules + solved PYQs' }],
                        youtube: [
                            { title: 'Leibniz Theorem - Successive Differentiation', channel: 'Bhagwan Singh Vishwakarma', url: 'https://www.youtube.com/watch?v=Zc2l2U9V620' },
                            { title: 'Taylor\'s & Maclaurin\'s Series Expansion', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=R9Ym08c8KCc' },
                            { title: 'Rolle\'s & Mean Value Theorems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=vV68Q7-nQ1Y' },
                            { title: 'Jacobian & Partial Differentiation', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' }
                        ]
                    },
                    {
                        title: 'Unit 3: Differential Calculus-II',
                        aiSummary: 'Focuses on partial differentiation, Euler\'s theorem on homogeneous functions, total derivatives, and Taylor\'s theorem for two variables.',
                        ppts: [{ title: 'Calculus-II PPT', size: '3.1 MB' }],
                        notes: [{ title: 'Calculus-II Revision Sheet', desc: 'Euler\'s theorem & partial derivatives' }],
                        youtube: [
                            { title: 'Euler\'s Theorem Homogeneous Functions', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' },
                            { title: 'Total Differentiation & Chain Rule', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=q4c33f2T-8g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Multivariable Calculus',
                        aiSummary: 'Covers double and triple integrals, change of order of integration, coordinate transformations (Polar/Spherical/Cylindrical) using Jacobians, and Dirichlet\'s integrals.',
                        ppts: [{ title: 'Multivariable Calculus PPT', size: '4.5 MB' }],
                        notes: [{ title: 'Integrals Cheatsheet', desc: 'Double/triple integrals & area/volume' }],
                        youtube: [
                            { title: 'Double Integrals Concepts', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=3M6Z6Qj023w' },
                            { title: 'Change of Order of Integration', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=xH6S3nQvM5E' },
                            { title: 'Dirichlet\'s Theorem & Triple Integrals', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=48_S69sXU_A' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-I',
                        aiSummary: 'Quantitative aptitude concepts: Number systems, Profit & Loss, Percentage, Simple and Compound Interest, and Ratio & Proportion.',
                        ppts: [{ title: 'Aptitude-I PDF', size: '1.9 MB' }],
                        notes: [{ title: 'Aptitude Formulas Sheet', desc: 'Shortcuts and speed math tricks' }],
                        youtube: [
                            { title: 'Quantitative Aptitude Complete Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' },
                            { title: 'Profit, Loss & Discount Tricks', channel: 'Feel Free to Learn', url: 'https://www.youtube.com/watch?v=jiEaKYI0ATY' }
                        ]
                    }
                ]
            },
            {
                id: 'bee-1', key: 'bee', title: 'Basic Electrical and Electronics Engineering', code: 'AEC0101',
                units: [
                    {
                        title: 'Unit 1: D.C Circuit Analysis and Network Theorems',
                        aiSummary: 'Covers active & passive elements, sources, Kirchhoff\'s laws, nodal & loop analysis, Superposition, Thevenin\'s, Norton\'s, and Maximum Power Transfer theorems.',
                        ppts: [{ title: 'DC Circuit Basics', size: '2.5 MB' }],
                        notes: [{ title: 'Circuit Theorems Guide', desc: 'Solved mesh/nodal analysis problems' }],
                        youtube: [
                            { title: 'Kirchhoff\'s Laws & Nodal Analysis', channel: 'Gate Smashers', url: 'https://youtu.be/FjaJEo7knF4' },
                            { title: 'Thevenin\'s & Superposition Theorems', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Steady State Analysis of AC Circuit',
                        aiSummary: 'AC fundamentals, phasors, RLC series & parallel circuits, resonance, and three-phase balanced star/delta connections.',
                        ppts: [{ title: 'AC Analysis Slides', size: '3.0 MB' }],
                        notes: [{ title: 'AC Formulas & Phasor Diagrams', desc: 'Power factor and RLC relations' }],
                        youtube: [
                            { title: 'Single Phase AC Circuits', channel: 'Gate Smashers', url: 'https://youtu.be/ulGKCeOoR88' }
                        ]
                    },
                    {
                        title: 'Unit 3: Single Phase Transformer & Power Systems',
                        aiSummary: 'Transformer operating principle, EMF equation, equivalent circuit, losses, efficiency. Basics of MCB, ELCB, and earthing.',
                        ppts: [{ title: 'Transformer & Power Systems', size: '3.4 MB' }],
                        notes: [{ title: 'Transformer Derivations', desc: 'Equivalent circuit and sessional notes' }],
                        youtube: [
                            { title: 'Single Phase Transformer EMF Equation', channel: 'Neso Academy', url: 'https://youtu.be/GgckE4H5AJE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Diode and Their Applications',
                        aiSummary: 'PN junction diode properties, rectifiers, clippers, clampers, Zener diode regulator, LEDs, and basic display devices.',
                        ppts: [{ title: 'Semiconductor Diode PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Diode Circuit Cheat Sheet', desc: 'Full-wave/half-wave rectifier formulas' }],
                        youtube: [
                            { title: 'PN Junction Diode & Rectifiers', channel: 'Neso Academy', url: 'https://youtu.be/EdUAecpYVWQ' }
                        ]
                    },
                    {
                        title: 'Unit 5: Operational Amplifiers & Op-Amp Applications',
                        aiSummary: 'Op-amp characteristics, inverting/non-inverting configuration, summing amplifier, integrator, differentiator, sensors, and IoT introduction.',
                        ppts: [{ title: 'Op-Amps & IoT', size: '3.1 MB' }],
                        notes: [{ title: 'Op-Amp Solved Circuits', desc: 'Ideal op-amp properties and formulas' }],
                        youtube: [
                            { title: 'Introduction to Operational Amplifiers', channel: 'Neso Academy', url: 'https://youtu.be/AuZ00cQ0UrE' }
                        ]
                    }
                ]
            },
            {
                id: 'python-1', key: 'java', title: 'Problem Solving using Python', code: 'ACSE0101',
                units: [
                    {
                        title: 'Unit 1: Basics of python programming',
                        aiSummary: 'Introduction to python environment, variables, data types, standard input/output, operators, and basic expression evaluation.',
                        ppts: [{ title: 'Python Basics PPT', size: '2.0 MB' }],
                        notes: [{ title: 'Python Syntax Cheatsheet', desc: 'Variables, operators & formatting' }],
                        youtube: [
                            { title: 'Python Programming Course', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=aqvDMCY516A' }
                        ]
                    },
                    {
                        title: 'Unit 2: Decision Control Statements',
                        aiSummary: 'Flow control, conditional branching (if, if-else, elif), loops (while, for), break, continue, and pass control statements.',
                        ppts: [{ title: 'Control Statements Slides', size: '2.2 MB' }],
                        notes: [{ title: 'Conditional Statements Guide', desc: 'Nested loops and branching examples' }],
                        youtube: [
                            { title: 'Loops & Conditionals in Python', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Function and Modules',
                        aiSummary: 'Defining functions, argument passing, return values, scope of variables, recursion, lambda functions, and modules/packages creation.',
                        ppts: [{ title: 'Functions & Modules', size: '2.6 MB' }],
                        notes: [{ title: 'Python Functions Reference', desc: 'Scope, namespace, and standard imports' }],
                        youtube: [
                            { title: 'Functions & Recursion', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Basic Data structures in Python',
                        aiSummary: 'Lists, tuples, sets, and dictionaries operations, comprehensions, built-in methods, and structural comparison.',
                        ppts: [{ title: 'Python Data Structures', size: '3.1 MB' }],
                        notes: [{ title: 'Lists & Dicts Cheatsheet', desc: 'Common methods and operations' }],
                        youtube: [
                            { title: 'Lists, Tuples & Dictionaries', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: File and Exception handling',
                        aiSummary: 'File operations (read, write, append), file pointers, exceptions, try-except-finally blocks, and custom exceptions.',
                        ppts: [{ title: 'Files & Exceptions', size: '2.4 MB' }],
                        notes: [{ title: 'Error Handling Reference', desc: 'Standard exception classes & file modes' }],
                        youtube: [
                            { title: 'Exception Handling in Python', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            },
            {
                id: 'english-1', key: 'english', title: 'Professional Communication', code: 'AASL0101',
                units: [
                    {
                        title: 'Unit 1: Introduction & Reading Skills',
                        aiSummary: 'Basics of technical communication, reading speed, comprehension techniques, and vocabulary enhancement.',
                        ppts: [{ title: 'PC Unit 1 Slides', size: '1.4 MB' }],
                        notes: [{ title: 'Communication Basics', desc: 'LSRW skills and active reading' }],
                        youtube: [
                            { title: 'Professional Communication Intro', channel: 'Ekeeda', url: 'https://www.youtube.com/watch?v=oBq7YqkG-4Y' }
                        ]
                    },
                    {
                        title: 'Unit 2: Writing Skills',
                        aiSummary: 'Sentence structures, paragraph writing, technical descriptions, letters, resumes, and report writing.',
                        ppts: [{ title: 'Writing Formats PPT', size: '1.8 MB' }],
                        notes: [{ title: 'Letter & Resume Guide', desc: 'Standard business formats' }],
                        youtube: [
                            { title: 'Technical Writing & Resumes', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 3: Listening Skills',
                        aiSummary: 'Importance of listening, barriers to active listening, note-taking techniques, and audio comprehension.',
                        ppts: [{ title: 'Listening Skills PPT', size: '1.2 MB' }],
                        notes: [{ title: 'Active Listening Tips', desc: 'Note-taking structures' }],
                        youtube: [
                            { title: 'Active Listening in Communication', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Speaking Skills',
                        aiSummary: 'Phonetics, stress, intonation, group discussions, public speaking, and body language.',
                        ppts: [{ title: 'Phonetics & GD PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Speaking Guidelines', desc: 'Body language & GD cheat sheet' }],
                        youtube: [
                            { title: 'Speaking & GD Strategies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: Public Speaking & Presentation',
                        aiSummary: 'Design and delivery of formal presentations, handling questions, and stage presence.',
                        ppts: [{ title: 'Presentation Skills', size: '1.7 MB' }],
                        notes: [{ title: 'Presentation Cheat Sheet', desc: 'Structure, slide rules & public speaking' }],
                        youtube: [
                            { title: 'Mastering Presentations', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            }
        ],
        2: [
            {
                id: 'math-2', key: 'math', title: 'Engineering Mathematics-II', code: 'AAS0203',
                units: [
                    {
                        title: 'Unit 1: Ordinary Differential Equation of Higher Order',
                        aiSummary: 'Linear differential equations of n-th order with constant coefficients, complementary functions, particular integrals, and Cauchy-Euler equations.',
                        ppts: [{ title: 'Differential Equations PPT', size: '3.1 MB' }],
                        notes: [{ title: 'ODE Cheatsheet', desc: 'P.I. and C.F. shortcut methods' }],
                        youtube: [
                            { title: 'Higher Order Linear Differential Equations', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=Ql42qcOLKfo' }
                        ]
                    },
                    {
                        title: 'Unit 2: Sequences and series',
                        aiSummary: 'Infinite series convergence, Ratio test, Comparison test, Cauchy\'s root test, Rabee\'s test, and Fourier series representations.',
                        ppts: [{ title: 'Series Convergence Slides', size: '2.5 MB' }],
                        notes: [{ title: 'Convergence Tests Reference', desc: 'All test formulas & sessional notes' }],
                        youtube: [
                            { title: 'Sequences & Series Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=HUKR4LWrZ14' }
                        ]
                    },
                    {
                        title: 'Unit 3: Laplace Transform',
                        aiSummary: 'Laplace transforms properties, transform of derivatives/integrals, inverse Laplace, Dirac delta, and solving linear ODEs.',
                        ppts: [{ title: 'Laplace Transforms Complete', size: '3.5 MB' }],
                        notes: [{ title: 'Laplace Formulas Sheet', desc: 'Properties, shifts, and inverse guides' }],
                        youtube: [
                            { title: 'Laplace Transform Complete Series', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/nmp-5tSp-UY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Vector Calculus',
                        aiSummary: 'Gradient, divergence, curl, line/surface/volume integrals, Green\'s, Gauss divergence, and Stokes\' theorems.',
                        ppts: [{ title: 'Vector Calculus Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Vector Theorems Solved PYQs', desc: 'Stokes, Gauss, and Green proofs' }],
                        youtube: [
                            { title: 'Vector Calculus Revision', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/IwgqKjA6wko' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-II',
                        aiSummary: 'Aptitude topics: Partnership, problems on ages, mixtures, direction sense, blood relations, and interest.',
                        ppts: [{ title: 'Aptitude-II PDF', size: '1.8 MB' }],
                        notes: [{ title: 'Aptitude Hacks & Shortcuts', desc: 'Ages, partnership & direction tricks' }],
                        youtube: [
                            { title: 'Aptitude Practice Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' }
                        ]
                    }
                ]
            },
            {
                id: 'design-1', key: 'default', title: 'Design Thinking-I', code: 'ACSE0203',
                units: [
                    {
                        title: 'Unit 1: Introduction',
                        aiSummary: 'Basics of design thinking, iterative cycle, empathy mapping, user-centered mindset, and case studies.',
                        ppts: [{ title: 'Design Thinking Intro', size: '1.8 MB' }],
                        notes: [{ title: 'Design Cycle Summary', desc: 'Empathize, Define, Ideate, Prototype, Test' }],
                        youtube: [
                            { title: 'Design Thinking for Beginners', channel: 'NPTEL', url: 'https://swayam.gov.in/nd1_noc19_mg60/preview' }
                        ]
                    },
                    {
                        title: 'Unit 2: Ethical Values and Empathy',
                        aiSummary: 'Role of empathy in user research, ethical guidelines, interviews, observation, and developing user personas.',
                        ppts: [{ title: 'Empathy & Ethics Slides', size: '2.0 MB' }],
                        notes: [{ title: 'User Research Guidelines', desc: 'Interview scripts & observation logs' }],
                        youtube: [
                            { title: 'Empathy Mapping Techniques', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Problem Statement & Ideation',
                        aiSummary: 'Defining the problem, POV statement, brainstorming techniques, SCAMPER method, and selecting solutions.',
                        ppts: [{ title: 'Problem Definition & Ideation', size: '2.4 MB' }],
                        notes: [{ title: 'Brainstorming Guidelines', desc: 'POV definitions & ideation rules' }],
                        youtube: [
                            { title: 'Ideation & Prototyping Basics', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 4: Critical Thinking',
                        aiSummary: 'Critical thinking fundamentals, evaluating arguments, identifying logical fallacies, and decision models.',
                        ppts: [{ title: 'Critical Thinking Slides', size: '1.6 MB' }],
                        notes: [{ title: 'Logical Fallacies Cheat Sheet', desc: 'Types of fallacies with examples' }],
                        youtube: [
                            { title: 'Critical Thinking & Fallacies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 5: Logic and Argumentation',
                        aiSummary: 'Propositional logic, syllogisms, forming valid arguments, and group exercises in structural debate.',
                        ppts: [{ title: 'Logic & Arguments PPT', size: '2.2 MB' }],
                        notes: [{ title: 'Deductive vs Inductive Logic', desc: 'Valid argument forms cheatsheet' }],
                        youtube: [
                            { title: 'Formal Logic & Syllogisms', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    }
                ]
            },
            {
                id: 'physics-1', key: 'physics', title: 'Engineering Physics', code: 'AAS0201A',
                units: [
                    {
                        title: 'Unit 1: Relativistic Mechanics',
                        aiSummary: 'Frame of reference, Michelson-Morley experiment, Galilean transformations, Lorentz transformations, length contraction, time dilation, and E=mc^2.',
                        ppts: [{ title: 'Relativity Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Relativistic Derivations', desc: 'Time dilation & mass-energy relation proofs' }],
                        youtube: [
                            { title: 'Relativity Complete Lecture', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Quantum Mechanics',
                        aiSummary: 'De-Broglie hypothesis, wave-particle duality, Heisenberg uncertainty principle. Schrodinger wave equation (time-dependent and time-independent), wave function physical significance, particle in a 1D box. Practice energy level derivations.',
                        ppts: [{ title: 'Quantum Mechanics Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Quantum Physics Formula Guide', desc: 'Solved 1D box derivations' }],
                        youtube: [
                            { title: 'Quantum Mechanics Playlist', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Wave Optics',
                        aiSummary: 'Interference: Young\'s double-slit experiment, Newton\'s rings, thin film interference. Diffraction: Fresnel vs Fraunhofer, single slit diffraction pattern. Polarization: Brewster\'s law, Malus law, double refraction. Key formulas: fringe width = λD/d, resolving power of grating = nN.',
                        ppts: [{ title: 'Wave Optics Lecture', size: '2.1 MB' }],
                        notes: [{ title: 'Optics Quick Notes', desc: 'Derivations and numericals' }],
                        youtube: [
                            { title: 'Wave Optics Complete', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Physics and Information Storage',
                        aiSummary: 'Energy bands, intrinsic & extrinsic semiconductors, Fermi level, carrier concentration, Hall effect, and basic magnetic memory storage systems.',
                        ppts: [{ title: 'Semiconductor Devices PPT', size: '2.8 MB' }],
                        notes: [{ title: 'Carrier Concentration & Fermi Level', desc: 'Equations and Hall effect calculations' }],
                        youtube: [
                            { title: 'Semiconductors in Physics', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=h6sXoB2eIig' }
                        ]
                    },
                    {
                        title: 'Unit 5: Fiber Optics & Laser',
                        aiSummary: 'Laser: Spontaneous and stimulated emission, Einstein\'s coefficients, population inversion, Ruby laser, He-Ne laser. Fiber Optics: Principle of propagation, acceptance angle, numerical aperture, fractional refractive index change, single/multi-mode fibers. Tip: Numerical questions are highly common from numerical aperture.',
                        ppts: [{ title: 'Lasers & Fiber Optics PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Fiber Optics Cheat Sheet', desc: 'Formulas and step-by-step solved numerics' }],
                        youtube: [
                            { title: 'Lasers & Fiber Optics course', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=u8-FidK7zV8' }
                        ]
                    }
                ]
            },
            {
                id: 'python-2', key: 'java', title: 'Problem Solving using Advanced Python', code: 'ACSE0202',
                units: [
                    {
                        title: 'Unit 1: Classes and Objects',
                        aiSummary: 'OOP fundamentals in Python: defining classes, instantiating objects, constructor methods (__init__), class vs instance attributes, and method types.',
                        ppts: [{ title: 'Classes & Objects Slides', size: '2.3 MB' }],
                        notes: [{ title: 'Python OOP Cheatsheet', desc: 'Syntax for classes, objects, and attributes' }],
                        youtube: [
                            { title: 'Python Classes and Objects', channel: 'Telusko', url: 'https://nptel.ac.in/courses/106/106/106106145/' }
                        ]
                    },
                    {
                        title: 'Unit 2: Object Oriented Concepts',
                        aiSummary: 'Inheritance, method overriding, super() function, polymorphism, encapsulation, private attributes, operator overloading, and special methods (__str__, __len__).',
                        ppts: [{ title: 'OOP Core Concepts', size: '2.7 MB' }],
                        notes: [{ title: 'Polymorphism & Inheritance', desc: 'Overriding and multiple inheritance rules' }],
                        youtube: [
                            { title: 'Python OOP Inheritance', channel: 'Python Course', url: 'https://www.python-course.eu/python3_inheritance.php' }
                        ]
                    },
                    {
                        title: 'Unit 3: Functional Programming',
                        aiSummary: 'Functional concepts in Python: map(), filter(), reduce() functions, list/dictionary comprehensions, generators, and iterators.',
                        ppts: [{ title: 'Functional Programming PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Functional Python Cheatsheet', desc: 'Lambda, mapping, and list comprehension tips' }],
                        youtube: [
                            { title: 'Functional Python Programming', channel: 'Real Python', url: 'https://realpython.com/courses/functional-programming-python/' }
                        ]
                    },
                    {
                        title: 'Unit 4: GUI Programming',
                        aiSummary: 'GUI development in Python using Tkinter: creating windows, widgets (Labels, Buttons, Entries), layouts (Pack, Grid), and event handling.',
                        ppts: [{ title: 'Tkinter GUI Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Tkinter Widgets Reference', desc: 'GUI element grids and event bindings' }],
                        youtube: [
                            { title: 'Python Tkinter GUI Tutorial', channel: 'Real Python', url: 'https://realpython.com/python-gui-tkinter/' }
                        ]
                    },
                    {
                        title: 'Unit 5: Libraries in Python',
                        aiSummary: 'Intro to NumPy, Pandas, and Matplotlib libraries for data manipulation and visualization.',
                        ppts: [{ title: 'Python Libraries PPT', size: '3.8 MB' }],
                        notes: [{ title: 'Data Analytics Cheatsheet', desc: 'Numpy arrays and Pandas dataframe basics' }],
                        youtube: [
                            { title: 'NumPy, Pandas & Matplotlib Course', channel: 'NPTEL', url: 'https://nptel.ac.in/courses/106/107/106107220/' }
                        ]
                    }
                ]
            }
        ],
        3: [
            {
                id: 'me-thermo-1', key: 'thermo', title: 'Thermodynamics', code: 'KME301',
                units: [
                    { title: 'Unit 1: Laws of Thermodynamics', aiSummary: 'Zeroth, first, second, and third laws. Thermodynamic systems, processes, cycles. Concept of entropy and availability.', ppts: [{ title: 'Thermodynamics', size: '3.6 MB' }], notes: [{ title: 'Thermo Laws', desc: 'All four laws explained' }], youtube: [{ title: 'Thermodynamics', channel: 'NPTEL', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Power Cycles', aiSummary: 'Carnot, Rankine, Otto, Diesel, Brayton cycles. Efficiency calculations, p-v and T-s diagrams. Steam power plants.', ppts: [{ title: 'Power Cycles PPT', size: '2.9 MB' }], notes: [{ title: 'Cycle Efficiency', desc: 'Formulas and comparisons' }], youtube: [{ title: 'Thermodynamic Cycles', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'me-fluid-1', key: 'fluid', title: 'Fluid Mechanics', code: 'KME302',
                units: [
                    { title: 'Unit 1: Fluid Properties & Statics', aiSummary: 'Viscosity, surface tension, capillarity. Hydrostatic pressure, Pascal\'s law, pressure measurement, buoyancy and Archimedes\' principle.', ppts: [{ title: 'Fluid Mechanics', size: '3.2 MB' }], notes: [{ title: 'Fluid Properties', desc: 'Key equations' }], youtube: [{ title: 'Fluid Mechanics', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'me-som-2', key: 'som', title: 'Strength of Materials', code: 'KME303',
                units: [
                    { title: 'Unit 1: Stress & Strain', aiSummary: 'Normal and shear stress, elastic constants, Hooke\'s law, Poisson\'s ratio, principle of superposition. Compound stresses.', ppts: [{ title: 'SOM Basics', size: '3.0 MB' }], notes: [{ title: 'Stress-Strain Notes', desc: 'Elastic constants' }], youtube: [{ title: 'Strength of Materials', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ],
        4: [
            {
                id: 'me-mfg-1', key: 'or', title: 'Manufacturing Science', code: 'KME401',
                units: [
                    { title: 'Unit 1: Casting & Welding', aiSummary: 'Sand casting process, patterns, molds. Arc welding, gas welding, resistance welding. Defects and inspection methods.', ppts: [{ title: 'Manufacturing Processes', size: '3.8 MB' }], notes: [{ title: 'Manufacturing Notes', desc: 'Processes and defects' }], youtube: [{ title: 'Manufacturing Science', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'me-md-1', key: 'som', title: 'Machine Design', code: 'KME402',
                units: [
                    { title: 'Unit 1: Design Philosophy & Loads', aiSummary: 'Factor of safety, design for static and dynamic loads, stress concentration, theories of failure (maximum principal stress, distortion energy).', ppts: [{ title: 'Machine Design', size: '3.3 MB' }], notes: [{ title: 'Design Criteria', desc: 'Failure theories' }], youtube: [{ title: 'Machine Design', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ]
    },
    'ce': {
        1: [
            {
                id: 'math-1', key: 'math', title: 'Engineering Mathematics-I', code: 'AAS0103',
                units: [
                    {
                        title: 'Unit 1: Matrices',
                        aiSummary: 'Matrices are rectangular arrays of numbers. Key Topics: Types of matrices (symmetric, skew-symmetric, orthogonal), Rank of a matrix using echelon form, Cayley-Hamilton theorem for finding inverse, Eigenvalues and Eigenvectors — essential for stability analysis. Important: Practice characteristic equations and diagonalization.',
                        ppts: [{ title: 'Matrices Complete Lecture', size: '3.2 MB' }],
                        notes: [{ title: 'Quick Revision - Matrices', desc: 'All formulas & solved examples' }],
                        youtube: [
                            { title: 'Matrices & Determinants Complete Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' },
                            { title: 'Eigenvalues and Eigenvectors', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g' },
                            { title: 'Cayley-Hamilton Theorem - Proof & Problems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' },
                            { title: 'Diagonalization of a Matrix', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 2: Differential Calculus-I',
                        aiSummary: 'Covers successive differentiation, Leibniz theorem, Rolle\'s theorem, Mean Value theorems (Lagrange & Cauchy), Taylor and Maclaurin series expansions. Tip: Master the expansion formulas — they appear every exam.',
                        ppts: [{ title: 'Differential Calculus Slides', size: '2.8 MB' }],
                        notes: [{ title: 'Formulas Sheet - Calculus', desc: 'All differentiation rules + solved PYQs' }],
                        youtube: [
                            { title: 'Leibniz Theorem - Successive Differentiation', channel: 'Bhagwan Singh Vishwakarma', url: 'https://www.youtube.com/watch?v=Zc2l2U9V620' },
                            { title: 'Taylor\'s & Maclaurin\'s Series Expansion', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=R9Ym08c8KCc' },
                            { title: 'Rolle\'s & Mean Value Theorems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=vV68Q7-nQ1Y' },
                            { title: 'Jacobian & Partial Differentiation', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' }
                        ]
                    },
                    {
                        title: 'Unit 3: Differential Calculus-II',
                        aiSummary: 'Focuses on partial differentiation, Euler\'s theorem on homogeneous functions, total derivatives, and Taylor\'s theorem for two variables.',
                        ppts: [{ title: 'Calculus-II PPT', size: '3.1 MB' }],
                        notes: [{ title: 'Calculus-II Revision Sheet', desc: 'Euler\'s theorem & partial derivatives' }],
                        youtube: [
                            { title: 'Euler\'s Theorem Homogeneous Functions', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' },
                            { title: 'Total Differentiation & Chain Rule', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=q4c33f2T-8g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Multivariable Calculus',
                        aiSummary: 'Covers double and triple integrals, change of order of integration, coordinate transformations (Polar/Spherical/Cylindrical) using Jacobians, and Dirichlet\'s integrals.',
                        ppts: [{ title: 'Multivariable Calculus PPT', size: '4.5 MB' }],
                        notes: [{ title: 'Integrals Cheatsheet', desc: 'Double/triple integrals & area/volume' }],
                        youtube: [
                            { title: 'Double Integrals Concepts', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=3M6Z6Qj023w' },
                            { title: 'Change of Order of Integration', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=xH6S3nQvM5E' },
                            { title: 'Dirichlet\'s Theorem & Triple Integrals', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=48_S69sXU_A' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-I',
                        aiSummary: 'Quantitative aptitude concepts: Number systems, Profit & Loss, Percentage, Simple and Compound Interest, and Ratio & Proportion.',
                        ppts: [{ title: 'Aptitude-I PDF', size: '1.9 MB' }],
                        notes: [{ title: 'Aptitude Formulas Sheet', desc: 'Shortcuts and speed math tricks' }],
                        youtube: [
                            { title: 'Quantitative Aptitude Complete Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' },
                            { title: 'Profit, Loss & Discount Tricks', channel: 'Feel Free to Learn', url: 'https://www.youtube.com/watch?v=jiEaKYI0ATY' }
                        ]
                    }
                ]
            },
            {
                id: 'bee-1', key: 'bee', title: 'Basic Electrical and Electronics Engineering', code: 'AEC0101',
                units: [
                    {
                        title: 'Unit 1: D.C Circuit Analysis and Network Theorems',
                        aiSummary: 'Covers active & passive elements, sources, Kirchhoff\'s laws, nodal & loop analysis, Superposition, Thevenin\'s, Norton\'s, and Maximum Power Transfer theorems.',
                        ppts: [{ title: 'DC Circuit Basics', size: '2.5 MB' }],
                        notes: [{ title: 'Circuit Theorems Guide', desc: 'Solved mesh/nodal analysis problems' }],
                        youtube: [
                            { title: 'Kirchhoff\'s Laws & Nodal Analysis', channel: 'Gate Smashers', url: 'https://youtu.be/FjaJEo7knF4' },
                            { title: 'Thevenin\'s & Superposition Theorems', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Steady State Analysis of AC Circuit',
                        aiSummary: 'AC fundamentals, phasors, RLC series & parallel circuits, resonance, and three-phase balanced star/delta connections.',
                        ppts: [{ title: 'AC Analysis Slides', size: '3.0 MB' }],
                        notes: [{ title: 'AC Formulas & Phasor Diagrams', desc: 'Power factor and RLC relations' }],
                        youtube: [
                            { title: 'Single Phase AC Circuits', channel: 'Gate Smashers', url: 'https://youtu.be/ulGKCeOoR88' }
                        ]
                    },
                    {
                        title: 'Unit 3: Single Phase Transformer & Power Systems',
                        aiSummary: 'Transformer operating principle, EMF equation, equivalent circuit, losses, efficiency. Basics of MCB, ELCB, and earthing.',
                        ppts: [{ title: 'Transformer & Power Systems', size: '3.4 MB' }],
                        notes: [{ title: 'Transformer Derivations', desc: 'Equivalent circuit and sessional notes' }],
                        youtube: [
                            { title: 'Single Phase Transformer EMF Equation', channel: 'Neso Academy', url: 'https://youtu.be/GgckE4H5AJE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Diode and Their Applications',
                        aiSummary: 'PN junction diode properties, rectifiers, clippers, clampers, Zener diode regulator, LEDs, and basic display devices.',
                        ppts: [{ title: 'Semiconductor Diode PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Diode Circuit Cheat Sheet', desc: 'Full-wave/half-wave rectifier formulas' }],
                        youtube: [
                            { title: 'PN Junction Diode & Rectifiers', channel: 'Neso Academy', url: 'https://youtu.be/EdUAecpYVWQ' }
                        ]
                    },
                    {
                        title: 'Unit 5: Operational Amplifiers & Op-Amp Applications',
                        aiSummary: 'Op-amp characteristics, inverting/non-inverting configuration, summing amplifier, integrator, differentiator, sensors, and IoT introduction.',
                        ppts: [{ title: 'Op-Amps & IoT', size: '3.1 MB' }],
                        notes: [{ title: 'Op-Amp Solved Circuits', desc: 'Ideal op-amp properties and formulas' }],
                        youtube: [
                            { title: 'Introduction to Operational Amplifiers', channel: 'Neso Academy', url: 'https://youtu.be/AuZ00cQ0UrE' }
                        ]
                    }
                ]
            },
            {
                id: 'python-1', key: 'java', title: 'Problem Solving using Python', code: 'ACSE0101',
                units: [
                    {
                        title: 'Unit 1: Basics of python programming',
                        aiSummary: 'Introduction to python environment, variables, data types, standard input/output, operators, and basic expression evaluation.',
                        ppts: [{ title: 'Python Basics PPT', size: '2.0 MB' }],
                        notes: [{ title: 'Python Syntax Cheatsheet', desc: 'Variables, operators & formatting' }],
                        youtube: [
                            { title: 'Python Programming Course', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=aqvDMCY516A' }
                        ]
                    },
                    {
                        title: 'Unit 2: Decision Control Statements',
                        aiSummary: 'Flow control, conditional branching (if, if-else, elif), loops (while, for), break, continue, and pass control statements.',
                        ppts: [{ title: 'Control Statements Slides', size: '2.2 MB' }],
                        notes: [{ title: 'Conditional Statements Guide', desc: 'Nested loops and branching examples' }],
                        youtube: [
                            { title: 'Loops & Conditionals in Python', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Function and Modules',
                        aiSummary: 'Defining functions, argument passing, return values, scope of variables, recursion, lambda functions, and modules/packages creation.',
                        ppts: [{ title: 'Functions & Modules', size: '2.6 MB' }],
                        notes: [{ title: 'Python Functions Reference', desc: 'Scope, namespace, and standard imports' }],
                        youtube: [
                            { title: 'Functions & Recursion', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Basic Data structures in Python',
                        aiSummary: 'Lists, tuples, sets, and dictionaries operations, comprehensions, built-in methods, and structural comparison.',
                        ppts: [{ title: 'Python Data Structures', size: '3.1 MB' }],
                        notes: [{ title: 'Lists & Dicts Cheatsheet', desc: 'Common methods and operations' }],
                        youtube: [
                            { title: 'Lists, Tuples & Dictionaries', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: File and Exception handling',
                        aiSummary: 'File operations (read, write, append), file pointers, exceptions, try-except-finally blocks, and custom exceptions.',
                        ppts: [{ title: 'Files & Exceptions', size: '2.4 MB' }],
                        notes: [{ title: 'Error Handling Reference', desc: 'Standard exception classes & file modes' }],
                        youtube: [
                            { title: 'Exception Handling in Python', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            },
            {
                id: 'english-1', key: 'english', title: 'Professional Communication', code: 'AASL0101',
                units: [
                    {
                        title: 'Unit 1: Introduction & Reading Skills',
                        aiSummary: 'Basics of technical communication, reading speed, comprehension techniques, and vocabulary enhancement.',
                        ppts: [{ title: 'PC Unit 1 Slides', size: '1.4 MB' }],
                        notes: [{ title: 'Communication Basics', desc: 'LSRW skills and active reading' }],
                        youtube: [
                            { title: 'Professional Communication Intro', channel: 'Ekeeda', url: 'https://www.youtube.com/watch?v=oBq7YqkG-4Y' }
                        ]
                    },
                    {
                        title: 'Unit 2: Writing Skills',
                        aiSummary: 'Sentence structures, paragraph writing, technical descriptions, letters, resumes, and report writing.',
                        ppts: [{ title: 'Writing Formats PPT', size: '1.8 MB' }],
                        notes: [{ title: 'Letter & Resume Guide', desc: 'Standard business formats' }],
                        youtube: [
                            { title: 'Technical Writing & Resumes', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 3: Listening Skills',
                        aiSummary: 'Importance of listening, barriers to active listening, note-taking techniques, and audio comprehension.',
                        ppts: [{ title: 'Listening Skills PPT', size: '1.2 MB' }],
                        notes: [{ title: 'Active Listening Tips', desc: 'Note-taking structures' }],
                        youtube: [
                            { title: 'Active Listening in Communication', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Speaking Skills',
                        aiSummary: 'Phonetics, stress, intonation, group discussions, public speaking, and body language.',
                        ppts: [{ title: 'Phonetics & GD PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Speaking Guidelines', desc: 'Body language & GD cheat sheet' }],
                        youtube: [
                            { title: 'Speaking & GD Strategies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: Public Speaking & Presentation',
                        aiSummary: 'Design and delivery of formal presentations, handling questions, and stage presence.',
                        ppts: [{ title: 'Presentation Skills', size: '1.7 MB' }],
                        notes: [{ title: 'Presentation Cheat Sheet', desc: 'Structure, slide rules & public speaking' }],
                        youtube: [
                            { title: 'Mastering Presentations', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            }
        ],
        2: [
            {
                id: 'math-2', key: 'math', title: 'Engineering Mathematics-II', code: 'AAS0203',
                units: [
                    {
                        title: 'Unit 1: Ordinary Differential Equation of Higher Order',
                        aiSummary: 'Linear differential equations of n-th order with constant coefficients, complementary functions, particular integrals, and Cauchy-Euler equations.',
                        ppts: [{ title: 'Differential Equations PPT', size: '3.1 MB' }],
                        notes: [{ title: 'ODE Cheatsheet', desc: 'P.I. and C.F. shortcut methods' }],
                        youtube: [
                            { title: 'Higher Order Linear Differential Equations', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=Ql42qcOLKfo' }
                        ]
                    },
                    {
                        title: 'Unit 2: Sequences and series',
                        aiSummary: 'Infinite series convergence, Ratio test, Comparison test, Cauchy\'s root test, Rabee\'s test, and Fourier series representations.',
                        ppts: [{ title: 'Series Convergence Slides', size: '2.5 MB' }],
                        notes: [{ title: 'Convergence Tests Reference', desc: 'All test formulas & sessional notes' }],
                        youtube: [
                            { title: 'Sequences & Series Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=HUKR4LWrZ14' }
                        ]
                    },
                    {
                        title: 'Unit 3: Laplace Transform',
                        aiSummary: 'Laplace transforms properties, transform of derivatives/integrals, inverse Laplace, Dirac delta, and solving linear ODEs.',
                        ppts: [{ title: 'Laplace Transforms Complete', size: '3.5 MB' }],
                        notes: [{ title: 'Laplace Formulas Sheet', desc: 'Properties, shifts, and inverse guides' }],
                        youtube: [
                            { title: 'Laplace Transform Complete Series', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/nmp-5tSp-UY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Vector Calculus',
                        aiSummary: 'Gradient, divergence, curl, line/surface/volume integrals, Green\'s, Gauss divergence, and Stokes\' theorems.',
                        ppts: [{ title: 'Vector Calculus Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Vector Theorems Solved PYQs', desc: 'Stokes, Gauss, and Green proofs' }],
                        youtube: [
                            { title: 'Vector Calculus Revision', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/IwgqKjA6wko' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-II',
                        aiSummary: 'Aptitude topics: Partnership, problems on ages, mixtures, direction sense, blood relations, and interest.',
                        ppts: [{ title: 'Aptitude-II PDF', size: '1.8 MB' }],
                        notes: [{ title: 'Aptitude Hacks & Shortcuts', desc: 'Ages, partnership & direction tricks' }],
                        youtube: [
                            { title: 'Aptitude Practice Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' }
                        ]
                    }
                ]
            },
            {
                id: 'design-1', key: 'default', title: 'Design Thinking-I', code: 'ACSE0203',
                units: [
                    {
                        title: 'Unit 1: Introduction',
                        aiSummary: 'Basics of design thinking, iterative cycle, empathy mapping, user-centered mindset, and case studies.',
                        ppts: [{ title: 'Design Thinking Intro', size: '1.8 MB' }],
                        notes: [{ title: 'Design Cycle Summary', desc: 'Empathize, Define, Ideate, Prototype, Test' }],
                        youtube: [
                            { title: 'Design Thinking for Beginners', channel: 'NPTEL', url: 'https://swayam.gov.in/nd1_noc19_mg60/preview' }
                        ]
                    },
                    {
                        title: 'Unit 2: Ethical Values and Empathy',
                        aiSummary: 'Role of empathy in user research, ethical guidelines, interviews, observation, and developing user personas.',
                        ppts: [{ title: 'Empathy & Ethics Slides', size: '2.0 MB' }],
                        notes: [{ title: 'User Research Guidelines', desc: 'Interview scripts & observation logs' }],
                        youtube: [
                            { title: 'Empathy Mapping Techniques', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Problem Statement & Ideation',
                        aiSummary: 'Defining the problem, POV statement, brainstorming techniques, SCAMPER method, and selecting solutions.',
                        ppts: [{ title: 'Problem Definition & Ideation', size: '2.4 MB' }],
                        notes: [{ title: 'Brainstorming Guidelines', desc: 'POV definitions & ideation rules' }],
                        youtube: [
                            { title: 'Ideation & Prototyping Basics', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 4: Critical Thinking',
                        aiSummary: 'Critical thinking fundamentals, evaluating arguments, identifying logical fallacies, and decision models.',
                        ppts: [{ title: 'Critical Thinking Slides', size: '1.6 MB' }],
                        notes: [{ title: 'Logical Fallacies Cheat Sheet', desc: 'Types of fallacies with examples' }],
                        youtube: [
                            { title: 'Critical Thinking & Fallacies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 5: Logic and Argumentation',
                        aiSummary: 'Propositional logic, syllogisms, forming valid arguments, and group exercises in structural debate.',
                        ppts: [{ title: 'Logic & Arguments PPT', size: '2.2 MB' }],
                        notes: [{ title: 'Deductive vs Inductive Logic', desc: 'Valid argument forms cheatsheet' }],
                        youtube: [
                            { title: 'Formal Logic & Syllogisms', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    }
                ]
            },
            {
                id: 'physics-1', key: 'physics', title: 'Engineering Physics', code: 'AAS0201A',
                units: [
                    {
                        title: 'Unit 1: Relativistic Mechanics',
                        aiSummary: 'Frame of reference, Michelson-Morley experiment, Galilean transformations, Lorentz transformations, length contraction, time dilation, and E=mc^2.',
                        ppts: [{ title: 'Relativity Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Relativistic Derivations', desc: 'Time dilation & mass-energy relation proofs' }],
                        youtube: [
                            { title: 'Relativity Complete Lecture', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Quantum Mechanics',
                        aiSummary: 'De-Broglie hypothesis, wave-particle duality, Heisenberg uncertainty principle. Schrodinger wave equation (time-dependent and time-independent), wave function physical significance, particle in a 1D box. Practice energy level derivations.',
                        ppts: [{ title: 'Quantum Mechanics Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Quantum Physics Formula Guide', desc: 'Solved 1D box derivations' }],
                        youtube: [
                            { title: 'Quantum Mechanics Playlist', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Wave Optics',
                        aiSummary: 'Interference: Young\'s double-slit experiment, Newton\'s rings, thin film interference. Diffraction: Fresnel vs Fraunhofer, single slit diffraction pattern. Polarization: Brewster\'s law, Malus law, double refraction. Key formulas: fringe width = λD/d, resolving power of grating = nN.',
                        ppts: [{ title: 'Wave Optics Lecture', size: '2.1 MB' }],
                        notes: [{ title: 'Optics Quick Notes', desc: 'Derivations and numericals' }],
                        youtube: [
                            { title: 'Wave Optics Complete', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Physics and Information Storage',
                        aiSummary: 'Energy bands, intrinsic & extrinsic semiconductors, Fermi level, carrier concentration, Hall effect, and basic magnetic memory storage systems.',
                        ppts: [{ title: 'Semiconductor Devices PPT', size: '2.8 MB' }],
                        notes: [{ title: 'Carrier Concentration & Fermi Level', desc: 'Equations and Hall effect calculations' }],
                        youtube: [
                            { title: 'Semiconductors in Physics', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=h6sXoB2eIig' }
                        ]
                    },
                    {
                        title: 'Unit 5: Fiber Optics & Laser',
                        aiSummary: 'Laser: Spontaneous and stimulated emission, Einstein\'s coefficients, population inversion, Ruby laser, He-Ne laser. Fiber Optics: Principle of propagation, acceptance angle, numerical aperture, fractional refractive index change, single/multi-mode fibers. Tip: Numerical questions are highly common from numerical aperture.',
                        ppts: [{ title: 'Lasers & Fiber Optics PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Fiber Optics Cheat Sheet', desc: 'Formulas and step-by-step solved numerics' }],
                        youtube: [
                            { title: 'Lasers & Fiber Optics course', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=u8-FidK7zV8' }
                        ]
                    }
                ]
            },
            {
                id: 'python-2', key: 'java', title: 'Problem Solving using Advanced Python', code: 'ACSE0202',
                units: [
                    {
                        title: 'Unit 1: Classes and Objects',
                        aiSummary: 'OOP fundamentals in Python: defining classes, instantiating objects, constructor methods (__init__), class vs instance attributes, and method types.',
                        ppts: [{ title: 'Classes & Objects Slides', size: '2.3 MB' }],
                        notes: [{ title: 'Python OOP Cheatsheet', desc: 'Syntax for classes, objects, and attributes' }],
                        youtube: [
                            { title: 'Python Classes and Objects', channel: 'Telusko', url: 'https://nptel.ac.in/courses/106/106/106106145/' }
                        ]
                    },
                    {
                        title: 'Unit 2: Object Oriented Concepts',
                        aiSummary: 'Inheritance, method overriding, super() function, polymorphism, encapsulation, private attributes, operator overloading, and special methods (__str__, __len__).',
                        ppts: [{ title: 'OOP Core Concepts', size: '2.7 MB' }],
                        notes: [{ title: 'Polymorphism & Inheritance', desc: 'Overriding and multiple inheritance rules' }],
                        youtube: [
                            { title: 'Python OOP Inheritance', channel: 'Python Course', url: 'https://www.python-course.eu/python3_inheritance.php' }
                        ]
                    },
                    {
                        title: 'Unit 3: Functional Programming',
                        aiSummary: 'Functional concepts in Python: map(), filter(), reduce() functions, list/dictionary comprehensions, generators, and iterators.',
                        ppts: [{ title: 'Functional Programming PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Functional Python Cheatsheet', desc: 'Lambda, mapping, and list comprehension tips' }],
                        youtube: [
                            { title: 'Functional Python Programming', channel: 'Real Python', url: 'https://realpython.com/courses/functional-programming-python/' }
                        ]
                    },
                    {
                        title: 'Unit 4: GUI Programming',
                        aiSummary: 'GUI development in Python using Tkinter: creating windows, widgets (Labels, Buttons, Entries), layouts (Pack, Grid), and event handling.',
                        ppts: [{ title: 'Tkinter GUI Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Tkinter Widgets Reference', desc: 'GUI element grids and event bindings' }],
                        youtube: [
                            { title: 'Python Tkinter GUI Tutorial', channel: 'Real Python', url: 'https://realpython.com/python-gui-tkinter/' }
                        ]
                    },
                    {
                        title: 'Unit 5: Libraries in Python',
                        aiSummary: 'Intro to NumPy, Pandas, and Matplotlib libraries for data manipulation and visualization.',
                        ppts: [{ title: 'Python Libraries PPT', size: '3.8 MB' }],
                        notes: [{ title: 'Data Analytics Cheatsheet', desc: 'Numpy arrays and Pandas dataframe basics' }],
                        youtube: [
                            { title: 'NumPy, Pandas & Matplotlib Course', channel: 'NPTEL', url: 'https://nptel.ac.in/courses/106/107/106107220/' }
                        ]
                    }
                ]
            }
        ],
        3: [
            {
                id: 'ce-struct-1', key: 'som', title: 'Structural Analysis', code: 'KCE301',
                units: [
                    { title: 'Unit 1: Determinate Structures', aiSummary: 'Bending moment and shear force diagrams for beams. Influence lines, deflection of beams, moment-area method.', ppts: [{ title: 'Structural Analysis', size: '3.8 MB' }], notes: [{ title: 'BMD & SFD Guide', desc: 'Step-by-step diagrams' }], youtube: [{ title: 'Structural Analysis', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ce-concrete-1', key: 'concrete', title: 'Concrete Technology', code: 'KCE302',
                units: [
                    { title: 'Unit 1: Cement & Concrete', aiSummary: 'Types of cement, hydration process, water-cement ratio, workability, mix design (IS method), strength development of concrete.', ppts: [{ title: 'Concrete Technology', size: '3.2 MB' }], notes: [{ title: 'Mix Design Notes', desc: 'IS method and properties' }], youtube: [{ title: 'Concrete Technology', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ce-survey-1', key: 'survey', title: 'Surveying', code: 'KCE303',
                units: [
                    { title: 'Unit 1: Chain & Compass Surveying', aiSummary: 'Principles of surveying, chain surveying, compass traversing, theodolite surveying. Error correction and adjustment.', ppts: [{ title: 'Surveying Basics', size: '2.9 MB' }], notes: [{ title: 'Survey Methods', desc: 'Instruments and procedures' }], youtube: [{ title: 'Surveying', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ],
        4: [
            {
                id: 'ce-rcc-1', key: 'concrete', title: 'Design of RCC Structures', code: 'KCE401',
                units: [
                    { title: 'Unit 1: Limit State Design', aiSummary: 'IS 456 code provisions, limit state of collapse and serviceability. Design of beams, slabs for flexure and shear.', ppts: [{ title: 'RCC Design', size: '4.0 MB' }], notes: [{ title: 'RCC Design Notes', desc: 'IS code and design steps' }], youtube: [{ title: 'RCC Design', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ce-fluid-1', key: 'fluid', title: 'Fluid Mechanics & Hydraulics', code: 'KCE402',
                units: [
                    { title: 'Unit 1: Fluid Properties & Flow', aiSummary: 'Continuity equation, Bernoulli\'s equation, flow measurement, pipe flow, open channel flow. Manning\'s and Chezy\'s equations.', ppts: [{ title: 'Fluid Mechanics', size: '3.1 MB' }], notes: [{ title: 'Flow Equations', desc: 'Key hydraulic formulas' }], youtube: [{ title: 'Fluid Mechanics', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ]
    },
    'ee': {
        1: [
            {
                id: 'math-1', key: 'math', title: 'Engineering Mathematics-I', code: 'AAS0103',
                units: [
                    {
                        title: 'Unit 1: Matrices',
                        aiSummary: 'Matrices are rectangular arrays of numbers. Key Topics: Types of matrices (symmetric, skew-symmetric, orthogonal), Rank of a matrix using echelon form, Cayley-Hamilton theorem for finding inverse, Eigenvalues and Eigenvectors — essential for stability analysis. Important: Practice characteristic equations and diagonalization.',
                        ppts: [{ title: 'Matrices Complete Lecture', size: '3.2 MB' }],
                        notes: [{ title: 'Quick Revision - Matrices', desc: 'All formulas & solved examples' }],
                        youtube: [
                            { title: 'Matrices & Determinants Complete Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' },
                            { title: 'Eigenvalues and Eigenvectors', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g' },
                            { title: 'Cayley-Hamilton Theorem - Proof & Problems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' },
                            { title: 'Diagonalization of a Matrix', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 2: Differential Calculus-I',
                        aiSummary: 'Covers successive differentiation, Leibniz theorem, Rolle\'s theorem, Mean Value theorems (Lagrange & Cauchy), Taylor and Maclaurin series expansions. Tip: Master the expansion formulas — they appear every exam.',
                        ppts: [{ title: 'Differential Calculus Slides', size: '2.8 MB' }],
                        notes: [{ title: 'Formulas Sheet - Calculus', desc: 'All differentiation rules + solved PYQs' }],
                        youtube: [
                            { title: 'Leibniz Theorem - Successive Differentiation', channel: 'Bhagwan Singh Vishwakarma', url: 'https://www.youtube.com/watch?v=Zc2l2U9V620' },
                            { title: 'Taylor\'s & Maclaurin\'s Series Expansion', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=R9Ym08c8KCc' },
                            { title: 'Rolle\'s & Mean Value Theorems', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=vV68Q7-nQ1Y' },
                            { title: 'Jacobian & Partial Differentiation', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' }
                        ]
                    },
                    {
                        title: 'Unit 3: Differential Calculus-II',
                        aiSummary: 'Focuses on partial differentiation, Euler\'s theorem on homogeneous functions, total derivatives, and Taylor\'s theorem for two variables.',
                        ppts: [{ title: 'Calculus-II PPT', size: '3.1 MB' }],
                        notes: [{ title: 'Calculus-II Revision Sheet', desc: 'Euler\'s theorem & partial derivatives' }],
                        youtube: [
                            { title: 'Euler\'s Theorem Homogeneous Functions', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=N4E_R1U3jM0' },
                            { title: 'Total Differentiation & Chain Rule', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=q4c33f2T-8g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Multivariable Calculus',
                        aiSummary: 'Covers double and triple integrals, change of order of integration, coordinate transformations (Polar/Spherical/Cylindrical) using Jacobians, and Dirichlet\'s integrals.',
                        ppts: [{ title: 'Multivariable Calculus PPT', size: '4.5 MB' }],
                        notes: [{ title: 'Integrals Cheatsheet', desc: 'Double/triple integrals & area/volume' }],
                        youtube: [
                            { title: 'Double Integrals Concepts', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=3M6Z6Qj023w' },
                            { title: 'Change of Order of Integration', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=xH6S3nQvM5E' },
                            { title: 'Dirichlet\'s Theorem & Triple Integrals', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=48_S69sXU_A' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-I',
                        aiSummary: 'Quantitative aptitude concepts: Number systems, Profit & Loss, Percentage, Simple and Compound Interest, and Ratio & Proportion.',
                        ppts: [{ title: 'Aptitude-I PDF', size: '1.9 MB' }],
                        notes: [{ title: 'Aptitude Formulas Sheet', desc: 'Shortcuts and speed math tricks' }],
                        youtube: [
                            { title: 'Quantitative Aptitude Complete Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' },
                            { title: 'Profit, Loss & Discount Tricks', channel: 'Feel Free to Learn', url: 'https://www.youtube.com/watch?v=jiEaKYI0ATY' }
                        ]
                    }
                ]
            },
            {
                id: 'bee-1', key: 'bee', title: 'Basic Electrical and Electronics Engineering', code: 'AEC0101',
                units: [
                    {
                        title: 'Unit 1: D.C Circuit Analysis and Network Theorems',
                        aiSummary: 'Covers active & passive elements, sources, Kirchhoff\'s laws, nodal & loop analysis, Superposition, Thevenin\'s, Norton\'s, and Maximum Power Transfer theorems.',
                        ppts: [{ title: 'DC Circuit Basics', size: '2.5 MB' }],
                        notes: [{ title: 'Circuit Theorems Guide', desc: 'Solved mesh/nodal analysis problems' }],
                        youtube: [
                            { title: 'Kirchhoff\'s Laws & Nodal Analysis', channel: 'Gate Smashers', url: 'https://youtu.be/FjaJEo7knF4' },
                            { title: 'Thevenin\'s & Superposition Theorems', channel: 'Neso Academy', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Steady State Analysis of AC Circuit',
                        aiSummary: 'AC fundamentals, phasors, RLC series & parallel circuits, resonance, and three-phase balanced star/delta connections.',
                        ppts: [{ title: 'AC Analysis Slides', size: '3.0 MB' }],
                        notes: [{ title: 'AC Formulas & Phasor Diagrams', desc: 'Power factor and RLC relations' }],
                        youtube: [
                            { title: 'Single Phase AC Circuits', channel: 'Gate Smashers', url: 'https://youtu.be/ulGKCeOoR88' }
                        ]
                    },
                    {
                        title: 'Unit 3: Single Phase Transformer & Power Systems',
                        aiSummary: 'Transformer operating principle, EMF equation, equivalent circuit, losses, efficiency. Basics of MCB, ELCB, and earthing.',
                        ppts: [{ title: 'Transformer & Power Systems', size: '3.4 MB' }],
                        notes: [{ title: 'Transformer Derivations', desc: 'Equivalent circuit and sessional notes' }],
                        youtube: [
                            { title: 'Single Phase Transformer EMF Equation', channel: 'Neso Academy', url: 'https://youtu.be/GgckE4H5AJE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Diode and Their Applications',
                        aiSummary: 'PN junction diode properties, rectifiers, clippers, clampers, Zener diode regulator, LEDs, and basic display devices.',
                        ppts: [{ title: 'Semiconductor Diode PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Diode Circuit Cheat Sheet', desc: 'Full-wave/half-wave rectifier formulas' }],
                        youtube: [
                            { title: 'PN Junction Diode & Rectifiers', channel: 'Neso Academy', url: 'https://youtu.be/EdUAecpYVWQ' }
                        ]
                    },
                    {
                        title: 'Unit 5: Operational Amplifiers & Op-Amp Applications',
                        aiSummary: 'Op-amp characteristics, inverting/non-inverting configuration, summing amplifier, integrator, differentiator, sensors, and IoT introduction.',
                        ppts: [{ title: 'Op-Amps & IoT', size: '3.1 MB' }],
                        notes: [{ title: 'Op-Amp Solved Circuits', desc: 'Ideal op-amp properties and formulas' }],
                        youtube: [
                            { title: 'Introduction to Operational Amplifiers', channel: 'Neso Academy', url: 'https://youtu.be/AuZ00cQ0UrE' }
                        ]
                    }
                ]
            },
            {
                id: 'python-1', key: 'java', title: 'Problem Solving using Python', code: 'ACSE0101',
                units: [
                    {
                        title: 'Unit 1: Basics of python programming',
                        aiSummary: 'Introduction to python environment, variables, data types, standard input/output, operators, and basic expression evaluation.',
                        ppts: [{ title: 'Python Basics PPT', size: '2.0 MB' }],
                        notes: [{ title: 'Python Syntax Cheatsheet', desc: 'Variables, operators & formatting' }],
                        youtube: [
                            { title: 'Python Programming Course', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=aqvDMCY516A' }
                        ]
                    },
                    {
                        title: 'Unit 2: Decision Control Statements',
                        aiSummary: 'Flow control, conditional branching (if, if-else, elif), loops (while, for), break, continue, and pass control statements.',
                        ppts: [{ title: 'Control Statements Slides', size: '2.2 MB' }],
                        notes: [{ title: 'Conditional Statements Guide', desc: 'Nested loops and branching examples' }],
                        youtube: [
                            { title: 'Loops & Conditionals in Python', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Function and Modules',
                        aiSummary: 'Defining functions, argument passing, return values, scope of variables, recursion, lambda functions, and modules/packages creation.',
                        ppts: [{ title: 'Functions & Modules', size: '2.6 MB' }],
                        notes: [{ title: 'Python Functions Reference', desc: 'Scope, namespace, and standard imports' }],
                        youtube: [
                            { title: 'Functions & Recursion', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    },
                    {
                        title: 'Unit 4: Basic Data structures in Python',
                        aiSummary: 'Lists, tuples, sets, and dictionaries operations, comprehensions, built-in methods, and structural comparison.',
                        ppts: [{ title: 'Python Data Structures', size: '3.1 MB' }],
                        notes: [{ title: 'Lists & Dicts Cheatsheet', desc: 'Common methods and operations' }],
                        youtube: [
                            { title: 'Lists, Tuples & Dictionaries', channel: 'Telusko', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: File and Exception handling',
                        aiSummary: 'File operations (read, write, append), file pointers, exceptions, try-except-finally blocks, and custom exceptions.',
                        ppts: [{ title: 'Files & Exceptions', size: '2.4 MB' }],
                        notes: [{ title: 'Error Handling Reference', desc: 'Standard exception classes & file modes' }],
                        youtube: [
                            { title: 'Exception Handling in Python', channel: 'CodeWithHarry', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            },
            {
                id: 'english-1', key: 'english', title: 'Professional Communication', code: 'AASL0101',
                units: [
                    {
                        title: 'Unit 1: Introduction & Reading Skills',
                        aiSummary: 'Basics of technical communication, reading speed, comprehension techniques, and vocabulary enhancement.',
                        ppts: [{ title: 'PC Unit 1 Slides', size: '1.4 MB' }],
                        notes: [{ title: 'Communication Basics', desc: 'LSRW skills and active reading' }],
                        youtube: [
                            { title: 'Professional Communication Intro', channel: 'Ekeeda', url: 'https://www.youtube.com/watch?v=oBq7YqkG-4Y' }
                        ]
                    },
                    {
                        title: 'Unit 2: Writing Skills',
                        aiSummary: 'Sentence structures, paragraph writing, technical descriptions, letters, resumes, and report writing.',
                        ppts: [{ title: 'Writing Formats PPT', size: '1.8 MB' }],
                        notes: [{ title: 'Letter & Resume Guide', desc: 'Standard business formats' }],
                        youtube: [
                            { title: 'Technical Writing & Resumes', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=84jW4cE28vY' }
                        ]
                    },
                    {
                        title: 'Unit 3: Listening Skills',
                        aiSummary: 'Importance of listening, barriers to active listening, note-taking techniques, and audio comprehension.',
                        ppts: [{ title: 'Listening Skills PPT', size: '1.2 MB' }],
                        notes: [{ title: 'Active Listening Tips', desc: 'Note-taking structures' }],
                        youtube: [
                            { title: 'Active Listening in Communication', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 4: Speaking Skills',
                        aiSummary: 'Phonetics, stress, intonation, group discussions, public speaking, and body language.',
                        ppts: [{ title: 'Phonetics & GD PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Speaking Guidelines', desc: 'Body language & GD cheat sheet' }],
                        youtube: [
                            { title: 'Speaking & GD Strategies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 5: Public Speaking & Presentation',
                        aiSummary: 'Design and delivery of formal presentations, handling questions, and stage presence.',
                        ppts: [{ title: 'Presentation Skills', size: '1.7 MB' }],
                        notes: [{ title: 'Presentation Cheat Sheet', desc: 'Structure, slide rules & public speaking' }],
                        youtube: [
                            { title: 'Mastering Presentations', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    }
                ]
            }
        ],
        2: [
            {
                id: 'math-2', key: 'math', title: 'Engineering Mathematics-II', code: 'AAS0203',
                units: [
                    {
                        title: 'Unit 1: Ordinary Differential Equation of Higher Order',
                        aiSummary: 'Linear differential equations of n-th order with constant coefficients, complementary functions, particular integrals, and Cauchy-Euler equations.',
                        ppts: [{ title: 'Differential Equations PPT', size: '3.1 MB' }],
                        notes: [{ title: 'ODE Cheatsheet', desc: 'P.I. and C.F. shortcut methods' }],
                        youtube: [
                            { title: 'Higher Order Linear Differential Equations', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=Ql42qcOLKfo' }
                        ]
                    },
                    {
                        title: 'Unit 2: Sequences and series',
                        aiSummary: 'Infinite series convergence, Ratio test, Comparison test, Cauchy\'s root test, Rabee\'s test, and Fourier series representations.',
                        ppts: [{ title: 'Series Convergence Slides', size: '2.5 MB' }],
                        notes: [{ title: 'Convergence Tests Reference', desc: 'All test formulas & sessional notes' }],
                        youtube: [
                            { title: 'Sequences & Series Playlist', channel: 'Dr. Gajendra Purohit', url: 'https://www.youtube.com/watch?v=HUKR4LWrZ14' }
                        ]
                    },
                    {
                        title: 'Unit 3: Laplace Transform',
                        aiSummary: 'Laplace transforms properties, transform of derivatives/integrals, inverse Laplace, Dirac delta, and solving linear ODEs.',
                        ppts: [{ title: 'Laplace Transforms Complete', size: '3.5 MB' }],
                        notes: [{ title: 'Laplace Formulas Sheet', desc: 'Properties, shifts, and inverse guides' }],
                        youtube: [
                            { title: 'Laplace Transform Complete Series', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/nmp-5tSp-UY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Vector Calculus',
                        aiSummary: 'Gradient, divergence, curl, line/surface/volume integrals, Green\'s, Gauss divergence, and Stokes\' theorems.',
                        ppts: [{ title: 'Vector Calculus Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Vector Theorems Solved PYQs', desc: 'Stokes, Gauss, and Green proofs' }],
                        youtube: [
                            { title: 'Vector Calculus Revision', channel: 'Dr. Gajendra Purohit', url: 'https://youtu.be/IwgqKjA6wko' }
                        ]
                    },
                    {
                        title: 'Unit 5: Aptitude-II',
                        aiSummary: 'Aptitude topics: Partnership, problems on ages, mixtures, direction sense, blood relations, and interest.',
                        ppts: [{ title: 'Aptitude-II PDF', size: '1.8 MB' }],
                        notes: [{ title: 'Aptitude Hacks & Shortcuts', desc: 'Ages, partnership & direction tricks' }],
                        youtube: [
                            { title: 'Aptitude Practice Playlist', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=TCPPvRfHtXw' }
                        ]
                    }
                ]
            },
            {
                id: 'design-1', key: 'default', title: 'Design Thinking-I', code: 'ACSE0203',
                units: [
                    {
                        title: 'Unit 1: Introduction',
                        aiSummary: 'Basics of design thinking, iterative cycle, empathy mapping, user-centered mindset, and case studies.',
                        ppts: [{ title: 'Design Thinking Intro', size: '1.8 MB' }],
                        notes: [{ title: 'Design Cycle Summary', desc: 'Empathize, Define, Ideate, Prototype, Test' }],
                        youtube: [
                            { title: 'Design Thinking for Beginners', channel: 'NPTEL', url: 'https://swayam.gov.in/nd1_noc19_mg60/preview' }
                        ]
                    },
                    {
                        title: 'Unit 2: Ethical Values and Empathy',
                        aiSummary: 'Role of empathy in user research, ethical guidelines, interviews, observation, and developing user personas.',
                        ppts: [{ title: 'Empathy & Ethics Slides', size: '2.0 MB' }],
                        notes: [{ title: 'User Research Guidelines', desc: 'Interview scripts & observation logs' }],
                        youtube: [
                            { title: 'Empathy Mapping Techniques', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Problem Statement & Ideation',
                        aiSummary: 'Defining the problem, POV statement, brainstorming techniques, SCAMPER method, and selecting solutions.',
                        ppts: [{ title: 'Problem Definition & Ideation', size: '2.4 MB' }],
                        notes: [{ title: 'Brainstorming Guidelines', desc: 'POV definitions & ideation rules' }],
                        youtube: [
                            { title: 'Ideation & Prototyping Basics', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=bwRjC_SRQAI' }
                        ]
                    },
                    {
                        title: 'Unit 4: Critical Thinking',
                        aiSummary: 'Critical thinking fundamentals, evaluating arguments, identifying logical fallacies, and decision models.',
                        ppts: [{ title: 'Critical Thinking Slides', size: '1.6 MB' }],
                        notes: [{ title: 'Logical Fallacies Cheat Sheet', desc: 'Types of fallacies with examples' }],
                        youtube: [
                            { title: 'Critical Thinking & Fallacies', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=uFoc13aUa5w' }
                        ]
                    },
                    {
                        title: 'Unit 5: Logic and Argumentation',
                        aiSummary: 'Propositional logic, syllogisms, forming valid arguments, and group exercises in structural debate.',
                        ppts: [{ title: 'Logic & Arguments PPT', size: '2.2 MB' }],
                        notes: [{ title: 'Deductive vs Inductive Logic', desc: 'Valid argument forms cheatsheet' }],
                        youtube: [
                            { title: 'Formal Logic & Syllogisms', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=RFDu9oVAE-g' }
                        ]
                    }
                ]
            },
            {
                id: 'physics-1', key: 'physics', title: 'Engineering Physics', code: 'AAS0201A',
                units: [
                    {
                        title: 'Unit 1: Relativistic Mechanics',
                        aiSummary: 'Frame of reference, Michelson-Morley experiment, Galilean transformations, Lorentz transformations, length contraction, time dilation, and E=mc^2.',
                        ppts: [{ title: 'Relativity Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Relativistic Derivations', desc: 'Time dilation & mass-energy relation proofs' }],
                        youtube: [
                            { title: 'Relativity Complete Lecture', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 2: Quantum Mechanics',
                        aiSummary: 'De-Broglie hypothesis, wave-particle duality, Heisenberg uncertainty principle. Schrodinger wave equation (time-dependent and time-independent), wave function physical significance, particle in a 1D box. Practice energy level derivations.',
                        ppts: [{ title: 'Quantum Mechanics Slides', size: '4.0 MB' }],
                        notes: [{ title: 'Quantum Physics Formula Guide', desc: 'Solved 1D box derivations' }],
                        youtube: [
                            { title: 'Quantum Mechanics Playlist', channel: 'NPTEL', url: 'https://www.youtube.com/watch?v=0kFp63cK8uE' }
                        ]
                    },
                    {
                        title: 'Unit 3: Wave Optics',
                        aiSummary: 'Interference: Young\'s double-slit experiment, Newton\'s rings, thin film interference. Diffraction: Fresnel vs Fraunhofer, single slit diffraction pattern. Polarization: Brewster\'s law, Malus law, double refraction. Key formulas: fringe width = λD/d, resolving power of grating = nN.',
                        ppts: [{ title: 'Wave Optics Lecture', size: '2.1 MB' }],
                        notes: [{ title: 'Optics Quick Notes', desc: 'Derivations and numericals' }],
                        youtube: [
                            { title: 'Wave Optics Complete', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=6OUEfkGCJpY' }
                        ]
                    },
                    {
                        title: 'Unit 4: Semiconductor Physics and Information Storage',
                        aiSummary: 'Energy bands, intrinsic & extrinsic semiconductors, Fermi level, carrier concentration, Hall effect, and basic magnetic memory storage systems.',
                        ppts: [{ title: 'Semiconductor Devices PPT', size: '2.8 MB' }],
                        notes: [{ title: 'Carrier Concentration & Fermi Level', desc: 'Equations and Hall effect calculations' }],
                        youtube: [
                            { title: 'Semiconductors in Physics', channel: 'Gate Smashers', url: 'https://www.youtube.com/watch?v=h6sXoB2eIig' }
                        ]
                    },
                    {
                        title: 'Unit 5: Fiber Optics & Laser',
                        aiSummary: 'Laser: Spontaneous and stimulated emission, Einstein\'s coefficients, population inversion, Ruby laser, He-Ne laser. Fiber Optics: Principle of propagation, acceptance angle, numerical aperture, fractional refractive index change, single/multi-mode fibers. Tip: Numerical questions are highly common from numerical aperture.',
                        ppts: [{ title: 'Lasers & Fiber Optics PPT', size: '2.9 MB' }],
                        notes: [{ title: 'Fiber Optics Cheat Sheet', desc: 'Formulas and step-by-step solved numerics' }],
                        youtube: [
                            { title: 'Lasers & Fiber Optics course', channel: 'Physics Wallah', url: 'https://www.youtube.com/watch?v=u8-FidK7zV8' }
                        ]
                    }
                ]
            },
            {
                id: 'python-2', key: 'java', title: 'Problem Solving using Advanced Python', code: 'ACSE0202',
                units: [
                    {
                        title: 'Unit 1: Classes and Objects',
                        aiSummary: 'OOP fundamentals in Python: defining classes, instantiating objects, constructor methods (__init__), class vs instance attributes, and method types.',
                        ppts: [{ title: 'Classes & Objects Slides', size: '2.3 MB' }],
                        notes: [{ title: 'Python OOP Cheatsheet', desc: 'Syntax for classes, objects, and attributes' }],
                        youtube: [
                            { title: 'Python Classes and Objects', channel: 'Telusko', url: 'https://nptel.ac.in/courses/106/106/106106145/' }
                        ]
                    },
                    {
                        title: 'Unit 2: Object Oriented Concepts',
                        aiSummary: 'Inheritance, method overriding, super() function, polymorphism, encapsulation, private attributes, operator overloading, and special methods (__str__, __len__).',
                        ppts: [{ title: 'OOP Core Concepts', size: '2.7 MB' }],
                        notes: [{ title: 'Polymorphism & Inheritance', desc: 'Overriding and multiple inheritance rules' }],
                        youtube: [
                            { title: 'Python OOP Inheritance', channel: 'Python Course', url: 'https://www.python-course.eu/python3_inheritance.php' }
                        ]
                    },
                    {
                        title: 'Unit 3: Functional Programming',
                        aiSummary: 'Functional concepts in Python: map(), filter(), reduce() functions, list/dictionary comprehensions, generators, and iterators.',
                        ppts: [{ title: 'Functional Programming PPT', size: '2.1 MB' }],
                        notes: [{ title: 'Functional Python Cheatsheet', desc: 'Lambda, mapping, and list comprehension tips' }],
                        youtube: [
                            { title: 'Functional Python Programming', channel: 'Real Python', url: 'https://realpython.com/courses/functional-programming-python/' }
                        ]
                    },
                    {
                        title: 'Unit 4: GUI Programming',
                        aiSummary: 'GUI development in Python using Tkinter: creating windows, widgets (Labels, Buttons, Entries), layouts (Pack, Grid), and event handling.',
                        ppts: [{ title: 'Tkinter GUI Slides', size: '3.1 MB' }],
                        notes: [{ title: 'Tkinter Widgets Reference', desc: 'GUI element grids and event bindings' }],
                        youtube: [
                            { title: 'Python Tkinter GUI Tutorial', channel: 'Real Python', url: 'https://realpython.com/python-gui-tkinter/' }
                        ]
                    },
                    {
                        title: 'Unit 5: Libraries in Python',
                        aiSummary: 'Intro to NumPy, Pandas, and Matplotlib libraries for data manipulation and visualization.',
                        ppts: [{ title: 'Python Libraries PPT', size: '3.8 MB' }],
                        notes: [{ title: 'Data Analytics Cheatsheet', desc: 'Numpy arrays and Pandas dataframe basics' }],
                        youtube: [
                            { title: 'NumPy, Pandas & Matplotlib Course', channel: 'NPTEL', url: 'https://nptel.ac.in/courses/106/107/106107220/' }
                        ]
                    }
                ]
            }
        ],
        3: [
            {
                id: 'ee-machines-1', key: 'machines', title: 'Electrical Machines I', code: 'KEE301',
                units: [
                    { title: 'Unit 1: DC Machines', aiSummary: 'DC generator and motor construction, EMF equation, armature reaction, commutation. Speed-torque characteristics and efficiency.', ppts: [{ title: 'DC Machines', size: '3.8 MB' }], notes: [{ title: 'DC Machine Equations', desc: 'EMF and torque equations' }], youtube: [{ title: 'Electrical Machines', channel: 'NPTEL', url: 'https://youtube.com' }] },
                    { title: 'Unit 2: Transformers', aiSummary: 'Transformer principle, EMF equation, equivalent circuit, losses, efficiency, voltage regulation. All-day efficiency and auto-transformer.', ppts: [{ title: 'Transformer PPT', size: '3.0 MB' }], notes: [{ title: 'Transformer Notes', desc: 'Tests and efficiency' }], youtube: [{ title: 'Transformers', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ee-power-1', key: 'pse', title: 'Power Systems I', code: 'KEE302',
                units: [
                    { title: 'Unit 1: Power System Fundamentals', aiSummary: 'Structure of power system, per-unit system, overhead line conductors, underground cables. Sag and tension calculations.', ppts: [{ title: 'Power Systems', size: '3.5 MB' }], notes: [{ title: 'Per-Unit System', desc: 'Base quantities and examples' }], youtube: [{ title: 'Power Systems', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ee-control-1', key: 'emft', title: 'Control Systems', code: 'KEE303',
                units: [
                    { title: 'Unit 1: Open and Closed Loop Systems', aiSummary: 'Transfer functions, block diagram reduction, signal flow graphs. Mason\'s gain formula. Steady-state error and types of systems.', ppts: [{ title: 'Control Systems', size: '3.4 MB' }], notes: [{ title: 'Block Diagram Rules', desc: 'Reduction techniques' }], youtube: [{ title: 'Control Systems', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ],
        4: [
            {
                id: 'ee-machines-2', key: 'machines', title: 'Electrical Machines II', code: 'KEE401',
                units: [
                    { title: 'Unit 1: Induction Motors', aiSummary: 'Three-phase induction motor: rotating magnetic field, slip, torque equation, equivalent circuit, starting methods, speed control.', ppts: [{ title: 'Induction Motor', size: '3.6 MB' }], notes: [{ title: 'Induction Motor Notes', desc: 'Torque-slip characteristics' }], youtube: [{ title: 'Induction Motors', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            },
            {
                id: 'ee-pe-1', key: 'pse', title: 'Power Electronics', code: 'KEE402',
                units: [
                    { title: 'Unit 1: Power Semiconductor Devices', aiSummary: 'SCR, MOSFET, IGBT characteristics and triggering. Controlled rectifiers: half-wave and full-wave. Firing angle and ripple factor.', ppts: [{ title: 'Power Electronics', size: '3.7 MB' }], notes: [{ title: 'Power Devices', desc: 'Characteristics and circuits' }], youtube: [{ title: 'Power Electronics', channel: 'NPTEL', url: 'https://youtube.com' }] }
                ]
            }
        ]
    }
};

export const quizzes = {
    'dsa-1': [
        { id: 'q1', question: 'Which data structure uses LIFO principle?', options: ['Queue', 'Linked List', 'Stack', 'Tree'], correctAnswer: 2, explanation: 'Stack follows Last In First Out (LIFO) principle.' },
        { id: 'q2', question: 'What is the worst-case time complexity of QuickSort?', options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'], correctAnswer: 1, explanation: 'QuickSort is O(n²) in the worst case when the pivot is always the smallest or largest element.' },
        { id: 'q3', question: 'BFS uses which data structure?', options: ['Stack', 'Queue', 'Array', 'Heap'], correctAnswer: 1, explanation: 'Breadth-First Search uses a Queue for its implementation.' }
    ],
    'dbms-1': [
        { id: 'q1', question: 'Which normal form removes transitive dependency?', options: ['1NF', '2NF', '3NF', 'BCNF'], correctAnswer: 2, explanation: '3NF removes transitive dependencies.' }
    ],
    'os-1': [
        { id: 'q1', question: 'Round Robin scheduling is best for:', options: ['Batch systems', 'Time-sharing systems', 'Real-time systems', 'Embedded systems'], correctAnswer: 1, explanation: 'Round Robin is designed for time-sharing systems to provide fair CPU allocation.' }
    ],
    'math-1': [
        { id: 'q1', question: 'Which theorem states that any square matrix satisfies its own characteristic equation?', options: ['Cayley-Hamilton Theorem', 'Rolle\'s Theorem', 'Mean Value Theorem', 'Dirichlet\'s Theorem'], correctAnswer: 0, explanation: 'The Cayley-Hamilton Theorem states that every square matrix satisfies its own characteristic equation, which is useful for calculating inverses and matrix powers.' },
        { id: 'q2', question: 'What is the rank of a 3x3 Identity Matrix?', options: ['1', '2', '3', '0'], correctAnswer: 2, explanation: 'The rank of an identity matrix of size n is always n, because all of its rows are linearly independent. Thus, the rank of a 3x3 identity matrix is 3.' }
    ],
    'physics-1': [
        { id: 'q1', question: 'In Newton\'s rings experiment, the central spot formed by reflected light is always:', options: ['Bright', 'Dark', 'Coloured', 'Rainbow-patterned'], correctAnswer: 1, explanation: 'In Newton\'s rings, the central spot is dark due to destructive interference. At the point of contact, the path difference is zero, but a phase change of π (destructive) occurs on reflection at the glass plate interface.' },
        { id: 'q2', question: 'Which laser utilizes a gas mixture as its active medium?', options: ['Ruby Laser', 'Semiconductor Laser', 'He-Ne Laser', 'Nd:YAG Laser'], correctAnswer: 2, explanation: 'The Helium-Neon (He-Ne) laser uses a gas mixture of helium and neon inside a discharge tube as its active medium.' }
    ],
    'toc-1': [
        { id: 'q1', question: 'Which of the following is the most powerful automata computational model?', options: ['Finite Automata', 'Pushdown Automata', 'Turing Machine', 'Linear Bounded Automata'], correctAnswer: 2, explanation: 'A Turing Machine is the most powerful model of computation, capable of simulating any algorithm (Church-Turing thesis).' },
        { id: 'q2', question: 'The Halting Problem of a Turing Machine is:', options: ['Decidable', 'Undecidable', 'NP-Complete', 'Logarithmic'], correctAnswer: 1, explanation: 'The Halting Problem was proven to be undecidable by Alan Turing, meaning no general algorithm can decide whether any given program will finish running or run forever.' }
    ],
    'ai-1': [
        { id: 'q1', question: 'Which search algorithm is guaranteed to find the shortest path if the heuristic function is admissible?', options: ['Depth-First Search', 'A* Search', 'Greedy Best-First Search', 'Breadth-First Search'], correctAnswer: 1, explanation: 'A* Search is guaranteed to be optimal (finding the shortest path) if the heuristic is admissible (never overestimates the cost to reach the goal).' }
    ]
};

export const yearToSemesters = {
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8]
};
