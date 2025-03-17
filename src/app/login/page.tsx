import Image from 'next/image';
import { IoPerson } from 'react-icons/io5';
import { IoLockClosedSharp } from 'react-icons/io5';

import { Input } from '@/components/Input';
import { InputPassword } from '@/components/InputPassword';

export default function Login() {
  return (
    <div className="flex h-screen flex-1 flex-col items-center pt-20">
      <Image
        src="/cbplogo.svg"
        width={250}
        height={250}
        alt=""
        className="pb-5"
      />
      <form className="bg-background w-96 overflow-hidden rounded-sm drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <h1 className="bg-foreground text-background flex items-center justify-center p-4 font-bold">
          Login
        </h1>
        <div className="px-6 py-4">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex w-full flex-row items-center gap-2">
              <IoPerson size={20} className="text-text-800" />
              <Input
                placeholder="Usuário"
                type="text"
                className="h-10 w-full"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <IoLockClosedSharp size={20} className="text-text-800" />
              <InputPassword
                placeholder="Senha"
                className="h-10 w-full"
                colorinputpassword="text-text-800"
              />
            </div>
          </div>
          <button
            aria-label="Logar"
            className="bg-foreground text-background w-full cursor-pointer rounded-sm p-2 hover:opacity-80">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
