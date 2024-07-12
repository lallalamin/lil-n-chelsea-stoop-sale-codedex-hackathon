import React from 'react';
import './Body.css'

const Body = () => {
  return (
    <div className='container'>
      <div id='home' >
        <div>
            <h1 className="logotitle">Welcome to Chelsea & Lil Stoop Sale</h1>
            <p> Hello, Neighbors and Friends!</p>
            <p>Chelsea and Lil are thrilled to invite you to an unforgettable shopping experience right here in the heart of Carroll Gardens. We believe that one person's cast-off can be another's cherished find!</p>
            <p>Easy to Reach, Hard to Leave!</p> 
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </div>
      <div id='about'>
        <h2>🌱 About Us</h2> 
        <p>
            <span><strong>Who are we? </strong></span> 
            We're two local gals with a passion for sustainability and community spirit. Chelsea and Lil are your hosts for this delightful event. <br />

            <span><strong>What's on offer? </strong></span> 
            A curated collection of pre-loved treasures waiting to find a new home. From vintage finds to modern marvels, there's something for everyone!
        </p>
        <h5>👀Curious What You Might Find?</h5>
        <ul>
            <li>- Unique furniture pieces</li>
            <li>- Stylish clothing with a story</li>
            <li>- Quirky home decor that adds character</li>
            <li>- And many more surprises!</li>
        </ul>
        <p>Share this event with your friends and family, and let's make this Stoop Sale the talk of the town!</p>
      </div>
      <div id='when'>
        <h2>📅 When is it?</h2>
        <p>Mark your calendars for <span><strong>July 12th, 12PM ~ 2PM</strong></span>.</p>
      </div>
      <div id='where'>
        <h2>📍 Where to find us?</h2>
        <p>We're conveniently located at the bustling corner of Court Street and 2nd Avenue, in the vibrant South Brooklyn neighborhood. </p>
        <div id='map' className='map'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10177.192778293102!2d-73.99673896763065!3d40.680633327548605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a59afc74fe1%3A0x3dc42dbcd7f6d772!2sCourt%20St%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1720769830372!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <p className='mt-5'>
            💌 We Can't Wait to Meet You!

            Chelsea and Lil are excited to welcome you to our little corner of South Brooklyn. <br />
            Let's turn trash into treasure together!
        </p>
      </div>
    </div>
  );
};

export default Body;
