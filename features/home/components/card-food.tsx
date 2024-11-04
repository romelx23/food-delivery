"use client"
import { FC } from "react";
import { MenuItem } from "../helpers/sheet-helper";
import { useCartStore } from "../store/cart.store";
import { toast } from "sonner";

interface CardFoodProps {
    item: MenuItem;
}

export const CardFood: FC<CardFoodProps> = ({ item }) => {
    // here add the logic to show the card
    const { addToCart } = useCartStore();
    const handleAddToCart = () => {
        // add to cart logic
        addToCart({
            ...item,
            quantity: 1,
        });
        toast.success("Producto agregado al carrito");
    }

    return (
        <div className="p-4 border rounded shadow">
            <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-green-600 font-bold mt-2">S/. {item.price}</p>
            <button
                onClick={handleAddToCart}
                className="w-full bg-green-500 text-white font-bold py-2 rounded mt-2"
            >
                Agregar al carrito
            </button>
        </div>
    )
}
