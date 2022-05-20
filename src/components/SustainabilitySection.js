import React from 'react';
import EuroIcon from './icons/EuroIcon';
import UsersIcon from './icons/UsersIcon';
import MultiUserIcon from './icons/MultiUserIcon';
import DocIcon from './icons/DocIcon';
import { Fade } from 'react-reveal';

function SustainabilitySection() {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <Fade top cascade>
        <p className="text-3xl font-bold text-gray-900 mb-20">SOSTENIBILIDAD Y RESPONSABILIDAD SOCIAL CORPORATIVA</p>
      </Fade>
      <div className="flex flex-row justify-center gap-x-24">
        <Fade left>
          <div className="w-1/3">
            <p className="font-light text-lg text-left text-gray-900">Inmediatas y futuras de nuestras comunidades. Cada región en cada país tiene sus propios obstáculos únicos. Nuestro equipo de CSR analiza estos requisitos y, con la ayuda de los directores de país y su personal de apoyo, se implementa una solución de CSR a medida. Sin embargo, la distribución de alimentos se mantiene al frente de nuestros objetivos.</p>
          </div>
        </Fade>
        <Fade right>
          <div className="w-1/3 flex flex-col gap-y-8">
            <div className="w-full flex flex-row gap-x-5 h-14 items-center">
              <UsersIcon className="w-16 text-red-500" />
              <p className="text-left font-light text-gray-900"> Los empleados de ETG, su gerencia y partes afiliadas se dedican a trabajar para un ambiente saludable</p>
            </div>
            <div className="w-full flex flex-row gap-x-10 h-14 items-center">
              <EuroIcon className="w-10 text-red-500" />
              <p className="text-left font-light text-gray-900"> Nuestros programas de Responsabilidad Social Corporativa han sido diseñados para abordar las necesidades </p>
            </div>
            <div className="w-full flex flex-row gap-x-5 h-14 items-center">
              <DocIcon className="w-10 text-red-500" />
              <p className="text-left font-light text-gray-900">Contrato de viaje firmado con precio cerrado sin sorpresas  </p>
            </div>
            <div className="w-full flex flex-row gap-x-6 h-14 items-center">
              <MultiUserIcon className="w-20 text-red-500" />
              <p className="text-left font-light text-gray-900">Posibilidad de uniros a otro grupo de universitarios que viaje a vuestro mismo destino para conseguir mayores ventajas (open groups)  </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default SustainabilitySection;