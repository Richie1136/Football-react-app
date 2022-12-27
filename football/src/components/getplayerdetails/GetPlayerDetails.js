import { useState, useEffect } from 'react'
import { baseUrl } from '../../baseUrl'
import { useParams } from 'react-router-dom'

const GetPlayerDetails = () => {
  const [getPlayerInfo, setPlayerInfo] = useState()
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




  return (
    <div>getPlayerDetails</div>
  )
}

export default GetPlayerDetails