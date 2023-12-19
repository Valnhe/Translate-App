
import Sound from '../images/sound.svg'
import Copy from '../images/Copy.svg'
import PropTypes from 'prop-types';

function Buttons ({text , lenguage}) {

    const VOICE_FOR_LANGUAGE = {
        en: 'en-GB',
        es: 'es-MX',
        de: 'de-DE'
      }

    const handleClipboard = () => {
        navigator.clipboard.writeText(text).catch(() => {})
    }

    const handleSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = VOICE_FOR_LANGUAGE[lenguage]
        utterance.rate = 0.9
        speechSynthesis.speak(utterance)
      }

    return (
        <>
            <ul className='flex gap-2'>
                <li className='border-2 border-bordercolor p-2 aspect-square w-3/2 h-auto rounded-xl cursor-pointer' onClick={handleSpeak}>
                    <img src={Sound} alt="sound" />
                </li>
                <li className='border-2 border-bordercolor p-2 aspect-square rounded-xl cursor-pointer' onClick={handleClipboard}>
                        <img src={Copy} alt="copy" />
                </li>
            </ul>
        </>
        

    )

} 

Buttons.propTypes = {
    text: PropTypes.string.isRequired,
    lenguage: PropTypes.string.isRequired,
  };

export default Buttons;



