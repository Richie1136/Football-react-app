import './Row.css'

const Row = ({ DivisionLosses, DivisionWins, DivisionTies, Ties, Touchdowns, PointsFor, PointsAgainst, Conference, ConferenceWins, ConferenceTies, Division, NetPoints, Name, Team, Losses, Wins, Percentage, ConferenceLosses }) => {

  let getDivisionWinPercentage = DivisionWins / (DivisionWins + DivisionLosses)
  let getCunferenceWinPercentage = ConferenceWins / (ConferenceWins + ConferenceLosses)

  return (
    <tbody>
      <tr className='stats-standings'>
        <td className='teamName'><a href={`/${Team}`}>{Name}</a></td>
        <td className='teamWin'>{Wins}</td>
        <td className='teamLosses'>{Losses}</td>
        <td className='teamTies'>{Ties}</td>
        <td className='winper'>{Percentage?.toFixed(3)}</td>
        <td className='touchdowns'>{Touchdowns}</td>
        <td className='pointsFor'>{PointsFor}</td>
        <td className='pointsAgainst'>{PointsAgainst}</td>
        <td className={NetPoints > 0 ? 'Positive' : 'Negative'}>{NetPoints}</td>
        <td className='divrecord'>{DivisionWins}-{DivisionLosses}-{DivisionTies}</td>
        <td className='divwinper'>{getDivisionWinPercentage.toFixed(3)}</td >
        <td className='conrecord'>{ConferenceWins}-{ConferenceLosses}-{ConferenceTies}</td>
        <td className='confwinper'>{getCunferenceWinPercentage.toFixed(3)}</td>
        <td className='nonConf'>{Wins - ConferenceWins}-{Losses - ConferenceLosses}-{Ties - ConferenceTies}</td>
      </tr>
    </tbody>
  )
}

export default Row