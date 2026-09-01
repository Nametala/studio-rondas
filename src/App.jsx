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
import { useCallback, useState } from 'react'
import { LogoReveal } from './components/LogoReveal'
import { introVaiAbrir } from './lib/intro'
import { useSmoothScroll } from './lib/useSmoothScroll'

function App() {
  useSmoothScroll()
  // O hero só entra quando a cortina começa a subir. Sem isso ele animava
  // escondido atrás dela e a intro revelava uma página já parada.
  const [heroLiberado, setHeroLiberado] = useState(() => !introVaiAbrir())
  const liberarHero = useCallback(() => setHeroLiberado(true), [])

  return (
    <>
      <LogoReveal onFim={liberarHero} />
      <a
        href="#main-content"
        className="sr-only rounded-full focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[60] focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content">
        <Hero pronto={heroLiberado} />
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
