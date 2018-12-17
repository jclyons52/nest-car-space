export interface Booking {
    id: number;
    carSpace: CarSpace;
    user: User;
    start: Date;
    end: Date;
}

export interface CarSpace {
    id: number;
    longitude: number;
    latitude: number;
    address: string;
    owner: User;
    bookings?: Booking[];
}

export interface IQuery {
    user(id: number): User | Promise<User>;
    temp__(): boolean | Promise<boolean>;
}

export interface User {
    id: number;
    name: string;
    userName: string;
    email: string;
    password: string;
    carSpaces?: CarSpace[];
    bookings?: Booking[];
}

export type Date = any;
