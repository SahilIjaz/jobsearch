import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Listjobs from "./componenets/Listjobs";
import CreateJob from "./componenets/Createjob";
import UpdateJob from "./componenets/Updatejobs";
function App() {
  return (
    <div className="App">
      <h1>React CRUD by using PHP amd MySQL DB.</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Jobs</Link>
            </li>

            <li>
              <Link to="create/job">Create job</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<Listjobs />} />
          <Route path="create/job" element={<CreateJob />} />
          <Route path="job/:id/update" element={<UpdateJob />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
