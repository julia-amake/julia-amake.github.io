import React from 'react';
import { ThemeProvider, TranslationsProvider } from 'src/app/providers';
import { About } from 'src/homeworks/intro';

function App() {
  return (
    <TranslationsProvider>
      <ThemeProvider>
        <About />
      </ThemeProvider>
    </TranslationsProvider>
  );
}

export default App;
