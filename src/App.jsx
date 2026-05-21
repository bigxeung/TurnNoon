import Nav from './components/Nav'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Features from './components/Features'
import Team from './components/Team'
import Characteristics from './components/Characteristics'
import Tech from './components/Tech'
import Market from './components/Market'
import Finance, { FundingPlan } from './components/Finance'
import IncomeStatement from './components/IncomeStatement'
import Schedule from './components/Schedule'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Overview />
      <Features />
      <Team />
      <Characteristics />
      <Tech />
      <Market />
      <Finance />
      <FundingPlan />
      <IncomeStatement />
      <Schedule />
      <CTA />
      <Footer />
    </>
  )
}
