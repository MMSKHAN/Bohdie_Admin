import React from 'react'
import { Plus } from 'react-bootstrap-icons'
import "./Challange.css"
function Challanges() {
  return (
    <div className="Users">
    <div className="container">
<div className="row"><p className='UsersHeader' >potential applicants</p></div>
<div className='Container2' >
<div className="UserHeader challangeHeader">
  <div className="UserHeaderChild1"> <input type="checkbox" name="check" id="1" />  <span className='Usersub' >Full Name</span></div>
  <div className="ChallangeChild2"> <span>Apply Date</span></div>
  <div className="ChallangeChild3 "> <span>Cell</span> </div>
  <div className="ChallangeChild4"> <span>Email</span> </div>
  <div className="ChallangeChild5"> <span>level</span> </div>
  <div className="ChallangeChild6"> <span>badge</span> </div>
</div>
<div className="UserBody">

  <div className="UserChild1"> <input type="checkbox" name="check" id="1" />  <span>Alishan Noor</span></div>
  <div className="UserChild2"> <span>8/16/13</span></div>
  <div className="UserChild3"> <span>+1 (923) 554 2834</span> </div>
  <div className="UserChild4"> <span>alishannoor41@gmail.com</span> </div>
  <div className="BdageChild5"> <span>09</span> </div>
  <div className="BdageChild6"> <span className='plus2' ><Plus/></span> <span className='pusbtn' >  Add Badge</span> </div>
</div>
<div className="UserBody">

  <div className="UserChild1"> <input type="checkbox" name="check" id="1" />  <span>Alishan Noor</span></div>
  <div className="UserChild2"> <span>8/16/13</span></div>
  <div className="UserChild3"> <span>+1 (923) 554 2834</span> </div>
  <div className="UserChild4"> <span>alishannoor41@gmail.com</span> </div>
  <div className="BdageChild5"> <span>09</span> </div>
  <div className="BdageChild6"> <span className='plus2' ><Plus/></span> <span className='pusbtn'  >  Add Badge</span> </div>
</div>
<div className="UserBody">

  <div className="UserChild1"> <input type="checkbox" name="check" id="1" />  <span>Alishan Noor</span></div>
  <div className="UserChild2"> <span>8/16/13</span></div>
  <div className="UserChild3"> <span>+1 (923) 554 2834</span> </div>
  <div className="UserChild4"> <span>alishannoor41@gmail.com</span> </div>
  <div className="BdageChild5"> <span>09</span> </div>
  <div className="BdageChild6"> <span className='plus2' ><Plus/></span> <span className='pusbtn'  >  Add Badge</span> </div>
</div>
</div>

    </div>
   </div>
  )
}

export default Challanges