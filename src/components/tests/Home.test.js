import Home from '../Home'
import React from 'react';
import { shallow,mount } from 'enzyme';


describe('Home',()=>{
    it('renders without crashing',()=>{
        mount(<Home/>)
    })
    it('if component did mount is used or not',()=>{
        let wrapper=shallow(<Home/>)
        const instance = wrapper.instance();
        expect(instance.componentDidMount())
    })
})