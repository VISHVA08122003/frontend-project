import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h1>Welcome to yang's kitchen</h1>
          <p>“Where every flavor tells a story..”</p>
          <a href="#" className="button">ORDER</a>
        </section>
        
        <section className="featured-games">
          <h2>Healthy foods !</h2>
          <ul>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxbn0pb322mglcSCrsgHFzh_pwynbhx511w&usqp=CAU"></img>
              <h3>NOW ACCEPTING INQUIRIES FOR PRIVATE EVENTS & HOLIDAY PARTIES!</h3>
              <p>We are now accepting all inquiries for full buyouts for private events and holiday parties, any day of the week, day or night. Our restaurant can accommodate up to 45 guests and potentially more. We can work with you on the menu, and curate beverages, beer, wine, and sake as well. Please contact us here to inquire!</p>
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4bp8dSuxbzwOIUvkQyaSEN4zdbKPfHZD3w&usqp=CAU"></img>
              <h3>DINNER RESERVATIONS!</h3>
              <p>We are now open for dinner service Thursday through Sunday! We’ll be accepting limited walk-ins and reservations on Yelp. For brunch, we still do not take reservations as we seat guests on a first come first serve basis. However, you can join our Yelp! Waitlist to save your spot ahead of time (same day only)!</p>
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_s8M15BghJtXtuvRsKfFIPJ3Xb4NgPHgKQ&usqp=CAU"></img>
              <h3>BUSINESS HOURS</h3>
              <p>BRUNCH: Thursday through Monday 9:00am - 2:30pm

              DINNER: Thursday through Sunday 5:00pm - 9:00pm
              
              CLOSED Tuesdays & Wednesdays 
              
              Dine-in, takeout, and delivery (via DoorDash) available</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;