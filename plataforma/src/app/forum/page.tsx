'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logoImage from '@/assets/images/logo.webp';

const navigation = [
  { name: 'Disciplinas', href: '/disciplinas' },
  { name: 'Horário Individual', href: '/horario' },
  { name: 'Agenda/Planner', href: '/agenda' },
  { name: 'Metas Semanais', href: '/metas' },
  { name: 'Fórum de Dúvidas', href: '/forum' },
];

const materias = [
  'Todas', 'Matemática', 'Português', 'História', 'Geografia', 'Física', 'Química'
];

const duvidas = [
  {
    id: 1,
    titulo: 'Como resolver equações do segundo grau?',
    materia: 'Matemática',
    autor: 'João Silva',
    data: '2 horas atrás',
    respostas: 3,
    status: 'respondida',
    visualizacoes: 15,
    conteudo: 'Estou com dificuldade em resolver equações do segundo grau...'
  },
  {
    id: 2,
    titulo: 'Dúvida sobre orações subordinadas',
    materia: 'Português',
    autor: 'Maria Santos',
    data: '5 horas atrás',
    respostas: 1,
    status: 'aberta',
    visualizacoes: 8,
    conteudo: 'Alguém poderia me explicar sobre orações subordinadas?'
  },
  {
    id: 3,
    titulo: 'Revolução Industrial - principais consequências',
    materia: 'História',
    autor: 'Pedro Costa',
    data: '1 dia atrás',
    respostas: 4,
    status: 'respondida',
    visualizacoes: 23,
    conteudo: 'Preciso entender melhor as consequências da Revolução Industrial...'
  }
];

export default function Forum() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filtroMateria, setFiltroMateria] = useState('Todas');
  const [filtroStatus, setFiltroStatus] = useState('todos');
  const [busca, setBusca] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={logoImage}
                alt="Henrique Lobel Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Henrique Lobel
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  Você merece florescer
                </div>
              </div>
            </div>
            
            {/* Profile and Notification */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Profile Menu */}
              <div className="relative">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 border border-gray-100">
                    <Link
                      href="/perfil"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Perfil
                    </Link>
                    <hr className="my-1 border-gray-200" />
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sair
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Tabs */}
      <div className="bg-white/50 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-center space-x-16" aria-label="Tabs">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b-2 border-transparent hover:border-indigo-500 py-3 px-3 text-base font-medium text-gray-500 hover:text-gray-700 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Cabeçalho e Filtros */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Fórum de Dúvidas</h1>
                <p className="text-gray-600 mt-1">Tire suas dúvidas e ajude outros alunos</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Nova Dúvida
              </button>
            </div>

            {/* Barra de Busca e Filtros */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Buscar dúvidas..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white"
                value={filtroMateria}
                onChange={(e) => setFiltroMateria(e.target.value)}
              >
                {materias.map((materia) => (
                  <option key={materia} value={materia}>
                    {materia}
                  </option>
                ))}
              </select>
              <select
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white"
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
              >
                <option value="todos">Todos</option>
                <option value="aberta">Em aberto</option>
                <option value="respondida">Respondida</option>
              </select>
            </div>
          </div>

          {/* Lista de Dúvidas */}
          <div className="space-y-4">
            {duvidas
              .filter(duvida => 
                (filtroMateria === 'Todas' || duvida.materia === filtroMateria) &&
                (filtroStatus === 'todos' || duvida.status === filtroStatus) &&
                (duvida.titulo.toLowerCase().includes(busca.toLowerCase()) || 
                 duvida.conteudo.toLowerCase().includes(busca.toLowerCase()))
              )
              .map((duvida) => (
                <div 
                  key={duvida.id}
                  className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-sm font-medium text-indigo-600 bg-indigo-50">
                          {duvida.materia}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          duvida.status === 'respondida' 
                            ? 'text-green-600 bg-green-50' 
                            : 'text-yellow-600 bg-yellow-50'
                        }`}>
                          {duvida.status === 'respondida' ? 'Respondida' : 'Em aberto'}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{duvida.titulo}</h3>
                      <p className="text-gray-600 text-sm">{duvida.conteudo}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>por {duvida.autor}</span>
                        <span>{duvida.data}</span>
                      </div>
                    </div>
                    <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-sm text-gray-600">{duvida.visualizacoes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="text-sm text-gray-600">{duvida.respostas}</span>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        Ver discussão
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}