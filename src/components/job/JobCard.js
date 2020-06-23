import React from 'react'

const JobCard = props => {
    return (
        <div>
            <div>
                <p>{props.job.job.company_name}</p>
                <p>{props.job.job.job_title}</p>
                <p>{props.job.job.notes}</p>
                <p>{props.job.job.interview_date}</p>
            </div>
        </div>
    )
}

export default JobCard