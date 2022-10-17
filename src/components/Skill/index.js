import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from '../Loder'
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from 'react-icons/di'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div>
      <div className="container skill-page ">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 's', 'k', 'i', 'l', 'l']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious full stack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
        </div>
        <div className="skill-bar-container">
          <div className="skill-bar">
            <span>
              <DiHtml5 color="#F06529" fontSize={'20px'} />
              {'     '}
              HTML
            </span>
            <div className="skill-level-HTML">
              <div className="HTML-bar"></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>
              <DiCss3 color="#28A4D9" fontSize={'20px'} />
              CSS
            </span>
            <div className="skill-level-CSS">
              <div className="CSS-bar"></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>
              <DiJavascript color="#EFD81D" fontSize={'20px'} />
              Javascript
            </span>
            <div className="skill-level-javascript">
              <div className="javascript-bar"></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>
              <DiReact color="#5ED4F4" fontSize={'20px'} />
              React
            </span>
            <div className="skill-level-react">
              <div className="react-bar"></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>
              <DiNodejsSmall color="#539e43" fontSize={'20px'} />
              Nodejs
            </span>
            <div className="skill-level-nodejs">
              <div className="nodejs-bar"></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>
              {' '}
              <DiMongodb color="#539e43" fontSize={'20px'} />
              MongoDB
            </span>
            <div className="skill-level-mongodb">
              <div className="mongodb-bar"></div>
            </div>
          </div>
        </div>
      </div>
      <Loader />
    </div>
  )
}

export default Skill
