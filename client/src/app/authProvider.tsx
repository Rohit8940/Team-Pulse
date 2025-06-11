import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
    },
  },
});

const formFields = {
  signUp: {
    username: {
      order: 1,
      placeholder: "Choose a username",
      label: "Username",
      inputProps: { required: true },
    },
    email: {
      order: 2,
      placeholder: "Enter your email address",
      label: "Email",
      inputProps: { type: "email", required: true },
    },
    password: {
      order: 3,
      placeholder: "Enter your password",
      label: "Password",
      inputProps: { type: "password", required: true },
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirm your password",
      label: "Confirm Password",
      inputProps: { type: "password", required: true },
    },
  },
};

const AuthProvider = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-200 p-4">
      <p className="mb-2 w-full text-center bg-gray-200 text-md text-black">
          <strong>Demo credentials:</strong><br />
          Username: <code className="">Admin</code><br />
          Password: <code className="">Admin@1234</code>
        </p>
      <div className="w-full max-w-md rounded-xl bg-gray-300 shadow-2xl">
        
        <Authenticator formFields={formFields}>
          {({ user }: any) =>
            user ? (
              <div>{children}</div>
            ) : (
              <div>
                <h1 className="mb-4 text-center text-xl font-semibold text-gray-700">
                  Please sign in below:
                </h1>
              </div>
            )
          }
        </Authenticator>
      </div>
    </div>
  );
};

export default AuthProvider;
