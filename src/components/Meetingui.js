import React, {  useState,useRef } from "react";
import moment from "moment";
import "./Meetingui.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faDownload } from "@fortawesome/free-solid-svg-icons";
const MeetingUI = () => {
  const [toggle, setToggle] = useState(false);
  const intervalRef = useRef(); 
  const [timer, setTimer] = useState({
    H: 0,
    M: 0,
    S: 0,
  });
  
  let updateH = timer.H,
    updateM = timer.M,
    updateS = timer.S;
  const run = () => {
    if (updateS === 59) {
      updateM += 1;
      updateS = 0;
    }
    if (updateM === 60) {
      updateH += 1;
      updateM = 0;
    }
    
    updateS++;
    setTimer({ S: updateS, M: updateM, H: updateH });
  };
  const handleClick = () => {
    setToggle(!toggle);
    intervalRef.current = setInterval(() => {
      run();
    }, 1000);
    
  };
  const handleEnd = () => {
    setToggle(!toggle);
    alert(`Meeting lasted for ${`${timer.H}Hr:${timer.M}Min:${timer.S}Sec`}`)
    clearInterval(intervalRef.current)
    setTimer({
      H: 0,
      M: 0,
      S: 0,
    })
  };

  return (
    <>
      <h1>Generating Minutes of Meeting</h1>
      <div className="main">
        <section>
          <div className="green-sec">
            <div className="g-text">
              <h4>Daily Scrum Meeting</h4>
              <div className="icon">
                <FontAwesomeIcon icon={faVideo} /> Meet
              </div>
              <p>Date : {moment().format("DD-MM-YYYY ")}</p>
              <p>Daily Stand up for Aled team working on PRD 1Project</p>
            </div>
            <hr></hr>
            <div className="user">
              <div>
                <div>Owner</div>
                <div id="owner">
                  <img src="/images/icon.png" alt="" />
                </div>
              </div>
              <div>
                <div>Watcher</div>
                <div id="watcher">
                  <img src="/images/icon2.png" alt="" />
                  <img src="/images/icon8.png" alt="" />
                  <img src="/images/icon4.jpg" alt="" />
                </div>
              </div>
              <div>
                <div>Participants</div>
                <div id="participants">
                  <img src="/images/icon4.jpg" alt="" />
                  <img src="/images/icon5.png" alt="" />
                  <img src="/images/icon6.png" alt="" />
                  <img src="/images/icon3.jpg" alt="" />
                  <img src="/images/icon8.png" alt="" />
                  <img src="/images/icon7.png" alt="" />
                  <img src="/images/icon5.png" alt="" />
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="g-text">
              <h4>Meeting Hour</h4>
              <p>{`${timer.M > 59 ? `${timer.H} Hr` : ""} ${timer.M} M ${
                timer.S
              } S`}</p>
            </div>
          </div>
          <div className="white-sec">
            <div className="w-text">
              <div className="task">
                <p>Agenda</p> <p>Tasks</p>
              </div>
              <div className="button">
                <button>Detailed View</button>
              </div>
            </div>

            <hr></hr>
            <div>
              <div>UX/UI Decision Making </div>
              <div> UX/UI Products Edit</div>
            </div>
            <div>
              <h4>Notes</h4>
              <div className="notes-text">
                <div>Decision Point 1, Points-add actions here</div>
                <div>insight, Points- add actions here</div>
                <div>Discussion, Points- add actions here</div>
              </div>
            </div>
            <div className="resource">
              <h4>
                Resources <span>(Download links)</span>
              </h4>
              <button>
                Sales.pptx{" "}
                <FontAwesomeIcon className="icon" icon={faDownload} />
              </button>

              <button>
                Sales.pptx{" "}
                <FontAwesomeIcon className="icon" icon={faDownload} />
              </button>
            </div>
          </div>
        </section>
        <div id="meet-btn">
          
            {toggle ? <button className="btn btn-danger" onClick={handleEnd} >End Meeting</button> : <button className="btn btn-primary" onClick={handleClick}>Start Meeting</button>} 
          
          <button>Follow up Meeting</button>
          <button>
        <input type="date" defaultValue='10/10/2022'/>
          </button>
        </div>
      </div>
    </>
  );
};

export default MeetingUI;
