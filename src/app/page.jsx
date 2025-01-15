"use client";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Home() {
  const supabase = createClientComponentClient();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to your To Do list
        </h1>
        <span className="text-gray-600 text-center block mb-8">
          Your personal space to manage your todos. Sign in to create, view,
          edit and delete your todos.
        </span>

        <Auth
          supabaseClient={supabase}
          view="magic_link"
          showLinks={false}
          providers={[]}
          redirectTo="/auth/callback"
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    </div>
  );
}
