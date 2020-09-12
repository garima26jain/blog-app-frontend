import AddBlog from '../AddBlog'
import React from 'react';
import { shallow,mount,configure } from 'enzyme';


describe('AddBlog',()=>{
    it('renders without crashing',()=>{
        mount(<AddBlog/>)
    })
})