import React, { Component } from 'react'
import api from '../api'

import QRCode from 'qrcode.react'
import styled from 'styled-components'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'

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

const downloadQR = (pass) => {
    console.log(pass)
    const canvas = document.getElementById(pass)
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")
    let downloadLink = document.createElement("a")
    downloadLink.href = pngUrl
    downloadLink.download = `${pass}.png`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }
const updateOil = (id) => {
    window.location.href = `/oils/edit/${id}`
    }

class View extends Component {
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
    
    // updateOil = async () => {
    //     const { id, 
    //             status,
    //             salesforce,
    //             jira,
    //             oilName, 
    //             manufacturer, 
    //             customerName, 
    //             rep, 
    //             usedNew, 
    //             volumeSupplied, 
    //             viscosityGrade, 
    //             viscosityData, 
    //             particleCount, 
    //             dateReceived
    //          } = this.state
    //     // const arrayTime = time.split('/')
    //     const payload = { 
    //         status,
    //         salesforce,
    //         jira,
    //         oilName, 
    //         manufacturer, 
    //         customerName, 
    //         rep, 
    //         usedNew, 
    //         volumeSupplied, 
    //         viscosityGrade, 
    //         viscosityData, 
    //         particleCount, 
    //         dateReceived 
    //     }

    //     await api.editOilById(id, payload).then(res => {
    //         window.alert(`Oil updated successfully`)
    //         this.setState({
    //             status: '',
    //             salesforce: '',
    //             jira: '',
    //             oilName: '',
    //             manufacturer: '',
    //             customerName: '',
    //             rep: '',
    //             usedNew: '',
    //             volumeSupplied: '',
    //             viscosityGrade: '',
    //             viscosityData: '',
    //             particleCount: '',
    //             dateReceived: ''
    //         })
    //         window.location.href = `/oils/list`
    //     },
    //     )
    // }

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
        const pass = `QRCODE${salesforce}`
        return (
            <>
            <div>
                <ReactToPrint content={() => this.componentRef}>
                <PrintContextConsumer>
                    {({ handlePrint }) => (
                    <button onClick={handlePrint}>Print this out!</button>
                    )}
                </PrintContextConsumer>
                </ReactToPrint>
                <QRCode
                    onClick={() => downloadQR(pass)}
                    size={200} 
                    value={`http://localhost:8000/oils/${id}`} 
                    id={pass}
                    // includeMargin={true}
                    style={{ display: "block", margin: "auto", cursor: "pointer"}}
                    ref={el => (this.componentRef = el)}
                />
            </div>
                <Button 
                    onClick={() => updateOil(id)}
                    id={id}
                    >Edit this Oil
                </Button>
                <Title>{oilName}</Title>
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
                            readOnly value={oilName}
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
                <Button 
                    onClick={() => updateOil(id)}
                    id={id}
                    >Edit this Oil
                </Button>
                {/* <UpdateOil id={id} /> */}
                <CancelButton href={'/oils/list'}>Back to List</CancelButton>
            </>
        )
    }
}

export default View
