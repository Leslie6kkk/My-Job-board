import React, { useState, useEffect } from 'react';

function JobInfoDisplay(props) {
  const [jobInfos, setJobInfos] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/api/jobs/get${props.jobType}jobs`)
      .then(response => response.json())
      .then(data => setJobInfos(data))
      .catch(error => console.error(error));
  }, [props.jobType]);

  const handleChangeStatus = (id, status) => {
    fetch(`http://localhost:8080/api/jobs/changestatus/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: selectedStatus })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedJob = jobInfos.find(jobInfo => jobInfo.id === event.target.dataset.id);
    handleChangeStatus(selectedJob.id);
  };

  const handleSelectChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col" >Job Position</th>
          <th scope="col" >Company</th>
          <th scope="col" >Level</th>
          <th scope="col" >Date Applied</th>
          <th scope="col" >Status</th>
          <th scope="col" >Change Status?</th>
        </tr>
      </thead>
      <tbody>
        {jobInfos.map(jobInfo => (
          <tr key={jobInfo.id}>
            <td> {jobInfo.position}</td>
            <td> {jobInfo.company}</td>
            <td>{jobInfo.level}</td>
            <td>{jobInfo.applytime}</td>
            <td>{jobInfo.status}</td>
            <td>
              <form onSubmit={handleSubmit} data-id={jobInfo.id}>
                <select value={selectedStatus} onChange={handleSelectChange}>
                  <option  value="" disabled>Select status</option>
                  <option  value="applied">Applied</option>
                  <option  value="interviewing">Interviewing</option>
                  <option  value="archived">Archived</option>
                </select>
                <button className="btn btn-outline-secondary btn-sm" type="submit">Change Status</button>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobInfoDisplay;
