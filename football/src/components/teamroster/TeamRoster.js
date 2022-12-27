import { baseUrl } from "../../baseUrl"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Card from "../card/Card"
import './TeamRoster.css'
import Loading from "../loading/Loading"


const TeamRoster = () => {
  const [roster, setRoster] = useState()
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

  let wholeRoster = roster?.filter((status) => status.Status === 'Active')
  let displayData = wholeRoster

  console.log(roster)

  if (!roster) return <Loading />


  let Offense = wholeRoster?.filter((position) => position.PositionCategory === 'OFF')
  let QuarterBacks = wholeRoster?.filter((position) => position.Position === 'QB')
  let RunningBacks = wholeRoster?.filter((position) => position.Position === 'RB')
  let FullBack = wholeRoster?.filter((position) => position.Position === 'FB')
  let Wideouts = wholeRoster?.filter((position) => position.Position === 'WR')
  let TightEnd = wholeRoster?.filter((position) => position.Position === 'TE')
  let OffensiveLine = wholeRoster?.filter((position) => position.Position === 'OL')
  let OffensiveGuard = wholeRoster?.filter((position) => position.Position === 'G')
  let Center = wholeRoster?.filter((position) => position.Position === 'C')
  let OffensiveTackle = wholeRoster?.filter((position) => position.Position === 'OT')
  let Defense = wholeRoster?.filter((position) => position.PositionCategory === 'DEF')
  let DefensiveTackle = wholeRoster?.filter((position) => position.Position === 'DT')
  let DefensiveLine = wholeRoster?.filter((position) => position.Position === 'DL')
  let DefensiveEnd = wholeRoster?.filter((position) => position.Position === 'DE')
  let LineBackers = wholeRoster?.filter((position) => position.Position === 'LB')
  let InsideLineBackers = wholeRoster?.filter((position) => position.Position === 'ILB')
  let OutsideLineBackers = wholeRoster?.filter((position) => position.Position === 'OLB')
  let DefensiveBacks = wholeRoster?.filter((position) => position.Position === 'DB')
  let CornerBacks = wholeRoster?.filter((position) => position.Position === 'CB')
  let Safety = wholeRoster?.filter((position) => position.Position === 'S')
  let SpecialTeams = wholeRoster?.filter((position) => position.PositionCategory === 'ST')
  let Kicker = wholeRoster?.filter((position) => position.Position === 'K')
  let Punter = wholeRoster?.filter((position) => position.Position === 'P')
  let LongSnapper = wholeRoster?.filter((position) => position.Position === 'LS')


  const handleChange = (event) => {
    setInitialRoster(event.target.value)
  }

  if (initialRoster === "ALL") {
    displayData = wholeRoster
  }
  if (initialRoster === 'Offense') {
    displayData = Offense
  }
  if (initialRoster === 'QuarterBacks') {
    displayData = QuarterBacks
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
  if (initialRoster === 'TightEnd') {
    displayData = TightEnd
  }
  if (initialRoster === 'Offensive Guard') {
    displayData = OffensiveGuard
  }
  if (initialRoster === 'Offensive Tackle') {
    displayData = OffensiveTackle
  }
  if (initialRoster === 'Offensive Line') {
    displayData = OffensiveLine
  }
  if (initialRoster === 'Center') {
    displayData = Center
  }
  if (initialRoster === 'Defense') {
    displayData = Defense
  }
  if (initialRoster === 'DE') {
    displayData = DefensiveEnd
  }
  if (initialRoster === 'DT') {
    displayData = DefensiveTackle
  }
  if (initialRoster === 'DL') {
    displayData = DefensiveLine
  }
  if (initialRoster === 'LB') {
    displayData = LineBackers
  }
  if (initialRoster === 'ILB') {
    displayData = InsideLineBackers
  }
  if (initialRoster === 'OLB') {
    displayData = OutsideLineBackers
  }
  if (initialRoster === 'DefensiveBacks') {
    displayData = DefensiveBacks
  }
  if (initialRoster === 'CornerBacks') {
    displayData = CornerBacks
  }
  if (initialRoster === 'Safety') {
    displayData = Safety
  }
  if (initialRoster === 'SpecialTeams') {
    displayData = SpecialTeams
  }
  if (initialRoster === 'Kicker') {
    displayData = Kicker
  }
  if (initialRoster === 'Punter') {
    displayData = Punter
  }
  if (initialRoster === 'LongSnapper') {
    displayData = LongSnapper
  }

  let doHaveOG = OffensiveGuard.length > 0 ? "Offensive Guard" : "N/A"
  let doHaveOT = OffensiveTackle.length > 0 ? "Offensive Tackle" : "N/A"
  let doHaveOL = OffensiveLine.length > 0 ? "Offensive Line" : "N/A"
  let doHaveCenter = Center.length > 0 ? "Center" : "N/A"
  let doHaveDL = DefensiveLine.length > 0 ? "Defensive Line" : "N/A"
  let doHaveDT = DefensiveTackle.length > 0 ? "Defensive Tackle" : "N/A"
  let doHaveDE = DefensiveEnd.length > 0 ? "Defensive End" : "N/A"
  let doHaveDB = DefensiveBacks.length > 0 ? "Defensiveback" : "N/A"
  let doHaveLB = LineBackers.length > 0 ? "Linebacker" : "N/A"
  let doHaveCB = CornerBacks.length > 0 ? "Cornerback" : "N/A"
  let doHaveSafety = Safety.length > 0 ? "Safety" : "N/A"
  let doHaveFB = FullBack.length > 0 ? "Full Back" : "N/A"
  let doHaveOLB = OutsideLineBackers.length > 0 ? "Outside Linebacker" : "N/A"
  let doHaveILB = InsideLineBackers.length > 0 ? "Inside Linebacker" : "N/A"


  return (
    <div className="container">
      <label>
        <select value={filteredResults} onChange={handleChange}>
          <option multiple={false} value={"ALL"}>ALL</option>
          <option multiple={false} value={"Offense"}>Offense</option>
          <option>- - --</option>
          <option multiple={false} value={"QuarterBacks"}>Quarterback</option>
          <option multiple={false} value={"RunningBacks"}>Running Back</option>
          <option multiple={false} value={"FullBack"}>{doHaveFB}</option>
          <option multiple={false} value={"Wideout"}>Wide Receiver</option>
          <option multiple={false} value={"TightEnd"}>Tight End</option>
          <option multiple={false} value={"Offensive Line"}>{doHaveOL}</option>
          <option multiple={false} value={"Center"}>{doHaveCenter}</option>
          <option multiple={false} value={"Offensive Guard"}>{doHaveOG}</option>
          <option multiple={false} value={"Offensive Tackle"}>{doHaveOT}</option>
          <option multiple={false} value={"Defense"}>Defense</option>
          <option>- - --</option>
          <option multiple={false} value={"DT"}>{doHaveDT}</option>
          <option multiple={false} value={"DL"}>{doHaveDL}</option>
          <option multiple={false} value={"DE"}>{doHaveDE}</option>
          <option multiple={false} value={"LB"}>{doHaveLB}</option>
          <option multiple={false} value={"ILB"}>{doHaveILB}</option>
          <option multiple={false} value={"OLB"}>{doHaveOLB}</option>
          <option multiple={false} value={"DefensiveBacks"}>{doHaveDB}</option>
          <option multiple={false} value={"CornerBacks"}>{doHaveCB}</option>
          <option multiple={false} value={"Safety"}>{doHaveSafety}</option>
          <option multiple={false} value={"SpecialTeams"}>Special Teams</option>
          <option>- - --</option>
          <option multiple={false} value={"Kicker"}>Kicker</option>
          <option multiple={false} value={"Punter"}>Punter</option>
          <option multiple={false} value={"LongSnapper"}>Long Snapper</option>


        </select>
      </label>
      {displayData?.map(({ FirstName, PlayerID, LastName, Number, Age, BirthDate, College, Height, Position, PhotoUrl, Weight, ExperienceString }) => (
        <Card key={PlayerID}>
          <h2><a href={`player/${PlayerID}`}>{FirstName} {LastName}</a></h2>
          <img src={PhotoUrl} alt='player-img' />
          <h4>#{Number}</h4>
          <h4>{Height}</h4>
          <h4>{Weight}</h4>
          <h4>{Position}</h4>
        </Card>
      ))}
    </div>
  )
}

export default TeamRoster