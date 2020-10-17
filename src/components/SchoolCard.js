import React from 'react';
import './css/SchoolCard.css';

function SchoolCard(props) {
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.school.ENTITY_NAME}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">2017-18</span>
            <span className="badge">2016-17</span>
            <span className="badge">Archive</span>
          </h5>
          <span className="badge badge-header">Student Data</span>
          <ul className="list-group">
            <li className="list-group-item">Enrollment Data</li>
            <li className="list-group-item">Number Of White Students {props.school.NUM_WHITE}</li>
            <li className="list-group-item">Number of ELLs {props.school.NUM_ELL}</li>
            <li className="list-group-item">Number of Immigrants {props.school.NUM_MIGRANT}</li>
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">Year Started {props.school.YEAR}</li>
            {/* <li className="list-group-item">Student and Educator Report</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
