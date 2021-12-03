import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.gray};
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
`

export const ContainerLeft = styled.div`
  background-color: ${({ theme }) => theme.blue};
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.blue};
    width: 100%;
  }
`

export const Logo = styled.img`
  width: 25rem;
  margin-top: 15rem;
`

export const formZone = styled.form`
  display: flex;
  flex-direction: column;
`

export const inputZone = styled.div`
  max-width: 500px;
  height: 6rem;
  border: solid 3px white;
  border-radius: 30px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;

  @media (max-width: 1138px) {
    max-width: 300px;
  }
`

export const icon = styled.img`
  width: 2.6rem;
  color: white;
  margin: 1.5rem;
`

export const input = styled.input`
  min-width: 300px;
  display: flex;
  background-color: transparent;
  border: none;
  color: #ffff;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: bold;

  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: #ffff;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
  }
`

export const Button = styled.button`
  min-width: 45rem;
  height: 6rem;
  border-radius: 30px;
  background-color: #ffff;
  cursor: pointer;
  color: ${({ theme }) => theme.darkGray};
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: bold;

  @media (max-width: 1138px) {
    min-width: 300px;
  }
`

export const helpZone = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
`

export const Help = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`

export const ContainerRight = styled.div`
  background-color: ${({ theme }) => theme.gray};
  min-width: 60%;
  padding: 2rem;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const backgroundImage = styled.img`
  margin-left: -30rem;
`

export const warningLabel = styled(Label)`
  font-size: 13px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
