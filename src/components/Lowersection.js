import React from "react";
import "./Lowersection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Lowersection = () => {
  return (
    <div className="Lower-sec">
      <div>
        <div>Meeting Feedback</div>
        <div className="lower-icon">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <div>
        <textarea
          id="textbox"
          name="w3review"
          rows="4"
          cols="80"
          placeholder="Leave a comment"
        ></textarea>
      </div>
      <div className="checkbox">
        <div>
          <input type="checkbox" id="checkbox1" name="checkbox1" />I agree to
          the Meetings Minutes
        </div>
        <div>
          <input type="checkbox" id="checkbox2" name="checkbox2" />I Don't agree
          to the Meetings Minutes
        </div>
        <div className="lower-btn">
          <button className="btn  btn-outline-dark">Close</button>
          <button className="btn  btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Lowersection;
