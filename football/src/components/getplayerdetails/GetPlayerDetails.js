import { useState, useEffect } from 'react'
import { baseUrl } from '../../baseUrl'
import { useParams } from 'react-router-dom'
import './GetPlayerDetails.css'
import Loading from '../loading/Loading'

const GetPlayerDetails = () => {

  const [getPlayerInfo, setPlayerInfo] = useState([])

  const APIKEY = process.env.REACT_APP_API_KEY
  const params = useParams()
  const obj = new URLSearchParams(params)
  const term = obj.get('playerid')
  const playerURL = `${baseUrl}/Player/${term}?key=${APIKEY}`

  useEffect(() => {
    const getPlayerDetails = async () => {
      const data = await fetch(playerURL)
      const response = await data.json()
      setPlayerInfo(response)
    }
    getPlayerDetails()
  }, [])

  const { FirstName, LastName, Team, Number, Age, ExperienceString, HeightFeet, HeightInches, College, CollegeDraftPick, CollegeDraftYear, PhotoUrl, Position, Weight } = getPlayerInfo

  if (!getPlayerInfo) return <Loading />

  return (
    <div className='player-info-container'>
      <div className='player-header'>
        <h1 className='player-header-title'>{FirstName} {LastName}</h1>
        <div className='player-headdr-data'>
          <span className='player-header-position'>{Position}   <span>•</span> #{Number}</span>
        </div>
        <div className='player-header-team'>
          <a className='rosterlink' href={`/${Team}`}>{Team}</a>
        </div>
        <figure className='player-header-headshot'>
          <picture>
            <img className='img-respomsive' src={PhotoUrl} alt='Player img' />
          </picture>
        </figure>
      </div>
      <section className='player-info-section'>
        <div className='grid-inner'>
          <div className='player-info-title'>
            <div className='sub-section-header'>
              <h3 className='sub-section-title'>
                <span>PLAYER INFO</span>
              </h3>
            </div>
          </div>
          <div className='nfl-player-info-content'>
            <ul className='nfl-player-info-physical-data'>
              <li className='nfl-player-info-physical-data-item'>
                <div className='player-info-key'>Height</div>
                <div className='player-info-value'>{HeightFeet}-{HeightInches}</div>
              </li>
              <li className='nfl-player-info-physical-data-item'>
                <div className='player-info-key'>Weight</div>
                <div className='player-info-value'>{Weight}</div>
              </li>
            </ul>
            <ul className='nfl-player-info-career-data'>
              <li className='nfl-player-experience'>
                <div className='player-info-key'>Experience</div>
                <div className='player-info-experience-value'>{ExperienceString}</div>
              </li>
              <li className='nfl-player-experience'>
                <div className='player-info-key'>College</div>
                <div className='player-info-experience-value'>{College}</div>
              </li>
              <li className='nfl-player-experience'>
                <div className='player-info-key'>Age</div>
                <div className='player-info-experience-value'>{Age}</div>
              </li>
              <li className='nfl-player-experience'>
                <div className='player-info-key'>Drafted</div>
                <div className='player-info-experience-value'>{CollegeDraftPick !== null ? "Pick" : "Player went undrafted"} {CollegeDraftPick !== "null" ? CollegeDraftPick : "Player went undrafted"} Year {CollegeDraftYear}</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetPlayerDetails