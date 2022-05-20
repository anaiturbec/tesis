import React from 'react';
import { Fade } from 'react-reveal';

export default function About() {
  return (
    <div class="about" className="w-full h-screen bg-gray-900 flex items-center justify-center gap-x-20">
      <Fade left>
        <div className="w-[500px] flex flex-col items-start">
          <p className="text-white font-semibold text-left text-2xl">ACERCA ETG S.L</p>
          <p className="text-white font-light text-left mt-5 text-xl">ETG se ha convertido en un jugador global con una cartera diversa de experiencia en múltiples industrias, que abarca insumos agrícolas, logística, comercialización y procesamiento, optimización de la cadena de suministro y energía.
          </p>
          <p className="text-white font-light text-left mt-5 text-xl">Nuestra pasión radica en la mejora de las comunidades agrícolas; un compromiso sin trabas desde su creación. Nuestros promotores identificaron tres desafíos que enfrentaban las cadenas de suministro en África y crearon un modelo comercial globalizado en torno a soluciones que abordan estos obstáculos.</p>
        </div>
      </Fade>
      <Fade right>
      <img alt="ship" src="logo512.png" className="w-96" />
      </Fade>
    </div>
  )
}