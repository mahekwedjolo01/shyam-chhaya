import { useState, useEffect } from 'react'
import { weddingData } from './weddingData'
import WeddingCard from './components/WeddingCard'
import Countdown from './components/Countdown'
import Events from './components/Events'
import PhotosVideos from './components/PhotosVideos'
import './App.css'

function App() {
  const { groomName, brideName, weddingDate, weddingTime, username, coupleImage, events, photos, videos } = weddingData;
  
  // Format date and time
  const date = new Date(`${weddingDate}T${weddingTime}`);
  const dayName = date.toLocaleDateString('en-GB', { weekday: 'long' });
  const formattedDate = date.toLocaleDateString('en-GB', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const formattedTime = date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div className="antialiased text-gray-800">
      <header className="p-6">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-center">
            <img src="/wedjolo-logo.png" alt="Wedjolo Films" className="h-16 mx-auto" style={{ mixBlendMode: 'multiply' }} />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 md:px-8">
        <WeddingCard 
          groomName={groomName}
          brideName={brideName}
          dayName={dayName}
          formattedDate={formattedDate}
          formattedTime={formattedTime}
          coupleImage={coupleImage}
        />
        
        <Countdown weddingDate={weddingDate} weddingTime={weddingTime} />
        
        <Events events={events} />
        
        <PhotosVideos photos={photos} videos={videos} />
      </main>
      
      <footer className="p-8 text-center text-pink-800">
        <p>Made with <span className="animate-heartbeat inline-block">❤️</span> for {groomName} & {brideName}</p>
      </footer>
    </div>
  )
}

export default App
