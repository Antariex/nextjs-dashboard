import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Animalia',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-0 flex grow flex-col gap-4 md:flex-row mb-0">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 md:w-2/5 md:px-20">
        <Image
          src="/logo.png"
          width={264}
          height={200}
          className='hidden md:block '
          alt="Animalia logo"
          /><div/>
          <p className={`${poppins} text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            <strong>¡Bienvenido a Animalia!</strong> <br/>
            Lo mejor para tus mascotas.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Ingresar</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-14 md:py-6">
          <Image
          src="/kitten.png"
          width={450}
          height={380}
          className='hidden md:block'
          alt="Gatito gris"
          />
          
          <Image
          src="/kitten.png"
          width={230}
          height={310}
          className='block md:hidden'
          alt='Gatito gris'
          />
        </div>
      </div>
    </main>
  );
}
