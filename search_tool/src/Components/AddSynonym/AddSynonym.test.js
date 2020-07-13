import React from 'react';
import {shallow} from 'enzyme';
import AddSynonym from './AddSynonym';

describe('<AddSynonym />', () => {
  it('Provjera da li renderuje formu za unos sinonima', () => {
    const wrapper = shallow(<AddSynonym/>)
    expect(wrapper.find('#div').exists()).toBe(true)
  })

  it('Provjera da li ima input za unos rijeci', () => {
    const wrapper = shallow(<AddSynonym/>)
    expect(wrapper.find('#input1').exists()).toBe(true)
  })
  it('Provjera da li ima input za unos sinonima', () => {
    const wrapper = shallow(<AddSynonym/>)
    expect(wrapper.find('#input2').exists()).toBe(true)
  })

  it('Provjera da li ima button za spremanje rijeci i sinonima', () => {
    const wrapper = shallow(<AddSynonym/>)
    expect(wrapper.find('#save').exists()).toBe(true)
  })
  it('Provjera da li ima button za pretragu sinonima', () => {
    const wrapper = shallow(<AddSynonym/>)
    expect(wrapper.find('#search1').exists()).toBe(true)
  })
 

})