import { Champ, ChampsContainer, Container } from "./style"
import { useState, useEffect, useMemo } from "react"
import { Link } from "react-router-dom"

function Home() {

  const [campeoes, setCampeoes] = useState([])

  useEffect(() => {
    fetch('http://ddragon.leagueoflegends.com/cdn/13.5.1/data/pt_BR/champion.json')
      .then(response => response.json())
      .then(data => {
        const results = []
        for (let camp in data.data) results.push(data.data[camp])
        setCampeoes(results)
      })
      

  }, [])

  const [busca, setBuca] = useState('')

  const campeoesFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase()
    return campeoes.filter(champ => champ.name.toLowerCase().includes(lowerBusca) && champ)
  }, [busca, campeoes]) 


  return (
    <Container>
      <h1>A Aline terminou, Viva!</h1>
      <input type="text" value={busca} onChange={e => setBuca(e.target.value)} />
      <ChampsContainer>
        {campeoesFiltrados.map(champ => {

          if (champ.id === 'Fiddlesticks') {
            return (
              <Champ key={champ.id}>
                <Link to={`/details/${champ.id}`}>
                  <img 
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/centered/FiddleSticks_0.jpg`} 
                  alt={champ.title} />
                  <span>{champ.name}</span>
                </Link>
              </Champ>
            )
          }

          return (
            <Champ key={champ.id}>
              <Link to={`/details/${champ.id}`}>
                <img 
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/centered/${champ.id}_0.jpg`} 
                alt={champ.title} />
                <span>{champ.name}</span>
              </Link>
            </Champ>
          )
        })}
      </ChampsContainer>

    </Container>
  )
}

export default Home