import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

export const AuthWrapper: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  if (isLogin) {
    return (
      <div>
        <LoginForm />
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => setIsLogin(false)}
            className="text-white hover:text-blue-200 underline"
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SignUpForm />
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => setIsLogin(true)}
          className="text-white hover:text-teal-200 underline"
        >
          Already have an account? Sign in
        </button>
      </div>
    </div>
  );
};
