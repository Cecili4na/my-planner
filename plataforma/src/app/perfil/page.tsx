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

export default function Perfil() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const dadosAluno = {
    nome: "João Silva",
    email: "joao.silva@email.com",
    aniversario: "15/03/2006",
    telefone: "(11) 98765-4321",
    curso: "Medicina",
    universidade: "USP",
    cidade: "São Paulo",
    estado: "SP",
    sobre: "Estudante dedicado, focado em alcançar meus objetivos. Interessado em medicina e pesquisa científica.",
    materiasFavoritas: ["Biologia", "Química", "Física"],
    redesSociais: {
      instagram: "@joao.silva",
      linkedin: "joaosilva"
    }
  };

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
            
            {/* Menu igual aos outros */}
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
          {/* Perfil Header */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Foto do Perfil */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32">
                  <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-4xl text-indigo-600 font-bold">
                      {dadosAluno.nome.charAt(0)}
                    </span>
                  </div>
                  {editMode && (
                    <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Informações Principais */}
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{dadosAluno.nome}</h1>
                    <p className="text-gray-600">{dadosAluno.email}</p>
                  </div>
                  <button 
                    onClick={() => setEditMode(!editMode)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    {editMode ? 'Salvar' : 'Editar Perfil'}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Curso Desejado</p>
                    <p className="mt-1 text-gray-900">{dadosAluno.curso}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Universidade Alvo</p>
                    <p className="mt-1 text-gray-900">{dadosAluno.universidade}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Aniversário</p>
                    <p className="mt-1 text-gray-900">{dadosAluno.aniversario}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Telefone</p>
                    <p className="mt-1 text-gray-900">{dadosAluno.telefone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Detalhadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sobre */}
            <div className="md:col-span-2 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sobre</h2>
              <p className="text-gray-600">{dadosAluno.sobre}</p>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Matérias Favoritas</h3>
                <div className="flex flex-wrap gap-2">
                  {dadosAluno.materiasFavoritas.map((materia) => (
                    <span 
                      key={materia}
                      className="px-3 py-1 rounded-full text-sm font-medium text-indigo-600 bg-indigo-50"
                    >
                      {materia}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Redes Sociais e Localização */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>{dadosAluno.redesSociais.instagram}</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>{dadosAluno.redesSociais.linkedin}</span>
                  </a>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Localização</h2>
                <div className="space-y-2">
                  <p className="text-gray-600">{dadosAluno.cidade}, {dadosAluno.estado}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}