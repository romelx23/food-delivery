import React from 'react'
import { ButtonShare } from './button-share'
import Link from 'next/link'
import { ButtonCart } from './button-cart'
import { fetchBusinessInfo } from '../helpers/sheet-helper'

export const Navbar = async () => {

    const data = await fetchBusinessInfo()

    return (
        <>
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-white shadow-md">
                {/* Logo */}
                <h2 className="text-2xl font-bold">FoodDelivery</h2>

                {/* Social Links and Action Buttons */}
                <div className="flex gap-4 items-center">
                    <Link
                        href='/'
                        className='xl:flex flex-col items-center text-gray-500 hidden'>

                        Home
                    </Link>
                    <Link
                        href='/menu'
                        className='xl:flex flex-col items-center text-gray-500 hidden'>

                        Menu
                    </Link>
                    <Link
                        href='/ubicacion'
                        className='xl:flex flex-col items-center text-gray-500 hidden'>

                        Ubicación
                    </Link>
                    {
                        data &&
                        <ButtonCart
                            myNumber={data.phone || ''}
                        />
                    }
                    <ButtonShare />
                </div>
            </header>
        </>
    )
}
