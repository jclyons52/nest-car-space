import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user/user.resolver';
import { User } from './entity/user.entity';
import { Booking } from './entity/Booking.entity';
import { CarSpace } from './entity/CarSpace.entity';
import { DateScalar } from './DateScalar';
import { join } from 'path';

@Module({
  providers: [DateScalar, UserResolver],
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Booking]),
    TypeOrmModule.forFeature([CarSpace]),
  ],
})
export class AppModule {}
