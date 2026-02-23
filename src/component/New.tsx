import './new.css'
import img1 from '../assets/searchlogo.jpg'
import img2 from '../assets/msg.jpg'
import img3 from '../assets/card.jpg'
import img4 from '../assets/videol.jpg'
import img5 from '../assets/rarrow.jpg'
function New() {
  return (
    <>
    <div className="main">
      <div className="top">
        <div className="ttop"><h1>How It Works</h1></div>
        <div className="tbot">getting a personalized video from your celebrity it easy.Just follow these simple steps</div>
      </div>
      <div className="mid">
        <div className="m1">
          <div className="m111">
            <img src={img1} alt="" srcSet="" className="img1"/>
          </div>
          <div className="m112">Choose Celebrity</div>
          <div className="m113">Browse our collection of celebrities
            <p>and find the perfect one for you</p>
            <p>occasion</p>
          </div>
          
        </div>
        <div  className="m2">
          <div className="m21">
            <img src={img2} alt="" srcSet=""  className="img2"/>
          </div>
          <div className="m22">Write Message</div>
          <div className="m23">Tell us about the occasion and what
            <p>you'd like the celebrity to say</p>
          </div>
        </div>
        <div className="m3">
          <div className="m31">
            <img src={img3} alt="" srcSet="" className="img3" />
          </div>
          <div className="m32">Make Payment</div>
          <div className="m33">complete your booking with our
            <p>secure payment system</p>
          </div>
        </div>
        <div className="m4">
          <div className="m41">
            <img src={img4} alt="" srcSet="" className="img4"/>
          </div>
           <div className="m42">Receive Video</div>
            <div className="m43">Get your personalized video within
              <p>24-48 hours via email or watsapp</p>
            </div>
        </div>
        <div></div>
      </div>
      <div className="bottom">
        <div className="b1">
          <div className="b1l">Start Booking Now</div>
          <div className="b1r">
            <img src={img5} alt="" srcset="" className="img5"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default New
