import { Botao } from './styles'
import { RiContactsLine } from "react-icons/ri";
const IncludeContact = () => {
  return (
    <>
      <Botao to="/cadastro">
        
        <RiContactsLine    />
        + Adicionar Contato
      </Botao>
    </>
  )
}

export default IncludeContact
