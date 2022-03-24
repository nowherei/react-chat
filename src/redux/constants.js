import imageUser_1 from '../images/user.png';
import imageUser_2 from '../images/user-2.png';
import imageUser_3 from '../images/user-3.png';

export const users = [
  {
    id: 1,
    name: 'admin',
    surname: 'admin',
    email: 'admin@mail.ru',
    password: 'admin',
    image: imageUser_1,
  },
  {
    id: 2,
    name: 'test',
    surname: 'test',
    email: 'test@test.test',
    password: 'test',
    image: imageUser_2,
  },
  {
    id: 3,
    name: 'Petr',
    surname: 'Petrov',
    email: 'petr@mail.ru',
    password: '123',
    image: imageUser_3,
  },
];

export const chats = [
  {
    id: 1,
    name: 'admin & test',
    userIds: [1, 2],
    history: [
      {
        id: 1,
        userId: 1,
        time: new Date('2022-01-01T10:20:00').getTime(),
        message:
          '1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
      },
      {
        id: 2,
        userId: 2,
        time: new Date('2022-01-01T10:30:00').getTime(),
        message:
          '2 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        id: 3,
        userId: 2,
        time: new Date('2022-01-01T10:40:00').getTime(),
        message:
          '3 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        id: 4,
        userId: 1,
        time: new Date('2022-01-01T10:45:00').getTime(),
        message:
          '4 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        id: 5,
        userId: 1,
        time: new Date('2022-01-01T10:50:00').getTime(),
        message:
          '5 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
    ],
  },
  {
    id: 2,
    name: 'admin & Petr',
    userIds: [1, 3],
    history: [
      {
        id: 1,
        userId: 1,
        time: new Date('2022-01-01T10:20:00').getTime(),
        message:
          '1_1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
      },
      {
        id: 2,
        userId: 3,
        time: new Date('2022-01-01T10:30:00').getTime(),
        message:
          '3_1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        id: 3,
        userId: 3,
        time: new Date('2022-01-01T10:40:00').getTime(),
        message:
          '3_2 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        id: 4,
        userId: 1,
        time: new Date('2022-01-01T10:45:00').getTime(),
        message:
          '1_2 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
      {
        id: 5,
        userId: 1,
        time: new Date('2022-01-02T01:05:00').getTime(),
        message:
          '1_3 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      },
    ],
  },
  {
    id: 3,
    name: 'General chat',
    userIds: [],
    history: [],
  },
];
