// "use client"
import { CardFood } from "@/features/home/components/card-food";
import { fetchMenu } from "@/features/home/helpers/sheet-helper";
import { Metadata } from "next";
// import { useMenu } from "@/features/home/hooks/userMenu";

export const metadata: Metadata = {
    title: 'Menú',
    description:
        'Menú de la tienda de comida rápida, con los productos y precios que se ofrecen en la tienda.',
};

export default async function MenuPage() {

    const data = await fetchMenu()

    // const { data, isLoading, error } = useMenu();

    // if (isLoading) return <p>Cargando menú...</p>;
    // if (error) return <p>Error al cargar el menú: {error.message}</p>;
    if (!data) return <p>Cargando datos del menu...</p>;

    return (
        <div className="min-h-screen">
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Menú</h1>
                {/* <div className="grid gap-4 justify-center md:justify-start md:flex flex-wrap mx-auto max-w-5xl"> */}
                <div className="grid gap-4 mx-auto max-w-6xl"
                    style={{ gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))" }}
                >
                    {data?.map((item, index) => (
                        <CardFood key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export const SkeletonCard = () => {
    return (
        <div className="p-4">
            <div className="animate-pulse bg-gray-200 rounded-lg h-96"></div>
        </div>
    )
}