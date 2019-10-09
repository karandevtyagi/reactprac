import React from 'react';
import { useDispatch } from 'react-redux';
// reactstrap components
import {
  Form,
  Input,
  Row,
  Col,
  FormGroup,
  Navbar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
} from 'reactstrap';

import setAlert from '../../store/actions/alert';
import ProfileService from '../../services/ProfileService';


function AddAddress() {
  const [values, setValues] = React.useState({
    id: null,
    name: null,
    mobilenumber: null,
    house: null,
    colony: null,
    landmark: null,
    city: null,
    state: null,
    pincode: null,
    country: null,
  });
  const dispatch = useDispatch();
  // handle change event
  const handleChange = (event) => {
    const { name } = event.target;
    setValues({ ...values, [name]: event.target.value });
  };
  // handle submit or save event
  const handleSubmit = async (event) => {
    event.preventDefault();
    const addressData = {
      name: values.name,
      mobilenumber: values.mobilenumber,
      house: values.house,
      colony: values.colony,
      landmark: values.landmark,
      city: values.city,
      state: values.state,
      pincode: values.pincode,
      country: values.country,
    };
    try {
      await ProfileService.addAddress(addressData);
      window.location.reload();
    } catch (err) {
      const errors = err.response.data.error;
      if (errors) {
        dispatch(setAlert(errors));
      }
    }
  };
  // handling delete
  return (
       <>
       <Container>
        <Col className="ml-auto mr-auto" md="6">
              <Card className="card-plain">
       <Navbar className="navbar-light bg-info">
       <Button size="sm " onClick={() => window.location.reload()}>
  Cancel
       </Button>
       </Navbar>
       <Form className="form">
           <CardBody>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="mobilenumber"
                      id="mobilenumber"
                      placeholder="MobileNumber"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input
                  type="text"
                  name="house"
                  id="house"
                  placeholder="House no /Flat/Floor Building"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="colony"
                  id="colony"
                  placeholder="Colony/Streer/Locality"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="landmark"
                  id="landmark"
                  placeholder="Landmark"
                  onChange={handleChange}
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="city"
                      id="City"
                      placeholder="City"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="state"
                      id="State"
                      placeholder="State"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="pincode"
                      id="pincode"
                      placeholder="Pincode"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
           </CardBody>
              <CardFooter>
                  <Button
                    type="submit"
                    size="lg"
                    block
                    className="btn-round"
                    color="info"
                    onClick={handleSubmit}
                  >
                      Submit
                  </Button>
              </CardFooter>
       </Form>
              </Card>
        </Col>
       </Container>
       </>
  );
}

export default AddAddress;
