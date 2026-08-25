import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sobre } from './components/Sobre'
import { Modalidades } from './components/Modalidades'
import { Equipe } from './components/Equipe'
import { Galeria } from './components/Galeria'
import { Localizacao } from './components/Localizacao'
import { ProvaSocial } from './components/ProvaSocial'
import { Footer } from './components/Footer'
import { WhatsAppFloatButton } from './components/WhatsAppButton'
import { ScrollProgress } from './components/ScrollProgress'
import { Marquee } from './components/Marquee'
import { site } from './config/site'

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee
          items={site.modalidades.map((m) => m.nome.toUpperCase())}
          className="bg-brand-blue-dark py-3 text-white/80"
        />
        <Sobre />
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
