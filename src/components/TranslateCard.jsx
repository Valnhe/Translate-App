import { useState } from 'react';

import countries from '../api/countries.js'

import Sound from '../images/sound.svg'
import Copy from '../images/Copy.svg'
import Sort from '../images/Sort_alfa.svg'


function TranslateCard () {

    const [language, setLanguage] = useState('en');

    const handleClickDetect = () => {
        setLanguage('all');
        console.log('Detect Language');
    }

    const handleClickEnglish = () => {
        setLanguage('en');
        console.log('English');
    }

    const handleClickFrench = () => {
        setLanguage('fr');
        console.log('French');
    }

    const handleClickMore = (code) => {
        setLanguage(code);
        console.log(code);
    }

    return (
        <section>
            <nav className=''>
                <button onClick={handleClickDetect} className={language === 'all' ? 'active' : ''} >
                    Detect Language
                </button>
                <button onClick={handleClickEnglish}>
                    English
                </button>
                <button onClick={handleClickFrench}>
                    French
                </button>
                <select name="more">
                    {Object.entries(countries).map(([countryCode, countryName]) => (
                        <option key={countryCode} value={countryCode} onClick={() => handleClickMore(countryCode)}>
                            {countryName}
                        </option>
                    ))}
                </select>

            </nav>
            
            <textarea name="translate-text" cols="30" rows="10" placeholder="Translation">
                Hello, how are you!
            </textarea>
            
            <ul>
                <li>
                    <img src={Sound} alt="sound" />
                </li>
                <li>
                    <img src={Copy} alt="copy" />
                </li>
            </ul>
            <button className='flex justify-center'>
                <img src={Sort} alt="sort" />
                Translate
            </button>
        </section>
    )

} export default TranslateCard;