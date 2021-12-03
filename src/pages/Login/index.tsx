import React from 'react'
import * as S from 'styles/login'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLogin } from 'Validators/SingInValidator'

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaLogin)
  })

  const handleLogin = (values: any) => {
    console.log(values)
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.Logo src="/img/logo-grab.svg" alt="Logo Grab e texto Grab" />
        <S.formZone onSubmit={handleSubmit(handleLogin)}>
          {errors.email ? (
            <S.inputZone style={{ borderColor: 'red' }}>
              <S.icon src="/img/emailred.svg" alt="Logo Grab e texto Grab" />
              <S.input type="text" {...register('email')} />
            </S.inputZone>
          ) : (
            <S.inputZone>
              <S.icon src="/img/email.svg" alt="Logo Grab e texto Grab" />
              <S.input type="text" {...register('email')} />
            </S.inputZone>
          )}
          <S.warningLabel>{errors.email?.message}</S.warningLabel>
          {errors.password ? (
            <S.inputZone style={{ borderColor: 'red' }}>
              <S.icon src="/img/lockred.svg" alt="Logo Grab e texto Grab" />
              <S.input type="password" {...register('password')} />
            </S.inputZone>
          ) : (
            <S.inputZone>
              <S.icon src="/img/lock.svg" alt="Logo Grab e texto Grab" />
              <S.input type="password" {...register('password')} />
            </S.inputZone>
          )}
          <S.warningLabel>{errors.password?.message}</S.warningLabel>
          <S.Button type="submit">Entrar</S.Button>
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
