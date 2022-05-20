import React from 'react';
import { Fade } from 'react-reveal';

function ContactSection() {
  return (
  <div className="w-full h-screen flex items-center justify-center bg-gray-900 flex-col gap-y-20">
    <Fade top cascade>
      <p className="font-semibold text-white text-3xl">¿TIENES ALGUNA DUDA? CONTACTANOS</p>
    </Fade>
    <Fade bottom>
    <div className="flex flex-row w-full justify-center gap-x-20">
      <div class=" w-96">
        <div class="p-6 border border-gray-300 bg-white sm:rounded-md drop-shadow-3xl">
          <form>
            <label class="block mb-6">
            <span class="text-gray-900">Nombre Completo</span>
            <input
              type="text"
              name="name"
              className="
                block
                w-full
                mt-1
                h-10
                bg-gray-200
                rounded-md
                shadow-sm
                outline-none
                pl-2
              "
              placeholder="Nombre Apellido"
            />
          </label>
          <label class="block mb-6">
            <span class="text-gray-700">Correo Electronico</span>
            <input
              name="email"
              type="email"
              className="
                block
                w-full
                mt-1
                h-10
                bg-gray-200
                rounded-md
                shadow-sm
                outline-none
                pl-2
              "
              placeholder="nombre@correo.com"
              required
            />
          </label>
          <label class="block mb-6">
            <span class="text-gray-700">Mensaje</span>
            <textarea
              name="message"
              className="
                block
                w-full
                mt-1
                bg-gray-200
                rounded-md
                shadow-sm
                outline-none
                pl-2
              "
              rows="3"
              placeholder="Cuentanos con que te podemos ayudar..."
            ></textarea>
          </label>
          <div class="mb-6">
            <button
              type="submit"
              className="
                h-10
                w-full
                px-5
                text-white
                bg-red-500
                rounded-lg
                transition-colors
                duration-150
                hover:text-gray-900
              "
            >
              Contactanos
      
          </button>
          </div>
        </form>
      </div>
    </div>
    <img alt="illustration" src="contact.png" className="mr- w-2/5"  />
  </div>
  </Fade>
</div>
  );
}

export default ContactSection;