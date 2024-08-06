'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import c1 from '../../../public/clients/c1.png';
import c2 from '../../../public/clients/c2.png';
import c3 from '../../../public/clients/c3.png';
import c4 from '../../../public/clients/c4.jpg';
import c5 from '../../../public/clients/c5.jpg';
import c6 from '../../../public/clients/c6.png';
import c7 from '../../../public/clients/c7.png';
import c8 from '../../../public/clients/c8.png';
import c9 from '../../../public/clients/c9.jpg';
import c10 from '../../../public/clients/c10.jpg';
import c11 from '../../../public/clients/c10.jpg';
import c12 from '../../../public/clients/c12.jpg';
import c13 from '../../../public/clients/c13.jpg';
import c14 from '../../../public/clients/c14.jpg';
import c15 from '../../../public/clients/c15.jpg';
import c16 from '../../../public/clients/c16.jpg';
import c17 from '../../../public/clients/c17.jpg';
import c18 from '../../../public/clients/c18.jpg';
import c19 from '../../../public/clients/c19.png';
import c20 from '../../../public/clients/c20.jpg';
import c21 from '../../../public/clients/c21.jpg';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

const ImageAccordion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clients = [
    { src: c1, alt: 'eServe Infotech' },
    { src: c2, alt: 'CSC Onet' },
    { src: c3, alt: 'ZEA Cloud' },
    { src: c4, alt: 'HexaData' },
    { src: c5, alt: 'Client 5' },
    { src: c6, alt: 'Client 6' },
    { src: c7, alt: 'Client 7' },
    { src: c8, alt: 'Client 8' },
    { src: c9, alt: 'Client 9' },
    { src: c10, alt: 'Client 10' },
    { src: c11, alt: 'Client 11' },
    { src: c12, alt: 'Client 12' },
    { src: c13, alt: 'Client 13' },
    { src: c14, alt: 'Client 14' },
    { src: c15, alt: 'Client 14' },
    { src: c16, alt: 'Client 14' },
    { src: c17, alt: 'Client 14' },
    { src: c18, alt: 'Client 14' },
    { src: c19, alt: 'Client 14' },
    { src: c20, alt: 'Client 14' },
    { src: c21, alt: 'Client 14' },
    
  ];
  useEffect(()=>{
    const interval=setInterval(()=>{
        handleNext();
    },3000)
    return ()=>clearInterval(interval)
  },[currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clients.length - 4 : prevIndex - 4));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= clients.length - 4 ? 0 : prevIndex + 4));
  };

  return (
    <div className="flex flex-col items-center">
    <div className="bg-red-600 w-full text-center py-2">
      <h1 className="text-white text-2xl">ANALYSIS - UNDERSTANDING - PERCEPTION - VISION</h1>
    </div>
    <div className="my-10">
      <h2 className="text-3xl font-bold mb-5">HAPPY CLIENTS</h2>
      <p>Our happy and satisfied client list includes:</p>
    </div>
    <div className="flex items-center justify-center space-x-4">
      <button onClick={handlePrev} className="text-white bg-red-600 text-4xl rounded-full p-2 hover:bg-red-500">
        <MdArrowBack />
      </button>
      <div className="grid grid-cols-4 gap-4">
        {clients.slice(currentIndex, currentIndex + 4).map((client, index) => (
          <Image key={index} width={256} height={256} src={client.src} alt={client.alt} className="w-64 h-64 object-contain" />
        ))}
      </div>
      <button onClick={handleNext} className="text-white  text-4xl rounded-full p-2 bg-red-600 hover:bg-red-500">
        <MdArrowForward />
      </button>
    </div>
    <div className="mt-10 text-center">
      <p className="text-sm">
        SINCE 2003 EKANT SOLUTIONS IS WORKING WITH AND FOR DIFFERENT CLIENTS IN INDIA EUROPE, UNITED KINGDOM AND THE UNITED STATES.
      </p>
    </div>
  </div>
  );
};

export default ImageAccordion;