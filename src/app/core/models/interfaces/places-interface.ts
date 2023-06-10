export interface ApiPlacesI {
  createdAt?: string;
  name: string;
  province: string;
  region: string;
  description: string;
  long_description: string;
  activities: ActivitiesI[];
  mainimg: string;
  images: ImageI[];
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
  long_description: string;
  activities: ActivitiesI[];
  mainimg: string;
  images: ImageI[];
  id: string;
}

export interface ActivitiesI {
  name: string;
  description: string;
  type: string;
}

export interface ImageI {
  id: string;
  url: string;
}
