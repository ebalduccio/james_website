'use client'

import '../globals.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { Analytics } from '@vercel/analytics/react';
import { PlusIcon, PostIcon, SettingsIcon } from '@/components/icons';
import { NavItem } from './nav-item';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const ProtectedDashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        console.log('Autenticado, acessando o dashboard');
      } else {
        console.log('Não autenticado, redirecionando para /login');
        router.push('/login');
      }
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Indicador de carregamento enquanto verifica autenticação
  }

  if (!isAuthenticated) {
    return null; // Evitar renderizar o conteúdo enquanto redireciona para a página de login
  }

  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-5">
              <Link
                className="flex items-center gap-2 font-semibold"
                href="/"
              >
                <span className="">James A. Kostohryz</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <NavItem href="/dashboard">
                  <PostIcon className="h-4 w-4" />
                  All Posts
                </NavItem>
                <NavItem href="/dashboard/new-post">
                  <PlusIcon className="h-4 w-4" />
                  New Post
                </NavItem>
                <NavItem href="/dashboard/settings">
                  <SettingsIcon className="h-4 w-4" />
                  Settings
                </NavItem>
                <div className='w-full h-px bg-black'></div>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/biography">Biography</NavItem>
                <NavItem href="/investoracumen">Investor Acumen</NavItem>
                <NavItem href="/publications">Publications</NavItem>
                <NavItem href="/socialmedia">Social Media</NavItem>
                <NavItem href="/personalblog">Personal Blog</NavItem>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
            <Link
              className="flex items-center gap-2 font-semibold lg:hidden"
              href="/"
            >
              <span className="">James A. Kostohryz</span>
            </Link>
          </header>
          {children}
        </div>
      </div>
      <Analytics />
    </>
  );
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ProtectedDashboardLayout>{children}</ProtectedDashboardLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
