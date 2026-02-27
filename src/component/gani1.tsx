import "./gani1.css"
function Gani1() {
  return (
    <>
    <div className="dashboard">
      <h2 className="page-title">Payments & Revenue</h2>

      <div className="cards">
        <div className="card green">
          <div>
            <p>Total Revenue</p>
            <h3>₹56K</h3>
          </div>
          <span className="icon">$</span>
        </div>

        <div className="card purple">
          <div>
            <p>Platform Revenue</p>
            <h3>₹6K</h3>
          </div>
          <span className="icon">↗</span>
        </div>

        <div className="card blue">
          <div>
            <p>Transactions</p>
            <h3>8</h3>
          </div>
          <span className="icon">📅</span>
        </div>

        <div className="card orange">
          <div>
            <p>Completed</p>
            <h3>6</h3>
          </div>
          <span className="icon">$</span>
        </div>
      </div>

      <div className="revenue-container">
        <div className="revenue-header">
          <h4>Revenue Overview - Last 30 Days</h4>
          <button>Last 30 Days</button>
        </div>

        <div className="chart">
          <div className="chart-overlay"></div>
          <div className="chart-line"></div>

          <div className="x-labels">
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </div>
        </div>
      </div>
    </div>
  
     </>
     )
}
export default Gani1