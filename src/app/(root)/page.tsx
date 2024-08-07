import Hero from './components/Hero';
import Biography from "./components/Biography";
import InvestorAcumen from "./components/InvestorAcumen";
import Publications from "./components/Publications";
import PersonalBlog from "./components/PersonalBlog";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Biography />
      <InvestorAcumen />
      <Publications />
      <PersonalBlog />
      <Contact />
    </>
  )
}
