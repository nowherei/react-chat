import Icon from '../Icon';

import userImage from '../../images/user-3.png';

export const user = {
  name: 'Username',
  image: userImage,
};

export const button = {
  text: 'Сохранить',
  icon: <Icon name="save" />,
};

export const fields = [
  {
    id: 1,
    type: 'text',
    name: 'name',
    placeholder: 'Имя',
  },
  {
    id: 2,
    type: 'text',
    name: 'surname',
    placeholder: 'Фамилия',
  },
  {
    id: 3,
    type: 'email',
    name: 'email',
    placeholder: 'Email',
  },
]