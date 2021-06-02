import React from 'react'
import { shallow } from '../../config'

import MicroCard from '../../components/common/micro-card'

describe('oi', () => {
  it('should be return title and subtitle correspond percent', () => {
    const wraper = shallow(
      <MicroCard title="fake" percentOrNumber={10} isPercent />
    )
    console.log(wraper.debug())
    expect(wraper.exists()).toBeTruthy()
    expect(wraper.find("[e-test='title-item']").at(0).text()).toEqual('fake')
    expect(wraper.find("[e-test='subtitle-item']").at(0).text()).toEqual('10 %')
  })
  it('should be return title and subtitle correspond no percent', () => {
    const wraper = shallow(
      <MicroCard title="fake" percentOrNumber={10} isPercent={false} />
    )
    console.log(wraper.debug())
    expect(wraper.exists()).toBeTruthy()
    expect(wraper.find("[e-test='title-item']").at(0).text()).toEqual('fake')
    expect(wraper.find("[e-test='subtitle-item']").at(0).text()).toEqual(
      'R$ 10'
    )
  })
})
