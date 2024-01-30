"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
const Providers = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
