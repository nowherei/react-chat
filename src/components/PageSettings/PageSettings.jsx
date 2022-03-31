import React, { useMemo, useState } from 'react';
import Header from '../Header';

import styles from './PageSettings.module.css';

import { button, fields } from './constants';
import Icon from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { change as changeLoggedInUser } from '../../redux/slices/loggedInUserSlice';
import { change as changeAllUsers } from '../../redux/slices/allUsersSlice';
import { createPortal } from 'react-dom';
import Modal from '../Modal';

import userDefault from '../../images/user-default-2.png';

const PageSettings = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const [user, setUser] = useState(loggedInUser);
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState('');

  const handleInputChange = (name) => {
    return (event) => {
      setUser({ ...user, [name]: event.target.value });
    };
  };

  const modalPortal = useMemo(() => {
    const handleChangeImageSubmit = async (event) => {
      event.preventDefault();
      if (!newImage) {
        alert('Ошибка! Укажите адрес картинки');
        return null;
      }

      try {
        new URL(newImage);
      } catch (e) {
        alert('Ошибка! Не корректный адрес картинки');
        return null;  
      }

      const response = await fetch(newImage);
      

      if (!response.ok) {
        alert('Ошибка! Данная картинка не доступна');
        return null;
      }

      let contentType = response.headers.get('Content-Type');

      if (!['image/jpeg', 'image/png'].includes(contentType)) {
        alert(`Ошибка! ${contentType} данный формат не поддерживается`);
        return null;
      }

      setUser({ ...user, image: newImage });
      setNewImage('');
      setShowModal(false);
    }
    const bodyElem = document.querySelector('body');
    const modal = (
      <Modal
        handleClose={() => setShowModal(false)}
        title="Загрузите изображение"
      >
        <form action="#" onSubmit={handleChangeImageSubmit}>
          <input
            className={styles.inputChangeImage}
            placeholder="Укажите адрес картинки"
            name="image"
            value={newImage}
            onChange={(event) => setNewImage(event.target.value)}
          />
          <button className={styles.buttonChangeImage}>Загрузить</button>
        </form>
      </Modal>
    );
    return createPortal(modal, bodyElem);
  }, [newImage, user]);

  const handleSave = (event) => {
    event.preventDefault();
    const similarEmailUser = allUsers.find((item) => item.email === user.email);
    if (similarEmailUser && similarEmailUser.id !== user.id) {
      alert(`Ошибка! Email ${user.email} занят.`);
      return null;
    }
    dispatch(changeLoggedInUser(user));
    dispatch(changeAllUsers(user));
    alert('Изменения сохранены');
  };

  button.onClick = handleSave;

  return (
    <>
      {showModal ? modalPortal : null}
      <Header button={button} />
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.changeImage}>
            <figure className={styles.image}>
              <img src={user.image ? user.image : userDefault} alt="" />
            </figure>
            <button
              className={styles.buttonChangePhoto}
              onClick={() => setShowModal(true)}
            >
              Изменить фото
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <form className={styles.form} action="" onSubmit={handleSave}>
            {fields.map(({ id, type, name, placeholder }) => {
              return (
                <div key={id} className={styles.field}>
                  <input
                    type={type}
                    name={name}
                    value={user[name]}
                    placeholder={placeholder}
                    className={styles.input}
                    onChange={handleInputChange(name)}
                  />
                  <div className={styles.fieldIcon}>
                    <Icon name="edit" />
                  </div>
                </div>
              );
            })}
            <button className={styles.buttonSave}>Сохранить изменения</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default PageSettings;
