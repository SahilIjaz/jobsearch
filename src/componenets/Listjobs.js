import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ListJobs() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    getJobs();
  }, []);

  function getJobs() {
    axios
      .get("http://localhost/assignmentBackend/index.php")
      .then((response) => {
        console.log("Server Response:", response.data);
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost/assignmentBackend/index.php/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getJobs();
      });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Application Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(jobs) &&
            jobs.map((job, key) => (
              <tr key={key}>
                <td>{job.id}</td>
                <td>{job.jobTitle}</td>
                <td>{job.company}</td>
                <td>{job.applicationDate}</td>
                <td>{job.status}</td>
                <td>
                  <Link
                    to={`job/${job.id}/update`}
                    style={{ marginRight: "13px" }}
                  >
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
