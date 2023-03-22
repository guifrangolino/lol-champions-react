import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  padding: 1rem;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border: none;
    width: 500px;
    font-size: 130%;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: transparent;
    color: white;
    border: 1px solid white;

    @media (max-width: 768px) {
      width: 97%;
    }
  }

`

export const ChampsContainer = styled.ul`
  margin-top: 2rem;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  :hover {
    img {
      transition: all .5s;
      filter: grayscale();
    }
  }
`

export const Champ = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .5s;
  width: fit-content;

  a {
    color: white;
    text-decoration: none;
    font-size: 150%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &:hover{
    transform: scale(1.05);
    outline: 1px solid white;

    img {
      filter: none;
      transition: all .5s;
    }
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-bottom-right-radius: 3%;
    border-bottom-left-radius: 3%;
  }

`