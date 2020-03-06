import React, { useEffect } from 'react';
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

} from 'reactstrap';
import PropTypes from 'prop-types';

import setAlert from '../../store/actions/alert';
import ProfileService from '../../services/ProfileService';


function EditAddress(props) {
  const [values, setValues] = React.useState({
    id: '',
    name: '',
    mobilenumber: '',
    house: '',
    colony: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setValues({
      id: props.address.address.id,
      name: props.address.address.name,
      mobilenumber: props.address.address.mobilenumber,
      house: props.address.address.house,
      colony: props.address.address.colony,
      landmark: props.address.address.landmark,
      city: props.address.address.city,
      state: props.address.address.state,
      pincode: props.address.address.pincode,
      country: props.address.address.country,
    }); /*eslint-disable*/
  }, [props.address.loading]);
  //handle change event
  const handleChange = (event) => {
    const { name } = event.target;
    setValues({ ...values, [name]: event.target.value });
  };
  //handle submit or save event
  const handleSubmit=async (event)=>{
    event.preventDefault();
    const addressData={
      id: values.id,
      name: values.name,
      mobilenumber: values.mobilenumber,
      house: values.house,
      colony: values.colony,
      landmark: values.landmark,
      city: values.city,
      state: values.state,
      pincode: values.pincode,
      country: values.country,
    }
    try{
      await ProfileService.updateAddress(values.id,addressData)
      window.location.reload();
    }catch(err){
      const errors = err.response.data.error;
      if (errors) {
        dispatch(setAlert(errors));
      }
    }
  }
  // handling delete
  const deletethis = async () => {
    try {
      await ProfileService.deleteAddress(values.id);
      dispatch(setAlert("Deleted"))
    } catch (err) {
      const errors = err.response.data.error;
      if (errors) {
        dispatch(setAlert(errors));
      }
    }
    window.location.reload();
  };
  return (props.address.loading ?<div>Loading.....</div> :
       <>
       <Navbar className="navbar-light bg-info">
<Button size="sm " onClick={deletethis}>
  Delete
</Button>
<Button size="sm " onClick={handleSubmit}>
  Save
</Button>
<Button size="sm " onClick={()=>window.location.reload()}>
  Cancel
</Button>
       </Navbar>
       <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input type="text" name="name" id="name" placeholder="Name" 
                    onChange={handleChange}
                    required
                    value={values.name || ''} />
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
                      value={values.mobilenumber || ''}
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
                  value={values.house || ''}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="colony"
                  id="colony"
                  placeholder="Colony/Streer/Locality"
                  onChange={handleChange}
                  value={values.colony || ''}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="landmark"
                  id="landmark"
                  placeholder="Landmark"
                  onChange={handleChange}
                  value={values.landmark|| ''}
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
                      value={values.city|| ''}
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
                      required
                      onChange={handleChange}
                      value={values.state|| ''}
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
                      value={values.pincode|| ''}
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
                  value={values.country|| ''}
                />
              </FormGroup>
       </Form>

       </>
  );
}
EditAddress.propTypes = {
  address: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
export default EditAddress;