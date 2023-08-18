import React, { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf"

function App() {
  const [fullname, updatefullName] = useState('')
  const [email, updateEmail] = useState('')
  const [phonenr, updatePhonenr] = useState('')
  const [location, updateLocation] = useState('')

  const [degree, updateDegree] = useState('')
  const [school, updateSchool] = useState('')
  const [edlocation, updateEdlocation] = useState('')
  const [edstart, updateEdstart] = useState('')
  const [edend, updateedEnd] = useState('')

  const [jobCompany, updatejobCompany] = useState('')
  const [jobPos, updatejobPos] = useState('')
  const [jobStart, updatejobStart] = useState('')
  const [jobEnd, updatejobEnd] = useState('')
  const [jobLocation, updatejobLocation] = useState('')
  const [jobDescription, updatejobDescription] = useState('')

  function printDocument() {
    const input = document.getElementById('printdiv')
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF();
        const width = pdf.internal.pageSize.getWidth()
        const height = pdf.internal.pageSize.getHeight()
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height)
        pdf.save("download.pdf");
      })
    ;
  }

  return (
     <>
        <div className="containerInputFields">
         <div className="InputBox">
         <div className="InputHeader" id="downloadbox">
           <h2>Save your resume</h2>
           <button onClick={printDocument}>Download</button>
          </div>
         </div>

         <div className="InputBox">
           <div className="InputHeader">
           <h1>General Information</h1>
           </div>
           <form className="InputForm">
           <div className="InputGroup">
           <label for="fullname">Full Name</label>
           <input type="text" name="fullname" placeholder="Enter your full name" id="fullname" value={fullname} onChange={(Event) => updatefullName(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="email">Email</label>
           <input type="text" name="email" placeholder="Enter your email" id="email" value={email} onChange={(Event) => updateEmail(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="phonenr">Phone Number</label>
           <input type="text" name="phonenr" placeholder="Enter your phone number" id="phonenr" value={phonenr} onChange={(Event) => updatePhonenr(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="location">City and province</label>
           <input type="text" name="location" placeholder="City, province" id="location" value={location} onChange={(Event) => updateLocation(Event.target.value)}></input>
           </div>
           </form>
           </div>
         
         <div className="InputBox">
         <div className="InputHeader">
           <h1>Education</h1>
           </div>
           <form className="InputForm">
           <div className="InputGroup">
           <label for="degree">Degree</label>
           <input type="text" name="degree" placeholder="Enter Degree / Field of Study" id="degree" value={degree} onChange={(Event) => updateDegree(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="school">School</label>
           <input type="text" name="school" placeholder="Enter school / university" id="school" value={school} onChange={(Event) => updateSchool(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="edlocation">Location</label>
           <input type="text" name="edlocation" placeholder="Enter location" id="edlocation" value={edlocation} onChange={(Event) => updateEdlocation(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="edstart">Start</label>
           <input type="text" name="edstart" placeholder="Enter start date" id="edstart" value={edstart} onChange={(Event) => updateEdstart(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="edend">End</label>
           <input type="text" name="edend" placeholder="Enter end date" id="edend" value={edend} onChange={(Event) => updateedEnd(Event.target.value)}></input>
           </div>
           </form>
         </div>
         <div className="InputBox">
         <div className="InputHeader">
           <h1>Experience</h1> 
           </div>
           <form className="InputForm">
           <div className="InputGroup">
           <label for="jobCompany">Company Name</label>
           <input type="text" name="jobCompany" placeholder="Enter your full name" id="jobCompany" value={jobCompany} onChange={(Event) => updatejobCompany(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="jobPos">Position Title</label>
           <input type="text" name="jobPos" placeholder="Enter your full name" id="jobPos" value={jobPos} onChange={(Event) => updatejobPos(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="jobStart">Start Date</label>
           <input type="text" name="jobStart" placeholder="Enter your full name" id="jobStart" value={jobStart} onChange={(Event) => updatejobStart(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="jobEnd">End Date</label>
           <input type="text" name="jobEnd" placeholder="Enter your full name" id="jobEnd" value={jobEnd} onChange={(Event) => updatejobEnd(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="jobLocation">jobLocation</label>
           <input type="text" name="jobLocation" placeholder="Enter your full name" id="jobLocation" value={jobLocation} onChange={(Event) => updatejobLocation(Event.target.value)}></input>
           </div>

           <div className="InputGroup">
           <label for="jobDescription">Description</label>
           <input type="text" name="jobDescription" placeholder="Enter your full name" id="jobDescription" value={jobDescription} onChange={(Event) => updatejobDescription(Event.target.value)}></input>
           </div>
           </form>
         </div>
         </div>

      <div className="containerCV" id="printdiv">
        <div className="cvheader">
        <h1>{fullname}</h1>
        <div className="cvheaderdetails">
        <p>{email} </p> 
        <p>{phonenr} </p> 
        <p>{location}</p>
        </div>
        </div>

        <div className="cvbody">
          <div className="cvbodyExperience">
            <div className="cvbodyHeader">
            <h1>Professional Experience</h1>
            </div>
          <p>Company: {jobCompany}</p> 
          <p>Position: {jobPos}</p> 
          <p>From: {jobStart} </p>
          <p>To: {jobEnd}</p>
          <p>Location: {jobLocation}</p>
          <p>Role Description: {jobDescription}</p>
          </div>

          <div className="cvbodyEducation">
          <div className="cvbodyHeader">
            <h1>Education</h1>
          </div>
          <p>Degree: {degree}</p> 
          <p>School / University: {school}</p> 
          <p>Location: {edlocation}</p> 
          <p>From: {edstart}</p>
          <p>To: {edend}</p> 
          </div>
          
        </div>
      </div>
     </>
  )
}

export default App;