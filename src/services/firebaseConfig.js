import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA2heeowusatM38bO7cwZXvu9r7EfoTJec',
  authDomain: 'celszc-62c08.firebaseapp.com',
  projectId: 'celszc-62c08',
  storageBucket: 'celszc-62c08.appspot.com',
  messagingSenderId: '1005889426762',
  appId: '1:1005889426762:web:50940d1456bac06d885db3',
  measurementId: 'G-2T2XMXMJ1K',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics };
