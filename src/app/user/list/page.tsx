import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import { FaRegClone } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';

export default function CreateUser() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <div className="bg-foreground flex w-full flex-row flex-wrap justify-between rounded-t-sm p-4 text-base font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
          <form className="flex flex-1 flex-wrap justify-between pr-4">
            <input
              id="withoutArrows"
              type="number"
              className="w-15 border-b-[1px] border-gray-300"
              placeholder="ID"
            />
            <input
              type="text"
              className="w-2xs border-b-[1px] border-gray-300"
              placeholder="Nome"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-2xs border-b-[1px] border-gray-300"
            />

            <select
              defaultValue=""
              className="bg-foreground border-b-[1px] border-b-gray-300 focus:outline-0">
              <option value="" />
              <option value="A">Ativo</option>
              <option value="I">Inativo</option>
            </select>
          </form>
          <Link
            href="/user/create"
            className="flex h-10 w-20 max-w-20 cursor-pointer items-center justify-center rounded-sm border-none bg-green-500 font-bold text-black hover:bg-green-400">
            Novo
          </Link>
        </div>

        <div className="bg-background w-full pt-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
          <div className="overflow-x-auto">
            <table className="w-full px-2 text-left">
              <thead>
                <tr className="flex w-full gap-2 px-4">
                  <th className="w-5"></th>
                  <th className="w-5"></th>
                  <th className="w-5"></th>
                  <th className="w-12">Id</th>
                  <th className="w-30">Login</th>
                  <th className="w-40">Nome</th>
                  <th className="flex flex-1">E-mail</th>
                  <th className="w-18">Situação</th>
                </tr>
              </thead>
              <tbody className="flex flex-col gap-2 py-3">
                {Array.from({ length: 10 }, (_, i) => {
                  return (
                    <tr key={i} className="flex w-full gap-2 px-4">
                      <td className="w-5">
                        <button
                          aria-label="Editar"
                          type="button"
                          className="cursor-pointer border-none bg-transparent">
                          <FaEdit size={14} className="text-blue-400" />
                        </button>
                      </td>
                      <td className="w-5">
                        <button
                          aria-label="Clonar"
                          type="button"
                          className="cursor-pointer border-none bg-transparent">
                          <FaRegClone size={14} className="text-green-500" />
                        </button>
                      </td>
                      <td className="w-5">
                        <button
                          aria-label="Ativar ou Inativar"
                          type="button"
                          className="cursor-pointer border-none bg-transparent">
                          <FaPowerOff size={14} className="text-orange-400" />
                        </button>
                      </td>
                      <td className="w-12">123</td>
                      <td className="w-30">joedoe</td>
                      <td className="w-40">Joe Doe</td>
                      <td className="flex flex-1">joedoe@example.com</td>
                      <td className="w-18 text-green-800">Ativo</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
