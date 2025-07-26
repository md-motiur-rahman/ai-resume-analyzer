import React, { useEffect } from "react";
import type { Route } from "./+types/home";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAI | Auth" },
    { name: "description", content: "Log In to your ResumeAI account" },
  ];
}

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1]
  const navigate = useNavigate()

  useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center text-center gap-2">
            <h1>Welcome</h1>
            <h2>Log In to continue your Job Journey</h2>
          </div>
          <div className="">
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>Signing you in</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={() => auth.signOut}>
                    <p>Logout</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={() => auth.signIn()}>
                    <p>Login</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
