import { useState } from 'react';

import translateApi from './api/translateApi';

import TranslateCard from './components/TranslateCard';
import TranslatedCard from './components/TranslatedCard';

import './App.css'
import Logo from './images/logo.svg'

function App() {

  const [translation, setTranslation] = useState({
    firstLanguage: 'en',
    secondLanguage: 'es',
    textToTranslate: 'Hello, how are you?',
  });

  async function Translator(firstLanguage, secondLanguage, textToTranslate) {
  
    try {
      const translatedText = await translateApi(firstLanguage, secondLanguage, textToTranslate);
      setTranslation({
        ...translation,
        translatedText: translatedText,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="mx-8 lg:mx-16">
      <header className='mb-10 mt-20 xl:mb-20 flex justify-center'>
        <img src={Logo} alt="logo" />
      </header>
      <main className='flex flex-col xl:flex-row justify-center gap-3'>
        <TranslateCard  onTranslate= {Translator}/>
        <TranslatedCard translation={translation}/>
      </main>
      
    </div>
  )
}

export default App
