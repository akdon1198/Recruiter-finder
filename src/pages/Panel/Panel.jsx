import { useState } from "react";
import "../Panel/Panel.css";
import { userdummydata } from "../dummydata";
function Panel() {
  const[location, setlocation] = useState("")
  const[job, setjob] = useState("")
  const[filterdata, setfilterdata] = useState(userdummydata)
  console.log(job, location);
  function handlejob(e){
    setjob(e.target.value)
  }
  function handlelocation(e){
    setlocation(e.target.value)
  }
  function handleclick(){
    setfilterdata(userdummydata.filter(data => data.job == job))
    setfilterdata(userdummydata.filter(data => data.location == location))
  }
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="location-input">
            <input
              className="location-input-name"
              type="text"
              placeholder="Location"
              value={location}
              onChange={handlelocation}
            />
          </div>
          <div className="job-input">
            <input
              className="job-input-name"
              type="text"
              placeholder="Job Title"
              value={job}
              onChange={handlejob}
            />
          </div>
          <div className="search-button">
            <div className="search-button-name" onClick={handleclick}>SEARCH</div>
          </div>
        </div>
        <div className="list">
          {filterdata.map((dataobj) => {
            return (
              <div className="listitem">
                  <div className="listitemimg"></div>
                  <div className="listitemuserdata">
                    <div className="listitemuserdataname">CandidateName</div>
                    <div className="listitemuserdataname">{dataobj.location}</div>
                    <div className="listitemuserdataname">{dataobj.job}</div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Panel;
