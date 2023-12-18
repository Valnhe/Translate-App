import translateApi from './api/translateApi';
import TranslateCard from './components/TranslateCard';

import './App.css'

function App() {

  async function exampleUsage() {
    const firstLanguage = 'en';
    const secondLanguage = 'es';
    const textToTranslate = 'Hello, world!';
  
    try {
      const translatedText = await translateApi(firstLanguage, secondLanguage, textToTranslate);
      console.log('Translated Text:', translatedText);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  exampleUsage();

  return (
    <div className="app">
      <TranslateCard />
    </div>
  )
}

export default App
