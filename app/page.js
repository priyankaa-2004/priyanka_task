"use client"
import React, { useState } from 'react';
import ProfilePage from './Profile';

const SignInSignUpForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName && email && password) {
            setIsLoggedIn(true);
        } else {
            setError('Please fill in all fields');
        }

    };

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
        setError('');
        setEmail('');
        setPassword('');
        setFullName('');
    };

    return (
        <>
            {isLoggedIn ? (
                <ProfilePage fullName={fullName} email={email} />
            ) : (
            <div className="center">
                <div className="min-h-screen flex flex-col font-mono items-center justify-center container">
                    <h1 className='font-bold text-center text-6xl mb-10'>WELCOME TO CIPHER</h1>
                    <div className="max-w-md w-full space-y-8 signin-container">
                        <div>
                            <h2 className="mt-4 text-center text-3xl font-extrabold text-white-900">{isSignIn ? 'Sign in' : 'Sign up'}</h2>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                    <label htmlFor="fullName" className="sr-only">Full Name</label>
                                    <input type="text" id="Full name" autoComplete="name" required className="w-full px-3 py-2 border-2 border-gray-300  text-gray-900 rounded-t-md focus:outline-none focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email address</label>
                                    <input type="email" autoComplete="email" required className="w-full px-3 py-2 border-2 border-gray-300  text-gray-900 focus:outline-none focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password" autoComplete="current-password" required className="w-full px-3 py-2 border-2 border-gray-300  text-gray-900 rounded-b-md focus:outline-none focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-green-600 hover:text-green-500">Forgot your password?</a>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    {isSignIn ? 'Sign in' : 'Sign up'}
                                </button>
                                {error && <p className="text-red-500 text-s font-semibold mt-2">{error}</p>}
                            </div>
                        </form>
                        <div className="text-center">
                            <p className="text-sm">
                                {isSignIn ? 'Don\'t have an account?' : 'Already have an account?'}
                                <button className="ml-1 text-green-600 hover:text-green-500" onClick={toggleForm}>
                                    {isSignIn ? 'Sign up' : 'Sign in'}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
};

export default SignInSignUpForm;
