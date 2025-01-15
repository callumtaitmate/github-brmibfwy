import type { Metadata } from "next";
import './globals.css';
import Planner from "./planner/page";

export const metadata: Metadata = {
  title: "mealbudget.pro",
  description: "No Frills Meal and Workout Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><Planner /></body>
    </html>
  );
}