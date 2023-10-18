import React from 'react'
import { Col, FormControl, FormLabel } from 'react-bootstrap'

export default function TextInput({ label }) {
    return (
        <Col lg={12} className="d-flex align-items-center justify-content-center mb-4">
            <FormLabel className="me-3 m-0">{label}:</FormLabel>
            <FormControl
                style={{ width: '270px', marginRight: '30px' }}
                type="text"
                name={label}
            />
        </Col>
    )
}
