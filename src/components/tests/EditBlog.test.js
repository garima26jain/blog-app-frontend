import EditBlog from '../EditBlog'
import React from 'react';
import { shallow,mount } from 'enzyme';


describe('EditBlog',()=>{
    it('renders without crashing',()=>{
        mount(<EditBlog/>)
    })
})