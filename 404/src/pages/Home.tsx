import React from 'react';

const Home = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Bem-vindo ao Sistema de Gestão
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Despesas e Lucros
          </h2>
          <p className="text-blue-700">
            Gerencie suas finanças de forma eficiente, acompanhando despesas e lucros.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-green-900 mb-2">
            Horário Semanal
          </h2>
          <p className="text-green-700">
            Organize sua agenda semanal e mantenha o controle de seus compromissos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 