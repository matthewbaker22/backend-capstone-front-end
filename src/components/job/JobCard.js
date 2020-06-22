import React from 'react'

const JobCard = props => {
    return (
        <div>
            <div>
                <p>{props.job.job_id.company_name}</p>
                <p>{props.job.job_id.job_title}</p>
                <p>{props.job.job_id.notes}</p>
                <p>{props.job.job_id.interview_date}</p>
            </div>
        </div>
    )
}

export default JobCard