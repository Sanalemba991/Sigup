import React from 'react'
import { Link } from 'react-scroll'
import { HiOutlineArrowRight } from "react-icons/hi";

function About() {
  return (
    <div>
      <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <div className="heading"><h1>About us</h1>
                    <p>Contact Sana Resturant when you need</p></div>
                </div>
                <p className='mid'>Welcome to Sana Restaurant,
                     where tradition meets innovation. Located in the heart of the city, we offer a diverse menu crafted from the freshest local ingredients. Enjoy our signature Sana Salad, grilled herb-marinated chicken, or indulge in our decadent chocolate lava cake. Our warm and inviting atmosphere, complemented by attentive service, ensures a memorable dining experience for every occasion. Whether you’re celebrating a special event or enjoying a casual meal with friends, Sana is the perfect destination for food lovers. Join us for lunch or dinner and let your taste buds embark on a delightful culinary journey!</p>
                     <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
            </div>
            <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
