export class MovieTicketBooking {
  _id?: string;

  availability: boolean;
  swachh_bharat_cess: number;
  krishi_kalyan_cess: number;
  seat_code: string;
  type_of_seat: string;
  rate: number;
  constructor(
    _id: string,
    availability: boolean,
    swachh_bharat_cess: number,
    krishi_kalyan_cess: number,
    seat_code: string,
    type_of_seat: string,
    rate: number
  ) {
  
    this._id = _id;
    this.availability = availability;
    this.swachh_bharat_cess = swachh_bharat_cess;
    this.krishi_kalyan_cess = krishi_kalyan_cess;
    this.seat_code = seat_code;
    this.type_of_seat = type_of_seat;
    this.rate = rate;

  }
}
