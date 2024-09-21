import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  console.log(formData);
  const results = formData.getAll("positive");
  console.log(results.length);
  return NextResponse.redirect(
    new URL(`/result?score=${results.length}`, req.url)
  );
}
