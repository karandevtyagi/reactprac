import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Container,
  Navbar,
} from 'reactstrap';
import { logout } from '../../store/actions/auth';
// reactstrap components

// core components

function Panel(props) {
  const authLinks = (
  <DropdownToggle
    caret
    color="default"
    href="#pablo"
    nav
    onClick={(e) => e.preventDefault()}
  >
    <i
      aria-hidden
      className="now-ui-icons ui-1_settings-gear-63"
    />
  </DropdownToggle>
  );

  const guestLinks = (
    <DropdownToggle
      caret
      color="default"
      href="#pablo"
      nav
      onClick={props.logout}
    >
    <i
      aria-hidden
      className="now-ui-icons ui-1_settings-gear-63"
    />
    <p>logout</p>
    </DropdownToggle>
  );
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      <div className="section section-navbars">
      <Navbar className="bg-info" expand="lg">
                <Container>
                  <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                    Icons
                  </NavbarBrand>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle('nav-open');
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                  <Collapse isOpen={collapseOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i
                            aria-hidden
                            className="now-ui-icons users_single-02"
                          />
                        </NavLink>
                      </NavItem>
                      {!props.auth.loading
                           && (<>{props.auth.isAuthenticated ? guestLinks : authLinks}</>)}
                      <UncontrolledDropdown nav>
                        <DropdownMenu right>
                          <DropdownItem header tag="a">
                            Dropdown header
                          </DropdownItem>
                          <DropdownItem
                            to="/"
                            tag={Link}
                          >
                            Home Page
                          </DropdownItem>
                          <DropdownItem
                            href="/dashboard"
                            onClick={(e) => e.preventDefault()}
                          >
                           Your Profile
                          </DropdownItem>
                          <DropdownItem
                            href=""
                            onClick={(e) => e.preventDefault()}
                          >
                            Your Addresses
                          </DropdownItem>
                          <div className="divider" />
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Your Orders
                          </DropdownItem>
                          <div className="divider" />
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Security
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
                </Container>
      </Navbar>
      </div>

    </>
  );
}
Panel.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Panel);
