import React from 'react'
import { Col, FormControl, FormLabel } from 'react-bootstrap'


export default function TextArea({ label }) {
  return (
    <Col lg={12} className="d-flex justify-content-center mb-4">
            <FormLabel className="me-3 m-0">{label}:</FormLabel>
            <FormControl
                style={{ width: '270px',height: '100px',marginRight: '30px' }}
                as='textarea'
                name={label}
            />
        </Col>
  )
}
