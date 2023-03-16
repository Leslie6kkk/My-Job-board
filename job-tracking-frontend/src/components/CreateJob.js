import React, { useState } from 'react';

function CreateJob(props){
    const [formData, setFormData] = useState ({position:'', company:'',level:'', applytime:'',jobstate:''});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCreateJob(formData); 
        setFormData({position:'', company:'',level:'', applytime:'',jobstate:''});
    };

    return (
        <form onSubmit={handleSubmit}>
          <h2>New Job Record</h2>
          <div className="mb-3">
            <label className="form-label">
                Position:
                <input type="text" className="form-control" name="position" value={formData.position} onChange={handleInputChange} />
            </label>          
          </div>
          <div className="mb-3">
            <label className="form-label">
                Company:
                <input type="text" className="form-control" name="company" value={formData.company} onChange={handleInputChange} />
            </label>          
          </div>
          <div className="mb-3">
            <label className="form-label">
                Level:
                <select className ="form-select" aria-label="Default select example" name="level" value={formData.level} onChange={handleInputChange}>
                <option value="">--Select Level--</option>
                <option value="Entry Level">Entry_Level</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Senior">Senior</option>
                </select>
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
                Apply Time:
                <input type="date" className="form-control" name="applytime" value={formData.applytime} onChange={handleInputChange} />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Status:
              <select className ="form-select" aria-label="Default select example" name="jobstate" value={formData.jobstate} onChange={handleInputChange}>
                <option value="">--Select Status--</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Refused">Refused</option>
                <option value="Offer">Offer</option>
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-dark" >Add record</button>
        </form>
      );
}
export default CreateJob;

