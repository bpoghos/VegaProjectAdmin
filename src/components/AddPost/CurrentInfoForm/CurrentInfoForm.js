import React from 'react'
import { Col, Container, DropdownButton, DropdownItem, FormControl, FormLabel, Row } from 'react-bootstrap'
import classes from './current-info-form.module.css'

export default function CurrentInfoForm() {
  return (
    <Container className='mt-4 border-bottom border-secondary-subtle'>
        <Row>
        <Col lg={4}>
        </Col>
        <Col lg={4} className="d-flex align-items-center justify-content-end mb-4">
        <FormLabel className="me-3 m-0">date:</FormLabel>
            <DropdownButton className={classes.dateBtn} title='-Select-'>
                <DropdownItem>2000</DropdownItem>
                <DropdownItem>2001</DropdownItem>
                <DropdownItem>2002</DropdownItem>
                <DropdownItem>2003</DropdownItem>
                <DropdownItem>2004</DropdownItem>
                <DropdownItem>2005</DropdownItem>
            </DropdownButton>
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4} className="d-flex align-items-center justify-content-end mb-4">
            <FormLabel className="me-3 m-0">location:</FormLabel>
            <FormControl
                style={{ width: '270px', marginRight: '30px'  }}
                type="text"
                name="title"
            />
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4} className="d-flex justify-content-end mb-4">
            <FormLabel className="me-3 m-0">floor area:</FormLabel>
            <FormControl
                style={{ width: '270px', marginRight: '30px' }}
                type="text"
                name="title"
            />
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4} className="d-flex align-items-center justify-content-end mb-4">
            <FormLabel className="me-3 m-0">client:</FormLabel>
            <FormControl
                style={{ width: '270px', marginRight: '30px'  }}
                type="text"
                name="title"
            />
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4} className="d-flex justify-content-end mb-4">
            <FormLabel className="me-3 m-0">architects:</FormLabel>
            <FormControl
                style={{ width: '270px', marginRight: '30px' }}
                type="text"
                name="title"
            />
        </Col>
        <Col lg={4}>
        </Col>
    </Row>
    </Container>
  )
}
