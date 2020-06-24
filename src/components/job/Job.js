import React, {useEffect, useState} from "react"
import JobManager from "../../modules/JobManager"
import {Link} from "react-router-dom"
import JobCard from "./JobCard"

const Job = (props) => {
    const [jobs, setJobs] = useState([])
    const [jobsFilter, setJobsFilter] = useState({company_name: ""})
    const [reload, setReload] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = {...jobsFilter}
        stateToChange[evt.target.id] = evt.target.value
        setJobsFilter(stateToChange)
    }

    const getJobs = () => {
        return JobManager.getAllJobsFromJobStatusTable().then((JobsFromAPI) => {
            setJobs(JobsFromAPI)
        })
    }

    const handleDelete = (id) => {
        JobManager.deleteJob(id).then(() => {
            if(reload == false) {
                setReload(true)
            } else {
                setReload(false)
            }
        })
    }

    const searchUseEffect = () => {
        getFilteredJobs(jobsFilter.company_name)
    }

    const getFilteredJobs = (companyName) => {
        return JobManager.getFilteredJobs(companyName).then((JobsFromAPI => {
            const FilteredJobsFromAPI = JobsFromAPI.filter(jobStatus => jobStatus.job.company_name.toUpperCase() === jobsFilter.company_name.toUpperCase())
            setJobs(FilteredJobsFromAPI)
            console.log(FilteredJobsFromAPI, "FILTERED JOBS")
            console.log(JobsFromAPI)
        }))
    }

    useEffect(() => {
        getJobs()
    }, [reload])

    console.log(jobs)
    return (
        <>
        <div>
            <input type="text" placeholder="Search Jobs" id="company_name" onChange={handleFieldChange}></input>
            <button type="submit" onClick={searchUseEffect}>Search</button>
        </div>
        <div>
            <div>
                <h3>Wishlist</h3>
                <Link to="/job_form">
                    <button>+</button>
                </Link>
                {jobs.map(job => (
                    job.status_id == "1" ? 
                    <div>
                        <JobCard key={job.id} job={job} {...props}/>
                            <button type="button" onClick={() => {
                                props.history.push(`/jobs/${job.id}/edit`)
                            }}>Edit</button> 
                            <button onClick={() => 
                                handleDelete(job.id)
                            }>Delete</button>
                    </div>                
                    : <></>
                ))}
            </div>
            <div>
                <h3>Applied</h3>
                <Link to="/job_form">
                    <button>+</button>
                </Link>
                {jobs.map(job => (
                    job.status_id == "2" ? 
                    <div>
                        <JobCard key={job.id} job={job} {...props}/> 
                        <button type="button" onClick={() => {
                            props.history.push(`/jobs/${job.id}/edit`)
                        }}>Edit</button> 
                        <button onClick={() => 
                            handleDelete(job.id)
                        }>Delete</button>
                    </div>                    
                    : <></>
                ))}
            </div>
            <div>
                <h3>Interviews</h3>
                <Link to="/job_form">
                    <button>+</button>
                </Link>
                {jobs.map(job => (
                    job.status_id == "3" ? 
                    <div>
                        <JobCard key={job.id} job={job} {...props}/>  
                        <button type="button" onClick={() => {
                            props.history.push(`/jobs/${job.id}/edit`)
                        }}>Edit</button>  
                        <button onClick={() => 
                            handleDelete(job.id)
                        }>Delete</button>
                    </div>                    
                    : <></>
                ))}
            </div>
            <div>
                <h3>Offers</h3>
                <Link to="/job_form">
                    <button>+</button>
                </Link>
                {jobs.map(job => (
                    job.status_id == "4" ? 
                    <div>
                        <JobCard key={job.id} job={job} {...props}/>  
                        <button type="button" onClick={() => {
                            props.history.push(`/jobs/${job.id}/edit`)
                        }}>Edit</button> 
                        <button onClick={() => 
                            handleDelete(job.id)
                        }>Delete</button>
                    </div>                    
                    : <></>
                ))}
            </div>
            <div>
                <h3>Rejections</h3>
                <Link to="/job_form">
                    <button>+</button>
                </Link>
                {jobs.map(job => (
                    job.status_id == "5" ? 
                    <div>
                        <JobCard key={job.id} job={job} {...props}/> 
                        <button type="button" onClick={() => {
                            props.history.push(`/jobs/${job.id}/edit`)
                        }}>Edit</button>  
                        <button onClick={() => 
                            handleDelete(job.id)
                        }>Delete</button>
                    </div>                    
                    : <></>
                ))}
            </div>
        </div>
        </>
    )
}

export default Job