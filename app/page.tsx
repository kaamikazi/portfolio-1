import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";

/**
 * The whole one-page site. Each section is its own component in /components,
 * and all the text/data comes from /data. Reorder sections by moving lines here.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
