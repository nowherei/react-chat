import React from 'react';
import Header from '../Header';

import styles from './PageSettings.module.css';

import { user, button, fields } from './constants';
import imageUser from '../../images/user-setting.png';
import Icon from '../Icon';

const PageSettings = () => {
  return (
    <>
      <Header user={user} button={button} />
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.changeImage}>
            <figure className={styles.image}>
              <img src={imageUser} alt="" />
            </figure>
            <button className={styles.buttonChangePhoto}>Изменить фото</button>
          </div>
        </div>
        <div className={styles.content}>
          <form className={styles.form} action="">
            {fields.map(({ id, type, name, placeholder }) => {
              return (
                <div key={id} className={styles.field}>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={styles.input}
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
