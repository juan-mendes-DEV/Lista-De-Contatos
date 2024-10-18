import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contacts'
import ContatosClass from '../../models/Contatos'


type Props = ContatosClass

const CardContact = ({
  grupos,
  titulo,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
        <S.CarddeContatos>
          <div style={{display: 'flex'}}>

        
        
          <div>
       
      <S.Tag grupos={grupos}>{grupos}</S.Tag>
      {editando && (
        <em
          style={{
            backgroundColor: '#ff0026',
            color: '#fff',
            padding: '.25rem .50rem',
            borderRadius: '4px',
            marginLeft: '1rem',
            marginTop: "-8rem",
            fontWeight: '600',
            fontSize: '.75rem'
          }}
        >
          Editando...{' '}
        </em>
      )}
      <S.MyDiv>
      
        <S.MyTitle value={titulo}>{titulo}</S.MyTitle>
      </S.MyDiv>
      <S.MyDiv>
        <S.Email
          disabled={!editando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        >
          {email}
        </S.Email>
      </S.MyDiv>
      <S.MyDiv>
        <S.TelPhone
          disabled={!editando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        >
          {telefone}
        </S.TelPhone>
      </S.MyDiv>
      </div>
      </div>
      <S.ActionBar>
        {editando ? (
          <>
            <S.btnSalvar
              onClick={() => {
                dispatch(
                  editar({
                    grupos,
                    titulo,
                    telefone,
                    email,
                    id
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </S.btnSalvar>
            <S.Btn onClick={cancelarEdicao}>Cancelar</S.Btn>
          </>
        ) : (
          <>
            <S.btnEditar onClick={() => setEditando(true)}>Editar</S.btnEditar>
            <S.BtncancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BtncancelarRemover>
          </>
        )}
      </S.ActionBar>
    </S.CarddeContatos>
  )
}

export default CardContact
