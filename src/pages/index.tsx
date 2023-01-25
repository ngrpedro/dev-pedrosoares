import Hero from "@/components/homeSections/hero";
import NewsLetter from "@/components/homeSections/newsLetter";
import Projects from "@/components/homeSections/projects";
import PurposeCards from "@/components/homeSections/purposeCards";
import SplitSection from "@/components/homeSections/splitSection";
import Testimonials from "@/components/homeSections/testionails";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Soares | Home</title>
        <link rel="icon" href="/logo-mini.svg" />
      </Head>
      <>
        <Hero />
        <PurposeCards />
        <SplitSection />
        <Projects />
        <Testimonials />
        <NewsLetter />
      </>
    </>
  );
}
