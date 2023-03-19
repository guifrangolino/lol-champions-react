import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  margin-top: 4rem;
  padding: 1rem;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    margin: 1rem 0;
    font-size: 3rem;
  }

  .campeao {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
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
    margin-top: 1rem;
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