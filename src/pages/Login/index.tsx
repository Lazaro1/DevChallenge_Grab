import React from 'react'
import * as S from './styles'

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerLeft>
        <S.Logo src="/img/logo-grab.svg" alt="Logo Grab e texto Grab" />
        <S.formZone>
          <S.inputZone>
            <S.icon src="/img/email.svg" alt="Logo Grab e texto Grab" />
            <S.input />
          </S.inputZone>
          <S.inputZone>
            <S.icon src="/img/lock.svg" alt="Logo Grab e texto Grab" />
            <S.input type="password" />
          </S.inputZone>
          <S.Button>Entrar</S.Button>
        </S.formZone>
        <S.helpZone>
          <S.Label>problemas para entrar?</S.Label>
          <S.Help>Clique Aqui</S.Help>
        </S.helpZone>
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.backgroundImage src="/img/people.svg" alt="Logo Grab e texto Grab" />
      </S.ContainerRight>
    </S.Container>
  )
}

export default Login
