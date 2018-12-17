import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { CarSpace } from './CarSpace.entity';
import { Booking } from './Booking.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => CarSpace, carSpace => carSpace.owner)
    carSpaces: CarSpace[];

    @OneToMany(() => Booking, booking => booking.user)
    bookings: Booking[]
}
