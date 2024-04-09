'use client';

import { MinusCircle, PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_URL_BASE;
const enviaTarefa = process.env.NEXT_PUBLIC_ENDPOINT_ENVIA_TAREFA;
const gestaoAgente = process.env.NEXT_PUBLIC_ENDPOINT_GESTAO_AGENTE;

async function enviarTarefa(codagente: string, endpoint: any) {
  try {
    const response = await fetch(`${baseUrl}${endpoint}${codagente}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Erro ao buscar dados:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
  window.location.href = '/umov';
}

export default function Page() {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-col gap-10 items-center mt-10 mb-10">
      <h1 className="underline font-bold text-2xl">
        Integrador Sankhya \ UMOV
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col gap-2 items-center border border-solid rounded-xl p-4 w-60">
          <label htmlFor="enviarTarefa">Criar tarefa de montagem</label>
          <input
            className="border border-solid rounded-lg text-center w-full mb-2 p-2"
            type="number"
            name="enviarTarefa"
            placeholder="Ex: 123456"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
          <button
            onClick={(event) => {
              enviarTarefa(value, enviaTarefa);
            }}
            className="p-1 border border-solid bg-zinc-100 rounded-lg w-full hover:bg-zinc-300 flex gap-2 justify-center"
          >
            <PlusCircle size={24} />
            Criar
          </button>
        </div>

        <div className="flex flex-col gap-2 items-center border border-solid rounded-xl p-4 w-60">
          <label htmlFor="gestaoAgente">Gestão de agentes</label>
          <input
            className="border border-solid rounded-lg text-center w-full mb-2 p-2"
            type="number"
            name="gestaoAgente"
            placeholder="Ex: 123456"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
          <button
            onClick={(event) => {
              enviarTarefa(value, gestaoAgente);
            }}
            className="p-1 border border-solid bg-zinc-100 rounded-lg w-full hover:bg-zinc-300 flex gap-2 justify-center"
          >
            <PlusCircle size={24} />
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
