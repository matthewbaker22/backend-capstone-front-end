import React, {useEffect, useState} from "react"
import JobManager from "../../modules/JobManager"
import JobCard from "./JobCard"

const Job = (props) => {
    const [jobs, setJobs] = useState([])

    const getJobs = () => {
        return JobManager.getAllJobsFromJobStatusTable().then((JobsFromAPI) => {
            setJobs(JobsFromAPI)
        })
    }

    useEffect(() => {
        getJobs()
    }, [])

    jobs.map((job) => (
        console.log(job.created_at),
        console.log(job.job_id.company_name)
    ))

    return (
        <div>
            <div>
                <h3>Wishlist</h3>
                <button>+</button>
                {jobs.map(job => (
                    job.status_id.name == "wishlist" ? 
                        <JobCard key={job.id} job={job} {...props}/>                    
                    : <></>
                ))}
            </div>
            <div>
                <h3>Applied</h3>
                <button>+</button>
                {jobs.map(job => (
                    job.status_id.name == "applied" ? 
                        <JobCard key={job.id} job={job} {...props}/>                    
                    : <></>
                ))}
            </div>
            <div>
                <h3>Interviews</h3>
                <button>+</button>
                {jobs.map(job => (
                    job.status_id.name == "interviews" ? 
                        <JobCard key={job.id} job={job} {...props}/>                    
                    : <></>
                ))}
            </div>
            <div>
                <h3>Offers</h3>
                <button>+</button>
                {jobs.map(job => (
                    job.status_id.name == "offers" ? 
                        <JobCard key={job.id} job={job} {...props}/>                    
                    : <></>
                ))}
            </div>
            <div>
                <h3>Rejections</h3>
                <button>+</button>
                {jobs.map(job => (
                    job.status_id.name == "rejected" ? 
                        <JobCard key={job.id} job={job} {...props}/>                    
                    : <></>
                ))}
            </div>
        </div>
    )
}

export default Job