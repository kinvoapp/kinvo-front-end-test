import axios from "axios";

export const api = axios.create({
	baseURL: process.env.API_URL,
});

export const db = axios.create({
	baseURL: process.env.DB_URL || "http://localhost:3333/",
});
