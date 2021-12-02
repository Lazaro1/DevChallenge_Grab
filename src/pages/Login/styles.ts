import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f8f8f8;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
`

export const ContainerLeft = styled.div`
  background-color: #4e5bee;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const Logo = styled.img`
  width: 25rem;
  margin-top: 15rem;
`

export const formZone = styled.div``
export const inputZone = styled.div`
  width: 45rem;
  height: 6rem;
  border: solid 3px white;
  border-radius: 30px;
  margin-bottom: 18px;
  display: flex;
`

export const icon = styled.img`
  width: 2.6rem;
  color: white;
  margin: 1.5rem;
`

export const input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;

  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: #ffff;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: bold;
  }
`

export const Button = styled.button`
  width: 45rem;
  height: 6rem;
  border-radius: 30px;
  background-color: #ffff;
  cursor: pointer;
  color: #504f60;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: bold;
`

export const helpZone = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  /* font-weight: bold; */
`

export const Help = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: bold;
`

export const ContainerRight = styled.div`
  background-color: #f8f8f8;
  width: 60%;
  padding: 2rem;
  display: flex;
`

export const backgroundImage = styled.img`
  margin-left: -30rem;
`
