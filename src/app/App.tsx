import React from 'react';
import { ThemeProvider, TranslationsProvider } from 'src/app/providers';
import { AppRouter } from 'src/app/routing/ui/AppRouter';

function App() {
  return (
    <TranslationsProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </TranslationsProvider>
  );
}

export default App;
