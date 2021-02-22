import React from 'react'
import Table from 'react-bootstrap/Table'
import { complaintFieldTitle } from './helpers/complatintFieldTitle'

const DataTable = ({data}) => {
  return (
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          {Object.values(complaintFieldTitle)
          .sort((a, b) => a.order - b.order)
          .map(colHeading => <th key={colHeading.title}>{colHeading.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {data && data.map((complaint, idx )=> (
          <tr 
          key={complaint.unique_key}>
            <td>{idx + 1}</td>
            <td>{complaint.unique_key}</td>
            <td>{complaint.account}</td>
            <td>{complaint.council_dist ? complaint.council_dist : 'n/a'}</td>
            <td>{complaint.complaint_type}</td>
            <td>{complaint.opendate}</td>
            <td>{complaint.closedate ? <span>Closed<br/>{complaint.closedate}</span> : 'Open'}</td>
            <td>{complaint.descriptor}</td>
            <td>{complaint.zip}</td>
            <td>{complaint.borough}</td>
            <td>{complaint.city}</td>
            <td>{complaint.community_board}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default DataTable
