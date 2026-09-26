import './table.css'
import './index.css'
import { useState , useEffect } from 'react'


function SportsAnalysis()
{
  return(
    <h1 > SportsAnalysis </h1>
  )
}

function Description()
{
  return(
    <h2> EPL (Season 2025-26) </h2>
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
  
  const[matches,setMatches] = useState<Match[]>([])
  const[page,setPage] = useState(1)
  const matchPerPage = 20;
  const start = (page-1) *matchPerPage;
  const end = start + matchPerPage;
  const visiblematches = matches.slice(start,end);

    return(    
      <div>
        <SportsAnalysis/> 
        <Description/>

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
          {visiblematches.map((match)=>(
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

        <div className = 'pagination'>
          <button onClick={()=> setPage(page-1)}> Previous </button>
        </div>

        <div className = 'pagination'>
          <button onClick={() => setPage(page+1)}> Next </button>
        </div>
      </div>
    )

}

export default App;