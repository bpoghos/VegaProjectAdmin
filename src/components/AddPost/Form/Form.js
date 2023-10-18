import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { CATEGORIES } from '../../../helpers/constants';
import Dropdown from './FormComponents/Dropdown';
import TextInput from './FormComponents/TextInput';
import TextArea from './FormComponents/TextArea';
import { generateYears } from '../../../helpers/helperFunctions';

export default function Form() {
  const getYears = generateYears();

  return (
    <>
      <Container className="mt-5 border-bottom border-secondary-subtle">
        <Row>
          <Dropdown data={CATEGORIES} />
          <TextInput label='title' />
          <TextArea label='description' />
        </Row>
      </Container>
      <Container className='mt-4 border-bottom border-secondary-subtle'>
        <Row>
          <Dropdown data={getYears} />
          <TextInput label='location' />
          <TextInput label='floor area' />
          <TextInput label='client' />
          <TextInput label='architects' />
        </Row>
      </Container>
    </>
  );
}







// import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import { CATEGORIES } from '../../../helpers/constants'
// import Dropdown from './FormComponents/Dropdown'
// import TextInput from './FormComponents/TextInput'
// import TextArea from './FormComponents/TextArea'
// import { generateYears } from '../../../helpers/helperFunctions'



// export default function Form() {


// const getYears = generateYears()

//     return (
//         <>
//             <Container className="mt-5 border-bottom border-secondary-subtle">
//                 <Row>
//                     <Col lg={4}>
//                     </Col>
//                     <Dropdown data={CATEGORIES} />
//                     <Col lg={4}>
//                     </Col>
//                     <Col lg={4}>
//                     </Col>
//                     <TextInput label='title'/>
//                     <Col lg={4}>
//                     </Col>
//                     <Col lg={4}>
//                     </Col>
//                     <TextArea label='description'/>
//                     <Col lg={4}>
//                     </Col>
//                 </Row>
//             </Container>
//             <Container className='mt-4 border-bottom border-secondary-subtle'>
//                 <Row>
//                     <Col lg={4}>
//                     </Col>
//                     <Dropdown data={getYears} />
//                     <Col lg={4}>
//                     </Col>
//                     <Col lg={4}>
//                     </Col>
//                     <TextInput label='location' />
//                     <Col lg={4}>
//                     </Col>
//                     <Col lg={4}>
//                     </Col>
//                     <TextInput label='floor area' />
//                     <Col lg={4}>
//                     </Col>
//                     <Col lg={4}>
//                     </Col>
//                     <TextInput label='client' />
//                     <Col lg={4}>
//                     </Col>
//                     <Col lg={4}>
//                     </Col>
//                     <TextInput label='architects' />
//                     <Col lg={4}>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }
