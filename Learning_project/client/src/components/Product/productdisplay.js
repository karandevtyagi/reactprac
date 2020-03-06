import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import
{
  Collapse, Container, Row,
  Card,
  CardBody,
  CardHeader,
  FormGroup, Button, Label, Input, Carousel, CarouselIndicators, CarouselControl,
  CarouselItem,
} from 'reactstrap';
import setAlert from '../../store/actions/alert';
import ProductService from '../../services/ProductService';
import Panel from '../Panel';

function ProductDisplay() {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    product: null,
    color: null,
    info: null,
    loading: true,
  });
  const { id } = useParams();
  React.useEffect(() => { /*eslint-disable*/
    async function load(){
    try {
      const response = await ProductService.getProduct(id);
        setValues({
          product:response.data.product,
          color:response.data.color,
          info:response.data.info,
          loading:false
        })
    } catch (err) {
      const errors = err.response.data.error;
      if (errors) {
        dispatch(setAlert(errors))
      }
    }}
    load()
    document.body.classList.add('index-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('index-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, [values.loading]);
  //handle cart button
  const handleCart=async ()=>{
       const data={
             quantity:1,
             seller:values.info.seller_name,
             productid:values.product.id,
             color:document.getElementById('inputState').value
       }
       try{
        await ProductService.addToCart(data);
        dispatch(setAlert("Added to Cart"))
       }catch(err){
        const errors = err.response.data.error;
        if (errors) {
          dispatch(setAlert(errors))
        }
       }
  }
  //handle buy
  const handleBuy=async ()=>{

  }
  // product image display part
  const items = [
    {
      src: values.loading ? ' ' : values.product.photo1,
      altText: 'Image',
      id:'1'
    },
    {
      src: values.loading ? ' ' : values.product.photo2,
      altText: 'Image',
      id:'2'
    },
    {
      src: values.loading ? ' ' : values.product.photo3,
      altText: 'Image',
      id:'3'
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // product discription part
  const [collapse, setCollapse] = React.useState(false);
  const toggle = () => setCollapse(!collapse);


 
  /* eslint-enable */
  return (values.loading ? <div>Loading.....</div>
    : (
<>
<Panel />
<Container>
     <Row>
     <div className="col-md-6">
     <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map((item) => (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.id}
            >
              <img src={item.src} alt={item.altText} />
            </CarouselItem>
        ))}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
     </Carousel>

     </div>

      <div className="col-md-5 ml-auto mr-auto">
                <h2 className="title">
{values.product.name}
                </h2>
<br />
                <h5 className="category">{values.product.type}</h5>
                <h2 className="main-price">{values.product.rate}</h2>
<div>
<div className="card-plain card">
<CardHeader onClick={toggle}>
    Description
<i className="now-ui-icons arrows-1_minimal-down ml-6" />
</CardHeader>
                <Collapse
                  isOpen={collapse}
                >
        <Card>
          <CardBody>
            {values.product.Description}
          </CardBody>
        </Card>
                </Collapse>
</div>
                <div className="card-plain card">
                      Seller:
                      {values.info.seller_name}
                </div>
</div>
                  <div className="col-sm-6 col-md-8 col-lg-6">
                  <FormGroup>
            <Label>Select Color</Label>
            <Input id="inputState" type="select">
              {
              values.color.map((color) => <option>{color.name}</option>)
              }
            </Input>
                  </FormGroup>
                  </div>
                  <div className="justify-content-end row">
<Button className="mr-3" color="primary" onClick={handleCart} disabled={!values.info.availability}>
                  Add to Cart &nbsp;
                  <i className="now-ui-icons shopping_cart-simple" />
</Button>
<Button className="mr-3" color="primary" onClick={handleBuy}>
                  Buy &nbsp;
</Button>
                  </div>
      </div>
     </Row>
</Container>

</>
    )
  );
}
export default ProductDisplay;
