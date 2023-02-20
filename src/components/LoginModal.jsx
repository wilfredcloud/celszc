import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Modal, Divider } from 'antd';

const LoginModal = () => {
  const { showLoginModal, setShowLoginModal } = useContext(AppContext);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
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
      <Modal open={showLoginModal} footer={null} onCancel={handleCancel}>
        <div className="p-2">
          <h1 className=" text-2xl font-medium mb-8">Login to participate</h1>

          <input
            type="email"
            className="form-input w-full p-3.5 rounded-lg
 bg-transparent border border-gray-400 text-lg"
            placeholder="Email Address"
          />

          <button
            className="mt-4 rounded-md bg-blue-800 w-full
          p-3.5 text-base font-semibold leading-7
           text-white shadow-sm hover:bg-blue-700 
           focus-visible:outline focus-visible:outline-2 
           focus-visible:outline-offset-2 focus-visible:outline-blue-400 "
          >
            LOGIN
          </button>

          <Divider plain>OR</Divider>

          <button
            className="mt-4 rounded-md bg-blue-600 w-full
          p-3.5 text-base font-semibold leading-7
           text-white shadow-sm hover:bg-blue-700 
           focus-visible:outline focus-visible:outline-2 
           focus-visible:outline-offset-2 focus-visible:outline-blue-400 "
          >
            Login With Kingschat
          </button>

          <button
            className="mt-4 rounded-md bg-amber-400 w-full
          p-3.5 text-base font-semibold leading-7
           text-white shadow-sm hover:bg-amber-300 
           focus-visible:outline focus-visible:outline-2 
           focus-visible:outline-offset-2 focus-visible:outline-amber-400 "
          >
            Login With Google
          </button>

          <button
            className="mt-4 rounded-md bg-gray-800 w-full
          p-3.5 text-base font-semibold leading-7
           text-white shadow-sm hover:bg-gray-700 
           focus-visible:outline focus-visible:outline-2 
           focus-visible:outline-offset-2 focus-visible:outline-gray-400 "
          >
            Login With Apple
          </button>
        </div>
      </Modal>
    </>
  );
};
export default LoginModal;
