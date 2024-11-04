// src/helpers/sheetHelpers.ts
import { getSheetURL } from "@/api/api";
import axios from "axios";

export interface MenuItem {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

export interface BusinessInfo {
    name: string;
    address: string;
    phone: string;
    hours: string;
    location: string
    facebook: string,
    instagram: string,
    youtube: string,
    whatsapp: string,
}

// Fetch data from menu sheet
export const fetchMenu = async (): Promise<MenuItem[]> => {
    const gid = "1296634110"; // Ajusta el gid según la hoja que contiene el menú
    const url = getSheetURL(gid);

    try {
        const response = await axios.get(url);
        const data = response.data;

        // Split the response into rows
        const rows = data.split('\r\n').map((row: string) => row.split('\t'));

        // Remove the header row and map the rest to MenuItem objects
        const menuItems: MenuItem[] = rows.slice(1).map((row: string[]) => ({
            name: row[0],
            description: row[1],
            price: parseFloat(row[2]),
            imageUrl: row[3],
        }));

        return menuItems;
    } catch (error) {
        console.error("Error fetching menu data", error);
        return [];
    }
};

// Fetch data from business info sheet
export const fetchBusinessInfo = async (): Promise<BusinessInfo> => {
    // profile data
    // https://docs.google.com/spreadsheets/d/e

    // localization
    // https://docs.google.com/spreadsheets/d/e

    const gid = "0"; // Ajusta el rango según la ubicación de la información del negocio
    const url = getSheetURL(gid);
    console.log({ url });

    try {
        const response = await axios.get(url);

        const data = response.data;

        // Split the response into rows
        const rows = data.split('\r\n').map((row: string) => row.split('\t'));

        console.log({ response });

        const storeData = rows.slice(1).map((row: string[]) => ({
            name: row[0],
            address: row[1],
            phone: row[2],
            hours: row[3],
            location: row[4],
            facebook: row[5],
            instagram: row[6],
            youtube: row[7],
            whatsapp: row[8],
        }));

        console.log({ storeData });

        return storeData[0];
    } catch (error) {
        console.error("Error fetching business info", error);
        return {
            name: "",
            address: "",
            phone: "",
            hours: "",
            location: "",
            facebook: "",
            instagram: "",
            youtube: "",
            whatsapp: "",
        };
    }
};