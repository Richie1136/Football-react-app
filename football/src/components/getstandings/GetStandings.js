import { baseUrl } from "../../baseUrl"
import { useState, useEffect } from 'react'
import Row from "../row/Row"
import './GetStandings.css'


const GetStandings = () => {

  const [GetStandings, setGetStandings] = useState()

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

  console.log(GetStandings)

  let AFCE = GetStandings?.filter((conf) => conf.Conference === 'AFC').filter((div) => div.Division === 'East')
  let AFCN = GetStandings?.filter((conf) => conf.Conference === 'AFC').filter((div) => div.Division === 'North')

  console.log(AFCE)

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
      <th className='div'>
        <span className='runs'>
          <span>PF</span>
        </span>
      </th>
      <th className='div'>
        <span className='runs'>
          <span>PA</span>
        </span>
      </th>
      <th className='div'>
        <span className='runs'>
          <span>Net Pts</span>
        </span>
      </th>
      <th className='home'>
        <span className='runs'>
          <span>Home</span>
        </span>
      </th>
      <th className='road'>
        <span className='runs'>
          <span>Road</span>
        </span>
      </th>
      <th className='div'>
        <span className='runs'>
          <span>DIV</span>
        </span>
      </th>
      <th className='pct'>
        <span className='runs'>
          <span>PCT</span>
        </span>
      </th>
      <th className='conf'>
        <span className='runs'>
          <span>CONF</span>
        </span>
      </th>
      <th className='pct'>
        <span className='runs'>
          <span>PCT</span>
        </span>
      </th>
      <th className='conf'>
        <span className='runs'>
          <span>Non-Conf</span>
        </span>
      </th>
      <th className='streak'>
        <span className='tstreak'>
          <span>STRK</span>
        </span>
      </th>
      <th className='last10'>
        <span className='runs'>
          <span>LAST 5</span>
        </span>
      </th>
    </>
  )


  return (
    // <div className="standings-container">
    //   <table>
    //     {GetStandings?.map(({ Name, Wins }) => (
    //       <>
    //         <h3>{Name}</h3>
    //         <h5>{Wins}</h5>
    //       </>
    //     ))}
    //   </table>
    // </div>

    <>
      <div className='background-container'>
        <h2 className='conference-title'>American Football Conference</h2>
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
          {AFCE?.map(({ Name, Conference, Division, Losses, Wins, Percentage, ConferenceWins, ConferenceLosses, DivisionWins, DivisionTies, ConferenceTies, DivisionLosses, PointsFor,
            PointsAgainst, NetPoints, Key, Team }) => (

            <Row Key={Key} Name={Name} Team={Team} Conference={Conference} Division={Division} Losses={Losses} Wins={Wins} Percentage={Percentage} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsFor={PointsFor} PointsAgainst={PointsAgainst} NetPoints={NetPoints} />
          ))}
          {/* <br />
          <h2 className='conference-west'>Western Conference</h2>
          <tbody>
            <tr className='division-row'>
              <th className='division-name'>
                <span>
                  <span className='division-title'>TEAM</span>
                </span>
              </th>
              {headers}
            </tr>
          </tbody>
          {Western?.map(({ City, Name, Losses, Wins, Percentage, GamesBack, ConferenceWins, ConferenceLosses, DivisionWins, DivisionLosses, HomeWins, HomeLosses, AwayWins, AwayLosses, LastTenWins, LastTenLosses, Streak, PointsPerGameFor, PointsPerGameAgainst }) => (
            <Row key={Name} Name={Name} City={City} Losses={Losses} Wins={Wins} Percentage={Percentage} GamesBack={GamesBack} ConferenceLosses={ConferenceLosses} ConferenceWins={ConferenceWins} DivisionLosses={DivisionLosses} DivisionWins={DivisionWins} PointsPerGameFor={PointsPerGameFor} PointsPerGameAgainst={PointsPerGameAgainst} HomeLosses={HomeLosses} HomeWins={HomeWins} AwayLosses={AwayLosses} AwayWins={AwayWins} LastTenLosses={LastTenLosses} LastTenWins={LastTenWins} Streak={Streak} />
          ))} */}
        </table>

      </div>
    </>
  )
}

export default GetStandings