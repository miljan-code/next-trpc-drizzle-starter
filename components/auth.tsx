"use client";

import { signIn, signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export const SignIn = () => {
  return <Button onClick={() => void signIn("google")}>Sign in</Button>;
};

export const SignOut = () => {
  return <Button onClick={() => void signOut()}>Sign out</Button>;
};
