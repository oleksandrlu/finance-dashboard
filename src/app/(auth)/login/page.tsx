import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { GithubSignInButton } from "./sign-in-button";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
            ⚡
          </div>
          <span>Finance App</span>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-8">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <span className="text-3xl text-slate-500">👤</span>
            </div>
            <h1 className="text-xl font-semibold text-slate-900">
              Login to your account
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Use your GitHub account to continue.
            </p>
          </div>

          <GithubSignInButton />

          <p className="mt-4 text-center text-xs text-slate-400">
            By continuing, you agree to the Terms and Privacy Policy.
          </p>
        </div>
      </main>
    </div>
  );
}

