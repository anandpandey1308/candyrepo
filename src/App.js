/* eslint-disable jsx-a11y/img-redundant-alt */
import './App.css';
import bagImage from './img/bag.png';
import itemListImage from './img/itemList.png';

import Carousel  from 'react-bootstrap/Carousel';
import Serve from './components/Serve';

function App() {
  return (
    <div className="main">
      <section className="hero">
        <div className="heroText">
            <h2>Looking for a lollipop alternative?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, eos dolorem vero deleniti quas quod, beatae amet molestias minima error vel laborum nihil.</p>
            <div class="buttons mt-10">
                <input type="button" className="btn primaryCTA" value="Primary CTA" />
                <input type="button" className="btn secondaryCTA" value="Secondary CTA" />
            </div>
        </div>
        <img src={bagImage} alt="bag image" />
      </section>


      <section className="itemList">
        <div className="grayBG"></div>
        <h3 className="mb-10">This is a heading in two lines</h3>
        <img src={itemListImage} alt="" />
      </section>


      <section className="candyCalc">
        <h2>Compare pricing today!</h2>
        <span> Lorem ipsum is simply a dummy text of the printing and <a href="#">typesetting.</a> </span>

        <Serve />
      </section>


      <section className="testimonials">
        <h3>Here's what our customers have to say</h3>
        <div>
        <Carousel interval={1000}>
          <Carousel.Item interval={5000}>
            <div className="carouselItem">
              <img src={bagImage} alt="" />
              <div className="carouselItemDetails">
                <div className="quote"><span className="bigQuote">"</span><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, eos dolorem vero deleniti quas quod, beatae amet molestias minima error vel laborum nihil.</span></div>
                <div className="userInfo">
                  <div className="username"><h5>Raja Ram</h5></div>
                  <div className="userOrigin"><h6>Tip World</h6></div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          
        </Carousel>
        </div>
      </section>


      <section className="hero">
        <div className="heroText">
            <h2>Loved by users, recommended by experts</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, eos dolorem vero deleniti quas quod, beatae amet molestias minima error vel laborum nihil.</p>
                <input type="button" className="btn primaryCTA mt-10" value="Primary CTA" />
        </div>
        <img src={bagImage} alt="bag image" />
      </section>
    </div>

    
  );
}

export default App;
