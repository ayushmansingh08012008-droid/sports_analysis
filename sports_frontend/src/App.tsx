import './table.css'
import './index.css'
import { useState , useEffect } from 'react'


function SportsAnalysis()
{
  return(
    <h1 > SportsAnalysis </h1>
  )
}

type Match = {
  id: number
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  Win: string
  Date: string
  Time: string
}

function App()
{
  
  useEffect(()=>{fetch("http://127.0.0.1:8000/matches").then((response) => (response.json())).then((data) => setMatches(data.matches))},[])

  const[goals,setGoals] = useState(0);
  
  const[matches,setMatches] = useState<Match[]>([])

    return(    
      <div>
        <SportsAnalysis/> 
        <h2>Goals: {goals} </h2>
        <button onClick = {() => setGoals(goals+1)}> 
          Add a goal
        </button>

        <button onClick = {() => setGoals(goals-1)}>
          Remove a goal
        </button>

        <table>
          <thead>
            <tr>
              <td> Match ID </td>
              <td> HomeTeam</td>
              <td> AwayTeam</td>
              <td> homeScore</td>
              <td> awayScore </td>
              <td> Win</td>
              <td> Date</td>
              <td> Time</td>
            </tr>
          </thead>
          
          <tbody>
          {matches.map((match)=>(
            <tr key = {match.id}>
              <td>{match.id}</td>
              <td>{match.homeTeam}</td>
              <td>{match.awayTeam}</td>
              <td>{match.homeScore}</td>
              <td>{match.awayScore}</td>
              <td>{match.Win}</td>
              <td>{match.Date}</td>
              <td>{match.Time}</td>
            </tr>
          ))}
          </tbody>
        
        </table>
      </div>
    )

}

export default App;