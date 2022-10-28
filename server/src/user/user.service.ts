import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/user/user.schema';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private readonly httpService: HttpService,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<UserDocument> {
        const user = await this.userModel.create(createUserDto);
        await user.save();
        console.log(await this.userModel.find());
        return user;
    }

    async get() {}
}
