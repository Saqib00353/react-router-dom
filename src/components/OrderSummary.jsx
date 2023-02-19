import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Order Confirmed!</h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </>
  );
};

export default OrderSummary;
