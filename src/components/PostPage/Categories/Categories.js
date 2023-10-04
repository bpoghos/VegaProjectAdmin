import { Button, Col, Container, Row } from "react-bootstrap"
import classes from './categories.module.css'

const Categories = () => {
    return (
            <Container className="mb-4">
                <Row>
                    <Col className="mb-4">
                        <div className={classes.category}>
                            Houses
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.category}>
                            residental <br/>
                            buldings
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.category}>
                            residental<br/>
                            Area
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.category}>
                            public<br/>
                            spaces
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.category}>
                            small<br/>
                            architecture
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default Categories