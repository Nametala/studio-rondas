import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sobre } from './components/Sobre'
import { Diferenciais } from './components/Diferenciais'
import { Modalidades } from './components/Modalidades'
import { Equipe } from './components/Equipe'
import { Galeria } from './components/Galeria'
import { Localizacao } from './components/Localizacao'
import { ProvaSocial } from './components/ProvaSocial'
import { Footer } from './components/Footer'
import { WhatsAppFloatButton } from './components/WhatsAppButton'
import { LogoReveal } from './components/LogoReveal'
import { useSmoothScroll } from './lib/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <>
      <LogoReveal />
      <a
        href="#main-content"
        className="sr-only rounded-full focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[60] focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Sobre />
        <Diferenciais />
        <Modalidades />
        <Equipe />
        <Galeria />
        <Localizacao />
        <ProvaSocial />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}

export default App
