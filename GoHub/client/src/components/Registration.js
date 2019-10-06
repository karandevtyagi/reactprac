import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from 'reactstrap';
import AuthenticationService from '../services/AuthenticationService';
// core components

function SignUp() {
  const [usernameFocus, setUsernameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [companynameFocus, setCompanynameFocus] = React.useState(false);
  const [gstnumberFocus, setGstnumberFocus] = React.useState(false);
  const [licensenumberFocus, setLicensenumberFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [values, setValues] = React.useState({
    username: '',
    email: '',
    companyname: '',
    gstnumber: '',
    licensenumber: '',
    password: '',
  });
  // event handlers
  const handleChange = (event) => {
    event.persist();
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  // interact with backend to register user
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = {
        username: values.username,
        email: values.email,
        companyname: values.companyname,
        gstnumber: values.gstnumber,
        licensenumber: values.licensenumber,
        password: values.password,
      };
      console.log(user);
      const response = await AuthenticationService.register(user);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: `url(${require('../assets/img/bg11.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          minHeight: '1700px',
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Sign Up
                  </CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
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
                      onChange={handleChange}
                      onFocus={() => setUsernameFocus(true)}
                      onBlur={() => setUsernameFocus(false)}
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
                      onChange={handleChange}
                      onFocus={() => setCompanynameFocus(true)}
                      onBlur={() => setCompanynameFocus(false)}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      onFocus={() => setLicensenumberFocus(true)}
                      onBlur={() => setLicensenumberFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={
                      `no-border${passwordFocus ? ' input-group-focus' : ''}`
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password..."
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                    />
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={handleSubmit}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/login"
              outline
              size="lg"
              tag={Link}
            >
              View Login Page
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
