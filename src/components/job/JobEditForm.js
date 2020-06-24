import React, {useState, useEffect} from "react"
import JobManager from "../../modules/JobManager"

const JobEditForm = (props) => {
    const [job, setJob] = useState({company_name: "", job_title: "", notes: "", interview_date: ""})

    const handleFieldChange = (evt) => {
        const stateToChange = {...job}
        stateToChange[evt.target.id] = evt.target.value
        setJob(stateToChange)
    }

    const updateExistingJob = (evt) => {
        evt.preventDefault()

        const editedJob = {
            id: props.match.params.jobId,
            company_name: job.company_name,
            job_title: job.job_title,
            notes: job.notes,
            interview_date: job.interview_date
        }

        JobManager.updateJob(editedJob).then(() => props.history.push("/jobs"))
    }

    useEffect(() => {
        JobManager.getSingleJob(props.match.params.jobId).then(job => {
            setJob(job)
            console.log(job)
        })
    }, [])

    return (
        <>
            <div>
                <form onSubmit={updateExistingJob}>
                <h1>New Job</h1>
                    <fieldset>
                        <label>Company Name</label>
                        <input type="text" id="company_name" value={job.company_name} onChange={handleFieldChange} required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <label>Job Title</label>
                        <input type="text" id="job_title" value={job.job_title} onChange={handleFieldChange} required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <label>Notes</label>
                        <input type="text" id="notes" value={job.notes} onChange={handleFieldChange} required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <label>Interview Date</label>
                        <input type="date" id="interview_date" value={job.interview_date.split("T")[0]} onChange={handleFieldChange} required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default JobEditForm