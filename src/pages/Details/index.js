import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Container, ContainerHabilidadesDescs, ContainerHabilidadesIcons } from "./style"
import singedGif from '../../assets/singed.gif'

function Details() {

  const { id } = useParams()

  const [campeao, setCampeao] = useState({})

  useEffect(() => {
    fetch(`https://ddragon.leagueoflegends.com/cdn/13.5.1/data/pt_BR/champion/${id}.json`)
      .then(response => response.json())
      .then(data => {
        
        const { name, title, lore, passive, spells } = data.data[id]

        const campeao = {
          id,
          name: name,
          title: title,
          lore: lore,
          passiva: {
            name: passive.name,
            desc: passive.description,
            image: `https://ddragon.leagueoflegends.com/cdn/13.5.1/img/passive/${passive.image.full}`
          },
          habilidades: {
            qName: spells[0].name,
            qDesc: spells[0].description,
            qImage: `https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${spells[0].image.full}`,
            wName: spells[1].name,
            wDesc: spells[1].description,
            wImage: `https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${spells[1].image.full}`,
            eName: spells[2].name,
            eDesc: spells[2].description,
            eImage: `https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${spells[2].image.full}`,
            rName: spells[3].name,
            rDesc: spells[3].description,
            rImage: `https://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${spells[3].image.full}`,
          }
        }

        // console.log(typeof(campeao.habilidades.wDesc))
        setCampeao(campeao)
        setHabName(campeao.passiva && campeao.passiva.name ? campeao.passiva.name : 'Carregando...')
        setHabDesc(campeao.passiva && campeao.passiva.desc ? campeao.passiva.desc : 'Carregando...')
        
      })
  }, [id])


  const [habName, setHabName] = useState()
  const [habDesc, setHabDesc] = useState()
  const [selected, setSelected] = useState(1)

  function mostrarHab(hab, liNum) {
    if (hab === 'passiva') {
      setHabName(campeao.passiva && campeao.passiva.name ? campeao.passiva.name : 'Carregando...')
      setHabDesc(campeao.passiva && campeao.passiva.desc ? campeao.passiva.desc : 'Carregando...')
    }

    if (hab === 'q') {
      setHabName(campeao.habilidades && campeao.habilidades.qName ? campeao.habilidades.qName : 'Carregando...')
      setHabDesc(campeao.habilidades && campeao.habilidades.qDesc ? campeao.habilidades.qDesc : 'Carregando...')
    }
    
    if (hab === 'w') {
      setHabName(campeao.habilidades && campeao.habilidades.wName ? campeao.habilidades.wName : 'Carregando...')
      setHabDesc(campeao.habilidades && campeao.habilidades.wDesc ? campeao.habilidades.wDesc : 'Carregando...')
    }
    if (hab === 'e') {
      setHabName(campeao.habilidades && campeao.habilidades.eName ? campeao.habilidades.eName : 'Carregando...')
      setHabDesc(campeao.habilidades && campeao.habilidades.eDesc ? campeao.habilidades.eDesc : 'Carregando...')
    }
    if (hab === 'r') {
      setHabName(campeao.habilidades && campeao.habilidades.rName ? campeao.habilidades.rName : 'Carregando...')
      setHabDesc(campeao.habilidades && campeao.habilidades.rDesc ? campeao.habilidades.rDesc : 'Carregando...')
    }

    setSelected(liNum)

  }

  const active = {
    outline: '1px solid white',
    'outline-offset': '5px',
    transition: 'all .3s'
  }
  const inactive = {}

  return (
    <Container>
      <div className="campeao">
        <img src={campeao && campeao.id ? `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeao.id}_0.jpg` : singedGif} alt={campeao.title} />
        <div className="detalhes">
          <h1>{campeao.name}</h1>
          <span>{campeao.lore}</span>

          <h2>Habilidades</h2>
          <ContainerHabilidadesIcons>
            <li style={selected === 1 ? active : inactive} onClick={() => {mostrarHab('passiva', 1)}}><img src={campeao.passiva && campeao.passiva.image ? campeao.passiva.image : singedGif} alt="" /></li>
            <li style={selected === 2 ? active : inactive} onClick={() => {mostrarHab('q', 2)}}><img src={campeao.habilidades && campeao.habilidades.qImage ? campeao.habilidades.qImage : singedGif} alt="" /></li>
            <li style={selected === 3 ? active : inactive} onClick={() => {mostrarHab('w', 3)}}><img src={campeao.habilidades && campeao.habilidades.wImage ? campeao.habilidades.wImage : singedGif} alt="" /></li>
            <li style={selected === 4 ? active : inactive} onClick={() => {mostrarHab('e', 4)}}><img src={campeao.habilidades && campeao.habilidades.eImage ? campeao.habilidades.eImage : singedGif} alt="" /></li>
            <li style={selected === 5 ? active : inactive} onClick={() => {mostrarHab('r', 5)}}><img src={campeao.habilidades && campeao.habilidades.rImage ? campeao.habilidades.rImage : singedGif} alt="" /></li>
          </ContainerHabilidadesIcons>

          <ContainerHabilidadesDescs>
            <li>
              <span>{habName}</span>
              <p>{habDesc}</p>
            </li>
            {/* <li>
              <span>{campeao.passiva && campeao.passiva.name ? campeao.passiva.name : 'Carregando...'}</span>
              <p>{campeao.passiva && campeao.passiva.desc ? campeao.passiva.desc : 'Carregando...'}</p>
            </li>
            <li>
              <span>{campeao.habilidades && campeao.habilidades.qName ? campeao.habilidades.qName : 'Carregando...'}</span>
              <p>{campeao.habilidades && campeao.habilidades.qDesc ? campeao.habilidades.qDesc : 'Carregando...'}</p>
            </li>
            <li>
              <span>{campeao.habilidades && campeao.habilidades.wName ? campeao.habilidades.wName : 'Carregando...'}</span>
              <p>{campeao.habilidades && campeao.habilidades.wDesc ? campeao.habilidades.wDesc : 'Carregando...'}</p>
            </li>
            <li>
              <span>{campeao.habilidades && campeao.habilidades.eName ? campeao.habilidades.eName : 'Carregando...'}</span>
              <p>{campeao.habilidades && campeao.habilidades.eDesc ? campeao.habilidades.eDesc : 'Carregando...'}</p>
            </li>
            <li>
              <span>{campeao.habilidades && campeao.habilidades.rName ? campeao.habilidades.rName : 'Carregando...'}</span>
              <p>{campeao.habilidades && campeao.habilidades.rDesc ? campeao.habilidades.rDesc : 'Carregando...'}</p>
            </li> */}
          </ContainerHabilidadesDescs>
          <Link to='/'><button>Voltar</button></Link>
        </div>
      </div>
    </Container>
  )
}

export default Details