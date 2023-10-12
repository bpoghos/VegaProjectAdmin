import { Button, Col, Container, Row } from "react-bootstrap"
import ListItem from "./ListItem/ListItem"

const List = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} className="mb-2">
                    <ListItem />
                </Col>
                <Col lg={12} className="mb-2">
                    <ListItem />
                </Col>
                <Col lg={12} className="mb-2">
                    <ListItem />
                </Col>
                <Col lg={12} className="mb-2">
                    <ListItem />
                </Col>
                <Col lg={12} className="mb-2">
                    <ListItem />
                </Col>
                <Col lg={12} className="mb-2">
                    <ListItem />
                </Col>
            

            </Row>
        </Container>
    )
}

export default List