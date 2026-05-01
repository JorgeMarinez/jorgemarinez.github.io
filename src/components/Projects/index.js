import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faFlask, faHourglass, faFileAlt, faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import hplcCalibration from '../../assets/images/hplc-calibration.png'
import hplcResults from '../../assets/images/hplc-results.png'


const projectsData = [
  {
    id: 1,
    featured: true,
    title: 'BioSeq Analyzer',
    description:
      'A Python-based bioinformatics tool that fetches and analyzes genomic sequence data from NCBI. Identifies gene patterns, computes GC content, and visualizes protein structures — bridging computational methods with biological insight.',
    tags: ['Python', 'Bioinformatics', 'NCBI', 'Biopython'],
    github: 'https://github.com/JorgeMarinez',
    live: null,
    report: null,
    images: [], // e.g. [bioSeqImg]
    status: 'in-progress',
  },
  {
    id: 2,
    featured: false,
    title: 'PPO Activity Analysis via HPLC',
    description:
      'Quantified chlorogenic acid in boiled and non-boiled red and green apple peel extracts to investigate Polyphenol Oxidase activity. Built a calibration curve (R²=0.9997) and analyzed chromatograms at 320nm and 360nm. Found chlorogenic acid ranging 89–115 mg/100g peel, with boiling significantly reducing PPO activity.',
    tags: ['Biochemistry', 'HPLC', 'PPO Activity', 'Analytical Chemistry'],
    github: null,
    live: null,
    report: 'https://drive.google.com/file/d/1ubafYPBJtXuPNI9m37bQ3s6EfTgzkoSo/view?usp=sharing', // paste Google Drive PDF link here
    images: [hplcCalibration, hplcResults], // e.g. [hplcCalibration, hplcResults] — add your imports above first
    imageCaptions: ['Calibration Curve (R²=0.9997)', 'Chlorogenic Acid per 100g Apple Peel'],
    status: 'live',
  },
  {
    id: 3,
    featured: false,
    title: 'Portfolio Website',
    description: 'Responsive React portfolio showcasing projects and skills with animated UI.',
    tags: ['React', 'SCSS', 'Git'],
    github: 'https://github.com/JorgeMarinez',
    live: 'https://jorgemarinez.github.io',
    report: null,
    images: [], // e.g. [portfolioImg]
    status: 'live',
  },
  {
    id: 4,
    featured: false,
    title: 'Process Scheduler Simulator',
    description: 'CPU scheduling algorithms (Round Robin, SJF) modeling OS behavior at the systems level.',
    tags: ['C++', 'OS', 'Algorithms'],
    github: 'https://github.com/JorgeMarinez',
    live: null,
    report: null,
    images: [], // e.g. [schedulerImg]
    status: 'live',
  },
]

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({ images, captions, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [images.length, onClose])

  return createPortal(
    <div
      className="lightbox-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <img src={images[current]} alt={captions?.[current] || `Image ${current + 1}`} />

        {captions?.[current] && (
          <p className="lightbox-caption">{captions[current]}</p>
        )}

        {images.length > 1 && (
          <div className="lightbox-nav">
            <button onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length) }}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span>{current + 1} / {images.length}</span>
            <button onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length) }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body  // renders outside the container entirely
  )
}

// ─── Image Gallery Strip ──────────────────────────────────────────────────────
const ImageGallery = ({ images, captions }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const handleClose = useCallback(() => setLightboxIndex(null), [])

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="image-gallery">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-thumb"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex(i)
            }}
            onTouchEnd={(e) => {
              e.stopPropagation()
              setLightboxIndex(i)
            }}
          >
            <img src={img} alt={captions?.[i] || `Project image ${i + 1}`} />
            <div className="thumb-overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          captions={captions}
          startIndex={lightboxIndex}
          onClose={handleClose}  // stable reference now
        />
      )}
    </>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const featured = projectsData.find((p) => p.featured)
  const grid = projectsData.filter((p) => !p.featured)

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>

        <div className="projects-content">

          {/* ── Featured Project ── */}
          {featured && (
            <div className="featured-card">
              <div className="card-body">
                <div className="featured-badge">
                  <FontAwesomeIcon icon={faFlask} />
                  <span>Featured Project</span>
                </div>

                {featured.status === 'in-progress' && (
                  <div className="status-badge in-progress">
                    <FontAwesomeIcon icon={faHourglass} />
                    <span>In Progress</span>
                  </div>
                )}

                <h2>{featured.title}</h2>
                <p>{featured.description}</p>

                <ImageGallery images={featured.images} captions={featured.imageCaptions} />

                <div className="tags">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="links">
                  {featured.github && (
                    <a href={featured.github} target="_blank" rel="noreferrer" className="flat-button">
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                  )}
                  {featured.live && (
                    <a href={featured.live} target="_blank" rel="noreferrer" className="flat-button">
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
                    </a>
                  )}
                  {featured.report && (
                    <a href={featured.report} target="_blank" rel="noreferrer" className="flat-button">
                      <FontAwesomeIcon icon={faFileAlt} /> Report
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── Projects Grid ── */}
          <div className="projects-grid">
            {grid.map((project) => (
              <div key={project.id} className="project-card">
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ImageGallery images={project.images} captions={project.imageCaptions} />

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flat-button">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="flat-button">
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
                      </a>
                    )}
                    {project.report && (
                      <a href={project.report} target="_blank" rel="noreferrer" className="flat-button">
                        <FontAwesomeIcon icon={faFileAlt} /> Report
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects