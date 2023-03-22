import styled, { keyframes } from "styled-components";

const entranceAnim = keyframes`
  0% {
		opacity: 0;
		transform: translateX(-50px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`

export const Container = styled.div`
  margin: auto;
  margin-top: 4rem;
  padding: 1rem;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${entranceAnim} 1s ease 0s 1 normal forwards;
  
  h1 {
    margin: 1rem 0;
    font-size: 3rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .campeao {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 820px) {
      flex-direction: column;
      align-items: center;
    }
  }

  img {
    @media (max-width: 768px) {
      height: 350px;
    }
  }

  .detalhes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    margin-left: 3.5rem;

    @media (max-width: 768px) {
      margin: 0;
      align-items: center;
      text-align: center;
    }
  }

  button {
    background: black;
    color: white;
    border: 1px solid white;
    cursor: pointer;
    border-radius: 3%;
    padding: 0.8rem 2rem;
    margin-top: 1.5rem;
    font-size: 100%;
    transition: all .5s;
  }

  button:hover {
    background: white;
    color: black;
    border-color: black;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

`

export const ContainerHabilidades = styled.div`
  `

export const ContainerHabilidadesIcons = styled.ul`
  list-style: none;
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;

  li {
    cursor: pointer;
    max-width: 64px;
    max-height: 64px;

    @media (max-width: 820px) {
      max-width: 48px;
      max-height: 48px;
    }

  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ContainerHabilidadesDescs = styled.ul`
  list-style: none;
  line-height: 130%;
  transition: all .5s;
  animation: ${entranceAnim} 1s ease 0s 1 normal forwards;

  span {
    opacity: 0.5;
  }

  p {
    margin-top: .5rem;
  }
`