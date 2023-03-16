import React from 'react';

function NavigationBar(props) {
  return (

    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <ul>
    //     <li><button className="nav-link active" onClick={() => props.onSelectJobType('applied')}>Applied Jobs</button></li>
    //     <li><button className="btn btn-primary" onClick={() => props.onSelectJobType('interview')}>Interviewing Jobs</button></li>
    //     <li><button className="btn btn-primary" onClick={() => props.onSelectJobType('archived')}>Archived Jobs</button></li>
    //   </ul>
    // </nav>
    <nav class="navbar bg-primary navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Select Job Type:</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button className="btn btn-outline-light btn-lg" onClick={() => props.onSelectJobType('applied')}>Applied Jobs</button>
          </li>
          <li class="nav-item">
            <button className="btn btn-outline-light btn-lg" onClick={() => props.onSelectJobType('interview')}>Interviewing Jobs</button>
          </li>
          <li class="nav-item">
          <button className="btn btn-outline-light btn-lg" onClick={() => props.onSelectJobType('archived')}>Archived Jobs</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default NavigationBar;
