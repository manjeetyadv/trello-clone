import classNames from 'classnames';
import { Fragment } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import shoe_img from '../assets/images/shoe.avif';
import { avatars, navs } from '../helpers/constants';
const Header = () => {
  const location = useLocation();
  const activeNav = location.pathname.split('/')[1];

  const handleLogout = () => {
    swal({
      title: 'Are you sure?',
      text: 'You will be logged out',
      icon: 'warning',
    }).then(() => {
      sessionStorage.clear();
      setTimeout(() => {
        window.location = '/login';
      }, 1000);
    });
  };
  return (
    <Fragment>
      <Navbar bg='light' variant='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <img src={shoe_img} alt='shoes' className='brand-logo' />
            Sprint Plans
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {navs.map((item, index) => (
                <Nav.Link
                  href={item.link}
                  key={index}
                  className={classNames({
                    active_nav: item.link === activeNav,
                  })}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
            <Form className='d-flex'>
              {avatars.map((item, index) => (
                <img
                  src={item.src}
                  alt={item.name}
                  className={classNames('avatar-img', {
                    'me-3': index + 1 === avatars.length,
                  })}
                  key={index}
                />
              ))}

              <div className='vl me-2'></div>
              <div className='input-icons me-2 d-none d-lg-block'>
                <i className='fa fa-search icon'></i>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2 search-border input-field'
                  aria-label='Search'
                />
              </div>
              <Button variant='outline-danger' className='rounded btn-danger' onClick={handleLogout}>
                <i className='fa fa-sign-out text-white' />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card className='rounded-0'>
        <Row className='my-2'>
          <Col lg={3}>
            <span className='ms-2 my-2'>{`Last task completed on Sep 30`}</span>
          </Col>
          <Col lg={9} className='d-none d-lg-block'>
            <div className='d-flex justify-content-end'>
              <div className='d-flex mx-4 align-items-center'>
                <i className='me-2 fa fa-check' />
                All Tasks
              </div>
              <div className='d-flex mx-4 align-items-center'>
                <i className='me-2 fa fa-filter' />
                Filter
              </div>
              <div className='d-flex mx-4 align-items-center'>
                <i className='me-2 fa fa-sort' />
                Sort
              </div>
              <div className='vl' />
              <div className='mx-4 align-items-center'>
                <i className='me-2 fa fa-bars' />
                Rules
              </div>
              <div className='d-flex mx-4 align-items-center'>
                <i className='me-2 fa fa-linode' />
                Fields
              </div>
              <div className='d-flexmx-4 align-items-center'>
                <i className='me-2 fa fa-ellipsis-h' />
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};
export default Header;
