import React from 'react';
import {

  Col,
  NavbarBrand,
  Navbar,
  Button,
  Container,
  Card,
  CardBody,


} from 'reactstrap';
import Panel from './Panel';
import Address from './address';
import AddAddress from './addAddress';

function AddressComponent() {
  const [add, setAdd] = React.useState(false);
  const handleEvent = () => {
    setAdd(true);
  };
  return (
      <>
               <Panel />
      <Container>
        <Col className="ml-auto mr-auto" md="7" />
      <Card>
       <CardBody>
         <Navbar>
          <NavbarBrand>Managae Addresses</NavbarBrand>
          <Button className="btn-round btn-icon" onClick={handleEvent} disabled={add}>
<i className="now-ui-icons ui-1_simple-add" />
          </Button>
{
  add && <AddAddress />
}
         </Navbar>
{!add && <Address />}
       </CardBody>
      </Card>
      </Container>
      </>
  );
}

export default AddressComponent;
