import React from 'react'
import QRCode from 'qrcode.react'

export class ComponentToPrint extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
    render() {
      return (
        <>
          {/* <h3>TEST</h3>
          <table>
            <thead>
              <th>column 1</th>
              <th>column 2</th>
              <th>column 3</th>
            </thead>
            <tbody>
              <tr>
                <td>data 1</td>
                <td>data 2</td>
                <td>data 3</td>
              </tr>
            </tbody>
          </table> */}
          <QRCode
                          size={100} 
                          value={'STRING'}
          />
        </>
      );
    }
  }