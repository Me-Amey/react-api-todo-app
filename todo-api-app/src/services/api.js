const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const todoService = {
  getTasks: async () => {
    const response = await fetch(`${BASE_URL}?_limit=6`);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  },
  addTask: async (title) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify({ title, completed: false, userId: 1 }),
      headers: { 'Content-type': 'application/json' },
    });
    return await response.json();
  },
  deleteTask: async (id) => {
    await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  }
};