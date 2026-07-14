import hplcCalibration from '../../assets/images/hplc-calibration.png'
import hplcResults from '../../assets/images/hplc-results.png'
import annOutput from '../../assets/images/ann-output.png'
import libraryUML from '../../assets/images/library-uml.png'
import processSchedulerGantt from '../../assets/images/process-scheduler-gantt.png';

const projectsData = [
  {
    id: 1,
    featured: true,
    title: 'BioSeq Analyzer',
    description:
      'A Python-based bioinformatics application that retrieves and analyzes genomic sequence data from NCBI. Designed to bridge computational biology and software engineering through reusable analysis workflows and biological data visualization.',
    tags: ['Python', 'Bioinformatics', 'NCBI', 'Genomics'],
    github: null,
    live: null,
    report: null,
    images: [],
    imageCaptions: [],
    status: 'in-progress',
  },

  {
    id: 2,
    featured: false,
    title: 'Artificial Neural Network',
    description:
      'Built a fully connected feedforward neural network from scratch using NumPy, implementing forward propagation, backpropagation, and gradient descent to solve the XOR classification problem without machine learning frameworks.',
    tags: [
      'Python',
      'NumPy',
      'Machine Learning',
      'Neural Networks',
    ],
    github:
      'https://github.com/JorgeMarinez/Artificial-Neural-Network',
    live: null,
    report: null,
    images: [annOutput],
    imageCaptions: ['Neural Network XOR Predictions'],
    status: 'live',
  },

  {
    id: 3,
    featured: false,
    title: 'Process Scheduler Simulator',
    description:
      'Developed a CPU scheduling simulator implementing Round Robin, Shortest Job First (SJF), and Shortest Remaining Time First (SRTF). Simulated process execution, preemption, waiting time, and turnaround time to model operating system scheduling behavior.',
    tags: [
      'Python',
      'Operating Systems',
      'Scheduling',
      'Algorithms',
    ],
    github:
      'https://github.com/JorgeMarinez/processScheduler',
    live: null,
    report: null,

    // Replace with schedulerGantt after we make it
    images: [processSchedulerGantt],
    imageCaptions: ['Round Robin Scheduling Gantt Chart'],

    status: 'live',
  },

  {
    id: 4,
    featured: false,
    title: 'Library Management System',
    description:
      'Designed and implemented a console-based library management system using object-oriented programming principles in Java. Supports inventory management, patron registration, lending workflows, transaction tracking.',
    tags: [
      'Java',
      'Object-Oriented Programming',
      'Software Engineering',
    ],
    github:
      'https://github.com/JorgeMarinez/LibraryManagementSystem',
    live: null,
    report: null,
    images: [libraryUML],
    imageCaptions: ['UML Class Diagram'],
    status: 'live',
  },

  {
    id: 5,
    featured: false,
    title: 'PPO Activity Analysis via HPLC',
    description:
      'Investigated the effects of boiling on polyphenol oxidase activity by quantifying chlorogenic acid concentrations in apple peel extracts using HPLC. Constructed calibration curves (R² = 0.9997) and analyzed chromatographic data to compare treatment conditions.',
    tags: [
      'Biochemistry',
      'HPLC',
      'Analytical Chemistry',
      'Research',
    ],
    github: null,
    live: null,
    report:
      'https://drive.google.com/file/d/1ubafYPBJtXuPNI9m37bQ3s6EfTgzkoSo/view?usp=sharing',
    images: [hplcCalibration, hplcResults],
    imageCaptions: [
      'Calibration Curve (R² = 0.9997)',
      'Chlorogenic Acid Concentration Results',
    ],
    status: 'live',
  },

  {
    id: 6,
    featured: false,
    title: 'Portfolio Website',
    description:
      'Designed and developed a responsive portfolio using React and SCSS to showcase software engineering and computational biology projects. Features reusable components, responsive layouts, image galleries, and deployment through GitHub Pages.',
    tags: [
      'React',
      'SCSS',
      'JavaScript',
      'GitHub Pages',
    ],
    github:
      'https://github.com/JorgeMarinez/jorgemarinez.github.io',
    live:
      'https://jorgemarinez.github.io/projects',
    report: null,
    images: [],
    imageCaptions: [],
    status: 'live',
  },
]

export default projectsData