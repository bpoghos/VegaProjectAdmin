import { Col, Dropdown, FormLabel } from 'react-bootstrap';
import classes from '../form.module.css';

const DropdownComponent = ({ data }) => {
  return (
    <Col lg={12} className="d-flex align-items-center justify-content-center mb-4">
      <FormLabel className="me-3 m-0">Category:</FormLabel>
      <Dropdown className={classes.btn}>
        <Dropdown.Toggle id="dropdown-basic">-Select-</Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            maxHeight: '220px',
            overflowY: 'auto',
          }}
        >
          {data.map((d) => (
            <Dropdown.Item key={d.value}>{d.label}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  );
};

export default DropdownComponent;








// import { Col, DropdownButton, DropdownItem, FormLabel } from "react-bootstrap";
// import classes from '../form.module.css'
// const Dropdown = ({ data }) => {
//     return (
//         <Col lg={4} className="d-flex align-items-center justify-content-end mb-4">
//             <FormLabel className="me-3 m-0">category:</FormLabel>
//             <DropdownButton
//                 className={classes.btn}
//                 title='-Select-'
//                 style={{
//                     maxHeight: '300px',
//                     overflowY: 'auto'
//                 }}>
//                 {data.map((d) => <DropdownItem key={d.value}>{d.label}</DropdownItem>)}
//             </DropdownButton>
//         </Col>
//     );
// }

// export default Dropdown;