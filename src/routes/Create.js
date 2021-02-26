import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

// GET TIMESTAMP
const today = new Date()
const day = today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`
const month = today.getMonth() + 1 > 9 ? today.getMonth() + 1 : `0${today.getMonth() + 1}`
const hours = today.getHours() > 9 ? today.getHours() : `0${today.getHours()}`
const minutes = today.getMinutes() > 9 ? today.getMinutes() : `0${today.getMinutes()}`
const currentDate = `${today.getFullYear()}-${month}-${day} ${hours}:${minutes}`

const Title = styled.h1.attrs({
    className: 'h1',
})`
    text-align: center;
    padding: 5px;`

const Wrapper = styled.div.attrs({
    // className: 'form-group',
})`
    margin: 0 50px;
    display: flex;
    justify-content: center;
`
const Column = styled.div.attrs({
    // className: 'form-group',
})`
    margin: 0 30px;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
    // width: 50%;
`

const Button = styled.button.attrs({
    className: `btn btn-success btn-lg`,
})`
    // margin: 15px 15px 15px 5px;
    margin: 15px 45%;
    width: 150px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger btn-lg`,
})`
    // margin: 15px 15px 15px 5px;
    margin: 15px 45%;
    width: 150px;
`

class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            salesforce: '',
            jira:'',
            oilName: '',
            manufacturer: '',
            customerName: '',
            rep: '',
            // usedNew: '',
            volumeSupplied: '',
            viscosityGrade: '',
            viscosityData: '',
            particleCount: '',
            dateReceived: currentDate || ''
        }
    }
    changeStatus = async event => {
        const status = event.target.value
        this.setState({ status })
    }
    changeSalesforce = async event => {
        const salesforce = event.target.value
        this.setState({ salesforce })
    }
    changeJira = async event => {
        const jira = event.target.value
        this.setState({ jira })
    }
    changeOilName = async event => {
        const oilName = event.target.value
        this.setState({ oilName })
    }
    changeManufacturer = async event => {
        const manufacturer = event.target.validity.valid
            ? event.target.value
            : this.state.manufacturer
        this.setState({ manufacturer })
    }
    changeCustomerName = async event => {
        const customerName = event.target.validity.valid
            ? event.target.value
            : this.state.customerName
        this.setState({ customerName })
    }
    changeRep = async event => {
        const rep = event.target.validity.valid
            ? event.target.value
            : this.state.rep
        this.setState({ rep })
    }
    changeUsedNew = async event => {
        const usedNew = event.target.value
        this.setState({ usedNew })
    }
    changeVolumeSupplied = async event => {
        const volumeSupplied = event.target.validity.valid
            ? event.target.value
            : this.state.volumeSupplied
        this.setState({ volumeSupplied })
    }
    changeViscosityGrade = async event => {
        const viscosityGrade = event.target.validity.valid
            ? event.target.value
            : this.state.viscosityGrade
        this.setState({ viscosityGrade })
    }
    changeViscosityData = async event => {
        const viscosityData = event.target.validity.valid
            ? event.target.value
            : this.state.viscosityData
        this.setState({ viscosityData })
    }
    changeParticleCount = async event => {
        const particleCount = event.target.validity.valid
            ? event.target.value
            : this.state.particleCount
        this.setState({ particleCount })
    }
    changeDateReceived = async event => {
        const dateReceived = event.target.validity.valid
            ? event.target.value
            : this.state.dateReceived
        this.setState({ dateReceived })
    }
    handleCreate = async () => {
        const { status='BACKLOG',
                salesforce,
                jira,
                oilName, 
                manufacturer, 
                customerName, 
                rep, 
                usedNew='NEW', 
                volumeSupplied, 
                viscosityGrade, 
                viscosityData, 
                particleCount, 
                dateReceived 
            } = this.state
        // const arrayTime = time.split('/')
        const payload = { 
            status, //: 'BACKLOG',
            salesforce,
            jira,
            oilName, 
            manufacturer, 
            customerName, 
            rep, 
            usedNew, 
            volumeSupplied, 
            viscosityGrade, 
            viscosityData, 
            particleCount, 
            dateReceived 
        }

        await api.createOil(payload).then(res => {
            window.alert(`New Oil Added`)
            this.setState({
                status: '',
                salesforce: '',
                jira: '',
                oilName: '',
                manufacturer: '',
                customerName: '',
                rep: '',
                usedNew: '',
                volumeSupplied: '',
                viscosityGrade: '',
                viscosityData: '',
                particleCount: '',
                dateReceived: ''
            })
            window.location.href = `/oils/list`
        },
        )
    }

    render() {
        const { 
            // status,
            salesforce,
            jira,
            oilName, 
            manufacturer, 
            customerName, 
            rep, 
            // usedNew, 
            volumeSupplied, 
            viscosityGrade, 
            viscosityData, 
            particleCount, 
            dateReceived 
        } = this.state
        return (
            <>
            <Title>Add New Oil</Title>
            <Wrapper>
                <Column>
                    <Label>Status: </Label>
                    <form onChange={this.changeStatus}>
                        <label>
                            {/* <select value={this.state.value} > */}
                            {/* <select defaultValue={'BACKLOG'} > */}
                            <select>
                                <option defaultValue = "BACKLOG" >BACKLOG</option>
                                <option value = "ACCEPTED">ACCEPTED</option>
                                <option value = "IN PROGRESS">IN PROGRESS</option>
                                <option value = "COMPLETE">COMPLETE</option>
                            </select>
                        </label>
                    </form>

                    <Label>Salesforce Case #: </Label>
                    <InputText
                        type="text"
                        value={salesforce}
                        onChange={this.changeSalesforce}
                    />

                    <Label>JIRA Case #: </Label>
                    <InputText
                        type="text"
                        value={jira}
                        onChange={this.changeJira}
                    />

                    <Label>Oil Name: </Label>
                    <InputText
                        type="text"
                        value={oilName}
                        onChange={this.changeOilName}
                    />

                    <Label>Manufacturer: </Label>
                    <InputText
                        type="text"
                        value={manufacturer}
                        onChange={this.changeManufacturer}
                    />

                    <Label>Customer Name: </Label>
                    <InputText
                        type="text"
                        value={customerName}
                        onChange={this.changeCustomerName}
                    />

                    <Label>Spectro Representative: </Label>
                    <InputText
                        type="text"
                        value={rep}
                        onChange={this.changeRep}
                    />
                </Column>
                <Column>
                    <Label>Oil Condition (USED/NEW): </Label>
                    {/* <InputText
                        type="text"
                        value={usedNew}
                        onChange={this.changeUsedNew}
                    /> */}
                    <form onChange={this.changeUsedNew}>
                        <label>
                            {/* <select value={this.state.value} > */}
                            {/* <select defaultValue={'NEW'} > */}
                            <select >
                                <option defaultValue = "NEW">NEW</option>
                                <option value = "USED">USED</option>
                            </select>
                        </label>
                    </form>

                    <Label>Volume Supplied: </Label>
                    <InputText
                        type="text"
                        value={volumeSupplied}
                        onChange={this.changeVolumeSupplied}
                    />

                    <Label>Viscosity Grade: </Label>
                    <InputText
                        type="text"
                        value={viscosityGrade}
                        onChange={this.changeViscosityGrade}
                    />

                    <Label>Viscosity Data: </Label>
                    <InputText
                        type="text"
                        value={viscosityData}
                        onChange={this.changeViscosityData}
                    />

                    <Label>Particle Count: </Label>
                    <InputText
                        type="text"
                        value={particleCount}
                        onChange={this.changeParticleCount}
                    />
                    <Label>Date Received: </Label>
                    <InputText
                        type="text"
                        value={dateReceived}
                        onChange={this.changeDateReceived}
                    />
                </Column>  
            </Wrapper>
            <Button onClick={this.handleCreate}>Add Oil</Button>
            <CancelButton href={'/oils/list'}>Cancel</CancelButton>
            </>
        )
    }
}

export default Create
