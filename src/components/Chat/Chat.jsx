import React from 'react';
import Container from '../Container';
import Icon from '../Icon';

import styles from './Chat.module.css';

const Chat = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.chat}></div>
        <form className={styles.form} action="">
          <div className={styles.field}>
            <input type="text" className={styles.input} placeholder="Введите ваше сообщение" />
            <div className={styles.control}>
              <Icon name='emoji' />
              <Icon name='attachment' />
              <button className={styles.buttonSend}>
                <Icon name='send' />
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Chat;
