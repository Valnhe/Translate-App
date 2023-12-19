import { useState } from 'react';
import PropTypes from 'prop-types';

import '../App.css'

import countries from '../api/countries.js'
import ButtonsNavBar from './ButtonsNavBar.jsx';
import NavBar from './NavBar.jsx';
import Buttons from './Buttons.jsx';

import Sort from '../images/Sort_alfa.svg'
import Down from '../images/Expand_down.svg'


function TranslateCard ({onSetLanguage}) {

    const language = 'en';
    const [text, setText] = useState('hello');

    const handleClickDetect = () => {
        onSetLanguage('all');
    }

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

    const handleTextChange = (e) => {
        const text = e.target.value;
        setText(text);
    }

    return (
        <section className='bg-translatecolor border border-bordercolor rounded-3xl w-full xl:w-1/2 p-5 text-[14px]'>
            <NavBar>
                <ButtonsNavBar>
                    <button onClick={handleClickDetect} className={`px-3 py-2 ml-1 ${language === 'all' ? 'active' : ''}`} >
                        Detect Language
                    </button>

                    <button onClick={handleClickEnglish} className={`px-3 py-2 ${language === 'en' ? 'active' : ''}`}>
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
            </NavBar>
            
            <textarea className='textarea' name="translate-text" placeholder="Translation" maxLength="500" value={text} onChange={handleTextChange}>
            </textarea>
            
            <p className='text-[12px] text-theothergraycolor float-right mb-2'>19/500</p>

            <div className='flex justify-between items-end w-full'>
                <Buttons/>
                <button className='flex justify-center gap-2 border bg-buttonblue border-borderblue text-textwhite font-bold text-[16px] py-3 px-5 rounded-xl'>
                    <img src={Sort} alt="sort" />
                    Translate
                </button>
            </div>
        </section>
    )

} 

TranslateCard.propTypes = {
    onSetLanguage: PropTypes.func.isRequired,
  };

export default TranslateCard;