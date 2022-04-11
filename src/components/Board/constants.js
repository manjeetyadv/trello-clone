import { getItemFromLocalStore } from '../../helpers/utils';

export const board = {
  cardData: [
    {
      Id: 'Task 1',
      Title: 'Task - 29009',
      Status: 'backlog',
      Summary: 'Performance improvements',
      Priority: 'High',
      Tags: 'Performance, Improvements',
      RankId: 1,
      dueDate:'Monday',
      Assignee: getItemFromLocalStore('user').fullName,
      image:
        'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      Id: 'Task 2',
      Title: 'Task - 29089',
      Status: 'backlog',
      Summary: 'Implement New Designs',
      Priority: 'High',
      Tags: 'Designs',
      dueDate:'Monday',
      RankId: 2,
      Assignee: getItemFromLocalStore('user').fullName,
    },
    {
      Id: 'Task 17',
      Title: 'Task - 29026',
      Status: 'ready',
      Summary: 'Design Navigation Changes',
      Priority: 'Critical',
      Tags: 'Navigation, Update',
      dueDate:'Monday',
      RankId: 2,
      Assignee: getItemFromLocalStore('user').fullName,
    },
    {
      Id: 'Task 17',
      Title: 'Task - 29027',
      Status: 'ready',
      Summary: 'Design Prototype',
      Priority: 'Critical',
      Tags: 'Design',
      dueDate:'Monday',
      RankId: 2,
      Assignee: getItemFromLocalStore('user').fullName,
    },
    {
      Id: 'Task 17',
      Title: 'Task - 29028',
      Status: 'ready',
      Summary: 'Website Redesign',
      Priority: 'Critical',
      dueDate:'Monday',
      Tags: 'Redesign, Website',
      RankId: 2,
      Assignee: getItemFromLocalStore('user').fullName,
    },
    {
      Id: 'Task 6',
      Title: 'Task - 29029',
      Status: 'inProgress',
      Summary: 'Build Social Sharing Functionality',
      Priority: 'Critical',
      Tags: 'New, Functionality',
      dueDate:'Monday',
      RankId: 2,
      Assignee: getItemFromLocalStore('user').fullName,
    },
    {
      Id: 'Task 15',
      Title: 'Task - 29024',
      Status: 'inProgress',
      Summary: 'Redesign Overview',
      Priority: 'Low',
      dueDate:'Monday',
      Tags: 'Redesign',
      RankId: 5,
      Assignee: getItemFromLocalStore('user').fullName,
    },
    {
      Id: 'Task 25',
      Title: 'Task - 29035',
      Status: 'done',
      Summary: 'Usability Testing',
      Priority: 'High',
      dueDate:'Monday',
      Tags: 'Testing',
      RankId: 6,
      Assignee: getItemFromLocalStore('user').fullName,
    },
    {
      Id: 'Task 25',
      Title: 'Task - 29045',
      Status: 'done',
      dueDate:'Monday',
      Summary: 'Introduce New Navigation',
      Priority: 'High',
      Tags: 'New Navigation',
      RankId: 6,
      Assignee: getItemFromLocalStore('user').fullName,
    },
  ],
};
