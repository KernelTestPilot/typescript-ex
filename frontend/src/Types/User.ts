import { Bookings } from "../Components/BookingTbody";

export type PersonInfo = {
role: role;
username: string;
subscriptions: Bookings [];
};

export type role = "ADMIN" | "USER";