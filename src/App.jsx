import translateApi from './api/translateApi';
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
  
  // Llama a la función de ejemplo
  exampleUsage();

  return (
    <div className="app">
      <h1>ola</h1>
    </div>
  )
}

export default App
