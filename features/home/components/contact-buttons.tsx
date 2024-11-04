"use client";
import { FC } from "react";
import { BusinessInfo } from "../helpers/sheet-helper";

interface ContactButtonsProps {
    data: BusinessInfo;
}

export const ContactButtons: FC<ContactButtonsProps> = ({ data }) => {

    const handleSaveContact = () => {
        const vCardData = `
            BEGIN:VCARD
            VERSION:3.0
            FN:${ data.name }
            TEL:${ data.phone }
            ADR:${ data.address }
            END:VCARD
        `;
        const blob = new Blob([vCardData], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `${ data.name }.vcf`;
        a.click();

        URL.revokeObjectURL(url);
    };

    const handleCallNow = () => {
        window.open(`tel:${ data.phone }`);
    };

    const handleWriteNow = () => {
        window.open(`https://wa.me/${ data.phone }`);
    };
    return (
        <div className="flex flex-col items-center gap-2">
            <button
                onClick={handleSaveContact}
                className="px-4 py-3 font-semibold gap-2 bg-blue-500 text-white rounded-lg flex w-56 justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-message"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" />
                </svg>
                Save Contact
            </button>
            <button
                onClick={handleCallNow}
                className="px-4 py-3 font-semibold gap-2 bg-green-500 text-white rounded-lg flex w-56 justify-center">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-phone-call"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
                Call Now
            </button>
            <button
                onClick={handleWriteNow}
                className="px-4 py-3 font-semibold gap-2 bg-yellow-500 text-white rounded-lg flex w-56 justify-center">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-send"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 14l11 -11" />
                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
                Write Now
            </button>
        </div>
    )
}
