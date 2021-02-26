import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../AMETEK_Spectro_Logo.jpg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://www.spectrosci.com/" target="_blank">
                <img src={logo} width="350" height="50" alt="spectrosci.com" />
            </Wrapper>
        )
    }
}

export default Logo
