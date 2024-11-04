// src/config/googleSheetsConfig.ts
// export const SHEET_ID = "YOUR_SHEET_ID";
// export const API_KEY = "YOUR_GOOGLE_API_KEY";
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getSheetURL = (gid: string) => {
  return `${API_URL}?gid=${gid}&single=true&output=tsv`;
};
