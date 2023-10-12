import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");
  return (
    <form onSubmit={handleSubmit((data) => setData(console.log(data)))}>
      <h1 className="text-center -mt-4 text-2xl font-medium text-gray-900 dark:text-white">
        ¡Queremos acompañarte!
      </h1>
      <h4 className="text-center block mb-6 text-sm font-medium text-gray-900 dark:text-white">
        Déjanos tus datos
      </h4>
      <div className="flex flex-row mb-2">
        <input
          {...register("nombre", { required: true })}
          placeholder="Nombre"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        {errors.nombre?.type === "required" && (
          <p className="text-xs text-red-600">Este campo es obligatorio.</p>
        )}
        <input
          {...register("teléfono", { required: true })}
          placeholder="Teléfono"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        {errors.teléfono?.type === "required" && (
          <p className="text-xs text-red-600">Este campo es obligatorio.</p>
        )}
      </div>
      <input
        {...register("correoElectrónico", {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
        })}
        placeholder="Correo Electrónico"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
      />
      {errors.correoElectrónico?.type === "required" && (
        <p className="text-xs text-red-600 mb-4">Este campo es obligatorio.</p>
      )}
      {errors.correoElectrónico?.type === "pattern" && (
        <p className="text-xs text-red-600 mb-4">
          Por favor, introduce una dirección de correo electrónico válida.
        </p>
      )}
      <select
        {...register("ciudad", { required: true })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
      >
        <option value="">Ciudad</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Medellín">Medellín</option>
        <option value="Bucaramanga">Bucaramanga</option>
        <option value="Otra Ciudad">Otra Ciudad</option>
        <option value="Otro País">Otro País</option>
      </select>
      {errors.ciudad?.type === "required" && (
        <p className="text-xs text-red-600 mb-4">Este campo es obligatorio.</p>
      )}
      <select
        {...register("idiomaDeInterés", { required: true })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
      >
        <option value="">Idioma de interés</option>
        <option value="Inglés">Inglés</option>
        <option value="Francés">Francés</option>
        <option value="Otros Idiomas">Otros Idiomas</option>
      </select>
      {errors.idiomaDeInterés?.type === "required" && (
        <p className="text-xs text-red-600 mb-4">Este campo es obligatorio.</p>
      )}
      <select
        {...register("tipoDeSolicitud", { required: true })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
      >
        <option value="">Tipo de solicitud</option>
        <option value="Cotización">Cotización</option>
        <option value="Académico">Académico</option>
        <option value="Servicio al cliente">Servicio al cliente</option>
        <option value="Cobranzas">Cobranzas</option>
      </select>
      {errors.tipoDeSolicitud?.type === "required" && (
        <p className="text-xs text-red-600 mb-4">Este campo es obligatorio.</p>
      )}
      <textarea
        {...register("comentarios", { required: true })}
        placeholder="Comentarios"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
      />
      {errors.comentarios?.type === "required" && (
        <p className="text-xs text-red-600 mb-4">Este campo es obligatorio.</p>
      )}
      <input
        type="submit"
        className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      />
    </form>
  );
};
