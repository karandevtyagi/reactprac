import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,

} from 'reactstrap';
import Panel from './Panel';
// reactstrap components

// core components

function DashBoard() {
  const [usernameFocus, setUsernameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [companynameFocus, setCompanynameFocus] = React.useState(false);
  const [gstnumberFocus, setGstnumberFocus] = React.useState(false);
  const [licensenumberFocus, setLicensenumberFocus] = React.useState(false);
  const [values, setValues] = React.useState({
    username: '',
    email: '',
    companyname: '',
    gstnumber: '',
    licensenumber: '',
    error: '',
  });
  // event handlers
  const handleChange = (event) => {
    event.persist();
    setValues({ ...values, [event.target.name]: event.target.value });
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
      password: values.password,
    };
    console.log(user);
  };
  return (
    <>

   <Panel />
   <Container>
   <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                <div className="photo-container">
            <img alt="..." src={require('../../assets/img/ryan.jpg')} />
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
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={handleSubmit}
                    size="lg"
                  >
                    SAVE
                  </Button>
                </CardFooter>
              </Form>
            </Card>
   </Row>
   </Container>

    </>
  );
}

export default DashBoard;
