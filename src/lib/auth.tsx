// import { NextResponse } from "next/server";

export async function postLogin(login: string, token: string) {
  const body: string = JSON.stringify({ login });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_SERVER}auth/connection`,
    {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();

  return data;
}

export async function getLogin(login: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_SERVER}auth/connection?login=${login}`,
    {
      method: "GET",
    }
  );

  const data = await res.json();

  return data;
}
