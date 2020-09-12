import EachBlog from '../EachBlog'
import React from 'react';
import { shallow,mount } from 'enzyme';


describe('EachBlog',()=>{
    it('renders without crashing',()=>{
        mount(<EachBlog/>)
    })
})


