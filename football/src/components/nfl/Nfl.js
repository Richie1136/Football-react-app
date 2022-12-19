import { baseUrl } from '../../baseUrl'



const Nfl = () => {

  const APIKEY = process.env.REACT_APP_API_KEY

  let result = `${baseUrl}/Teams?key=${APIKEY}`
  console.log(result)
  return (
    <div>Nfl</div>
  )
}

export default Nfl