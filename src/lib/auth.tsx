// import { NextResponse } from "next/server";

export async function createLogin(login: string, token: string) {
  const body: string = JSON.stringify({ login });

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVER}auth/connection/create`, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data;
}

export async function signInByLogin(login: string) {
  const body: string = JSON.stringify({ login });
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVER}auth/connection/login`, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data;
}

export async function signInByToken(token: string) {
  const body: string = JSON.stringify({ token });

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVER}auth/connection/token`, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data;
}
