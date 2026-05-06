import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Cover from './components/Cover';
import Invitation from './components/Invitation';
import './App.css';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  const handleOpen = () => {
    setShowInvitation(true);
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
    </div>
  );
}

export default App;
