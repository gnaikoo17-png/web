import './new.css'
import img1 from '../assets/searchlogo.jpg'

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
            <img src={img1} alt="" srcset="" className="img1"/>
          </div>
          <div className="m112">Choose Celebrity</div>
          <div className="m113">Browse our collection of celebrities</div>
          <div className="m114">and find perfect one for you</div>
          <div className="m115">occasion</div>
        </div>
        <div  className="m2">
          <div className="m21"></div>
          <div className="m22"></div>
          <div className="m23"></div>
          <div className="m24"></div>
          <div className="m25"></div>
        </div>
        <div className="m3"></div>
        <div className="m4"></div>
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
