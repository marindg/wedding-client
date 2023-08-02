// import { NextResponse } from "next/server";

export async function postLogin(login: string, password: string) {
  const body: string = JSON.stringify({ login: login, password: password });

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVER}auth/connection`, {
    method: "POST",
    body: body,
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  return data;
}

export async function getLogin(login: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_SERVER}auth/connection`, {
    method: "GET",
    // body: JSON.stringify({ password: "aze" }),
    body: "aze",
  });

  const data = await res.json();

  return data;
}
