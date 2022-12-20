import { baseUrl } from "../../baseUrl"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Card from "../card/Card"
import './TeamRoster.css'


const TeamRoster = () => {
  const [roster, setRoster] = useState([])
  const [initialRoster, setInitialRoster] = useState(roster)
  const [filteredResults, setFilteredResults] = useState(undefined)

  const APIKEY = process.env.REACT_APP_API_KEY

  const params = useParams()

  const obj = new URLSearchParams(params)

  const term = obj.get('team')


  let endpoint = `${baseUrl}/Players/${term}?key=${APIKEY}`

  // Add ability to filter by position


  useEffect(() => {
    const retrieveRoster = async () => {
      const data = await fetch(endpoint)
      const response = await data.json()
      setRoster(response)
    }
    retrieveRoster()
  }, [])


  let wholeRoster = roster.filter((status) => status.Status === 'Active')
  let displayData = wholeRoster

  console.log(wholeRoster)


  let QuarterBacks = wholeRoster?.filter((position) => position.Position === 'QB')
  let RunningBacks = wholeRoster?.filter((position) => position.Position === 'RB')
  let DefensiveBacks = wholeRoster?.filter((position) => position.Position === 'DB')
  let FullBack = wholeRoster?.filter((position) => position.Position === 'FB')
  let Wideouts = wholeRoster?.filter((position) => position.Position === 'WR')


  const handleChange = (event) => {
    setInitialRoster(event.target.value)
  }

  if (initialRoster === "ALL") {
    displayData = wholeRoster
  }

  if (initialRoster === 'QuarterBacks') {
    displayData = QuarterBacks
  }
  if (initialRoster === 'DefensiveBacks') {
    displayData = DefensiveBacks
  }
  if (initialRoster === "RunningBacks") {
    displayData = RunningBacks
  }
  if (initialRoster === "FullBack") {
    displayData = FullBack
  }
  if (initialRoster === 'Wideout') {
    displayData = Wideouts
  }


  return (
    <div className="container">
      <label>
        <select value={filteredResults} onChange={handleChange}>
          <option multiple={false} value={"ALL"}>ALL</option>
          <option multiple={false} value={"QuarterBacks"}>Quarterbacks</option>
          <option multiple={false} value={"RunningBacks"}>Runningbacks</option>
          <option multiple={false} value={"DefensiveBacks"}>Defensivebacks</option>
          <option multiple={false} value={"FullBack"}>FullBack</option>
          <option multiple={false} value={"Wideout"}>Wideouts</option>
        </select>
      </label>
      {displayData?.map(({ FirstName, PlayerID, LastName, Number, Age, BirthDate, College, Height, Position, PhotoUrl, Weight, ExperienceString }) => (
        <Card key={PlayerID}>
          <h2>{FirstName} {LastName}</h2>
          <img src={PhotoUrl} />
          <h4>{Number}</h4>
          <h4>{Height}</h4>
          <h4>{Weight}</h4>
          <h4>{Position}</h4>
        </Card>
      ))}
    </div>
  )
}

export default TeamRoster