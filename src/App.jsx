import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Cover from './components/Cover';
import Invitation from './components/Invitation';
import './App.css';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setShowInvitation(true);
    
    // Play the background music
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set volume to 50%
      audioRef.current.play().catch(error => {
        console.log("Autoplay prevented by browser:", error);
      });
    }

    // Scroll to top when invitation opens
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <div className="app-root">
      <AnimatePresence mode="wait">
        {!showInvitation ? (
          <Cover key="cover" onOpen={handleOpen} />
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Invitation />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Background Audio */}
      <audio 
        ref={audioRef} 
        src="/music/background-music.mp4" 
        loop 
        autoPlay={false}
      />
    </div>
  );
}

export default App;
