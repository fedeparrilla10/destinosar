export interface ApiPlacesI {
  createdAt?: string;
  name: string;
  province: string;
  region: string;
  description: string;
  img: string;
  id: string;
  language?: string;
  population?: number;
  latitude?: number;
  longitude?: number;
}

export interface PlacesI {
  name: string;
  province: string;
  region: string;
  description: string;
  img: string;
  id: string;
}

