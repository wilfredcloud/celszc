import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Modal, Divider, Input, Select, Form, Button, Alert } from 'antd';
import { AiOutlineUser, AiOutlineLoading } from 'react-icons/ai';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

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
          <Login
            setAuthView={setAuthView}
            setShowLoginModal={setShowLoginModal}
          />
        ) : (
          <Register
            setAuthView={setAuthView}
            setShowLoginModal={setShowLoginModal}
          />
        )}
      </Modal>
    </>
  );
};

const Login = ({ setAuthView, setShowLoginModal }) => {
  let [email, setEmail] = useState('');

  const handleLogin = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="px-2 py-6">
      <h1 className=" text-3xl font-bold text-center mb-8">Join Service</h1>

      <Form onFinish={handleLogin}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
            {
              type: 'email',
              message: 'Please enter a valid email!',
            },
          ]}
          className="mb-4"
        >
          <Input
            type="email"
            size="large"
            placeholder="Email address"
            className=" p-3"
          />
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className="mt-4 rounded-md bg-amber-400 w-full
    p-3 text-base font-semibold leading-7
     text-white shadow-sm hover:bg-amber-300 
     focus-visible:outline focus-visible:outline-2 
     focus-visible:outline-offset-2 focus-visible:outline-amber-400 "
            onClick={() => {}}
          >
            JOIN
          </button>
        </Form.Item>
      </Form>

      <p className=" text-center">
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
        className=" rounded-md bg-blue-600 w-full
    p-3 text-base font-semibold leading-7
     text-white shadow-sm hover:bg-blue-700 
     focus-visible:outline focus-visible:outline-2 
     focus-visible:outline-offset-2 focus-visible:outline-blue-400 "
      >
        Login with Kingschat
      </button>
    </div>
  );
};

const Register = ({ setAuthView, setShowLoginModal }) => {
  const [loading, setLoading] = useState(false);
  const [createError, setCreateError] = useState('');
  const navigate = useNavigate();
  const password = 'password';

  const handleUserSignUp = async (formValues) => {
    setCreateError('');
    setLoading(true);
    const { email, fullname, phoneNumber, church } = formValues;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);

      await addDoc(collection(db, 'users'), {
        uid: userCredential.user.uid,
        fullname: fullname,
        email: email,
        phoneNumber: phoneNumber,
        church: church,
      });
    } catch (error) {
      if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
        setCreateError('An account already exist with this email');
      } else {
        setCreateError('Oop! something went wrong try again');
      }
      setLoading(false);
      return;
    }
    setLoading(false);
    setShowLoginModal(false);
    navigate('/watch');
  };

  const options = [
    {
      label: 'CE Isheri',
      options: [
        { label: 'Church 1', value: 'Church 1' },
        { label: 'Church 2', value: 'Church 2' },
        { label: 'Church 3', value: 'Church 3' },
      ],
    },
    {
      label: 'Others',
      options: [
        { label: 'CE Grace Arena', value: 'Grace Arena' },
        { label: 'CE Magboro', value: 'CE Magboro' },
        { label: 'Online', value: 'Online' },
        { label: 'None', value: 'None' },
      ],
    },
  ];

  return (
    <div className="px-2 py-6">
      <h1 className=" text-3xl font-bold text-center mb-8">Create Account</h1>
      {createError && (
        <Alert type="error" message={createError} className="mb-4 py-[12px]" />
      )}
      <Form onFinish={handleUserSignUp}>
        <Form.Item
          name="fullname"
          rules={[{ required: true, message: 'Please enter your fullname' }]}
          className=" mb-4"
        >
          <Input
            type="text"
            size="large"
            placeholder="Fullname"
            className=" p-3 "
          />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          rules={[
            { required: true, message: 'Please enter your phone number' },
          ]}
          className=" mb-4"
        >
          <Input
            type="text"
            size="large"
            placeholder="Phone number"
            className=" p-3 "
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
            {
              type: 'email',
              message: 'Please enter a valid email!',
            },
          ]}
          className="mb-4"
        >
          <Input
            type="email"
            size="large"
            placeholder="Email address"
            className=" p-3"
          />
        </Form.Item>

        <Form.Item
          name="church"
          rules={[
            {
              required: true,
              message: 'Please select your church!',
            },
          ]}
          className="mb-4"
        >
          <Select
            showSearch
            size="large"
            options={options}
            placeholder="Select your Church"
            className=" w-full "
          />
        </Form.Item>

        <button
          type="submit"
          className="mt-4 rounded-md bg-amber-400 w-full
    p-3 text-base font-semibold leading-7
     text-white shadow-sm hover:bg-amber-300 
     focus-visible:outline focus-visible:outline-2 
     focus-visible:outline-offset-2 focus-visible:outline-amber-400 disabled:bg-amber-200 disabled:cursor-wait
     flex flex-row justify-center items-center space-x-3"
          disabled={loading}
        >
          {loading ? (
            <AiOutlineLoading size={25} className="loaderIcon" />
          ) : (
            'CREATE'
          )}
        </button>
      </Form>

      <p className=" pt-3 text-center">
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
        className=" rounded-md bg-blue-600 w-full
    p-3 text-base font-semibold leading-7
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
