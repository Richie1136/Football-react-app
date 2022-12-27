import TeamRoster from "./components/teamroster/TeamRoster";
import Nfl from "./components/nfl/Nfl";
import { Routes, Route } from 'react-router-dom'
import GetStandings from "./components/getstandings/GetStandings";
import GetPlayerDetails from "./components/getplayerdetails/GetPlayerDetails";

const ApplicationRoutes = () => (
  <>
    <Routes>
      <Route path='/' element={<Nfl />} />
      <Route path="/:team" element={<TeamRoster />} />
      <Route path="/standings" element={<GetStandings />} />
      <Route path="/player/:playerid" element={<GetPlayerDetails />} />
    </Routes>
  </>
)

export default ApplicationRoutes