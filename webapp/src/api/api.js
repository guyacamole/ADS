import axios from 'axios';

const BASE_URL = 'http://api-gateway:5000';

export const api = axios.create({ baseURL: BASE_URL });

export const apiAuth = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});
