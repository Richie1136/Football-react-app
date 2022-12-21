import TeamRoster from "./components/teamroster/TeamRoster";
import Nfl from "./components/nfl/Nfl";
import { Routes, Route } from 'react-router-dom'
import GetStandings from "./components/getstandings/GetStandings";

const ApplicationRoutes = () => (
  <>
    <Routes>
      <Route path='/' element={<Nfl />} />
      <Route path="/:team" element={<TeamRoster />} />
      <Route path="/standings" element={<GetStandings />} />
    </Routes>
  </>
)

export default ApplicationRoutes