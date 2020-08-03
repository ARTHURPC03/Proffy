/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PageHeader from '../../components/PageHeader'

import { PageTeacherList, SearchTeachers, InputBlock } from './styles'
import TeacherItem from '../../components/TeacherItem'

const TeacherList: React.FC = () => {
  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <InputBlock>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </InputBlock>
          <InputBlock className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </InputBlock>
          <InputBlock className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </InputBlock>
        </SearchTeachers>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </PageTeacherList>
  )
}

export default TeacherList
