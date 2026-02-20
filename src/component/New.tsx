import './new.css'
import img1 from '../assets/searchlogo.jpg'
import img2 from '../assets/msg.jpg'
import img3 from '../assets/card.jpg'
import img4 from '../assets/videol.jpg'
function New() {
  return (
    <>
    <div className="New">
      <div className="top">
        <div className="ttop">How It Works</div>
        <div className="tbot">getting a personalized video from your celebrity it easy.Just follow these simple steps</div>
      </div>
      <div className="mid">
        <div className="m1">
          <div className="m111">
            <img src={img1} alt="" srcSet="" className="img1"/>
          </div>
          <div className="m112">Choose Celebrity</div>
          <div className="m113">Browse our collection of celebrities</div>
          <div className="m114">and find perfect one for you</div>
          <div className="m115">occasion</div>
        </div>
        <div  className="m2">
          <div className="m21">
            <img src={img2} alt="" srcSet=""  className="img2"/>
          </div>
          <div className="m22">Write Message</div>
          <div className="m23">Tell us the occasion and what</div>
          <div className="m24">you'd like celebrity to say</div>
        </div>
        <div className="m3">
          <div className="m31">
            <img src={img3} alt="" srcSet="" className="img3" />
          </div>
          <div className="m32">Make Payment</div>
          <div className="m33">complete your booking with our</div>
          <div className="m34">secure payment system</div>
        </div>
        <div className="m4">
          <div className="m41">
            <img src={img4} alt="" srcSet="" className="img4"/>
          </div>
           <div className="m42">Receive Video</div>
            <div className="m43">Get your personalized video within</div>
             <div className="m44">24-48 hours via emails or WatsApp</div>
        </div>
        <div></div>
      </div>
      <div className="bottom">
        <div className="b1">Start Booking Now</div>
      </div>
    </div>
    </>
  )
}

export default New
