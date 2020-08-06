/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PageHeader from '../../components/PageHeader'

import { PageTeacherList, SearchTeachers } from './styles'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'

const TeacherList: React.FC = () => {
  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <Input name="subject" label="Matéria" />

          <Input name="week_day" label="Dia da semana" />

          <Input type="time" name="time" label="Hora" />
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
