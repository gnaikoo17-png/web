import './new1.css'
function New1() {
  return (
    <>
    <div className="page">
  
      <div className="background"></div>


      <div className="modal">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <span className="close">×</span>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input type="text" defaultValue="Demo User" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            defaultValue="anamik871@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="text" placeholder="" />
        </div>

        <div className="modal-footer">
          <button className="cancel">Cancel</button>
          <button className="save">Save Changes</button>
        </div>
      </div>
    </div>
      </>
     )
}

export default New1
