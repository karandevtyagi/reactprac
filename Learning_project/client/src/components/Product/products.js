import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// reactstrap components
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Container,
} from 'reactstrap';
import './product.scss';
import showProducts from '../../store/actions/products';

function Products(props) {
  useEffect(() => { /*eslint-disable*/
    props.showProducts();
 },[props.products.loading])
 //handle Event
 const history=useHistory();
const handleEvent=(event)=>{
const id=event.target.id;
history.replace(`/product/${id}`)
}
  return (props.products.loading?<div>Loading.....</div>
  :(
       <>
       <Container>
         <h3 className="center">Our Products</h3>
         { props.products.product.map((product)=>{
           return (<Card className="col-sm-3 col-lg-3 col-md-3 p-3 m-3 product" key={product.id}
           > 
           <div className="thumbnail"><CardImg alt={product.name} src={product.photo1} className="img-thumbnail"
            onClick={handleEvent} id={product.id}
            style={
              { cursor: 'pointer' }
            }>
              </CardImg></div> 
<div className="caption">
<CardFooter>
                             <CardTitle onClick={handleEvent} id={product.id}
                               style={
                                { cursor: 'pointer' }
                              }>{product.name}</CardTitle>
                               <CardSubtitle className="mb-2 text-muted">{product.type}</CardSubtitle>
                               <h4 id={product.id} onClick={handleEvent}
                                 style={
                                  { cursor: 'pointer' }
                                }>
                        {product.rate}
                    </h4>
                             </CardFooter>
</div>

                           </Card>)
         })
         }
       </Container>
   
       </>
  ));
}
Products.propTypes={
  products:PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  showProducts:PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  products:state.products
});
export default connect(mapStateToProps,{showProducts})(Products);
