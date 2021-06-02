import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { ProductOrder } from '../../utils/schemas'
/*
  Componentes style
*/

export const Order = styled.div`
  border-radius: 10px;
  margin: 0 10px;
  border: 1px solid ${p => p.theme.colors.border.main};
  height: 100%;
`
export const Container = styled.div``

export const Select = styled.select`
  border-radius: 10px;
  height: 100%;
  background: none;
  border: 1px solid ${p => p.theme.colors.border.main};
`

export const MenuItem = styled.option`
  border-radius: 10px;
  height: 100%;
  background: none;
  border: 1px solid ${p => p.theme.colors.border.main};
`

interface Props {
  options: ProductOrder[]
  onChange: Dispatch<SetStateAction<string>>
  label: string
}
/*
  MAIN
  @TEX
*/
const FormSelect: React.FC<Props> = ({ options, onChange, label }: Props) => {
  return (
    <Container>
      <Order>
        <Select onChange={(e: any) => onChange(e.target.value)}>
          <MenuItem value="" disabled selected>
            {label}
          </MenuItem>
          {options.map(option => (
            <MenuItem
              key={option.value}
              e-test={`title-item-${option.value}`}
              value={option.value}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </Order>
    </Container>
  )
}
export default FormSelect
