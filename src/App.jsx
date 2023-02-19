import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Navgationbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Contact from './pages/Contact';
import Error404 from './components/Error404';
import Products from './components/Products';
import Featured from './components/featured';
import New from './components/new';
import Users from './components/Users/Users';
import UserDetails from './components/Users/UserDetails';
import Admin from './components/Users/Admin';
import LazyLoading from './components/LazyLoading';
import Profile from './components/Profile';
import Login from './components/authentication/Login';
import RequireLogin from './components/authentication/RequireLogin';

const About = lazy(() => import('./pages/About'));
function App() {
  return (
    <Container>
      <Navgationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<LazyLoading />}>
              <About />
            </Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireLogin>
              <Profile />
            </RequireLogin>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Container>
  );
}

export default App;
