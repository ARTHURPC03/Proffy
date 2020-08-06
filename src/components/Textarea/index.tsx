/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { TextareaHTMLAttributes } from 'react'

import { TextAreaBlock } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const TextArea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TextAreaBlock>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextAreaBlock>
  )
}

export default TextArea
