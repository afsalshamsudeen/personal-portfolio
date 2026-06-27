import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-base text-text-1">
      {/* Fixed decorative backgrounds */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-grid pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />

      {/* App shell */}
      <div className="relative z-10">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </div>
  )
}
