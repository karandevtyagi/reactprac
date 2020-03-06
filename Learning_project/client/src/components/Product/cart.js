import React from 'react';
import { useDispatch } from 'react-redux';
import
{
  Container, Row,
  Card,
  CardHeader, Label, CardBody, FormGroup, Input, CardFooter, Button,
} from 'reactstrap';
import Panel from '../Dashboard/Panel';
import ProductService from '../../services/ProductService';
import setAlert from '../../store/actions/alert';
import './product.scss';

function Cart() {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    loading: true,
    empty: false,
    carts: null,
  });
  // handle buttons
  const handleBuy = () => {

  };
  const handleRemove = async (event) => {
    try {
      const { id } = event.target;
      await ProductService.removeCartItem(id);
      setValues({
        empty: false,
      });
    } catch (err) {
      const errors = err.response.data.error;
      if (errors) {
        dispatch(setAlert(errors));
      }
    }
  };
  // initial load component
  React.useEffect(() => { /*eslint-disable*/
      async function load(){
        try{
            const response= await ProductService.displayCart();
            setValues({
              loading:false,
              carts:response.data,
          })
          if(response.data.length===0){
            setValues({
              empty:true,
              loading:false
            })
          }
        }catch(err){
          console.log(err)
           const errors = err.response.data.error;
           if (errors) {
             dispatch(setAlert(errors))
           }
        }
      }
      load()
     },[values.empty])
     return (values.loading ? <div>Loading.....</div>
        :(
            <>
            <Panel/>
            {values.empty && <div>Empty Cart</div>}
             {!values.empty && (<>
              <Container>
                  <Row>
            <div className="col-md-8 pd-2 form-row">
              <Card className="p-3 m-2">
                  <CardHeader>
                   <Label>My Cart</Label>
                  </CardHeader>
                  <CardBody>
                      {values.carts.map((cart)=>{
                          return (
                           <Row  style={
                            {
                                'borderTop':'1px solid lightgrey',
                            }
                        }
                        >
                            <div className="col-md-3 p-2 m-3">
                            <img src={cart.Product.photo1}></img>
                            <FormGroup className="col-md-10">
          <Input id="exampleFormControlSelect1" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
                            </div>
                           <div className="col-sm-7 col-md-7 col-lg-7">
                             <div className="justify-content-center">
                                <b><u>{cart.Product.name}</u></b>
                                <br></br>
{cart. Product.type}
<br></br>
 {cart.Product.rate}
 <br>
 </br>

                      Seller:
                      {cart.seller}
                </div>
                <div className="justify-content-end row">
<Button className="mr-3" color="neutal" onClick={handleRemove} id={cart.id}>
                  Remove &nbsp;
</Button>
                  </div>
                           </div>
                           </Row>
                          )
                      })}
                  </CardBody>
                  <CardFooter>
                  <div className="justify-content-end row">
<Button className="mr-3" color="primary" onClick={handleBuy}>
                  Place Order &nbsp;
</Button>
                  </div>
                  </CardFooter>
              </Card>
            </div>
                  </Row>
              </Container>




             </>)}
            </>
        )
     )
 }
 
 export default Cart;