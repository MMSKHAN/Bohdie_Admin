import React from 'react'
import "./Dash.css"
import { Plus } from 'react-bootstrap-icons'
import DashPart1 from './DashPart1'
import DashboardPart2 from './DashboardPart2'
function Dashbord() {
  return (
    <>
    <div className="Dashboardmain">
<div className="container">
  <div className="row">
    <div className="col-sm-6"> <p className='Dash_Header' >Add main Categories & pic</p> </div>
    <div className="col-sm-6"> <p className='Dash_Hader_Add' > <Plus/>  <span>Add New</span> </p> </div>
  </div>
  <DashPart1/>
  <DashboardPart2/>
</div>
    </div>
    
    </>
  )
}

export default Dashbord