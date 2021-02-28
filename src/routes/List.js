import React, { Component } from 'react'
import ReactTable from 'react-table'
import '../style/style.css'
import styled from 'styled-components'
import 'react-table/react-table.css'

import withDraggableColumns from 'react-table-hoc-draggable-columns';
import 'react-table-hoc-draggable-columns/dist/styles.css';
// console.log(process.env.REACT_APP_OPEN_FDA_KEY)
const OPENFDAKEY = process.env.REACT_APP_OPEN_FDA_KEY;

const ReactTableDraggableColumns = withDraggableColumns(ReactTable);

const Table = styled.div`
    padding: 0 40px 40px 40px;
`
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [],
            isLoading: false,
            drugs: []
        }
    }

    componentDidMount() {
        fetch(`https://api.fda.gov/drug/drugsfda.json?api_key=${OPENFDAKEY}&limit=500`)
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
                minWidth: 120,
                // Filter: () => (
                //     <input placeholder={'Search by Application..'} />
                // ),
            },
            {
                Header: 'Sponsor Name',
                accessor: 'sponsor_name',
                filterable: true,
                sortable: true,
                minWidth: 250,
                // Filter: () => (
                //     <input placeholder={'Search by Sponsor..'} />
                // )
            },
            {
                Header: 'Reference Drug',
                accessor: 'products[0].reference_drug',
                filterable: true,
                minWidth: 150,
                // Filter: () => (
                //     <input placeholder={'Search by Reference..'} />
                // ),
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
                minwidth: 250,
                // Filter: () => (
                //     <input placeholder={'Search by Brand..'} />
                // )
            },
            {
                Header: 'Dosage Form',
                accessor: 'products[0].dosage_form',
                filterable: true,
                minWidth: 150,
                // Filter: () => (
                //     <input placeholder={'Search by Dosage..'} />
                // )
            },
            {
                Header: 'Route',
                accessor: 'products[0].route',
                filterable: true,
                minWidth: 150,
                // Filter: () => (
                //     <input placeholder={'Search by Route..'} />
                // )
            },
            {
                Header: 'Marketing Status',
                accessor: 'products[0].marketing_status',
                filterable: true,
                minWidth: 150,
                // Filter: () => (
                //     <input placeholder={'Search by Status..'} />
                // )
            },
        ]

        let showTable = true
        if (!drugs.length) {
            showTable = false
        }


        return (
            <Table >
                {showTable && (                  
                    <ReactTableDraggableColumns
                        draggableColumns= {{
                            mode: 'reorder',
                            enableColumnWideDrag: true,
                            draggable: ['application_number', 
                                        'sponsor_name', 
                                        'products[0].reference_drug', 
                                        'products[0].brand_name', 
                                        'products[0].dosage_form',
                                        'products[0].route',
                                        'products[0].marketing_status'],
                        }}
                        className='-highlight' 
                        data={drugs}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={25}
                        showPageSizeOptions={true}
                        minRows={1}
                        filterable={true}
                        showPaginationTop={true}
                        resizable={true}
                        defaultFilterMethod={this.filterCaseInsensitive}
                        // defaultSorted={[
                        //     {
                        //     id: 'application_number',
                        //     desc: false
                        //     }
                        // ]}
                        style={{ textAlign: "center", }} 
                    />
                )}
            </Table>
        )
    }
}

export default List