import React, { Component } from 'react'
// import api from '../api'

// import QRCode from 'qrcode.react'
import styled from 'styled-components'
// import ReactToPrint, { PrintContextConsumer } from 'react-to-print'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    text-align: center;
    text-decoration: underline;
    color: primary;
`
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
`

// const Example = () => {
//     const componentRef = useRef();
  
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => <button>Print this out!</button>}
//           content={() => componentRef.current}
//         />
//         <QRCode ref={componentRef} />
//       </div>
//     );
//   };

class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            sponsorName: '',
            salesforce: '',
            jira: '',
            drugName: '',
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

    componentDidMount = async () => {
        const { id } = this.state
        // const drug = await api.getOilById(id)
        const drug = id
        console.log(drug)
        this.setState({
            sponsorName: drug.data.data.sponsor_name,
            salesforce: drug.data.data.salesforce,
            jira: drug.data.data.jira,
            drugName: drug.data.data.drugName,
            manufacturer: drug.data.data.manufacturer,
            customerName: drug.data.data.customerName,
            rep: drug.data.data.rep,
            usedNew: drug.data.data.usedNew,
            volumeSupplied: drug.data.data.volumeSupplied,
            viscosityGrade: drug.data.data.viscosityGrade,
            viscosityData: drug.data.data.viscosityData,
            particleCount: drug.data.data.particleCount,
            dateReceived: drug.data.data.dateReceived,
        })
    }

    render() {
        const { // id,
            status,
            salesforce,
            jira,
            drugName, 
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
                <Title>{this.drugName}TEST</Title>
                <Wrapper>
                    <Column>
                        <Label>Status: </Label>
                        <InputText
                            type="text"
                            readOnly value={status}
                            onChange={this.changeStatus}
                        />
                        {/* <form onChange={this.changeStatus}>
                            <label>
                                <select readOnly value = {status} >
                                    <option value="BACKLOG">BACKLOG</option>
                                    <option value="ACCEPTED">ACCEPTED</option>
                                    <option value="IN PROGRESS">IN PROGRESS</option>
                                    <option value="COMPLETE">COMPLETE</option>
                                </select>
                            </label>
                        </form> */}
                        
                        <Label>Salesforce Case #: </Label>
                        <InputText
                            type="text"
                            readOnly value={salesforce}
                            onChange={this.changeSalesforce}
                        />

                        <Label>JIRA Case #: </Label>
                        <InputText
                            type="text"
                            readOnly value={jira}
                            onChange={this.changeJira}
                        />

                        <Label>Oil Name: </Label>
                        <InputText
                            type="text"
                            readOnly value={drugName}
                            onChange={this.changeOilName}
                        />

                        <Label>Manufacturer: </Label>
                        <InputText
                            type="text"
                            readOnly value={manufacturer}
                            onChange={this.changeManufacturer}
                        />

                        <Label>Customer Name: </Label>
                        <InputText
                            type="text"
                            readOnly value={customerName}
                            onChange={this.changeCustomerName}
                        />

                        <Label>Spectro Representative: </Label>
                        <InputText
                            type="text"
                            readOnly value={rep}
                            onChange={this.changeRep}
                        />
                    </Column>
                    <Column>
                        <Label>Oil Condition (USED/NEW): </Label>
                        <InputText
                            type="text"
                            readOnly value={usedNew}
                            onChange={this.changeUsedNew}
                        />
                        {/* <form onChange={this.changeUsedNew}>
                            <label>
                                <select readOnly value={usedNew} >
                                    <option value = "NEW">NEW</option>
                                    <option value = "USED">USED</option>
                                </select>
                            </label>
                        </form> */}

                        <Label>Volume Supplied: </Label>
                        <InputText
                            type="text"
                            readOnly value={volumeSupplied}
                            onChange={this.changeVolumeSupplied}
                        />

                        <Label>Viscosity Grade: </Label>
                        <InputText
                            type="text"
                            readOnly value={viscosityGrade}
                            onChange={this.changeViscosityGrade}
                        />

                        <Label>Viscosity Data: </Label>
                        <InputText
                            type="text"
                            readOnly value={viscosityData}
                            onChange={this.changeViscosityData}
                        />

                        <Label>Particle Count: </Label>
                        <InputText
                            type="text"
                            readOnly value={particleCount}
                            onChange={this.changeParticleCount}
                        />
                        <Label>Date Received: </Label>
                        <InputText
                            type="text"
                            readOnly value={dateReceived}
                            onChange={this.changeDateReceived}
                        />
                    </Column>
                </Wrapper>
            </>
        )
    }
}

export default View
