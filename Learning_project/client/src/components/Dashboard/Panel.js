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
  //
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const guestLinks = (
    <NavItem>
    <NavLink
      style={
            { cursor: 'pointer' }
          }
      href="#pablo"
      onClick={(e) => e.preventDefault()}
    >
      <i
        aria-hidden
        className="now-ui-icons users_single-02"
      />
    </NavLink>
    </NavItem>

  );

  const authLinks = (
    <NavItem>
    <NavLink
      style={
            { cursor: 'pointer' }
          }
      href="/"
      onClick={props.logout}
    >
      <i
        aria-hidden
        className="now-ui-icons users_single-02"
      />
      <p>Logout</p>
    </NavLink>
    </NavItem>
  );

  return (
    <>
          {collapseOpen ? (
        <div
          role="presentation"
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
          onKeyPress={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
          ) : null}
      <Navbar expand="lg" color="info">
                <Container>
                  <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                    Icons
                  </NavbarBrand>
                  <button
                    className="navbar-toggler secondary"
                    onClick={() => {
                      document.documentElement.classList.toggle('nav-open');
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    type="button"
                  >
                   <i
                     aria-hidden
                     className="now-ui-icons ui-1_settings-gear-63"
                   />
                  </button>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
                    <Nav navbar>
                    {!props.auth.loading
                           && (<>{props.auth.isAuthenticated ? authLinks : guestLinks}</>)}


                      <UncontrolledDropdown nav>
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
                            to="/dashboard"
                            tag={Link}
                          >
                           Your Profile
                          </DropdownItem>
                          <DropdownItem
                            to="/address"
                            tag={Link}
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
