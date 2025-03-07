
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/images/logo.webp';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      
      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-3">
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
      </nav>

    
      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-8 border border-gray-100">
            <div className="text-center space-y-2">
              <Image
                src={logoImage}
                alt="Henrique Lobel Logo"
                width={64}
                height={64}
                className="mx-auto"
                priority
              />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Bem-vindo(a)
              </h2>
              <p className="text-gray-600">
                Continue sua jornada de aprendizado
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                    Lembrar-me
                  </label>
                </div>

                <Link href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Esqueceu a senha?
                </Link>
              </div>

              <Link
                href="/dashboard"
                className="w-full flex justify-center py-3 px-4 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/30 transition-all"
              >
                Entrar
              </Link>

              <div className="text-center">
                <span className="text-gray-600">Não tem uma conta? </span>
                <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Cadastre-se
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}