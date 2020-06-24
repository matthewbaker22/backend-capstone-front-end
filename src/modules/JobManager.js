const url = "http://localhost:8000"

const token = sessionStorage.getItem('jobsaver_token')

export default {
    getAllJobsPerUser() {
        return fetch(`${url}/jobs`, {
            headers: {
                "Authorization": `Token ${token}`
            }
        }).then(resp => resp.json())
    },
    getAllJobsFromJobStatusTable() {
        return fetch(`${url}/job_status`, {
            headers: {
                "Authorization": `Token ${token}`
            }
        }).then(resp => resp.json())
    },
    createJob(job) {
        return fetch(`${url}/jobs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(job)
        }).then(resp => resp.json())
    },
    createJobStatus(job_status) {
        return fetch(`${url}/job_status`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(job_status)
        }).then(resp => resp.json())
    },
    deleteJob(id) {
        return fetch(`${url}/job_status/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${token}`
            }
        })
    },
    updateJob(editedJob) {
        return fetch(`${url}/jobs/${editedJob.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(editedJob)
        })
    },
    getSingleJob(id) {
        return fetch(`${url}/jobs/${id}`, {
            headers: {
                "Authorization": `Token ${token}`
            }
        }).then(resp => resp.json())
    }
}