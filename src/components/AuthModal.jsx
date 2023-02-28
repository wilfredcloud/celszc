import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Modal, Divider, Input, Select } from 'antd';
import { AiOutlineUser } from 'react-icons/ai';

const AuthModal = () => {
  const { showLoginModal, setShowLoginModal } = useContext(AppContext);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [authView, setAuthView] = useState('login');

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
        {authView === 'login' ? (
          <Login setAuthView={setAuthView} />
        ) : (
          <Register setAuthView={setAuthView} />
        )}
      </Modal>
    </>
  );
};

const Login = ({ setAuthView }) => {
  return (
    <div className="px-2 py-6">
      <h1 className=" text-3xl font-bold text-center mb-8">Join Service</h1>

      <Input
        type="email"
        size="large"
        placeholder="Email address"
        className=" p-3 mb-4"
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
        <span
          className=" text-blue-600 hover:text-blue-800 cursor-pointer "
          onClick={() => setAuthView('create')}
        >
          Create account
        </span>
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

const Register = ({ setAuthView }) => {
  const { Option } = Select;

  const options = [
    {
      label: 'CE Isheri',
      options: [
        { label: 'Church 1', value: 'Church 1' },
        { label: 'Church 2', value: 'Church 1' },
        { label: 'Church 3', value: 'Church 3' },
      ],
    },
    {
      label: 'Others',
      options: [
        { label: 'CE Grace Arena', value: 'Grace Arena' },
        { label: 'CE Magboro', value: 'CE Magboro' },
      ],
    },
  ];

  return (
    <div className="px-2 py-6">
      <h1 className=" text-3xl font-bold text-center mb-8">Create Account</h1>

      <Input
        type="text"
        size="large"
        placeholder="Fullname"
        className=" p-3 mb-4"
      />
      <Input
        type="tel"
        size="large"
        placeholder="Phone number"
        className=" p-3 mb-4"
      />

      <Input
        type="email"
        size="large"
        placeholder="Email address"
        className=" p-3 mb-4"
      />

      <Select
        showSearch
        size="large"
        options={options}
        placeholder="Select your Church"
        className=" mb-4 w-full"
      />

      <button
        className="mt-4 rounded-md bg-amber-400 w-full
    p-3.5 text-base font-semibold leading-7
     text-white shadow-sm hover:bg-amber-300 
     focus-visible:outline focus-visible:outline-2 
     focus-visible:outline-offset-2 focus-visible:outline-amber-400 "
      >
        CREATE
      </button>

      <p className="py-2 text-center">
        I already have an account?{' '}
        <span
          className=" text-blue-600 hover:text-blue-400 cursor-pointer font-bold"
          onClick={() => setAuthView('login')}
        >
          Login
        </span>
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
