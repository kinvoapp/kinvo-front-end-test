import { shallow } from 'enzyme';
import React from 'react';
import RentabilityGraph from './index'

const mockUpData = {
    xAxis: {categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},
    series: [ {
        data: [1, 4, 3, 5, 6, 12, 4, 6, 3, 7],
        name: 'John'
    }, {
        data: [2, 4, 1, 4, 4, 4, 3, 5, 6, 8],
    }]

}

test('Rentability graph loads data properly', () => {
    const component = shallow(
      <RentabilityGraph rentabilityData={mockUpData}/>,
    );
    expect(component).toMatchSnapshot();
});