import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../l_openFDA.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://open.fda.gov/" target="_blank">
                <img src={logo} width="350" height="50" alt="open.fda.gov" />
            </Wrapper>
        )
    }
}

export default Logo
