// It typically contains the overall structure and layout of your app, 
// as well as any child components that make up the different parts of your app.
import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap';
import JobList from './components/JobList';
import CreateJob from './components/CreateJob';
import JobDetails from './components/JobDetails';
import NavigationBar from './components/NavigationBar';
import JobInfoDisplay from './components/JobInfoDisplay';
// $("modal").modal('show');

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedJobType, setSelectedJobType] = useState('applied');

  useEffect(() => {
    // fetch jobs from your backend API and set them in state
    fetch('http://localhost:8080/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err));
  }, []);

  const handleCreateJob = (jobData) => {
    // send a POST request to your backend API to create a new job
    fetch('http://localhost:8080/api/jobs/createjob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    })
      .then(res => res.json())
      .then(newJob => setJobs([...jobs, newJob]))
      .catch(err => console.error(err));

  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  function handleSelectJobType(jobType) {
    setSelectedJobType(jobType);
  };

  // const handleJobClick = () => {
  //   fetch('http://localhost:8080/api/jobs/createjob', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(jobData)
  //   })
  //     .then(res => res.json())
  //     .then(newJob => setJobs([...jobs, newJob]))
  //     .catch(err => console.error(err));
  // };
  

  const handleStatusChange = (jobId, status) => {
    // send a PUT request to your backend API to update the status of a job
    fetch(`http://localhost:8080/api/jobs/${jobId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
      .then(res => res.json())
      .then(updatedJob => {
        const updatedJobs = jobs.map(job => {
          if (job.id === updatedJob.id) {
            return updatedJob;
          } else {
            return job;
          }
        });
        setJobs(updatedJobs);
        setSelectedJob(updatedJob);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1 class="text-center">My Job Board</h1>
      
      <div class="container-sm">
        <div class="row align-items-start">
          <div class="col-sm-3">
            <CreateJob onCreateJob={handleCreateJob} />
          </div>

          <div class="col-sm-9">
            <h2>View Applied Jobs</h2>
            <NavigationBar onSelectJobType={handleSelectJobType} />
            <JobInfoDisplay jobType={selectedJobType} />
            // <h2> Application Analysis</h2>
          </div>
        </div>
      </div>
      
    </div>

  );
}

export default App;
