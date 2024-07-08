type Consumption = {
    name: string;
  }
  
  
export type Booking = {
    id: string;
    bookingDate: string;
    officeName: string;
    startTime: string;
    endTime: string;
    listConsumption: Consumption[];
    participants: number;
    roomName: string;
  }