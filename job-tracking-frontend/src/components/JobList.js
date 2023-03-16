// import React from 'react';

// function JobList(props) {
//   const handleJobClick = (event, job) => {
//     event.preventDefault();
//     props.onJobClick(job);
//   };

//   return (
//     <div>
//       <h2>Job List</h2>
//       <ul>
//         {props.jobs.map(job => (
//           <li key={job.id}>
//             <a href="#" onClick={(event) => handleJobClick(event, job)}>
//               {job.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default JobList;
import React, { useState } from 'react';

function JobList(props) {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (event, job) => {
    event.preventDefault();
    setSelectedJob(job);
  };

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {props.jobs.map(job => (
          <li key={job.id}>
            <a href="#" onClick={(event) => handleJobClick(event, job)}>
              {job.title}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <h2>Selected Job</h2>
        {selectedJob ? (
          <div>
            <h3>{selectedJob.title}</h3>
            <p>{selectedJob.description}</p>
          </div>
        ) : (
          <p>No job selected</p>
        )}
      </div>
    </div>
  );
}

export default JobList;
