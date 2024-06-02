export interface ApiResponse {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  externals: Externals;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  network: {
    name: string;
    country: {
      name: string;
    };
    officialSite: string;
  };
  image: {
    original: string;
  };
  summary: string;
}

export interface Externals {
  thetvdb: string;
}
