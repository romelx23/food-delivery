// 'use client'
import { fetchBusinessInfo } from '../helpers/sheet-helper';
// import { useBusinessInfo } from '../hooks/useBusinessInfo';
// import { useBusinessStore } from '../store/profile.store';

export const MapComponent = async () => {

    // obtener de googlesheet la ubicacion
    // const {
    //     businesses: data
    // } = useBusinessStore()
    const data = await fetchBusinessInfo()

    if (!data) return <p>Cargando datos del negocio...</p>;
    // if (!data) return <p>Error al cargar la información</p>;

    return (
        <>
            <div className="flex">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1949.7462624302266!2d-76.90762910368849!3d-12.214894634862816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bc1d54324b09%3A0x822f77c10ded2eda!2sPolleria%20el%20Galponcito!5e0!3m2!1ses-419!2spe!4v1730670927132!5m2!1ses-419!2spe" width="600" height="450" loading="lazy"
                    className="w-full h-96 border-0"
                ></iframe> */}
                {
                    <iframe src={data?.location} width="600" height="450" loading="lazy"
                        className="w-full h-96 border-0"
                    ></iframe>
                }
            </div>

            <div className="flex justify-center">
                <div className="w-1/2">
                    <h2 className="text-center font-bold">Dirección</h2>
                    <p className="text-center">Av. Los Incas 123</p>
                </div>
            </div>
        </>
    )
}
