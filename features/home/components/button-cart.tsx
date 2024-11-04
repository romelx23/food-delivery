"use client"

import { FC, useState } from "react";
import { useCartStore } from "../store/cart.store";
import { ModalComponent } from "@/features/menu/components/modal-component";
import { ModalOrder } from "@/features/menu/components/form-order";

interface ButtonCartProps {
    myNumber: string;
}

export const ButtonCart: FC<ButtonCartProps> = ({ myNumber }) => {

    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { cart, deleteFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

    const handleShowCart = () => {
        setShow(!show);
    }

    return (
        <>
            <button
                onClick={handleShowCart}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded relative">
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                    <span className="ml-2">Carrito</span>
                </div>
                <span className="flex items-center justify-center absolute rounded-full w-8 h-8 text-lg bg-red-500 font-bold -bottom-3 -right-3">{cart.length}</span>
            </button>

            <div className={`fixed w-full md:w-96 h-screen top-0 right-0 transition-transform ${ show ? 'translate-x-0' : 'translate-x-full' }`}>
                <button
                    onClick={handleShowCart}
                    className="absolute top-4 right-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
                <div className="bg-white h-full p-4 shadow-lg">
                    <h2 className="text-2xl font-bold">Carrito</h2>
                    {
                        cart.length === 0 && <p>No hay productos en el carrito</p>
                    }
                    <ul className="flex flex-col gap-2">
                        {cart.map((item, index) => (
                            <li key={index} className="flex justify-between gap-3 items-center flex-wrap ">
                                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                <p>{item.name}</p>
                                <p>S/.{
                                    Math.round(parseFloat(item.price) * item.quantity * 100) / 100
                                }</p>

                                <div className="w-full flex gap-4 justify-center">
                                    <button
                                        className="bg-red-500 text-white px-5 py-1 rounded w-1/3 text-2xl"
                                        onClick={() => decreaseQuantity(item)}
                                    >
                                        -
                                    </button>

                                    <p>{item.quantity}</p>

                                    <button
                                        className="bg-green-500 text-white px-5 py-1 rounded w-1/3 text-2xl"
                                        onClick={() => increaseQuantity(item)}
                                    >
                                        +
                                    </button>
                                </div>


                                {/* <button
                                    className="text-red-500"
                                    onClick={() => deleteFromCart(item)}>Eliminar</button> */}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center mt-4">
                        <p className="font-bold">Total:</p>
                        <p className="font-bold">S/.{
                            Math.round(cart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0) * 100) / 100
                        }</p>
                    </div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-green-500 text-white font-bold py-2 rounded mt-4 w-full"
                    >
                        Completar pedido
                    </button>
                </div>
            </div>
            <ModalComponent
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <ModalOrder
                    cart={cart}
                    myNumber={myNumber}
                />
            </ModalComponent>
        </>
    )
}
