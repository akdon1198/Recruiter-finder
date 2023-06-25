import "../Panel/Panel.css";
function Panel() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="location-input">
            <input className="location-input-name"type="text" placeholder="Location"/>
          </div>
          <div className="job-input">
            <input className="job-input-name" type="text" placeholder="Job Title"/>
          </div>
          <div className="search-button">
            <div className="search-button-name">SEARCH</div>
          </div>
        </div>
        <div className="list">
            <div className="listitem">
                <div className="listitemimg"></div>
                 <div className="listitemuserdata">
                    <div className="listitemuserdataname">Name</div>
                    <div className="listitemuserdataname">Name</div>
                    <div className="listitemuserdataname">Name</div>
                 </div>
            </div>
            <div className="listitem">
                <div className="listitemimg"></div>
                 <div className="listitemuserdata"></div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Panel;
