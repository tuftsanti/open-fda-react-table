import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Link to="/oils/list" className="navbar-brand">
                    Incoming Oils
                </Link> */}
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/oils/list" className="nav-link">
                                HOME
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/oils/create" className="nav-link">
                                ADD OIL
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
