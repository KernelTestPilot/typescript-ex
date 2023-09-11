import { Bookings } from "../Components/BookingTable/BookingTbody";

export type PersonInfo = {
role: role;
username: string;
subscriptions: Bookings [];
phone: number,
email: string
};

export type role = "ADMIN" | "USER";