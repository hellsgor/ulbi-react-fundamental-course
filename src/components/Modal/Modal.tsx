import { FC, ReactNode } from 'react';
import classes from './Modal.module.css';

export interface ModalProps {
  children: ReactNode;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses: string[] = [classes.modal];

  if (visible) rootClasses.push(classes.modalActive);

  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.modalContent}>
        <button
          className={classes.modalClose}
          onClick={() => setVisible(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path>
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
};
