import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Booking } from './Booking.entity';

@Entity()
export class CarSpace {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    address: string;

    @ManyToOne(() => User)
    owner: User;

    @OneToMany(() => Booking, booking => booking.carSpace)
    bookings: Booking[];
}
