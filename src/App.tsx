import React, { useState, useEffect } from 'react';
import type { IScreen } from './types/components.types';
import { getLibraryPage } from './data/dataEngine';
import { RenderScreen } from './components/RenderScreen';

function App() {
  const [screen, setScreen] = useState<IScreen | null>(null);

  useEffect(() => {
    // Simulamos la carga de datos
    const data = getLibraryPage();
    setScreen(data);
  }, []);

  if (!screen) return <p>Cargando biblioteca...</p>;

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <RenderScreen screenData={screen} />
    </div>
  );
}

export default App;