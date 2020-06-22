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
    }
}