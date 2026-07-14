import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faExternalLinkAlt,
  faFlask,
  faHourglass,
  faFileAlt,
  faXmark,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import projectsData from './projectsData'


const Lightbox = ({ images, captions, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')
        setCurrent((c) => (c - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight')
        setCurrent((c) => (c + 1) % images.length)
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

        <img
          src={images[current]}
          alt={captions?.[current] || `Image ${current + 1}`}
        />

        {captions?.[current] && (
          <p className="lightbox-caption">{captions[current]}</p>
        )}

        {images.length > 1 && (
          <div className="lightbox-nav">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrent((c) => (c - 1 + images.length) % images.length)
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <span>
              {current + 1} / {images.length}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrent((c) => (c + 1) % images.length)
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

const ImageGallery = ({ images, captions }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const handleClose = useCallback(() => setLightboxIndex(null), [])
  

  if (!images?.length) return null
  return (
    <>
      <div className="image-gallery">
        {images.map((img, i) => (
          <div
            key={i}
            className={`gallery-thumb ${
              captions?.[i] === 'Round Robin Scheduling Gantt Chart'
                ? 'gantt-container'
                : ''
          }`}
          onClick={() => setLightboxIndex(i)}
          >
          <img
            src={img}
            alt={captions?.[i] || `Project image ${i + 1}`}
          />

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
          onClose={handleClose}
        />
      )}
    </>
  )
}

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

                <ImageGallery
                  images={featured.images}
                  captions={featured.imageCaptions}
                />

                <div className="tech-tags">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="links">
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flat-button"
                    >
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="projects-grid">
            {grid.map((project) => (
              <div key={project.id} className="project-card">
                <div className="card-body">

                  <div className="card-header">
                    <h3>{project.title}</h3>
                  </div>

                  <div className="card-description">
                    <p>{project.description}</p>
                  </div>

                  <div className="card-media">
                    <ImageGallery
                      images={project.images}
                      captions={project.imageCaptions}
                    />
                  </div>

                  <div className="card-tags">
                    <div className="tech-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flat-button"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                          GitHub
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flat-button"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                          Live
                        </a>
                      )}

                      {project.report && (
                        <a
                          href={project.report}
                          target="_blank"
                          rel="noreferrer"
                          className="flat-button"
                        >
                          <FontAwesomeIcon icon={faFileAlt} />
                          Report
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects