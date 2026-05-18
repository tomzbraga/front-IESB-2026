function InputMatricula({ matricula, erro, mudaValor }) {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor="matricula"
        className="text-sm font-medium text-gray-700 mb-1 text-left"
      >
        Matrícula
      </label>

      <input
        className="border rounded-lg w-full p-2"
        type="number"
        id="matricula"
        name="matricula"
        value={matricula}
        onChange={mudaValor}
      />

      {erro && <p className="text-red-500 text-xs mt-1">{erro}</p>}
    </div>
  );
}

export default InputMatricula;
