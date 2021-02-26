// import React, { Component , useRef} from 'react'
import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

// import QRCode from 'qrcode.react'
import '../style/style.css'
// import Printer from '@eyelly/react-printer'
// import ReactToPrint from 'react-to-print'
// import jsPDF from "jspdf"
// import PrintTemplate from 'react-print'

import styled from 'styled-components'

import 'react-table/react-table.css'
// import { useHistory } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

const Table = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: orange;
    cursor: pointer;
`

const Delete = styled.div`
    color: red;
    cursor: pointer;
`
// const View = styled.div`
// `

class UpdateOil extends Component {
    updateUser = event => {
        // event.preventDefault()
        event.stopPropagation()
        window.location.href = `/oils/edit/${this.props.id}`
    }
    render() {
        return <Update onClick={this.updateUser}>EDIT</Update>
    }
}

class DeleteOil extends Component {
    deleteUser = event => {
        // event.preventDefault()
        event.stopPropagation()
        console.log(this.props.id)
        if (
            window.confirm(
                `Delete ${this.props.name} ?`
            )
        ) {
            api.deleteOilById(this.props.id)
            window.location.reload()
        }
        else window.location.href = `/oils/list` 
    }
    render() {
        return <Delete onClick={this.deleteUser}>DELETE</Delete>
    }
}
// TO DOWNLOAD QR PICTURE
// const downloadQR = (pass) => {
//     console.log(pass)
//     const canvas = document.getElementById(pass)
//     const pngUrl = canvas
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream")
//     let downloadLink = document.createElement("a")
//     downloadLink.href = pngUrl
//     downloadLink.download = `${pass}.png`
//     document.body.appendChild(downloadLink)
//     downloadLink.click()
//     document.body.removeChild(downloadLink)
//   }
 
// DISPLAY QR CODE
// class ShowQR extends Component {
//     render() {
//         // console.log(this.props)
//         // let n = 0;
//         return ( 
//             // <Image width="100px" src="https://raw.githubusercontent.com/zpao/qrcode.react/HEAD/qrcode.png"/>
//             // <QRCode size={100} value="http://spectroscientific.com" />
//             // <ComponentToPrint ref={el => (this.componentRef = el)} />
//             <QRCode    
//                 size={100} 
//                 value={this.props.salesforce} 
//                 // onClick = {handlePrint}
//                 // onClick = {event => this.print(event)}
//             />
//             // cell: row =>
//             //     row.caseNumber ? <QRCode data-qr={row.title} value={row.title} // /> : ""
//         )
//     }
// }
 
class OilsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oils: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllOils().then(oils => {
            this.setState({
                oils: oils.data.data,
                // oils: oils.data,
                isLoading: false,
            })
        })
    }
    filterCaseInsensitive = (filter, row) => {
        const id = filter.pivotId || filter.id;
        const content = row[id];
        if (typeof content !== 'undefined') {
            // filter by text in the table or if it's a object, filter by key
            if (typeof content === 'object' && content !== null && content.key) {
                return String(content.key).toLowerCase().includes(filter.value.toLowerCase());
            } else {
                return String(content).toLowerCase().includes(filter.value.toLowerCase());
            }
        }
        return true;
    }
    oilView(e, link){
        e.preventDefault();
        this.props.history.push(link);
    }

    render() {
        const { oils, isLoading } = this.state
        // const code = oils.data.caseNumber
        // console.log(oils[0])
        // console.log(oils[1])
        // let n = 0;
        const columns = [
            {
                Header: 'Status',
                selector: 'status',
                accessor: 'status',
                filterable: true,
                minWidth: 150,
                getProps: (state, rowInfo, column) => {
                    return {
                        style: {
                        color: rowInfo && rowInfo.row.status === 'BACKLOG' ? 'red' 
                            : rowInfo && rowInfo.row.status === 'IN PROGRESS' ? 'blue' 
                            : rowInfo && rowInfo.row.status === 'COMPLETE' ? 'green' 
                            : null,
                        // marginTop: '40px'
                        },
                    };
                },
            },
            // {
            //     Header: 'QR Code',
            //     selector: 'qrcode',
            //     ignoreRowClick: true,
            //     // accessor: 'caseNumber',
            //     Cell: function (props) {
            //         // const componentRef = useRef()
            //         // const printContent = useRef()
            //         // console.log(props)
            //         const pass = `QRCODE${props.row.salesforce}`
            //         return (
            //              <div>
            //                 <QRCode
            //                     onClick={() => downloadQR(pass)}
            //                     size={100} 
            //                     value={props.row.salesforce} 
            //                     id={pass}
            //                     // id='code'
            //                 />
            //                 {/* <ShowQR 
            //                     salesforce = {props.original.salesforce} 
            //                 />   */}
            //             </div>

            //         )
            //     },
            // },
            {
                Header: 'Salesforce Case #',
                accessor: 'salesforce',
                filterable: true,
                sortable: true,
                minWidth: 150,
            },
            {
                Header: 'JIRA Case #',
                accessor: 'jira',
                filterable: true,
                minWidth: 150,
            },
            {
                Header: 'Name',
                accessor: 'oilName',
                filterable: true,
            },
            {
                Header: 'Manufacturer',
                accessor: 'manufacturer',
                filterable: true,
                minWidth: 150

            },
            // {
            //     Header: 'Customer Name',
            //     accessor: 'customerName',
            //     filterable: true
            // },
            {
                Header: 'Spectro Representative',
                accessor: 'rep',
                filterable: true,
                minWidth: 200
            },
            // {
            //     Header: 'USED/NEW',
            //     accessor: 'usedNew',
            //     filterable: true
            // },
            // {
            //     Header: 'Volume Supplied',
            //     accessor: 'volumeSupplied',
            //     filterable: true
            // },
            // {
            //     Header: 'Viscosity Grade',
            //     accessor: 'viscosityGrade',
            //     filterable: true
            // },
            // {
            //     Header: 'Viscosity Data',
            //     accessor: 'viscosityData',
            //     filterable: true
            // },
            // {
            //     Header: 'Particle Count',
            //     accessor: 'particleCount',
            //     filterable: true
            // },
            {
                Header: 'Date Received',
                accessor: 'dateReceived',
                filterable: true,
                minWidth: 150
            },
            {
                // Header: '',
                // accessor: '',
                sortable: false,
                filterable: false,
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateOil id={props.original._id} onClick={() => this.stopPropagation()}/>
                        </span>
                    )
                },
            },
            {
                // Header: '',
                // accessor: '',
                sortable: false,
                filterable: false,
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteOil id={props.original._id} name={props.original.oilName} onClick={() => this.stopPropagation()}/>
                            {/* <label htmlFor={props.original._id} onClick={() => this.stopPropagation()}/> */}
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!oils.length) {
            showTable = false
        }


        return (
            <Table >
                {showTable && (                  
                    <ReactTable
                        className="-highlight" 
                        data={oils}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={1}
                        filterable={true}
                        defaultFilterMethod={this.filterCaseInsensitive}
                        defaultSorted={[
                            {
                            id: 'salesforce',
                            desc: false
                            }
                        ]}
                        style={{ textAlign: "center", }} 
                        getTrProps={(state, rowInfo, column, instance) => ({
                            onClick: e => this.oilView(e, `/oils/${rowInfo.original._id}`
                            ), 
                            // onClick: e => console.log(rowInfo.original._id)
                          })}
                    />
                )}
            </Table>
        )
    }
}

export default OilsList
