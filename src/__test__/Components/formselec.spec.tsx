/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Dispatch, SetStateAction } from 'react'
import { shallow } from '../../config'
import { ProductOrder } from '../../utils/schemas'

import FormSelect from '../../components/common/form-select'

describe('tests for form select', () => {
  it('should be return title if options for select', () => {
    const data: ProductOrder[] = [
      {
        name: 'example',
        value: 'example'
      }
    ]
    const change: Dispatch<SetStateAction<string>> = () => {}
    const label = 'example'
    const wraper = shallow(
      <FormSelect options={data} onChange={change} label={label} />
    )
    expect(wraper.exists()).toBeTruthy()
    expect(
      wraper.find(`[e-test='title-item-${data[0].value}']`).at(0).text()
    ).toEqual('example')
  })
  it('should be return title if options for select', () => {
    const options: ProductOrder[] = [
      {
        name: 'example',
        value: 'example'
      }
    ]
    const change: Dispatch<SetStateAction<string>> = () => {}
    const label = 'example'
    const wraper = shallow(
      <FormSelect options={options} onChange={change} label={label} />
    )

    expect(wraper.exists()).toBeTruthy()
    expect(
      wraper.find(`[e-test='title-item-${options[0].value}']`)
    ).toHaveLength(options.length)
  })
})
