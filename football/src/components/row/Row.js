import './Row.css'

const Row = ({ DivisionLosses, DivisionWins, PointsFor, PointsAgainst, Conference, Division, NetPoints, Name, Team, Losses, Wins, Percentage, ConferenceLosses }) => {
  return (
    <tbody>
      <tr className='stats-standings'>
        {/* <h2>{}</h2>{Conference} {Division} */}
        <td className='teamName'>{Name}</td>
        <td className='team-winorl'>{Wins}</td>
        <td className='team-winorl'>{Losses}</td>
        {/* <td className='winper'>{convertPercentage}</td>
        <td className='gamesback'>{GamesBack === 0 ? '-' : GamesBack}</td>
        <td className='conrecord'>{conf}-{ConferenceLosses}</td> */}
        {/* <td className='divrecord'>{DivisionWins}-{DivisionLosses}</td>
        <td className='pointsFor'>{PointsFor}</td>
        <td className='pointsAgainst'>{PointsAgainst}</td> */}
        {/* <td className={`${pointDiff > 0 ? 'Positive' : 'Negative'}`}>{pointDiff > 0 ? "+" + (pointDiff) : pointDiff}</td>
        <td className='home'>{HomeWins}-{HomeLosses}</td>
        <td className='road'>{AwayWins}-{AwayLosses}</td>
        <td className='last10'>{LastTenWins}-{LastTenLosses}</td>
        <td className='streak'>{posorNegStreak}</td> */}
      </tr>
    </tbody>
  )
}

export default Row