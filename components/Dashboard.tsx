"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <img
            className="rounded-full h-20 w-20"
            src={session.user?.image as string}
          />
          <h1 className="text-3xl text-green-600 font-bold">
            Welcome back {session?.user?.name}
          </h1>
          <div className="text-green-600 font-bold">{session.user?.email}</div>
          <button
            onClick={() => signOut()}
            className="border border-clack rounded-lg bg-red-400 px-5 py-1"
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-red-500 font-bold">
            You're not logged in
          </h1>
          <div className="flex space-x-5">
            <button
              onClick={() => signIn("google")}
              className="border border-clack rounded-lg px-5 py-1"
            >
              Sign in with google
            </button>
            <button
              onClick={() => signIn("github")}
              className="border border-clack rounded-lg bg-green-500 px-5 py-1"
            >
              Sign in with github
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
