import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateJob() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data being sent:", inputs);

    axios
      .post("http://localhost/assignmentBackend/index.php", inputs)
      .then((response) => {
        console.log("Server Response:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    console.log(inputs);
  };

  return (
    <div className="create-job">
      <h1>Create Job</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={"10"}>
          <tbody>
            <tr>
              <th>
                <label>Job Title:</label>
              </th>
              <td>
                <input type="text" name="jobTitle" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Company:</label>
              </th>
              <td>
                <input type="text" name="company" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Valid till:</label>
              </th>
              <td>
                <input
                  type="date"
                  name="applicationDate"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Status:</label>
              </th>
              <td>
                <input type="text" name="status" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td colSpan={"2"} align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
