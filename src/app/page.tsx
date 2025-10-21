import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PredictiveMap from '@/components/PredictiveMap'
import AIPredictions from '@/components/AIPredictions'
import IQDriveIntegration from '@/components/IQDriveIntegration'
import HostDashboard from '@/components/HostDashboard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PredictiveMap />
      <AIPredictions />
      <IQDriveIntegration />
      <HostDashboard />
      <Footer />
    </div>
  )
}