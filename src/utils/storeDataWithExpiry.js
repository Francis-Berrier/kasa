import { config } from "../assets/config";

export function storeDataWithExpiry (key, data) {
    const cacheDuration = config.CACHE_DURATION;
    const expiry= Date.now() + cacheDuration;
    const dataWithExpiry = { data, expiry };
    localStorage.setItem( key, JSON.stringify(dataWithExpiry));
}

export function getDataWithExpiry (key) {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const parsed = JSON.parse(item);
    if (!parsed || typeof parsed !== 'object' || !('data' in parsed) || !('expiry' in parsed)) {
        localStorage.removeItem(key);
        return null; 
    }
    const { data, expiry } = parsed;
    if (Date.now() > expiry) {
        localStorage.removeItem(key);
        return null; 
    }
    return data;
}