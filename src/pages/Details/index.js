import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Container } from "./style"

function Details() {

  const { id } = useParams()

  const [campeao, setCampeao] = useState({})

  useEffect(() => {
    fetch(`http://ddragon.leagueoflegends.com/cdn/13.5.1/data/pt_BR/champion/${id}.json`)
      .then(response => response.json())
      .then(data => {
        
        const { name, title, lore } = data.data[id]

        const campeao = {
          id,
          name: name,
          title: title,
          lore: lore,
        }
        
        setCampeao(campeao)

        
      })
  }, [id])

  return (
    <Container>
      <div className="campeao">
        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeao.id}_0.jpg`} alt={campeao.title} />
        <div className="detalhes">
          <h1>{campeao.name}</h1>
          <span>{campeao.lore}</span>
          <Link to='/'><button>Voltar</button></Link>
        </div>
      </div>
    </Container>
  )
}

export default Details