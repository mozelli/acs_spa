import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center gap-6 text-lime-700 text-sm mb-1 col-span-2">
        <Link href={''} className='hover:underline'>Sobre</Link>
        <Link href={''} className='hover:underline'>Central de Ajuda</Link>
        <Link href={''} className='hover:underline'>Termos de Serviço</Link>
        <Link href={''} className='hover:underline'>Política de Privacidade</Link>
        <Link href={''} className='hover:underline'>Política de Cookies</Link>
        <span>&copy; 2024 Mozelli Marketing Digital</span>
    </footer>
  );
}

export default Footer;