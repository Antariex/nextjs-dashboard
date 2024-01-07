import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';
import LoginForm from '@/app/ui/login-form';
 
export const metadata: Metadata = {
  title: 'Animalia',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 ">
      <div className="mt-0 flex grow flex-col gap-4 md:flex-row mb-0">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 md:w-2/5 md:px-20 items-center">
        <Image
          src="/imagenes/logo.png"
          width={240}
          height={166}
          className='hidden md:block '
          alt="Animalia logo"
          /><div/>
          <p className={`${poppins} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>¡Bienvenido a Animalia!</strong> <br/>
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-14 md:py-6">
        <LoginForm />
          
        </div>
      </div>
    </main>
  );
}
