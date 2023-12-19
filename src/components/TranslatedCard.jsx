import { useState } from 'react';
import PropTypes from 'prop-types';

import countries from '../api/countries.js'
import ButtonsNavBar from './ButtonsNavBar.jsx';
import NavBar from './NavBar.jsx';
import Buttons from './Buttons.jsx';
import Down from '../images/Expand_down.svg'
import Arrow from '../images/Horizontal_top_left_main.svg'


function TranslatedCard () {

    const [language, setLanguage] = useState('fr');
    const text ='peo';
    

    const handleClickEnglish = () => {
        setLanguage('en');
    
    }

    const handleClickFrench = () => {
        setLanguage('fr');
        

    }

    const handleChangeMore = (e) => {
        const code = e.target.value;
        setLanguage(code);
       
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
                    <label className="flex">
                        <select name="more" onChange={handleChangeMore} className='input translatecard'>
                            {Object.entries(countries).map(([countryCode, countryName]) => (
                                <option key={countryCode} value={countryCode}>
                                    {countryName}
                                </option>
                            ))}
                        </select>
                        <img src={Down} alt="Down"/>
                    </label>
                </ButtonsNavBar>
                <img src={Arrow} alt="copy" className='border-2 border-bordercolor p-2 aspect-square rounded-xl cursor-pointer mr-1'/>
            </NavBar>
            <div className='w-full h-[200px] mb-5 text-textwhite font-bold text-[16px]'>
                {text}
            </div>

            <Buttons/>
        </section>
    );
} 

TranslatedCard.propTypes = {
    translation: PropTypes.shape({
      firstLanguage: PropTypes.string.isRequired,
      secondLanguage: PropTypes.string.isRequired,
      textToTranslate: PropTypes.string.isRequired,
      translatedText: PropTypes.string, // Puedes ajustar el tipo según tus necesidades
    }).isRequired,
  };

export default TranslatedCard;