//src/app/disciplinas.tsx
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

const disciplinas = [
  {
    id: 1,
    nome: 'Matemática',
    progresso: 75,
    aulas: [
      { titulo: 'Funções', duracao: '45min', tipo: 'video' },
      { titulo: 'Trigonometria', duracao: '60min', tipo: 'video' },
    ],
    material: [
      { titulo: 'Apostila de Exercícios', tipo: 'pdf' },
      { titulo: 'Resumo - Funções', tipo: 'pdf' },
    ]
  },
  {
    id: 2,
    nome: 'Português',
    progresso: 60,
    aulas: [
      { titulo: 'Sintaxe', duracao: '30min', tipo: 'video' },
      { titulo: 'Morfologia', duracao: '45min', tipo: 'video' },
    ],
    material: [
      { titulo: 'Lista de Exercícios', tipo: 'pdf' },
      { titulo: 'Material Complementar', tipo: 'pdf' },
    ]
  },
  // ... mais disciplinas
];

export default function Disciplinas() {
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(disciplinas[0]);
  const [aba, setAba] = useState('aulas');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        {/* ... mesmo header do dashboard ... */}
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
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
                <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation */}
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

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
          {/* Disciplinas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-4">
              {disciplinas.map((disciplina) => (
                <button
                  key={disciplina.id}
                  onClick={() => setDisciplinaSelecionada(disciplina)}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    disciplinaSelecionada.id === disciplina.id
                      ? 'bg-indigo-50 border-indigo-200'
                      : 'bg-white border-gray-200'
                  } border hover:border-indigo-300`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">{disciplina.nome}</h3>
                    <span className="text-sm text-gray-500">{disciplina.progresso}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${disciplina.progresso}%` }}
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {disciplinaSelecionada.nome}
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setAba('aulas')}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      aba === 'aulas'
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    Aulas
                  </button>
                  <button
                    onClick={() => setAba('material')}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      aba === 'material'
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    Material
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {aba === 'aulas' ? (
                  disciplinaSelecionada.aulas.map((aula, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">{aula.titulo}</h3>
                        <p className="text-sm text-gray-500">{aula.duracao}</p>
                      </div>
                      <button className="ml-auto px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg">
                        Assistir
                      </button>
                    </div>
                  ))
                ) : (
                  disciplinaSelecionada.material.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">{item.titulo}</h3>
                        <p className="text-sm text-gray-500">PDF</p>
                      </div>
                      <button className="ml-auto px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                        Download
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}