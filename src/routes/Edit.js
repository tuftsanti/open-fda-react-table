import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    text-align: center;
    color: red;
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
class OilsEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
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
        const usedNew = event.target.validity.valid
            ? event.target.value
            : this.state.usedNew
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

    updateOil = async () => {
        const { id, 
                status,
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
             } = this.state
        // const arrayTime = time.split('/')
        const payload = { 
            status,
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

        await api.editOilById(id, payload).then(res => {
            window.alert(`Oil updated successfully`)
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

    componentDidMount = async () => {
        const { id } = this.state
        const oil = await api.getOilById(id)

        this.setState({
            status: oil.data.data.status,
            salesforce: oil.data.data.salesforce,
            jira: oil.data.data.jira,
            oilName: oil.data.data.oilName,
            manufacturer: oil.data.data.manufacturer,
            customerName: oil.data.data.customerName,
            rep: oil.data.data.rep,
            usedNew: oil.data.data.usedNew,
            volumeSupplied: oil.data.data.volumeSupplied,
            viscosityGrade: oil.data.data.viscosityGrade,
            viscosityData: oil.data.data.viscosityData,
            particleCount: oil.data.data.particleCount,
            dateReceived: oil.data.data.dateReceived,
            // caseNumber: oil.data.caseNumber,
            // oilName: oil.data.oilName,
            // manufacturer: oil.data.manufacturer,
            // customerName: oil.data.customerName,
            // rep: oil.data.rep,
            // usedNew: oil.data.usedNew,
            // volumeSupplied: oil.data.volumeSupplied,
            // viscosityGrade: oil.data.viscosityGrade,
            // viscosityData: oil.data.viscosityData,
            // particleCount: oil.data.particleCount,
            // dateReceived: oil.data.dateReceived,
        })
    }

    render() {
        const { 
            status,
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
        } = this.state
        return (
            <>
                <Title>Editing {oilName}</Title>
                <Wrapper>
                    <Column>
                        <Label>Status: </Label>
                        {/* <InputText
                            type="text"
                            value={status}
                            onChange={this.changeStatus}
                        /> */}
                        <form onChange={this.changeStatus}>
                            <label>
                                {/* <select value = {this.state.value} > */}
                                <select readOnly value = {status} >
                                    {/* <option value="" disabled selected></option> */}
                                    <option value="BACKLOG">BACKLOG</option>
                                    <option value="ACCEPTED">ACCEPTED</option>
                                    <option value="IN PROGRESS">IN PROGRESS</option>
                                    <option value="COMPLETE">COMPLETE</option>
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
                        <form onChange={this.changeUsedNew}>
                            <label>
                                <select readOnly value={usedNew} >
                                    {/* <option value = ""></option> */}
                                    <option value = "NEW">NEW</option>
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
                <Button onClick={this.updateOil}>Update Oil</Button>
                <CancelButton href={'/oils/list'}>Cancel</CancelButton>
                </>
        )
    }
}

export default OilsEdit
