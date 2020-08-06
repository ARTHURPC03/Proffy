/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PageHeader from '../../components/PageHeader'

import { Container } from './styles'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'
import TextArea from '../../components/Textarea'

const TeacherForm: React.FC = () => {
  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante!
            <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </Container>
  )
}

export default TeacherForm
