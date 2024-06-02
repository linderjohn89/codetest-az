import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.tvmaze.com',
  timeout: 1000,
});

export async function SearchShows(query: string) {
  const result = await instance.get(`/search/shows?q=${query}`);

  return result;
}

export async function GetShow(id: string) {
  const result = await instance.get(`/lookup/shows?thetvdb=${id}`);

  return result;
}
