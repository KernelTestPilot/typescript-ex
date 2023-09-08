import { Bookings } from "../Components/BookingTable/BookingTbody";

export type PersonInfo = {
role: role;
username: string;
subscriptions: Bookings [];
};

export type role = "ADMIN" | "USER";