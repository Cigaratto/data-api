import { aggregateData } from "@/app/utils/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const json = await response.json();
  const data = aggregateData(json.users);

  return NextResponse.json(data);
};

