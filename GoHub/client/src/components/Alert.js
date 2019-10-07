import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
// reactstrap components
import { Alert, Container } from 'reactstrap';
import { REMOVE_ALERT } from '../store/constants/alertconstants';

// core components

const Notifications = ({ alerts }) => {
  const dispatch = useDispatch();
  return alerts != null
    && alerts.length > 0 && alerts.map((alert) => (
        <>
        <div className="section section-notifications" key={alert.id}>
          <Alert color="danger">
            <Container>
              <div className="alert-icon">
                <i className="now-ui-icons objects_support-17" />
              </div>
              <strong>{alert.msg}</strong>
              <button
                type="button"
                className="close"
                onClick={() => dispatch({ type: REMOVE_ALERT, payload: alert.id })}
              >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove" />
              </span>
              </button>
            </Container>
          </Alert>
        </div>
        </>
  ));
};
Alert.PropTypes = {
  alerts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Notifications);
