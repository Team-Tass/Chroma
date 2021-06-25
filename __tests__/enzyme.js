import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

import App from '../client/containers/App';
import MainContainer from '../client/containers/MainContainer';
import SearchForm from '../client/components/SearchForm';

describe('App Component', () => {
  const wrapper = shallow(<App />);
  
  it('Contains MainContainer component', () => {
    expect(wrapper.find(MainContainer).length).toBe(1)
  })
   
});

describe('MainContainer Component', () => {
  const wrapper = shallow(<MainContainer />);
  
  it('Contains SearchForm component', () => {
    expect(wrapper.find(SearchForm).length).toBe(1)
  })
  
  it('MainContainer includes html elements', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
 
});

describe('SearchForm Component', () => {
  let mockhandleSubmit = jest.fn();
  let SearchFormProps = {"handleSubmit":"mockhandleSubmit"};
  
  const wrapper = shallow(<SearchForm {...SearchFormProps} />);
  
  it('SearchForm includes html elements', () => {
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(2);
  });

  it('SearchForm includes correct html innerText', () => {
    expect(wrapper.find('form').text()).toEqual("SearchForm");
    expect(wrapper.find('h2').text()).toEqual("SearchForm");
  }); 
});