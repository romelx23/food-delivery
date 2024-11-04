import { MenuItemCart, useCartStore } from "@/features/home/store/cart.store"
import { FC } from "react"
import { useForm } from "react-hook-form"

interface FormOrderProps {
    cart: MenuItemCart[];
    myNumber: string;
}

interface FormOrderData {
    name: string;
    phone: string;
    address: string;
    reference: string;
    payment: string;
    // change: string;
    notes: string;
}

export const ModalOrder: FC<FormOrderProps> = ({ cart, myNumber }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormOrderData>({
        defaultValues: {
            name: "",
            phone: "",
            address: "",
            reference: "",
            payment: "",
            // change: "",
            notes: "",
        }
    })

    const { clearCart } = useCartStore();

    const onSubmit = (data: FormOrderData) => {
        console.log(data);

        // Send the order to whatsapp
        let message = `*Pedido de ${ data.name }*\n\n`;
        message += `*Dirección:* ${ data.address }\n`;
        message += `*Referencia:* ${ data.reference }\n\n`;
        message += `*Productos:*\n`;
        cart.forEach((item, index) => {
            message += `${ index + 1 }. ${ item.name } - S/.${ item.price } x ${ item.quantity }\n`;
        });
        message += `\n`;
        message += `*Total: S/.${ cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0) }*\n\n`;
        message += `*Forma de Pago:* ${ data.payment }\n`;

        if (data.notes.length > 0) message += `*Notas:* ${ data.notes }\n`;
        if (data.notes.length === 0) message += `*Notas:* no hay notas\n`;

        // Send the message to whatsapp
        const url = `https://api.whatsapp.com/send?phone=${ myNumber }&text=${ encodeURIComponent(message) }`;

        window.open(url, "_blank");

        // Clear the cart
        clearCart();
    }

    return (
        <div className="flex flex-col px-4 py-4">

            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Formulario de Pedido</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mt-4">
                <label htmlFor="name" className="text-sm font-semibold text-gray-600 dark:text-white">Nombre</label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-300 text-black dark:bg-gray-700 dark:text-gray-200"
                    {...register("name")}
                    placeholder="Ej. Juan Pérez"
                />
                {
                    errors.name && <span className="text-red-500">Este campo es requerido</span>
                }

                <label htmlFor="phone" className="text-sm font-semibold text-gray-600 dark:text-white mt-4">Teléfono</label>
                <input
                    type="text"
                    id="phone"
                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-300 text-black dark:bg-gray-700 dark:text-gray-200"
                    {...register("phone")}
                    placeholder="Ej. 999 888 777"
                />
                {
                    errors.phone && <span className="text-red-500">Este campo es requerido</span>
                }

                <label htmlFor="address" className="text-sm font-semibold text-gray-600 dark:text-white mt-4">Dirección</label>
                <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-300 text-black dark:bg-gray-700 dark:text-gray-200"
                    {...register("address")}
                    placeholder="Ej. Av. Los Pinos 123"
                />
                {
                    errors.address && <span className="text-red-500">Este campo es requerido</span>
                }

                <label htmlFor="reference" className="text-sm font-semibold text-gray-600 dark:text-white mt-4">Referencia</label>
                <input
                    type="text"
                    id="reference"
                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-300 text-black dark:bg-gray-700 dark:text-gray-200"
                    {...register("reference")}
                    placeholder="Ej. Frente a la tienda de la esquina"
                />
                {
                    errors.reference && <span className="text-red-500">Este campo es requerido</span>
                }

                <label htmlFor="payment" className="text-sm font-semibold text-gray-600 dark:text-white mt-4">Forma de Pago</label>
                <select
                    id="payment"
                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-300 text-black dark:bg-gray-700 dark:text-gray-200"
                    {...register("payment")}
                >
                    <option value="yape">Yape</option>
                    <option value="efectivo">Efectivo</option>
                    <option value="tarjeta">Tarjeta</option>
                </select>

                {
                    errors.payment && <span className="text-red-500">Este campo es requerido</span>
                }

                {/* <label htmlFor="change" className="text-sm font-semibold text-gray-600 dark:text-white mt-4">¿Con cuánto pagará?</label>
                <input
                    type="text"
                    id="change"
                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-300 text-black dark:bg-gray-700 dark:text-gray-200"
                    {...register("change")}
                    placeholder="Ej. 100"
                /> */}

                <label htmlFor="notes" className="text-sm font-semibold text-gray-600 dark:text-white mt-4">Notas</label>
                <textarea
                    id="notes"
                    className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-300 text-black dark:bg-gray-700 dark:text-gray-200"
                    // {...register("notes")}
                    placeholder="Ej. Sin ají por favor"
                ></textarea>
                {/* {
                    errors.notes && <span className="text-red-500">Este campo es requerido</span>
                } */}

                {/* listar los productos */}

                <div className="mt-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Productos</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 text-left text-gray-800 dark:text-white font-semibold">Producto</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 text-left text-gray-800 dark:text-white font-semibold">Cantidad</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 text-left text-gray-800 dark:text-white font-semibold">Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                        <td className="py-2 px-4 text-gray-800 dark:text-white">{item.name}</td>
                                        <td className="py-2 px-4 text-gray-800 dark:text-white">{item.quantity}</td>
                                        <td className="py-2 px-4 text-gray-800 dark:text-white">S/. {item.price}</td>
                                    </tr>
                                ))}
                            </tbody>

                            <tfoot>
                                <tr>
                                    <td className="py-2 px-4 text-gray-800 dark:text-white font-semibold">Total</td>
                                    <td className="py-2 px-4 text-gray-800 dark:text-white font-semibold"></td>
                                    <td className="py-2 px-4 text-gray-800 dark:text-white font-semibold">S/.{
                                        Math.round(cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0) * 100) / 100
                                    }</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white font-bold py-2 rounded mt-4"
                    >
                        Realizar Pedido
                    </button>
                </div>
            </form>
        </div>
    )
}
