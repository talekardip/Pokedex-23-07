
import React from 'react';

import Link from 'next/link';

import BackButton from '../../atoms/BackButton/BackButton';
import { endpoints } from '@/app/utils/Endpoints';
import { useRouter } from 'next/navigation';

interface ModalControlsProps {
  id: number;
}


const ModalControlButtons: React.FC<ModalControlsProps> = ({id }) => {
  

  return (
    <div className="flex items-center">
      <Link href={`${endpoints.navigatePokemonPage}${id-1}`} passHref aria-label="Previous">
        {/* <button

          className="text-gray-500 hover:text-gray-700 focus:outline-none mr-2"
          
        >
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
        <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
      </Link>

      <BackButton /> 
      
      
        
      


      <Link href={`${endpoints.navigatePokemonPage}${id+1}`} passHref aria-label="Next">
        {/* <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          
        >
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
        <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
      </Link>
    </div>
  );
};

export default ModalControlButtons;
