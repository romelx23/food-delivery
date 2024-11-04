import React from 'react'

export const Footer = () => {
    {/* Footer */ }
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="flex justify-center space-x-4 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    Instagram
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    YouTube
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    WhatsApp
                </a>
            </div>
            <p className="text-center">&copy; 2024 FoodDelivery. All rights reserved.</p>
        </footer>
    )
}
