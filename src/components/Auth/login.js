import React, { Fragment } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextField from '../../reusables/TextField';
import {
  getItemFromLocalStore,
  setItemToSessionStore,
} from '../../helpers/utils';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SweetAlert from '../../helpers/Alert';
const Login = () => {
  const LoginSchema = Yup.object().shape({
    employeeId: Yup.string().required('Employee Id is required'),
    password: Yup.string()
      .min(2, 'Too Short')
      .max(70, 'Too Long')
      .required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      employeeId: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      const user = getItemFromLocalStore('user');
      if (user) {
        if (values.employeeId !== user.employeeId) {
          SweetAlert({
            title: 'Not Found',
            text: 'User Not Founf',
            icon: 'warning',
          });
        } else {
          if (values.password === user.password) {
            SweetAlert({
              title: 'Wohoo',
              text: 'Login Successfully',
              icon: 'success',
            });
            setTimeout(() => {
              setItemToSessionStore('employeeId', values.employeeId);
              window.location = '/board';
            }, 1000);
          } else {
            SweetAlert({
              title: 'Wrong Password',
              text: 'Password Not Match',
              icon: 'error',
            });
          }
        }
      } else {
        SweetAlert({
          title: 'Not Found',
          text: 'Employee Id Does Not Exist! Please Register',
          icon: 'error',
        });
      }
    },
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit} className='h-100 bg-primary'>
        <Row className='justify-content-center align-items-center h-100'>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h3 className='text-center mt-3'>
                  <b>LOGIN NOW</b>
                </h3>
                <h6 className='text-center my-4'>
                  IF YOU DON'T HAVE AN ACCOUNT?{' '}
                  <Link
                    to='/register'
                    variant='outline-primary'
                    className='text-primary'
                  >
                    Register
                  </Link>
                </h6>
                <hr className='mb-3' />
                <TextField
                  name='employeeId'
                  fieldName='Employee Id'
                  id='employeeId'
                  type='text'
                  required={true}
                  onChange={formik.handleChange}
                  value={formik.values.employeeId}
                  errors={formik.errors}
                  placeholder='Enter Employee Id'
                  className='mb-3'
                />
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name='password'
                  fieldName='Password'
                  type='password'
                  required={true}
                  className='mb-3'
                  placeholder='Enter Password'
                  errors={formik.errors}
                  id='password'
                />

                <div className='d-flex justify-content-center'>
                  <Button variant='outline-primary' size='md' type='submit'>
                    LOGIN
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </form>
    </Fragment>
  );
};
export default Login;
