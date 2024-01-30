// 'use client'

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const SignIn = () => {
  const session = useSession();
  console.log(session);
  // if (session.status === "loading") {
  //   return <p>Loading...</p>;
  // }
  // if (session.status === "authenticated") {
  //   return <button onClick={() => signOut("google")}>Logout</button>;
  // }
  // if (session.status === "unauthenticated") {
  //   return (
  //     <p
  //       onClick={() => {
  //         console.log("hi");  
  //         signIn("google");
  //       }}
  //     >
  //       login
  //     </p>
  //   );
  // }
  return (
    <div>
      <button
        onClick={() => {
          signIn("google");
        }}
        className="text-blue-600 bg-slate-200 p-2 px-6 rounded-md"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
