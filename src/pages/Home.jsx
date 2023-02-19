import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => navigate('/order-summary', { replace: true })}>Place Order</Button>
    </>
  );
};

export default Home;
