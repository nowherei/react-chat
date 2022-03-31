export const users = [
  {
    id: 1,
    name: 'admin',
    surname: 'admin',
    email: 'admin@mail.ru',
    password: 'admin',
    image: 'https://images.generated.photos/2jWLSY7gAiFiG2KImvc7I0afHIsscSUqNbjGNT0EpSM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc1MTYxLmpwZw.jpg',
  },
  {
    id: 2,
    name: 'test',
    surname: 'test',
    email: 'test@test.test',
    password: 'test',
    image: 'https://images.generated.photos/PqG7pD-M2iGfE-45c8rd7994LSNnuBkdKoqU_899OBA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTY2NDU2LmpwZw.jpg',
  },
  {
    id: 3,
    name: 'Petr',
    surname: 'Petrov',
    email: 'petr@mail.ru',
    password: '123',
    image: 'https://images.generated.photos/NSPTc-NnlMItqA1oEObXZ5k1uVnfbqw2GkCCZma4g9E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NjIzODk3LmpwZw.jpg',
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
