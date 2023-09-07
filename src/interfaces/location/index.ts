import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  latitude: number;
  longitude: number;
  created_at?: any;
  updated_at?: any;
  car?: CarInterface[];

  _count?: {
    car?: number;
  };
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
}
