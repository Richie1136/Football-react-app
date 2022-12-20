import { baseUrl } from '../../baseUrl'
import { useState, useEffect } from 'react'
import Card from '../card/Card'
import './Nfl.css'



const Nfl = () => {

  const [teams, setTeams] = useState([])

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

  return (
    <div className='container'>
      {teams.map(({ City, key, FullName, DefensiveCoordinator, HeadCoach, OffensiveCoordinator, StadiumDetails, PrimaryColor, SecondaryColor, Conference, Division, WikipediaLogoUrl, WikipediaWordMarkUrl }) => (
        <Card key={key}>
          <div>
            <h2 style={{ 'color': '#' + PrimaryColor }}>{FullName}</h2>
            <h4>{Conference} {Division}</h4>
            <img src={WikipediaLogoUrl} />
            <h5 className='headCoach'>Head Coach: {HeadCoach}</h5>
            <h5 className='oc'>Offensive Coordinator: {OffensiveCoordinator === null ? "No Offensive Coordinator" : OffensiveCoordinator}</h5>
            <h5 className='dc'>Defensive Coordinator: {DefensiveCoordinator === null ? "No Denfensive Coordinator" : DefensiveCoordinator}</h5>
            <h4>Stadium Details</h4>
            <h5 className='stadiumName'>{StadiumDetails?.Name}</h5>
            <h5 className='stadiumLocation'>{StadiumDetails?.City}, {StadiumDetails?.State}</h5>
            <h5 className='stadiumSurface'>Playing Surface: {StadiumDetails?.PlayingSurface}</h5>
            <h5 className='stadiumType'>{StadiumDetails?.Type}</h5>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Nfl