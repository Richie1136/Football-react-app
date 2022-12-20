import TeamRoster from "./components/teamroster/TeamRoster";
import Nfl from "./components/nfl/Nfl";
import { Routes, Route } from 'react-router-dom'

const ApplicationRoutes = () => (
  <>
    <Routes>
      <Route path='/' element={<Nfl />} />
      <Route path="/:team" element={<TeamRoster />} />
    </Routes>
  </>
)

export default ApplicationRoutes