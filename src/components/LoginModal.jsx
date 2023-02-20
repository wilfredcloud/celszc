import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Modal } from 'antd';

const LoginModal = () => {
  const { showLoginModal, setShowLoginModal } = useContext(AppContext);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setShowLoginModal(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setShowLoginModal(false);
  };
  return (
    <>
      <Modal
        title="Title"
        open={showLoginModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default LoginModal;
