import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../Components/ExpenseListItem';
import TestRunner from 'jest-runner';

test('Should render expenses list item correctly', () => {
      const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
      expect(wrapper).toMatchSnapshot();
});