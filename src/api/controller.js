import db from "./db.json";

export const getDBData = async () => {
  return await db;
};

export const getClientInfo = async (id) => {
  return await db.find((cliente) => cliente.cliente === id); 
};
