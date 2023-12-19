
import Sound from '../images/sound.svg'
import Copy from '../images/Copy.svg'

function Buttons () {
    return (
        <>
            <ul className='flex gap-2'>
                <li className='border-2 border-bordercolor p-2 aspect-square w-3/2 h-auto rounded-xl cursor-pointer'>
                    <img src={Sound} alt="sound" />
                </li>
                <li className='border-2 border-bordercolor p-2 aspect-square rounded-xl cursor-pointer'>
                        <img src={Copy} alt="copy" />
                </li>
            </ul>
        </>
        

    )

} export default Buttons;



