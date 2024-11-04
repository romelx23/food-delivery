// "use client";
import React from "react";
// import { useBusinessInfo } from "../hooks/useBusinessInfo";
// import { useBusinessStore } from "../store/profile.store";
import { fetchBusinessInfo } from "../helpers/sheet-helper";
import { ContactButtons } from "./contact-buttons";
// import { useBusinessStore } from '../providers/profile.provider';

export const BussinessInfo = async () => {
    // const { data, isLoading, error } = useBusinessInfo();

    // console.log({ data, isLoading, error });

    // const { businesses: data } = useBusinessStore();
    const data = await fetchBusinessInfo()

    // if (isLoading) return <p>Cargando datos del negocio...</p>;
    // if (error) return <p>Error al cargar la información: {error.message}</p>;

    if (!data) {
        return <p>Cargando datos del negocio...</p>;
    }

    return (
        <>
            {/* About Section */}
            <section className="py-12 px-4 md:px-8 bg-gray-100">
                <h2 className="text-3xl font-semibold text-center mb-6">Mis redes</h2>
                {/* social buttons */}
                <div className="flex justify-center space-x-4 pb-6">
                    <a
                        href={data.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 flex flex-col items-center border border-blue-500 p-1 rounded-lg justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                        Facebook
                    </a>
                    <a
                        href={data.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 flex flex-col items-center border border-red-500 p-1 rounded-lg justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M16.5 7.5v.01" />
                        </svg>
                        Instagram
                    </a>
                    <a
                        href={data.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 flex flex-col items-center border border-red-500 p-1 rounded-lg justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                            <path d="M10 9l5 3l-5 3z" />
                        </svg>
                        YouTube
                    </a>
                    <a
                        href={data.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 flex flex-col items-center border border-green-500 p-1 rounded-lg justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                        </svg>
                        WhatsApp
                    </a>
                </div>

                {/* Action Buttons */}
                <ContactButtons data={data} />

            </section>

            <div className="p-4 flex flex-col items-center pb-10">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Información del Negocio
                </h1>
                {data && (
                    <div className="w-full max-w-96">
                        <p>
                            <strong>Nombre:</strong> {data.name}
                        </p>
                        <p>
                            <strong>Dirección:</strong> {data.address}
                        </p>
                        <p>
                            <strong>Teléfono:</strong> {data.phone}
                        </p>
                        <p>
                            <strong>Horario:</strong> {data.hours}
                        </p>
                        {/* <div className="mt-4">
                        <p><strong>Ubicación:</strong></p>
                        <p>Latitud: {data.location.lat}</p>
                        <p>Longitud: {data.location.lng}</p>
                    </div> */}
                    </div>
                )}
            </div>
        </>
    );
};
