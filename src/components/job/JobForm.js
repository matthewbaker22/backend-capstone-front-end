import React, {useState} from "react"
import JobManager from "../../modules/JobManager"

const JobForm = (props) => {
    const [job, setJob] = useState({ company_name: "", job_title: "", notes: "", interview_date: ""})
    const [column, setColumn] = useState({column: "1"})

    const handleFieldChange = (evt) => {
        const stateToChange = {...job}
        stateToChange[evt.target.id] = evt.target.value
        setJob(stateToChange)
    }

    const handleColumnChange = (evt) => {
        const stateToChange = {...column}
        stateToChange[evt.target.id] = evt.target.value;
        setColumn(stateToChange)
    }
    
    const constructNewJob = (evt) => {
        evt.preventDefault()
        if (job.company_name === "" || job.job_title === "" || job.notes === "") {
            window.alert("Please make sure all fields are filled out.")
        } else {
            JobManager.createJob(job).then(resp => {
                const job_status = {
                    "job_id": resp.id,
                    "status_id": parseInt(column.column),
                    "created_at": ""
                }
                console.log(job_status)
                JobManager.createJobStatus(job_status).then(props.history.push("/jobs"))
            })
        }
    }

    return (
        <>
            <div>
                <form>
                    <h1>New Job</h1>
                    <fieldset>
                        <label>Company Name</label>
                        <input type="text" id="company_name" placeholder="Company name" onChange={handleFieldChange} required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <label>Job Title</label>
                        <input type="text" id="job_title" placeholder="Job title" onChange={handleFieldChange} required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <label>Notes</label>
                        <input type="text" id="notes" placeholder="Notes" onChange={handleFieldChange} required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <label>Interview Date</label>
                        <input type="date" id="interview_date" placeholder="Interview date" onChange={handleFieldChange} required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <select id="column" placeholder="Pick column" onChange={handleColumnChange}>
                            <option value="1">Wishlist</option>
                            <option value="2">Applied</option>
                            <option value="3">Interviews</option>
                            <option value="4">Offers</option>
                            <option value="5">Rejected</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <button type="button" onClick={constructNewJob}>Submit</button>
                    </fieldset>
                    
                </form>
            </div>
        </>
    )
}

export default JobForm