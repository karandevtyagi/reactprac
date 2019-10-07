import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
// reactstrap components
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
  Col,
} from 'reactstrap';

import TransparentFooter from './Footers/TransparentFooter';
import login from '../store/actions/index';
// core components
const Login = () => {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });
  // event handlers
  const handleChange = (event) => {
    event.persist();
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  // interact with backend to login user
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const userdetail = {
        email: values.email,
        password: values.password,
      };
      dispatch(login(userdetail));
    } catch (error) {
      console.error(error);
    }
  };

  // email field focus
  const [firstFocus, setFirstFocus] = React.useState(false);
  // password field focus
  const [lastFocus, setLastFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add('login-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('login-page');
      document.body.classList.remove('sidebar-collapse');
    };
  });
  return (
        <>
        <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${require('../assets/img/login.jpg')})`,
          }}
        />
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require('../assets/img/now-logo.png')}
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        `no-border input-lg${
                          firstFocus ? ' input-group-focus' : ''}`
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        name="email"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    <InputGroup
                      className={
                        `no-border input-lg${
                          lastFocus ? ' input-group-focus' : ''}`
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={handleSubmit}
                      size="lg"
                    >
                      Get Started
                    </Button>
                    <div className="pull-left">
                      <h6>
                       <Link className="link" to="/register">Create Account</Link>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
        </div>
        </>
  );
};
export default Login;
