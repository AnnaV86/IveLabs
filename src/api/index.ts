const baseURL = 'https://v1336-api-test.onrender.com/';

export const getBrigadesData = async () => {
  const response = await fetch(`${baseURL}getBrigadesData`);
  const result = await response.json();
  return result;
};

export const getDepartments = async () => {
  const response = await fetch(`${baseURL}getDepartments`);
  const result = await response.json();
  return result;
};

export const getConnectionState = async () => {
  const response = await fetch(`${baseURL}getConnectionState`);
  const result = await response.json();
  return result;
};

export const getPointsFast = async (points: string) => {
  const response = await fetch(`${baseURL}getPointsFast?points=${points}`);
  const result = await response.json();
  return result;
};
