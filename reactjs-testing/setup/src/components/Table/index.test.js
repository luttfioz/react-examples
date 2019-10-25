import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from './index';
import * as mockData from '../../data'
import { IntlProvider } from 'react-intl';

describe('Table tests without data: ', () => {
    const wrapper = shallow(<Table />);
    test('should render one TableHeader without error', () => {
        expect(wrapper.find('TableHeader').length).toBe(1);
    });
    test('should render one TableBody without error', () => {
        expect(wrapper.find('TableBody').length).toBe(1);
    });
})

describe('Table index tests with data', () => {
    test('should render table row quantity correctly', () => {
        const wrapper = mount(<IntlProvider><Table data={mockData.productList} /></IntlProvider>);
        expect(wrapper.find('tr').length).toBe(4);
    });
    test('should call prop method on clicking delete icon', () => {
        const onDelete = jest.fn();
        const wrapper = mount(<IntlProvider><Table onDelete={onDelete} data={mockData.productList} /></IntlProvider>);
        const deleteIcon = wrapper.find('.material-icons').at(0);
        deleteIcon.simulate('click');
        expect(onDelete).toBeCalledWith(0);
    });

})
