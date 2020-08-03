import React from 'react'

import { TeacherItemComponent } from './styles'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return (
    <TeacherItemComponent>
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/55156476?s=460&u=a4ce1d47e4ab2aed4888935a7ecf0948cf10002a&v=4"
          alt="ARTHUR PC"
        />
        <div>
          <strong>ARTHUR PC</strong>
          <span>Investimentos</span>
        </div>
      </header>

      <p>
        Entusiasta dos melhores investimentos.
        <br />
        <br />
        Apaixonado por renda variável e por mudar a vida das pessoas através dos
        investimentos.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </TeacherItemComponent>
  )
}

export default TeacherItem
