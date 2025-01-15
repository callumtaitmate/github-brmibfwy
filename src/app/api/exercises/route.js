import { NextResponse } from "next/server";

async function fetchExercises(query) {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/exercises?name=${query}`,

    { method: "GET", headers: { "X-Api-Key": "yo4mmESoQnXlDA56ad+fmg==mv20vHeS5WXbi2bj" } }


  );

  const exercises = await response.json();
  return exercises;
}

export async function GET(request) {
  
    
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const exercises = await fetchExercises(query);
  return NextResponse.json(exercises);
}
