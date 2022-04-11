import React, { useState } from 'react';
import '@asseinfo/react-kanban/dist/styles.css';
// import BoardDetails from './details';
import { extend, addClass } from '@syncfusion/ej2-base';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { board } from './constants';
import { Col } from 'react-bootstrap';
import BoardDetails from './details';
const Boards = () => {
  const data = extend([], board.cardData, null, true);
  const fields = [
    { text: 'ID', key: 'Title', type: 'TextBox' },
    { key: 'Status', type: 'DropDown' },
    { key: 'Assignee', type: 'DropDown' },
    { key: 'RankId', type: 'TextBox' },
    { key: 'Summary', type: 'TextArea' },
    { key: 'dueDate', type: 'TextBox' },
  ];
  const cardRendered = (args) => {
    let val = args.data.Priority;
    addClass([args.element], val);
  };
  const columnTemplate = (props) => {
    return (
      <div className='header-template-wrap'>
        <div className={'header-icon e-icons ' + props.keyField}></div>
        <div className='header-text'>{props.headerText}</div>
      </div>
    );
  };

  const getString = (assignee) => {
    return assignee
      .match(/\b(\w)/g)
      .join('')
      .toUpperCase();
  };
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState({});
  const handleModal = (show) => setShow(show);

  const cardTemplate = (props) => {
    return (
      <div
        className={'card-template'}
        onClick={() => {
          handleModal(true);
          setDetails(props);
        }}
      >
        <div className='e-card-header'>
          <div className='e-card-header-caption'>
            <div className='d-flex'>
              <hr
                style={{
                  background:
                    '#' + (((1 << 24) * Math.random()) | 0).toString(16),
                }}
                className='e-card-hr'
              />
              <hr
                style={{
                  background:
                    '#' + (((1 << 24) * Math.random()) | 0).toString(16),
                }}
                className='e-card-hr'
              />
            </div>
            {props.image && (
              <img src={props.image} alt='' className='e-card-img' />
            )}
            <div className='e-card-header-title e-tooltip-text'>
              <i className='fa fa-check-circle' /> {props.Title}
            </div>
          </div>
        </div>
        <div className='e-card-content e-tooltip-text'>
          <div className='e-text'>{props.Summary}</div>
        </div>
        <div className='e-card-custom-footer'>
          {props.Tags.split(',').map((tag) => (
            <div
              className='e-card-tag-field e-tooltip-text'
              style={{
                background:
                  '#' + (((1 << 24) * Math.random()) | 0).toString(16),
                color: 'white',
              }}
            >
              {tag}
            </div>
          ))}
          <div className='e-card-avatar'>{getString(props.Assignee)}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='schedule-control-section'>
        <Col className='mt-4 container-fluid control-section'>
          <div className='control-wrapper'>
            <KanbanComponent
              id='kanban'
              cssClass='kanban-overview'
              keyField='Status'
              dataSource={data}
              enableTooltip={true}
              swimlaneSettings={{ keyField: 'Assignee' }}
              cardSettings={{
                headerField: 'Title',
                template: cardTemplate,
                selectionType: 'Multiple',
              }}
              dialogSettings={{ fields: fields }}
              cardRendered={cardRendered}
            >
              <ColumnsDirective>
                <ColumnDirective
                  headerText='Backlog'
                  keyField='backlog'
                  allowToggle={true}
                  template={columnTemplate}
                />
                <ColumnDirective
                  headerText='Ready'
                  keyField='ready'
                  allowToggle={true}
                  template={columnTemplate}
                />
                <ColumnDirective
                  headerText='In Progress'
                  keyField='inProgress'
                  allowToggle={true}
                  template={columnTemplate}
                />
                <ColumnDirective
                  headerText='Done'
                  keyField='done'
                  allowToggle={true}
                  template={columnTemplate}
                />
              </ColumnsDirective>
            </KanbanComponent>
          </div>
        </Col>
      </div>
      <BoardDetails show={show} handleModal={handleModal} details={details} />
    </>
  );
};
export default Boards;
