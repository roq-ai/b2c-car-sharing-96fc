import { BookingInterface } from 'interfaces/booking';
import { LocationInterface } from 'interfaces/location';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  make: string;
  year: number;
  color: string;
  location_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  location?: LocationInterface;
  _count?: {
    booking?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  make?: string;
  color?: string;
  location_id?: string;
  status?: string;
}
