
import { useTranslation } from './hooks/useTranslation';
import translateApi from './api/translateApi';

import TranslateCard from './components/TranslateCard';
import TranslatedCard from './components/TranslatedCard';

import './App.css'
import Logo from './images/logo.svg'

function App() {

  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useTranslation();


  async function Translator(firstLanguage, secondLanguage, textToTranslate) {
  
    try {
      const translatedText = await translateApi(firstLanguage, secondLanguage, textToTranslate);

      if (translatedText.responseData.detectedLanguage !== undefined) {
        setFromLanguage(translatedText.responseData.detectedLanguage);
      }

      setResult(translatedText.responseData.translatedText);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleTranslation = () => {
    Translator(fromLanguage, toLanguage, fromText);
  }

  return (
    <div className="mx-8 lg:mx-16">
      <header className='mb-10 mt-20 xl:mb-20 flex justify-center'>
        <img src={Logo} alt="logo" />
      </header>
      <main className='flex flex-col xl:flex-row justify-center gap-3'>
        <TranslateCard fromText={fromText} onSetText={setFromText} fromLanguage={fromLanguage} onSetLanguage={setFromLanguage} onTranslation={handleTranslation}/>
        <TranslatedCard text={result} toLanguage={toLanguage} onSetLanguage={setToLanguage} interchangeLanguages={interchangeLanguages}/>
      </main>
      
    </div>
  )
}

export default App
