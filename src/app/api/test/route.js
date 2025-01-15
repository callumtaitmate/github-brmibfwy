import { NextResponse } from "next/server";

async function fetchTest() {
  const response = await fetch(
    "https://api.edamam.com/api/food-database/v2/parser?app_id=e7d0c9e0&app_key=0d3dae92f06d278e9ccba7a65ff864ac&ingr=bacon",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        app_id: "e7d0c9e0",
        app_key: "0d3dae92f06d278e9ccba7a65ff864ac",
      },
    }
  );

  const data = await response.json();
  return data;
}

export async function GET(request) {
  const test = await fetchTest();

  console.log(test);
  return NextResponse.json(test);
}
