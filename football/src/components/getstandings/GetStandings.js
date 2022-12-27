import { baseUrl } from "../../baseUrl"
import { useState, useEffect } from 'react'
import Row from "../row/Row"
import './GetStandings.css'


const GetStandings = () => {

  const [GetStandings, setGetStandings] = useState()
  const [percentage, setPercentage] = useState([])

  const APIKEY = process.env.REACT_APP_API_KEY

  let endPoint = `${baseUrl}/Standings/2022?key=${APIKEY}`

  useEffect(() => {
    const getCurrentStandings = async () => {
      const response = await fetch(endPoint)
      const data = await response.json()
      setGetStandings(data)
    }
    getCurrentStandings()
  }, [])

  // console.log(GetStandings)

  // console.log(GetStandings?.sort((a, b) => a.Percentage - b.Percentage))


  let AFCE = GetStandings?.filter((conf) => conf.Conference === 'AFC').filter((div) => div.Division === 'East')
  let AFC = GetStandings?.filter((conf) => conf.Conference === 'AFC')
  let AFCN = GetStandings?.filter((conf) => conf.Conference === 'AFC').filter((div) => div.Division === 'North')
  let AFCS = AFC?.filter((conf) => conf.Conference === 'AFC').filter((div) => div.Division === 'South')
  let AFCW = GetStandings?.filter((conf) => conf.Conference === 'AFC').filter((div) => div.Division === 'West')
  let NFCE = GetStandings?.filter((conf) => conf.Conference === 'NFC').filter((div) => div.Division === 'East')
  let NFCN = GetStandings?.filter((conf) => conf.Conference === 'NFC').filter((div) => div.Division === 'North')
  let NFCS = GetStandings?.filter((conf) => conf.Conference === 'NFC').filter((div) => div.Division === 'South')
  let NFCW = GetStandings?.filter((conf) => conf.Conference === 'NFC').filter((div) => div.Division === 'West')


  let headers = (
    <>
      <th className='wins'>
        <span className='divisionspan'>
          <span className='teamw'>W</span>
        </span>
      </th>
      <th className='lort'>
        <span className='team'>
          <span className='teaml'>L</span>
        </span>
      </th>
      <th className='lort'>
        <span className='team'>
          <span className='teamt'>T</span>
        </span>
      </th>
      <th className='pct'>
        <span className='runs'>
          <span>PCT</span>
        </span>
      </th>
      <th className='touchdowns'>
        <span className='tstreak'>
          <span>Touchdowns</span>
        </span>
      </th>
      <th className='pointsScored'>
        <span className='runs'>
          <span>PF</span>
        </span>
      </th>
      <th className='pointsAganist'>
        <span className='runs'>
          <span>PA</span>
        </span>
      </th>
      <th className='netPts'>
        <span className='runs'>
          <span>Net Pts</span>
        </span>
      </th>
      <th className='div'>
        <span className='runs'>
          <span>DIV</span>
        </span>
      </th>
      <th className='divPer'>
        <span className='runs'>
          <span>PCT</span>
        </span>
      </th>
      <th className='conf'>
        <span className='runs'>
          <span>CONF</span>
        </span>
      </th>
      <th className='divPer'>
        <span className='runs'>
          <span>PCT</span>
        </span>
      </th>
      <th className='nonConf'>
        <span className='runs'>
          <span>Non-Conf</span>
        </span>
      </th>
    </>
  )


  return (

    <>
      <div className='background-container'>
        <h2 className='conference-title'>AMERICAN FOOTBALL CONFERENCE</h2>
        <table>
          <colgroup className='col1' span='6'></colgroup>
          <colgroup className='col2' span='2'></colgroup>
          <colgroup className='col3' span='4'></colgroup>
          <colgroup className='col4' span='3'></colgroup>
          <tbody>
            <tr className='division-row'>
              <th className="header">AFC EAST</th>
              {headers}
            </tr>
          </tbody>
          {AFCE?.map(({ Name, Conference, Division, Ties, Touchdowns, Losses, Wins, Percentage, ConferenceWins, ConferenceLosses, DivisionWins, DivisionTies, ConferenceTies, DivisionLosses, PointsFor,
            PointsAgainst, NetPoints, TeamID, Team }) => (
            <Row key={TeamID} Name={Name} Team={Team} Touchdowns={Touchdowns} DivisionTies={DivisionTies} Ties={Ties} Conference={Conference} Division={Division} Losses={Losses} Wins={Wins} Percentage={Percentage} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} ConferenceTies={ConferenceTies} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsFor={PointsFor} PointsAgainst={PointsAgainst} NetPoints={NetPoints} />
          ))}
          <br />
          <tbody>
            <tr className='division-row'>
              <th className="header">AFC NORTH</th>
              {headers}
            </tr>
          </tbody>
          {AFCN?.map(({ Name, Conference, Division, Ties, Touchdowns, Losses, Wins, Percentage, ConferenceWins, ConferenceLosses, DivisionWins, DivisionTies, ConferenceTies, DivisionLosses, PointsFor,
            PointsAgainst, NetPoints, TeamID, Team }) => (

            <Row key={TeamID} Name={Name} Team={Team} Touchdowns={Touchdowns} DivisionTies={DivisionTies} Ties={Ties} Conference={Conference} Division={Division} Losses={Losses} Wins={Wins} Percentage={Percentage} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} ConferenceTies={ConferenceTies} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsFor={PointsFor} PointsAgainst={PointsAgainst} NetPoints={NetPoints} />
          ))}
          <br />
          <tbody>
            <tr className='division-row'>

              <th className="header">AFC SOUTH</th>
              {headers}
            </tr>
          </tbody>
          {AFCS?.map(({ Name, Conference, Division, sortPercentage, Ties, Touchdowns, Losses, Wins, Percentage, ConferenceWins, ConferenceLosses, DivisionWins, DivisionTies, ConferenceTies, DivisionLosses, PointsFor,
            PointsAgainst, NetPoints, TeamID, Team }) => (
            <Row key={TeamID} Name={Name} Team={Team} sortPercentage={sortPercentage} Touchdowns={Touchdowns} DivisionTies={DivisionTies} Ties={Ties} Conference={Conference} Division={Division} Losses={Losses} Wins={Wins} Percentage={Percentage} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} ConferenceTies={ConferenceTies} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsFor={PointsFor} PointsAgainst={PointsAgainst} NetPoints={NetPoints} />
          ))}
          <br />
          <tbody>
            <tr className='division-row'>
              <th className="header">AFC WEST</th>
              {headers}
            </tr>
          </tbody>
          {AFCW?.map(({ Name, Conference, Division, Ties, Touchdowns, Losses, Wins, Percentage, ConferenceWins, ConferenceLosses, DivisionWins, DivisionTies, ConferenceTies, DivisionLosses, PointsFor,
            PointsAgainst, NetPoints, TeamID, Team }) => (
            <Row key={TeamID} Name={Name} Team={Team} Touchdowns={Touchdowns} DivisionTies={DivisionTies} Ties={Ties} Conference={Conference} Division={Division} Losses={Losses} Wins={Wins} Percentage={Percentage} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} ConferenceTies={ConferenceTies} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsFor={PointsFor} PointsAgainst={PointsAgainst} NetPoints={NetPoints} />
          ))}
        </table>
        <h2 className='conference-title'>NATIONAL FOOTBALL CONFERENCE</h2>
        <table>
          <colgroup className='col1' span='6'></colgroup>
          <colgroup className='col2' span='2'></colgroup>
          <colgroup className='col3' span='4'></colgroup>
          <colgroup className='col4' span='3'></colgroup>
          <tbody>
            <tr className='division-row'>
              <th className="header">NFC EAST</th>
              {headers}
            </tr>
          </tbody>
          {NFCE?.map(({ Name, Conference, Division, Ties, Touchdowns, Losses, Wins, Percentage, ConferenceWins, ConferenceLosses, DivisionWins, DivisionTies, ConferenceTies, DivisionLosses, PointsFor,
            PointsAgainst, NetPoints, TeamID, Team }) => (

            <Row key={TeamID} Name={Name} Team={Team} Touchdowns={Touchdowns} DivisionTies={DivisionTies} Ties={Ties} Conference={Conference} Division={Division} Losses={Losses} Wins={Wins} Percentage={Percentage} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} ConferenceTies={ConferenceTies} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsFor={PointsFor} PointsAgainst={PointsAgainst} NetPoints={NetPoints} />
          ))}
          <br />
          <tbody>
            <tr className='division-row'>
              <th className="header">NFC North</th>
              {headers}
            </tr>
          </tbody>
          {NFCN?.map(({ Name, Conference, Division, Ties, Touchdowns, Losses, Wins, Percentage, ConferenceWins, ConferenceLosses, DivisionWins, DivisionTies, ConferenceTies, DivisionLosses, PointsFor,
            PointsAgainst, NetPoints, TeamID, Team }) => (

            <Row key={TeamID} Name={Name} Team={Team} Touchdowns={Touchdowns} DivisionTies={DivisionTies} Ties={Ties} Conference={Conference} Division={Division} Losses={Losses} Wins={Wins} Percentage={Percentage} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} ConferenceTies={ConferenceTies} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsFor={PointsFor} PointsAgainst={PointsAgainst} NetPoints={NetPoints} />
          ))}
          <br />
          <tbody>
            <tr className='division-row'>

              <th className="header">NFC South</th>
              {headers}
            </tr>
          </tbody>
          {NFCS?.map(({ Name, Conference, Division, Ties, Touchdowns, Losses, Wins, Percentage, ConferenceWins, ConferenceLosses, DivisionWins, DivisionTies, ConferenceTies, DivisionLosses, PointsFor,
            PointsAgainst, NetPoints, TeamID, Team }) => (
            <Row key={TeamID} Name={Name} Team={Team} Touchdowns={Touchdowns} DivisionTies={DivisionTies} Ties={Ties} Conference={Conference} Division={Division} Losses={Losses} Wins={Wins} Percentage={Percentage} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} ConferenceTies={ConferenceTies} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsFor={PointsFor} PointsAgainst={PointsAgainst} NetPoints={NetPoints} />
          ))}
          <br />
          <tbody>
            <tr className='division-row'>
              <th className="header">NFC West</th>
              {headers}
            </tr>
          </tbody>
          {NFCW?.map(({ Name, Conference, Division, Ties, Touchdowns, Losses, Wins, Percentage, ConferenceWins, ConferenceLosses, DivisionWins, DivisionTies, ConferenceTies, DivisionLosses, PointsFor,
            PointsAgainst, NetPoints, TeamID, Team }) => (
            <Row key={TeamID} Name={Name} Team={Team} Touchdowns={Touchdowns} DivisionTies={DivisionTies} Ties={Ties} Conference={Conference} Division={Division} Losses={Losses} Wins={Wins} Percentage={Percentage} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} ConferenceTies={ConferenceTies} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsFor={PointsFor} PointsAgainst={PointsAgainst} NetPoints={NetPoints} />
          ))}
        </table>

      </div>
    </>
  )
}

export default GetStandings