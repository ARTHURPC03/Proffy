/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeaderComponent, TopBarContainer, HeaderContent } from './styles'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

interface PageHeaderProps {
  title: string
  description?: string
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  return (
    <PageHeaderComponent>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent>
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </HeaderContent>
    </PageHeaderComponent>
  )
}

export default PageHeader
