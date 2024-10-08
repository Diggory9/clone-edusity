import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
                <h3>About university</h3>
                <h2>Nurturing  Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi dolorum libero dicta sit non fugiat autem hic sequi recusandae! Quas ipsa excepturi similique, perferendis harum ea in deleniti illo expedita!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus adipisci dolore neque harum a illum sed, sint ex enim itaque corporis culpa assumenda recusandae dolor quisquam omnis, sit sunt ipsam.</p>
        </div>
    </div>
  )
}

export default About