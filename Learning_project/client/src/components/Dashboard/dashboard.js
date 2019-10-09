import React, { useEffect } from 'react';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormText,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,

} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Panel from './Panel';
import { updateProfile } from '../../store/actions/profile';
// core components

function DashBoard(props) {
  const [usernameFocus, setUsernameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [companynameFocus, setCompanynameFocus] = React.useState(false);
  const [gstnumberFocus, setGstnumberFocus] = React.useState(false);
  const [licensenumberFocus, setLicensenumberFocus] = React.useState(false);
  const [PhonenumberFocus, setPhonenumberFocus] = React.useState(false);
  const [WebsiteFocus, setWebsiteFocus] = React.useState(false);
  const [values, setValues] = React.useState({
    username: '',
    email: '',
    companyname: '',
    gstnumber: '',
    licensenumber: '',
    phonenumber: '',
    website: '',
    edit: false,
    logo: null,
  });
  // event handlers
  const handleChange = (event) => {
    const { name } = event.target;
    setValues({ ...values, [name]: event.target.value });
  };
  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    const fr = new FileReader();
    fr.onload = function (e) {
      const val = e.target.result;

      setValues({
        ...values,
        logo: val,
      });
    };
    fr.readAsDataURL(file);
  };

  // interact with backend to register user
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username: values.username,
      email: values.email,
      companyname: values.companyname,
      gstnumber: values.gstnumber,
      licensenumber: values.licensenumber,
      phonenumber: values.phonenumber,
      website: values.website,
      logo: values.logo,
    };
    props.updateProfile(user);
    setValues({ ...values, edit: !values.edit });
  };
  // handling edit button
  const change = () => {
    setValues({ ...values, edit: !values.edit });
  };
  const undoButton = (<Button size="sm" onClick={change}>UNDO</Button>);
  const editButton = (<Button size="sm" onClick={change}>EDIT</Button>);
  // To start when page loads
  useEffect(() => {
    // props.loadUser();
    setValues({
      email: !props.auth.loading ? props.auth.user.email : '',
      username: !props.auth.loading ? props.auth.user.username : '',
      companyname: !props.auth.loading ? props.auth.user.companyname : '',
      gstnumber: !props.auth.loading ? props.auth.user.gstnumber : '',
      licensenumber: !props.auth.loading ? props.auth.user.licensenumber : '',
      phonenumber: !props.auth.loading ? props.auth.user.phonenumber : '',
      website: !props.auth.loading ? props.auth.user.website : '',
      logo: !props.auth.loading ? props.auth.user.logo : '',
    });/*eslint-disable*/
  }, [ props.auth.loading]);
  /* eslint-enable */

  return props.auth.loading && props.auth.user === null ? <div>loading....</div> : (
    <>

   <Panel />
   <Container>
   <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                <div className="photo-container">
            <img
              alt="Upload"
              className="avatar"
              height="200"
              weidth="200"
              src={values.logo || require('../../assets/img/default-avatar.png')}
            />
                </div>
                <Row md="10">
                  <Col>
                  <a href={values.website}>{values.website}</a>
                  {' '}
                  {values.edit ? undoButton : editButton }
                  </Col>
                </Row>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      `no-border${usernameFocus ? ' input-group-focus' : ''}`
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="User Name..."
                      type="text"
                      name="username"
                      value={values.username || ''}
                      onChange={handleChange}
                      onFocus={() => setUsernameFocus(true)}
                      onBlur={() => setUsernameFocus(false)}
                      disabled={!values.edit}
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      `no-border${companynameFocus ? ' input-group-focus' : ''}`
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Company Name..."
                      type="text"
                      name="companyname"
                      value={values.companyname || ''}
                      onChange={handleChange}
                      onFocus={() => setCompanynameFocus(true)}
                      onBlur={() => setCompanynameFocus(false)}
                      disabled
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      `no-border${emailFocus ? ' input-group-focus' : ''}`
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="EMAIL ID..."
                      type="text"
                      name="email"
                      value={values.email || ''}
                      disabled
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      `no-border${gstnumberFocus ? ' input-group-focus' : ''}`
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="GST NUMBER..."
                      type="text"
                      name="gstnumber"
                      value={values.gstnumber || ''}
                      onChange={handleChange}
                      disabled={!values.edit}
                      onFocus={() => setGstnumberFocus(true)}
                      onBlur={() => setGstnumberFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      `no-border${licensenumberFocus ? ' input-group-focus' : ''}`
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="License NUMBER..."
                      type="text"
                      name="licensenumber"
                      value={values.licensenumber || ''}
                      onChange={handleChange}
                      disabled={!values.edit}
                      onFocus={() => setLicensenumberFocus(true)}
                      onBlur={() => setLicensenumberFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      `no-border${PhonenumberFocus ? ' input-group-focus' : ''}`
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Phone NUMBER..."
                      type="text"
                      name="phonenumber"
                      value={values.phonenumber || ''}
                      onChange={handleChange}
                      disabled={!values.edit}
                      onFocus={() => setPhonenumberFocus(true)}
                      onBlur={() => setPhonenumberFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      `no-border${WebsiteFocus ? ' input-group-focus' : ''}`
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="WEB SITE..."
                      type="text"
                      name="website"
                      value={values.website || ''}
                      onChange={handleChange}
                      disabled={!values.edit}
                      onFocus={() => setWebsiteFocus(true)}
                      onBlur={() => setWebsiteFocus(false)}
                    />
                  </InputGroup>
                  <Input type="file" name="file" onChange={fileChangeHandler} />
        <FormText>
              Upload your logo here....
        </FormText>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    onClick={handleSubmit}
                    size="lg"
                    disabled={!values.edit}
                  >
                    Update
                  </Button>
                </CardFooter>
              </Form>
            </Card>
   </Row>
   </Container>

    </>
  );
}
DashBoard.propTypes = {
  // loadUser: PropTypes.func.isRequired,
  /*eslint-disable */
  updateProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {  updateProfile })(DashBoard);
