"use client";

import Spline from "@splinetool/react-spline";
import React from "react";
import "./globals.css";
import type { Metadata } from "next";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Spline scene="https://prod.spline.design/n66COpNj2gqSKfU1/scene.splinecode" />
    </div>
  );
}
