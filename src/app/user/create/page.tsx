import { Input } from '@/components/Input';
import { InputPassword } from '@/components/InputPassword';

export default function CreateUser() {
  return (
    <div className="bg-background w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
      <div>
        <header className="bg-foreground w-full rounded-t-sm">
          <h1 className="p-4 text-base font-bold">Criar Usuário</h1>
        </header>
      </div>
      <form className="flex w-full flex-col flex-wrap p-8">
        <div className="grid w-full grid-cols-2 flex-wrap gap-2 text-right">
          <div className="flex w-full justify-end gap-2">
            <label htmlFor="name">Nome</label>
            <Input id="name" className="w-100" />
          </div>

          <div className="flex w-full justify-end gap-2">
            <label htmlFor="username" className="w-20">
              Usuário
            </label>
            <Input id="username" className="w-80" />
          </div>

          <div className="flex w-full justify-end gap-2">
            <label htmlFor="email">E-mail</label>
            <Input id="email" className="w-100" />
          </div>

          <div className="flex w-full justify-end gap-2">
            <label htmlFor="pagaInitial">Tela Inicial</label>
            <Input id="pagaInitial" className="w-80" />
          </div>

          <div className="flex w-full justify-end gap-2">
            <label htmlFor="password">Senha</label>
            <InputPassword
              id="password"
              className="w-100"
              colorinputpassword="text-text-800"
            />
          </div>

          <div className="flex w-full justify-end gap-2">
            <label htmlFor="passwordConfirm">Confirmar Senha</label>
            <InputPassword
              id="passwordConfirm"
              className="w-80"
              colorinputpassword="text-text-800"
            />
          </div>
        </div>

        <div className="mt-8 flex-wrap">
          <div className="mb-4 w-full border-b-[1px] border-gray-300 pb-2">
            <h1 className="font-bold text-black">Grupo</h1>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex items-center gap-2">
              <label htmlFor="adminGroup">Admin</label>
              <input type="checkbox" value={1} id="adminGroup" />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="standardGroup">Standard</label>
              <input type="checkbox" value={2} id="standardGroup" />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="representGroup">Representante</label>
              <input type="checkbox" value={2} id="representGroup" />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="adminComGroup">Administração Comercial</label>
              <input type="checkbox" value={2} id="adminComGroup" />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="shopkeeperGroup">Lojista</label>
              <input type="checkbox" value={2} id="shopkeeperGroup" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-row gap-4">
          <button
            type="button"
            className="cursor-pointer rounded-sm bg-green-500 px-4 py-2 font-bold text-black hover:opacity-90">
            Salvar
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-sm bg-red-500 px-4 py-2 font-bold text-black hover:opacity-90">
            Limpar
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-sm bg-orange-500 px-4 py-2 font-bold text-black hover:opacity-90">
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
