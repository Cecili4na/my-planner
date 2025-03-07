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

const categorias = {
  'tarefa': { cor: 'bg-blue-500', texto: 'text-blue-600', bg: 'bg-blue-50' },
  'prova': { cor: 'bg-red-500', texto: 'text-red-600', bg: 'bg-red-50' },
  'estudo': { cor: 'bg-green-500', texto: 'text-green-600', bg: 'bg-green-50' },
  'revisão': { cor: 'bg-purple-500', texto: 'text-purple-600', bg: 'bg-purple-50' },
};

const eventos = [
  {
    id: 1,
    titulo: 'Lista de Exercícios - Matemática',
    data: '2024-01-20',
    categoria: 'tarefa',
    prioridade: 'alta',
    descricao: 'Resolver lista de exercícios de funções',
    materia: 'Matemática'
  },
  {
    id: 2,
    titulo: 'Simulado Geral',
    data: '2024-01-22',
    categoria: 'prova',
    prioridade: 'alta',
    descricao: 'Simulado com todas as matérias',
    materia: 'Todas'
  },
  {
    id: 3,
    titulo: 'Revisão - Literatura',
    data: '2024-01-23',
    categoria: 'revisão',
    prioridade: 'média',
    descricao: 'Revisar conteúdo de Literatura Moderna',
    materia: 'Português'
  }
];

export default function Agenda() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visualizacao, setVisualizacao] = useState('lista');
  const [filtroCategoria, setFiltroCategoria] = useState('todas');
  const [novoEvento, setNovoEvento] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header e Navigation igual às outras páginas */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      
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
      </nav>

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

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Cabeçalho e Filtros */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Agenda & Planner</h1>
                <p className="text-gray-600 mt-1">Organize suas atividades e compromissos</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {/* Filtros */}
                <select 
                  className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 focus:ring-2 focus:ring-indigo-500"
                  value={filtroCategoria}
                  onChange={(e) => setFiltroCategoria(e.target.value)}
                >
                  <option value="todas">Todas as categorias</option>
                  {Object.keys(categorias).map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>

                {/* Botão Novo Evento */}
                <button
                  onClick={() => setNovoEvento(true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Novo Evento
                </button>

                {/* Alternar Visualização */}
                <div className="flex rounded-lg border border-gray-200 p-1 bg-white">
                  <button
                    onClick={() => setVisualizacao('lista')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      visualizacao === 'lista'
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Lista
                  </button>
                  <button
                    onClick={() => setVisualizacao('calendario')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      visualizacao === 'calendario'
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Calendário
                  </button>
                </div>
              </div>
            </div>

            {/* Lista de Eventos */}
            {visualizacao === 'lista' && (
              <div className="space-y-4">
                {eventos
                  .filter(evento => filtroCategoria === 'todas' || evento.categoria === filtroCategoria)
                  .map((evento) => (
                    <div
                      key={evento.id}
                      className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${categorias[evento.categoria].texto} ${categorias[evento.categoria].bg}`}>
                              {evento.categoria.charAt(0).toUpperCase() + evento.categoria.slice(1)}
                            </span>
                            {evento.prioridade === 'alta' && (
                              <span className="px-3 py-1 rounded-full text-sm font-medium text-red-600 bg-red-50">
                                Prioridade Alta
                              </span>
                            )}
                            <span className="px-3 py-1 rounded-full text-sm font-medium text-gray-600 bg-gray-100">
                              {evento.materia}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{evento.titulo}</h3>
                          <p className="text-gray-600">{evento.descricao}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-500">Data</p>
                            <p className="text-lg font-semibold text-gray-900">
                              {new Date(evento.data).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* Visão Calendário */}
            {visualizacao === 'calendario' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="grid grid-cols-7 gap-4">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((dia) => (
                    <div key={dia} className="text-center font-medium text-gray-500">
                      {dia}
                    </div>
                  ))}
                  {/* Aqui viria a lógica do calendário */}
                  {Array.from({ length: 35 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm text-gray-500">{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Resumo e Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Próximos Eventos</h2>
              <div className="space-y-3">
                {eventos.slice(0, 3).map((evento) => (
                  <div key={evento.id} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${categorias[evento.categoria].cor}`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{evento.titulo}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(evento.data).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Por Categoria</h2>
              <div className="space-y-3">
                {Object.entries(categorias).map(([categoria, { cor, texto }]) => (
                  <div key={categoria} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${cor}`}></div>
                      <span className="text-gray-600">
                        {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {eventos.filter(e => e.categoria === categoria).length}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Progresso</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Eventos Concluídos</span>
                    <span className="font-medium text-gray-900">65%</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Eventos Pendentes</span>
                    <span className="font-medium text-gray-900">35%</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}