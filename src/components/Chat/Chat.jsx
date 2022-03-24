import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container';
import Icon from '../Icon';
import MessageList from '../MessageList';
import { addMessage } from '../../redux/slices/allChatsSlice';
import { useParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import "simplebar/src/simplebar.css";

import styles from './Chat.module.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [scrollBottom, setScrollBottom] = useState(true);
  const { id: userId } = useSelector((state) => state.loggedInUser);
  const { chatId } = useParams();
  const simpleBar = useRef();
  
  // todo
  // 1. Как сделать лучше (scroll to bottom)?
  // 2. Альтернатива SimpleBar?
  useEffect(() => { 
    if (scrollBottom) {
      simpleBar.current.getScrollElement().scrollTop = simpleBar.current.getContentElement().offsetHeight;
      setScrollBottom(false);
    }
  }, [scrollBottom]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage({ userId, chatId: parseInt(chatId), message }));
    setMessage('');
    setScrollBottom(true);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.chat}>
          <SimpleBar className={styles.simpleBar} ref={simpleBar} autoHide={false}>
            <MessageList />
          </SimpleBar>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <input
              type="text"
              value={message}
              onChange={handleChangeMessage}
              className={styles.input}
              placeholder="Введите ваше сообщение"
            />
            <div className={styles.control}>
              <Icon name="emoji" />
              <Icon name="attachment" />
              <button className={styles.buttonSend} disabled={!message}>
                <Icon name="send" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Chat;
