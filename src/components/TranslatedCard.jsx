import PropTypes from 'prop-types';

import ButtonsNavBar from './ButtonsNavBar.jsx';
import NavBar from './NavBar.jsx';
import Buttons from './Buttons.jsx';

import countries from '../api/countries.js'
import Down from '../images/Expand_down.svg'
import Arrow from '../images/Horizontal_top_left_main.svg'


function TranslatedCard ({text, toLanguage, onSetLanguage , interchangeLanguages }) {	

    const language = toLanguage;
    const selectValue = language === 'en' || language === 'fr' ? 'es' : language;

    const handleClickEnglish = () => {
        onSetLanguage('en');
    }

    const handleClickFrench = () => {
        onSetLanguage('fr');
    }

    const handleChangeMore = (e) => {
        const code = e.target.value;
        onSetLanguage(code); 
    }

    return (
        <section className="bg-translatedcolor border border-bordercolor rounded-3xl w-full xl:w-1/2 p-5 text-[14px] mb-32 xl:mb-0">
            <NavBar>
                <ButtonsNavBar>
                    <button onClick={handleClickEnglish} className={`px-3 py-2 ml-1 ${language === 'en' ? 'active' : ''}`}>
                        English
                    </button>
                    <button onClick={handleClickFrench} className={`px-3 py-2 ${language === 'fr' ? 'active' : ''}`}>
                        French
                    </button>
                    <label className={`flex ${language !== 'autodetect' && language !== 'en' && language !== 'fr' ? 'active' : ''}`} >
                        <select name="more" className='input translatecard' onChange={handleChangeMore} value={selectValue}>
                            {Object.entries(countries).map(([countryCode, countryName]) => (
                                <option key={countryCode} value={countryCode} className='bg-translatedcolor'>
                                    {countryName}
                                </option>
                            ))}
                        </select>
                        <img src={Down} alt="Down"/>
                    </label>
                </ButtonsNavBar>
                <img src={Arrow} alt="Arrow" className='border-2 border-bordercolor p-2 aspect-square rounded-xl cursor-pointer mr-1' onClick={interchangeLanguages}/>
            </NavBar>

            <div className='w-full h-[200px] mb-5 text-textwhite font-bold text-[16px]'>
                {text}
            </div>
            
            <Buttons text={text} lenguage={toLanguage}/>
        </section>
    );
} 

TranslatedCard.propTypes = {
    text: PropTypes.string.isRequired,
    toLanguage: PropTypes.string.isRequired,
    onSetLanguage: PropTypes.func.isRequired,
    interchangeLanguages: PropTypes.func.isRequired
  };

export default TranslatedCard;