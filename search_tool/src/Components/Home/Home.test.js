import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';

describe('<AddSynonym />', () => {
  it('Provjera da li renderuje pocetnu formu za pretragu sinonima', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper.find('#div').exists()).toBe(true)
  })

  it('Provjera da li ima input za unos rijeci', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper.find('#bar').exists()).toBe(true)
  })
  
  it('Provjera da li ima button za pretragu sinonima', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper.find('#search').exists()).toBe(true)
  })
  it('Provjera da li ima button za dodavanje sinonima', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper.find('#add').exists()).toBe(true)
  })

})