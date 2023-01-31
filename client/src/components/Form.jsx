import React, { useState } from "react";

const Form = ({mode}) => {
  const [name, setname] = useState("");
  const [jobtitle, setjobtitle] = useState("");

  return (
      <form className="form-group">
 
        <div className="form-control">
          <label for="firstname">Name: </label>
          <input className={`input-${mode}`} name="firstname" placeholder="enter name"  />
        </div>
        <div className="form-control">
          <label for="jobname">Job title: </label>
          <input className={`input-${mode}`}  name="jobname" placeholder="enter job title"  />
        </div>
        <div className="form-control">
          <button type="submit" className={`sub-btn-${mode}`}>submit</button>
        </div>

      </form>
  );
};

export default Form;
