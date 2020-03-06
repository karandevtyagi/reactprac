import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// reactstrap components
import {
  Navbar,
  Button,

} from 'reactstrap';
import PropTypes from 'prop-types';
import EditAddress from './editAddress';
import { loadAddress } from '../../store/actions/profile';
import showAddress from '../../store/actions/address';


function Address(props) {
  useEffect(() => { /*eslint-disable*/
    props.loadAddress();
  }, [props.profile.loading]);
  //going to specific address
  const [values,setValues]=React.useState({
    edit:false
  })
  const show=(event)=>{
     props.showAddress(event.target.id);
     setValues({
       edit:true
     })

  }

  return (props.profile.loading
    ? <div>Loading......</div> : (
      (!props.address.loading  && values.edit && <EditAddress address={props.address}/>)
      ||
      !values.edit && props.profile.address.map((address) => (
       <>
       <Navbar className="navbar-light bg-info" key={address.id}>
         <Button size="sm" onClick={show} id={address.id}> View</Button>
       </Navbar>
          <div key={address.id}>

                <b>  {address.name} </b> {'-'}
                   {address.mobilenumber}
                   <br></br>
                       {address.house} {' '}
                        {address.colony}
                       <br>
                       </br>
                       {address.landmark}{ ' '}
                      {address.city}{' '}
                           {address.state}
                {'-'}
                    <b>{address.pincode}</b> 
                    <br></br> 
                    {address.country}
          </div>

       </>
    ))));
}
Address.propTypes = {
  loadAddress: PropTypes.func.isRequired,
  showAddress:PropTypes.func.isRequired,
  address:PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  profile: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  address:state.address,
});
export default connect(mapStateToProps, { loadAddress,showAddress })(Address);
