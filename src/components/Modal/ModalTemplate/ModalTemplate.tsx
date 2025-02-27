import { FC, PropsWithChildren } from 'react';

import ModalWrapper from '../ModalWrapper/ModalWrapper';
import styles from './ModalTemplate.module.scss';

type Props = {
  isOpened: boolean;
  onClose: () => void;
} & PropsWithChildren;

const ModalTemplate: FC<Props> = (props) => {
  const { isOpened, onClose, children } = props;

  return isOpened ? (
    <ModalWrapper>
      <div
        className={styles.modalTemplate}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <div
          className={styles.modalTemplate__container}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </ModalWrapper>
  ) : null;
};

export default ModalTemplate;
