import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loder'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/jagat-logo.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['a', 'g', 'a', 't', ',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'i', ',']}
              idx={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['I', "'", 'm']}
              idx={14}
            />
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full stack Developer / React Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader />
    </>
  )
}

export default Home
