import './table.css'
import './index.css'

function SportsAnalysis()
{
  return(
    <h1 > SportsAnalysis </h1>
  )
}

function App()
{
  
  const score = [
    {
      id : 1,
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      homeScore : 2,
      awayScore : 3,
    },
    
    {
      id : 2,
      homeTeam : 'Liverpool',
      awayTeam : 'Manchester City',
      homeScore : 1,
      awayScore : 1
    }
  ]

    return(    
      <div>
        <h1> <SportsAnalysis/> </h1>
      
        <table>
          <tr>
            <td> Match ID </td>
            <td> HomeTeam</td>
            <td> AwayTeam</td>
            <td> homeScore</td>
            <td> awayScore </td>
          </tr>

          {
            score.map((match) => (

              <tr>
                <td>{match.id}</td>
                <td>{match.homeTeam}</td>
                <td>{match.awayTeam}</td>
                <td>{match.homeScore}</td>
                <td>{match.awayScore}</td>
              </tr>
            )
          )
          }

        </table>
      </div>
    )

}

export default App;