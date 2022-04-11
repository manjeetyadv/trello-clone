import { Badge, Card, Col, FormControl, Offcanvas, Row } from 'react-bootstrap';
const BoardDetails = (props) => {
  const { show, handleModal, details = {} } = props;
  return (
    <>
      <Offcanvas
        show={show}
        onHide={() => handleModal(false)}
        placement='end'
        size={'lg'}
        backdrop
        scroll
      >
        <Card className='rounded-0'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='w-100'>
              <div className='d-flex justify-content-between align-items-center'>
                <Card className='px-3'>
                  <div className='d-flex align-items-center'>
                    <i className='fa fa-check' />
                    {details.Priority}
                  </div>
                </Card>
              </div>
            </Offcanvas.Title>
            <div className='d-flex d-none d-lg-block'>
              <i className='mx-2 fa fa-clipboard' />
              <i className='mx-2 fa fa-paperclip' />
              <i className='mx-2 fa fa-plug' />
              <i className='mx-2 fa fa-thumbs-up' />
              <i className='mx-2 fa fa-ellipsis-h' />
            </div>
          </Offcanvas.Header>
        </Card>
        <Offcanvas.Body className='p-0'>
          <h3 className='ps-4 mt-4 '>{details.Title}</h3>
          <Row className='mt-4 ps-4 '>
            <Col sm={3} className='p-0 mt-4'>
              <h6>Asignee</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b>{details.Assignee}</b>
            </Col>
            <Col sm={3} className='p-0 mt-4'>
              <h6> Due date</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b>
                <i className='fa fa-calendar-o me-2' />
                {details.dueDate}
              </b>
            </Col>
            <Col sm={3} className='p-0 mt-4'>
              <h6>Tags</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b className='d-flex'>
                {details.Tags?.split(',').map((tag) => (
                  <div
                    className='tag-field'
                    style={{
                      background:
                        '#' + (((1 << 24) * Math.random()) | 0).toString(16),
                      color: 'white',
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </b>
            </Col>
            <Col sm={3} className='p-0 mt-4'>
              <h6>Stage</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b>
                <Badge bg='primary text-uppercase'>{details.Status}</Badge>
              </b>
            </Col>
            <Col sm={3} className='p-0 mt-4'>
              <h6>Description</h6>
            </Col>
            <Col sm={9} className='p-0 mt-4'>
              <b>{details.Summary}</b>
            </Col>
          </Row>
          <div className='board-details-footer'>
            <div className='d-flex justify-content-start'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkT9Q2njLzuuo2v4GdCRzIQT7F_1LWVeJehhQ4dBpBWD9n8ZG74vCrlwcrmCwMVSx5NLk&usqp=CAU'
                alt=''
                className='avatar-img my-3 mx-2'
              />
              <div className='d-flex flex-column my-3 mx-2'>
                <p className='mb-0 d-flex align-items-center'>
                  <h5 className='me-2'>
                    <b>Zoe Wong</b>
                  </h5>{' '}
                  <small> 1 hour ago</small>
                </p>
                <p className='mb-0'>
                  Thank you! I will take a look at this tomorrow.
                </p>
              </div>
            </div>
            <div className='d-flex justify-content-start'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtajPYj-xBY-LijVF6Paw8VhorLAD0lCmMDR1SpVXIAVBlwbIWNy_EW5CFAiiZJyqZe34&usqp=CAU'
                alt=''
                className='avatar-img my-3 mx-2'
              />
              <div className='d-flex flex-column my-3 mx-2 w-100'>
                <FormControl
                  type='search'
                  placeholder='Ask a question or post an update'
                  aria-label='Search'
                  className='w-75'
                />
                <div className='d-flex'>
                  <small className='my-2 me-2'>Collaborators</small>
                  <img
                    src='https://w7.pngwing.com/pngs/495/196/png-transparent-avatar-beak-black-cute-emotion-face-flat-grey-head-icon.png'
                    alt=''
                    className='avatar-img m-0 p-1'
                  />{' '}
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/9/97/Penguin.png'
                    alt=''
                    className='avatar-img m-0 p-1'
                  />{' '}
                  <img
                    src='https://www.clipartmax.com/png/middle/335-3356824_king-penguin-clipart-penguin-face-cartoon.png'
                    alt=''
                    className='avatar-img m-0 p-1'
                  />{' '}
                  <img
                    src='https://cdn.imgbin.com/10/18/1/imgbin-little-penguin-bird-face-funny-cartoon-faces-s-pwRiihZYLaxCThQzSkgFM0RSF.jpg'
                    alt=''
                    className='avatar-img m-0 p-1'
                  />
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BoardDetails;
