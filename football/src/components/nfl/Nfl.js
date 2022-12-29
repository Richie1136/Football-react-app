import { baseUrl } from '../../baseUrl'
import { useState, useEffect } from 'react'
import Card from '../card/Card'
import './Nfl.css'

const Nfl = () => {

  const [teams, setTeams] = useState([])
  const [initialTeams, setInitialTeams] = useState(teams)
  const [filteredResults, setFilteredResults] = useState(undefined)

  const APIKEY = process.env.REACT_APP_API_KEY
  let result = `${baseUrl}/Teams?key=${APIKEY}`

  useEffect(() => {
    const getTeams = async () => {
      const data = await fetch(result)
      const response = await data.json()
      setTeams(response)
    }
    getTeams()
  }, [])

  console.log(teams)

  let allTeams = teams
  let displayData = allTeams
  let AFC = teams?.filter((conf) => conf.Conference === 'AFC')
  let AFCE = AFC.filter((div) => div.Division === 'East')
  let AFCN = AFC.filter((div) => div.Division === 'North')
  let AFCS = AFC.filter((div) => div.Division === 'South')
  let AFCW = AFC.filter((div) => div.Division === 'West')
  let NFC = teams?.filter((conf) => conf.Conference === 'NFC')
  let NFCE = NFC.filter((div) => div.Division === 'East')
  let NFCN = NFC.filter((div) => div.Division === 'North')
  let NFCS = NFC.filter((div) => div.Division === 'South')
  let NFCW = NFC.filter((div) => div.Division === 'West')

  const handleChange = (event) => {
    setInitialTeams(event.target.value)
  }

  if (initialTeams === "ALL") {
    displayData = teams
  }
  if (initialTeams === 'AFC') {
    displayData = AFC
  }
  if (initialTeams === "AFCE") {
    displayData = AFCE
  }
  if (initialTeams === "AFCN") {
    displayData = AFCN
  }
  if (initialTeams === "AFCS") {
    displayData = AFCS
  }
  if (initialTeams === "AFCW") {
    displayData = AFCW
  }
  if (initialTeams === 'NFC') {
    displayData = NFC
  }
  if (initialTeams === "NFCE") {
    displayData = NFCE
  }
  if (initialTeams === "NFCN") {
    displayData = NFCN
  }
  if (initialTeams === "NFCS") {
    displayData = NFCS
  }
  if (initialTeams === "NFCW") {
    displayData = NFCW
  }

  return (
    <div className='container'>
      <label>
        <select value={filteredResults} onChange={handleChange}>
          <option multiple={false} value={"ALL"}>ALL Teams</option>
          <option multiple={false} value={"ALL"}> - - - </option>
          <option multiple={false} value={"AFC"}>AFC</option>
          <option multiple={false} value={"AFC"}>- - -</option>
          <option multiple={false} value={"AFCE"}>AFC East</option>
          <option multiple={false} value={"AFCN"}>AFC North</option>
          <option multiple={false} value={"AFCS"}>AFC South</option>
          <option multiple={false} value={"AFCW"}>AFC West</option>
          <option multiple={false} value={"AFC"}>- - -</option>
          <option multiple={false} value={"NFC"}>NFC</option>
          <option multiple={false} value={"NFC"}>- - -</option>
          <option multiple={false} value={"NFCE"}>NFC East</option>
          <option multiple={false} value={"NFCN"}>NFC North</option>
          <option multiple={false} value={"NFCS"}>NFC South</option>
          <option multiple={false} value={"NFCW"}>NFC West</option>
        </select>
      </label>
      {displayData.map(({ City, Key, FullName, DefensiveCoordinator, HeadCoach, OffensiveCoordinator, SpecialTeamsCoach, StadiumDetails, PrimaryColor, Conference, Division, WikipediaLogoUrl }) => (
        <Card key={Key}>
          <div>
            <h2 className='teamCity'><a style={{ 'color': '#' + PrimaryColor }} href={`/${Key}`}>{FullName}</a></h2>
            <h4>{Conference} {Division}</h4>
            <img src={WikipediaLogoUrl} alt='team-logo' />
            <h5 className='headCoach' style={{ 'color': '#' + PrimaryColor }}>Head Coach: {HeadCoach}</h5>
            <h5 className='coaches' style={{ 'color': '#' + PrimaryColor }}>Offensive Coordinator: {OffensiveCoordinator === null ? "No Offensive Coordinator" : OffensiveCoordinator}</h5>
            <h5 className='coaches' style={{ 'color': '#' + PrimaryColor }}>Defensive Coordinator: {DefensiveCoordinator === null ? "No Denfensive Coordinator" : DefensiveCoordinator}</h5>
            <h5 className='coaches' style={{ 'color': '#' + PrimaryColor }}>Special Teams Coach: {SpecialTeamsCoach}</h5>
            <h4>Stadium Details</h4>
            <h5 className='stadium' style={{ 'color': '#' + PrimaryColor }}>{StadiumDetails?.Name}</h5>
            <h5 className='stadium' style={{ 'color': '#' + PrimaryColor }}>Capacity: {StadiumDetails?.Capacity.toLocaleString('en-US')}</h5>
            <h5 className='stadium' style={{ 'color': '#' + PrimaryColor }}>{StadiumDetails?.City}, {StadiumDetails?.State}</h5>
            <h5 className='stadium' style={{ 'color': '#' + PrimaryColor }}>Playing Surface: {StadiumDetails?.PlayingSurface}</h5>
            <h5 className='stadium' style={{ 'color': '#' + PrimaryColor }}>Stadium Type: {StadiumDetails?.Type}</h5>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Nfl