import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Modal, Divider } from 'antd';

const AuthModal = () => {
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
      <Modal
        open={showLoginModal}
        footer={null}
        onCancel={handleCancel}
        width={450}
      >
        <Login />
      </Modal>
    </>
  );
};

const Login = () => {
  return (
    <div className="px-2 py-6">
      <h1 className=" text-3xl font-bold text-center mb-8">Join Service</h1>

      <input
        type="email"
        className="form-input w-full p-3 rounded-lg
bg-transparent border border-gray-400 text-lg mb-4"
        placeholder="Registered email address"
      />

      <button
        className="mt-4 rounded-md bg-amber-400 w-full
    p-3.5 text-base font-semibold leading-7
     text-white shadow-sm hover:bg-amber-300 
     focus-visible:outline focus-visible:outline-2 
     focus-visible:outline-offset-2 focus-visible:outline-amber-400 "
      >
        JOIN
      </button>

      <p className="py-2 text-center">
        Do not have an account?{' '}
        <span className=" text-blue-600 font-bold">Create account</span>
      </p>
      <Divider plain>OR</Divider>

      <button
        className="mt-4 rounded-md bg-blue-600 w-full
    p-3.5 text-base font-semibold leading-7
     text-white shadow-sm hover:bg-blue-700 
     focus-visible:outline focus-visible:outline-2 
     focus-visible:outline-offset-2 focus-visible:outline-blue-400 "
      >
        Login with Kingschat
      </button>
    </div>
  );
};

export default AuthModal;
