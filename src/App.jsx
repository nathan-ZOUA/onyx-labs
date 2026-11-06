import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import OnyxHeroScene from './three/OnyxHeroScene';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <OnyxHeroScene theme={theme} />
      </main>
    </div>
  );
}
