import { Resolver, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Query } from '@nestjs/common';
import { CarSpace } from '../entity/CarSpace.entity';
import { Repository } from 'typeorm';
import { Booking } from '../entity/Booking.entity';

@Resolver('User')
export class UserResolver {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(CarSpace) private carSpaceRepository: Repository<CarSpace>,
        @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
    ) { }

    @Query()
    async user(@Args('id') id: number) {
        // tslint:disable-next-line:no-console
        console.log(id);
        return this.userRepository.findOne(id);
    }

    @ResolveProperty()
    async carSpaces(@Parent() owner: User) {
        const { id } = owner;
        return this.carSpaceRepository.find({ where: { ownerId: id } });
    }

    @ResolveProperty()
    async bookings(@Parent() user: User) {
        const { id } = user;
        return this.bookingRepository.find({ where: { userId: id } });
    }
}
