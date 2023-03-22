import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import './style.css'

function SkinsSlider({ id }) {

  const [campeaoSkins, setCampeaoSkins] = useState([])
  const [imgId, setImgId] = useState(id)

  useEffect(() => {
    fetch(`https://ddragon.leagueoflegends.com/cdn/13.5.1/data/pt_BR/champion/${id}.json`)
      .then(response => response.json())
      .then(data => {
        
        const { skins } = data.data[id]

        const campeaoSkins = {
          skins: skins,
          id
        }

        // console.log(campeaoSkins)
        if (id === 'Fiddlesticks') {
          campeaoSkins.id = 'FiddleSticks'
        }

        setCampeaoSkins(campeaoSkins.skins)
        setImgId(campeaoSkins.id)
        
      })
  }, [id])

  return (
    <>
      <Swiper
      style={{maxWidth: '308px', '--swiper-navigation-color': 'white'}}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
          type: "fraction",
        }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}>
      {
        campeaoSkins.map(skin => {
          return (
            <SwiperSlide key={skin.id} className='swiper-slide'><img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${imgId}_${skin.num}.jpg`} alt={skin.name} /><span>{skin.name}</span></SwiperSlide>
          )
        })
      }
    </Swiper>
    </>
  )
}

export default SkinsSlider

// campeaoSkins.map(skin => {
//   return (
//     <img key={skin.id} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${skin.num}.jpg`} alt={skin.name} />
//   )
// })