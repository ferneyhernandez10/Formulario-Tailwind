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
      <h1>¡Queremos acompañarte!</h1>
      <h4>Déjanos tus datos</h4>
      <input {...register("nombre", { required: true })} placeholder="Nombre" />
      {errors.nombre?.type === "required" && <p>Este campo es obligatorio.</p>}
      <input
        {...register("teléfono", { required: true })}
        placeholder="Teléfono"
      />
      {errors.teléfono?.type === "required" && (
        <p>Este campo es obligatorio.</p>
      )}
      <input
        {...register("correoElectrónico", {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
        })}
        placeholder="Correo Electrónico"
      />
      {errors.correoElectrónico?.type === "required" && (
        <p>Este campo es obligatorio.</p>
      )}
      {errors.correoElectrónico?.type === "pattern" && (
        <p>Por favor, introduce una dirección de correo electrónico válida.</p>
      )}
      <select {...register("ciudad", { required: true })}>
        <option value="">Ciudad</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Medellín">Medellín</option>
        <option value="Bucaramanga">Bucaramanga</option>
        <option value="Otra Ciudad">Otra Ciudad</option>
        <option value="Otro País">Otro País</option>
      </select>
      {errors.ciudad?.type === "required" && <p>Este campo es obligatorio.</p>}
      <select {...register("idiomaDeInterés", { required: true })}>
        <option value="">Idioma de interés</option>
        <option value="Inglés">Inglés</option>
        <option value="Francés">Francés</option>
        <option value="Otros Idiomas">Otros Idiomas</option>
      </select>
      {errors.idiomaDeInterés?.type === "required" && (
        <p>Este campo es obligatorio.</p>
      )}
      <select {...register("tipoDeSolicitud", { required: true })}>
        <option value="">Tipo de solicitud</option>
        <option value="Cotización">Cotización</option>
        <option value="Académico">Académico</option>
        <option value="Servicio al cliente">Servicio al cliente</option>
        <option value="Cobranzas">Cobranzas</option>
      </select>
      {errors.tipoDeSolicitud?.type === "required" && (
        <p>Este campo es obligatorio.</p>
      )}
      <textarea
        {...register("comentarios", { required: true })}
        placeholder="Comentarios"
      />
      {errors.comentarios?.type === "required" && (
        <p>Este campo es obligatorio.</p>
      )}
      <input type="submit" />
    </form>
  );
};
