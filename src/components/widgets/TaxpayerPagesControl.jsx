import React from 'react'
import { TbPlayerTrackPrev, TbPlayerTrackNext } from 'react-icons/tb'

const TaxpayerPagesControl = ({ setActive, active, category }) => {

    const prevPhase = () => {

        if(category === ''){
            alert('Category must be selected!');
        }
        else{
            switch (active) {
                case 'bio':
                    setActive('category');
                    break;
                case 'address':
                    setActive('bio');
                    break;
                case 'occupation':
                    setActive('address');
                    break;
                case 'identification':
                    setActive('occupation');
                    break;
                case 'confirmation':
                    setActive('identification');
                    break;
                default:
                    setActive('category');
            }
        }
        
    }


    const nextPhase = () => {
        if(category === ''){
            alert('Category must be selected!');
        }
        else{
            switch (active) {
                case 'category':
                    setActive('bio');
                    break;
                case 'bio':
                    setActive('address');
                    break;
                case 'address':
                    setActive('occupation');
                    break;
                case 'occupation':
                    setActive('identification');
                    break;
                case 'identification':
                    setActive('confirmation');
                    break;
                default:
                    setActive('category');
            }
        }
        
    }


    return (
        <div className='flex justify-center px-12 py-4 border-t border-gray-900'>
            {active !== 'category' &&  
            <button 
                type='button'
                className='p-1 text-white w-[100px]'
                onClick={(e) => prevPhase()}
            >
                <TbPlayerTrackPrev size={30} className="mx-auto" />
            </button>}
            
            {active !== 'confirmation' && 
                <button 
                    type='button'
                    className='p-1 text-white w-[100px]'
                    onClick={(e) => nextPhase()}
                >
                    <TbPlayerTrackNext size={30} className="mx-auto" />
                </button>
            }
            
        </div>
    )
}

export  default TaxpayerPagesControl
