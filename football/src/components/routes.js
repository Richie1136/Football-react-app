import { Routes, Route } from 'react-router-dom'
import { TeamRoster, Nfl, GetStandings, GetPlayerDetails } from './index'

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