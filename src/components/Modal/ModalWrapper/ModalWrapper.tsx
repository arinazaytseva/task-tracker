import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const ModalWrapper: FC<PropsWithChildren> = ({ children }) => {
  return createPortal(children, document.body);
};

export default ModalWrapper;
