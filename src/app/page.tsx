import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Цены"
          description="Настолько просто, насколько это возможно!"
        >
          <Pricing />
        </Section>

        <FAQ />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
