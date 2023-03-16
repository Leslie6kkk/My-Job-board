import React from 'react';

function JobDetails(props) {
  const handleStatusChange = (event) => {
    props.onStatusChange(props.job.id, event.target.value);
  };

  return (
    <div>
      <h2>Job Details</h2>
      <dl>
        <dt>Title:</dt>
        <dd>{props.job.title}</dd>
        <dt>Description:</dt>
        <dd>{props.job.description}</dd>
        <dt>Status:</dt>
        <dd>
          <select value={props.job.status} onChange={handleStatusChange}>
            <option value="New">
            New
          </option>
          <option value="In Progress">
            In Progress
          </option>
          <option value="Completed">
            Completed
          </option>
        </select>
        </dd>
      </dl>
    </div>
  );
}

export default JobDetails;
