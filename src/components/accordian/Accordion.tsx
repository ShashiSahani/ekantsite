"use client";
import { useState, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineMailOutline } from "react-icons/md";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpenByDefault?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children,isOpenByDefault }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="border-b bg-gray-700 border-gray-700 mb-4">
      <button
        className="w-full text-left p-4 flex justify-between items-center text-red-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={title}
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <FontAwesomeIcon icon={faMinus} className="text-red-500" /> : <FontAwesomeIcon icon={faPlus} className="text-red-500" />}
        </span>
      </button>
      <div>
        {/* Conditionally render the bottom line based on isOpen */}
        <p className={`border-b border-red-500 h-[2px] ${isOpen ? 'w-[80%] m-auto' : 'hidden'}`}></p>
      </div>
      <div
        id={title}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 text-white bg-gray-700 bg-opacity-80">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-opacity-80 text-gray-300">
      <AccordionItem title="Ghaziabad, India" isOpenByDefault={true}>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-2 text-red-500" />
            <p>201-204, Shiva Tower, GT Road</p>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-2 text-red-500" />
            <p>Ghaziabad - 201001, India</p>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-2 text-red-500" />
            <p>+91-120-4370382</p>
          </div>
          <div className="flex items-center">
            <MdOutlineMailOutline  className="w-6 h-6 mr-2 text-red-500 "/>
            <p>ideas@ekant.com</p>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem title="New Delhi, India">
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-2 text-red-500" />
            <p>404, Vishal Bhawan</p>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-2 text-red-500" />
            <p>95, Nehru Place</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-2 text-red-500" />
            <p>New Delhi - 110019, India</p>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem title="Georgia, USA">
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-2 text-red-500" />
            <p>3220 Pointe Parkway</p>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-2 text-red-500" />
            <p>Suite 200</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-2 text-red-500" />
            <p>Peachtree Corners, GA 30092</p>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
