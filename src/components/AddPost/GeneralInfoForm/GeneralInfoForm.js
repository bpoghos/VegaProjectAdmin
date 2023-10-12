import React from 'react'
import { Col, Container, DropdownButton, DropdownItem, FormControl, FormLabel, Row } from 'react-bootstrap'
import classes from './general-info-form.module.css'

export default function GeneralInfoForm() {
  return (
    <Container className="mt-5 border-bottom border-secondary-subtle">
    <Row>
        <Col lg={4}>
        </Col>
        <Col lg={4} className="d-flex align-items-center justify-content-end mb-4">
        <FormLabel className="me-3 m-0">category:</FormLabel>
            <DropdownButton className={classes.categoryBtn} title='-Select-'>
                <DropdownItem>Residential structures</DropdownItem>
                <DropdownItem>Public structures</DropdownItem>
                <DropdownItem>Urban development projects</DropdownItem>
                <DropdownItem>Production buildings</DropdownItem>
                <DropdownItem>Reconstruction</DropdownItem>
                <DropdownItem>Small architectural forms</DropdownItem>
            </DropdownButton>
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4}>
        </Col>
        <Col lg={4} className="d-flex align-items-center justify-content-end mb-4">
            <FormLabel className="me-3 m-0">title:</FormLabel>
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
            <FormLabel className="me-3 m-0">description:</FormLabel>
            <FormControl
                style={{ width: '270px',height: '100px', marginRight: '30px' }}
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
