import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {

const [letterClass, setLetterClass] = useState('text-animate')
const refForm = useRef()



useEffect(() => {
    return () => { setTimeout(() => {
        setLetterClass('text-animate-hover')
        }   , 3000) }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
      .sendForm('service_37vz9e4', 'template_xwtylcm', refForm.current, '1aZMX4ecXCq3KZQ5_')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
    }

    
return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    Feel free to reach out! I welcome inquiries, collaborations, and opportunities to connect. Whether you have 
                    questions about my projects, potential partnerships, or just want to discuss the fascinating 
                    intersection of computer science and biochemistry, I'm eager to engage. Your messages are always valued, and I look forward 
                    to the prospect of connecting with like-minded individuals who share a passion for innovation and interdisciplinary 
                    exploration. Drop me a line, and let's start a conversation!
                </p>
                <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default Contact