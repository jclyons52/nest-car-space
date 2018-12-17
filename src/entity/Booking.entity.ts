import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CarSpace } from './CarSpace.entity';
import { User } from './user.entity';

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    start: Date;

    @Column()
    end: Date;

    @ManyToOne(() => CarSpace)
    carSpace: CarSpace;

    @ManyToOne(() => User)
    user: User;
}
