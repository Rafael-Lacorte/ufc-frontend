const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchRankings() {
    const response = await fetch(`${API_BASE_URL}/ranking`);

    if(!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json();
};

export async function fetchFighter(id: string) {
    const response = await fetch(`${API_BASE_URL}/fighter/${id}`);

    if(!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json();
};

export async function fetchFighters() {
    const response = await fetch(`${API_BASE_URL}/fighter`);

    if(!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json();
};

export async function fetchFighterHistory(id: string) {
    const response = await fetch(`${API_BASE_URL}/fight/fighter/history/${id}`);

    if(!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json();
};

export async function fetchUpcomingEvents() {
    const response = await fetch(`${API_BASE_URL}/event/upcoming`);

    if(!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json();
};
