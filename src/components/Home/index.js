import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-j.png'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    const nameArray = ['o', 'r', 'g', 'e', ','];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    const jobArray2 = ['a', 'n', 'd', ' ', 'B', 'i', 'o', 'c', 'h', 'e', 'm', 'i', 's', 't', '.'];


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt='developer'/>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        /> 
                        <br/>
                        {/* First part of the job title */}
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                        <br/> {/* This forces "and Biochemist" to the next line */}
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={jobArray2}
                            idx={40} // Start this index where the first array left off
                        />
                    </h1>
                    <h2>Algorithms Expert</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Home
