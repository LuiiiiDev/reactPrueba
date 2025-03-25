import React from 'react';

function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-xl p-6 text-center border-2 border-gray-300">
      <img 
        src="https://i.pinimg.com/236x/bf/f0/1d/bff01dd0ae186d938f1af8ba127f12bd.jpg" 
        alt="Perfil de Luis Escobar" 
        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-gray-200"
      />
      <h2 className="text-xl font-bold mt-4 text-gray-800">Luis Escobar</h2>
      <p className="text-gray-600">18 años</p>
      <p className="text-gray-600">Nací el 1 de septiembre de 2006</p>
      <p className="text-gray-600">Estudio Desarrollo de Software</p>
      <p className="text-gray-600">Me gusta jugar videojuegos</p>
    </div>
  );
}

export default Card;
