import React, { Fragment } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextField from '../../reusables/TextField';
import { useHistory } from 'react-router-dom';
import SweetAlert from '../../helpers/Alert';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import { setItemToLocalStore } from '../../helpers/utils';

const Register = () => {
  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short')
      .max(70, 'Too Long')
      .required('Name is required'),
    employeeId: Yup.string().required('Employee Id is required'),
    password: Yup.string()
      .min(2, 'Too Short')
      .max(70, 'Too Long')
      .required('Password is required'),
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      employeeId: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      setItemToLocalStore('user', values);
      SweetAlert({
        title: 'Wohoo',
        text: 'Register Successfully',
        icon: 'success',
      });
      setTimeout(() => {
        history.push('/login');
        swal.close();
      }, 1000);
    },
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit} className='h-100'>
        <Row className='justify-content-center align-items-center h-100 bg-primary'>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h3 className='text-center mt-3'>
                  <b>RESGISTER NOW</b>
                </h3>
                <h6 className='text-center my-4'>
                  ALREADY HAVE AN ACCOUNT?{' '}
                  <Link
                    to='/login'
                    variant='outline-primary'
                    className='text-primary'
                  >
                    Login
                  </Link>
                </h6>
                <hr className='mb-3' />
                <TextField
                  name='fullName'
                  fieldName='Full Name'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  errors={formik.errors}
                  id='fullName'
                  className='mb-3'
                  placeholder='Enter Name'
                />
                <TextField
                  name='employeeId'
                  fieldName='Employee Id'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.employeeId}
                  errors={formik.errors}
                  id='employeeId'
                  required={true}
                  className='mb-3'
                  placeholder='Enter Employee Id'
                />
                <TextField
                  name='password'
                  fieldName='Password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  errors={formik.errors}
                  id='password'
                  type='password'
                  required={true}
                  className='mb-3'
                  placeholder='Enter Password'
                />

                <div className='d-flex justify-content-center'>
                  <Button variant='outline-primary' size='md' type='submit'>
                    REGISTER
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
export default Register;
