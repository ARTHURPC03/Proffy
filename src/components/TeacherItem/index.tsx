import React from 'react'

import { createConnection } from 'net'
import { TeacherItemComponent } from './styles'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

export interface Teacher {
  id: number
  avatar: string
  bio: string
  cost: number
  name: string
  subject: string
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  teacher,
}: TeacherItemProps) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <TeacherItemComponent>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>
            R$
            {teacher.cost}
          </strong>
        </p>
        <a
          target="blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </TeacherItemComponent>
  )
}

export default TeacherItem
