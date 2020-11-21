import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = ({ dialogs, messages }) => {
  return (
    <div>
      <h3 className={styles.title}>Dialogs</h3>
      <div className={styles.dialogs}>
        <div className={styles.dialogItems}>
          {dialogs.map(dialog => (
            <DialogItem name={dialog.name} id={dialog.id} />
          ))}
        </div>
        <div className={styles.messages}>
          {messages.map(message => (
            <Message message={message.message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
