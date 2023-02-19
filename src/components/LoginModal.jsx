import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// Initialize Firebase
// firebase.initializeApp({
//     apiKey: 'your-api-key',
//     authDomain: 'your-auth-domain',
//     projectId: 'your-project-id',
//     appId: 'your-app-id',
// });

 const LoginModal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleGoogleLogin() {
        // const provider = new firebase.auth.GoogleAuthProvider();
        try {
            // await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleAppleLogin() {
        // const provider = new firebase.auth.OAuthProvider('apple.com');
        try {
            // await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            // await firebase.auth().signInWithEmailAndPassword(username, password);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-4">Login</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                Username:
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password:
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                        <div className="mt-4">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleGoogleLogin}>
                                Login with Google
                            </button>
                        </div>
                        <div className="mt-4">
                            <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:shadow-outline" type="button" onClick={handleGoogleLogin}>
                                Login with Apple
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginModal