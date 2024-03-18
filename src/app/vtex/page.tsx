'use client';

import {
  CheckCircle,
  Money,
  PlusCircle,
  Receipt,
  Warehouse,
} from '@phosphor-icons/react';
import { useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_URL_BASE;
const atualizaEndpoint = process.env.NEXT_PUBLIC_ENDPOINT_ATUALIZAR;
const cadastraEnpoint = process.env.NEXT_PUBLIC_ENDPOINT_CADASTRAR;

async function enviarInformacaoProduto(codprod: string, endpoint: any) {
  try {
    const response = await fetch(`${baseUrl}${endpoint}${codprod}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Erro ao buscar dados:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
  window.location.href = '/vtex';
}

export default function Page() {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-col gap-10 items-center mt-10 mb-10">
      <h1 className="underline font-bold text-2xl">
        Integrador Sankhya \ VTEX
      </h1>
      <div className="">
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="flex p-2 gap-2 bg-zinc-100 hover:bg-zinc-300 rounded-xl w-60 justify-center">
            <Money size={24} /> Sincronizar preços
          </button>
          <button className="flex p-2 gap-2 bg-zinc-100 hover:bg-zinc-300 rounded-xl w-60 justify-center">
            <Warehouse size={24} />
            Sincronizar estoques
          </button>
          <button className="flex p-2 gap-2 bg-zinc-100 hover:bg-zinc-300 rounded-xl w-60 justify-center">
            <Receipt size={24} />
            Sincronizar pedidos
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="w-3/4 mb-6 leading-8">
          <h2 className="underline font-bold text-1xl ">
            Antes de atualizar/cadastrar produtos certifique-se que:
          </h2>
          <ul className="list-decimal ">
            <li>
              O grupo de produtos está informado no campo <strong>Menu</strong>{' '}
              na aba <strong>E-commerce</strong> do cadastro de produtos no
              Sankhya.
            </li>
            <li>
              O grupo dos produtos está na faixa <strong>5.00.00.00</strong>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-col gap-2 items-center border border-solid rounded-xl p-4 w-60">
            <label htmlFor="enviarInformacaoProduto">Atualizar produto</label>
            <input
              className="border border-solid rounded-lg text-center w-full mb-2 p-2"
              type="number"
              name="enviarInformacaoProduto"
              placeholder="Ex: 123456"
              onChange={(e) => {
                setValue(e.currentTarget.value);
              }}
            />
            <button
              onClick={(event) => {
                enviarInformacaoProduto(value, atualizaEndpoint);
              }}
              className="p-1 border border-solid bg-zinc-100 rounded-lg w-full hover:bg-zinc-300 flex gap-2 justify-center"
            >
              <CheckCircle size={24} />
              Atualizar
            </button>
          </div>

          <div className="flex flex-col gap-2 items-center border border-solid rounded-xl p-4 w-60">
            <label htmlFor="enviarInformacaoProduto">Cadastrar produto</label>
            <input
              className="border border-solid rounded-lg text-center w-full mb-2 p-2"
              type="number"
              name="cadastraProduto"
              placeholder="Ex: 123456"
              onChange={(e) => {
                setValue(e.currentTarget.value);
              }}
            />
            <button
              onClick={(event) => {
                enviarInformacaoProduto(value, cadastraEnpoint);
              }}
              className="p-1 border border-solid bg-zinc-100 rounded-lg w-full hover:bg-zinc-300 flex gap-2 justify-center"
            >
              <PlusCircle size={24} />
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
