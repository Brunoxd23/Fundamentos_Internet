import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Topics from "../components/Topics";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Footer />
    </main>
  );
}
