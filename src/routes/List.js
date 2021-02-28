import React, { Component } from 'react'
import ReactTable from 'react-table'
import '../style/style.css'
import styled from 'styled-components'
import 'react-table/react-table.css'

const Table = styled.div`
    padding: 0 40px 40px 40px;
`
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // oils: [],
            columns: [],
            isLoading: false,
            drugs: []
        }
    }

    componentDidMount() {
        fetch('https://api.fda.gov/drug/drugsfda.json?api_key=aJVC773jRVPLu26rRtBLlyJaNgwaUZaXIAS438pZ&limit=100')
        .then(res => res.json())
        .then((data) => {
            this.setState({ drugs: data.results})
            // console.log(data.results[0].openfda.application_number[0])
        })
        .catch(console.log)
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

    render() {
        const { drugs, isLoading } = this.state
        // return (
        //     <Drugs drugs={this.state.drugs}/>
        //   );
        const columns = [
            {
                Header: 'Application Number',
                selector: 'applicationNumber',
                accessor: 'application_number',
                filterable: true,
                minWidth: 150,
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
                Header: 'Sponsor Name',
                accessor: 'sponsor_name',
                filterable: true,
                sortable: true,
                minWidth: 150,
            },
            {
                Header: 'Reference Drug (Yes/No)',
                accessor: 'products[0].reference_drug',
                filterable: true,
                minWidth: 150,
                getProps: (state, rowInfo, column) => {
                    return {
                        style: {
                        color: rowInfo && rowInfo.row.reference_drug === 'No' ? 'red' 
                            : rowInfo && rowInfo.row.reference_drug === 'Yes' ? 'green' 
                            : null,
                        },
                    };
                },
            },
            {
                Header: 'Brand Name',
                accessor: 'products[0].brand_name',
                filterable: true,
                minwidth: 150,
            },
            {
                Header: 'Dosage Form',
                accessor: 'products[0].dosage_form',
                filterable: true,
                minWidth: 150
            },
            {
                Header: 'Route',
                accessor: 'products[0].route',
                filterable: true,
                minWidth: 150
            },
            {
                Header: 'Marketing Status',
                accessor: 'products[0].marketing_status',
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
            // {
            //     // Header: '',
            //     // accessor: '',
            //     sortable: false,
            //     filterable: false,
            //     Cell: function(props) {
            //         return (
            //             <span>
            //                 <UpdateOil id={props.original._id} onClick={() => this.stopPropagation()}/>
            //             </span>
            //         )
            //     },
            // },
            // {
            //     // Header: '',
            //     // accessor: '',
            //     sortable: false,
            //     filterable: false,
            //     Cell: function(props) {
            //         return (
            //             <span>
            //                 <DeleteOil id={props.original._id} name={props.original.oilName} onClick={() => this.stopPropagation()}/>
            //                 {/* <label htmlFor={props.original._id} onClick={() => this.stopPropagation()}/> */}
            //             </span>
            //         )
            //     },
            // },
        ]

        let showTable = true
        if (!drugs.length) {
            showTable = false
        }


        return (
            <Table >
                {showTable && (                  
                    <ReactTable
                        className="-highlight" 
                        data={drugs}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={50}
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

export default List
