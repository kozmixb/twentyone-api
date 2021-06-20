import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto, session: Record<string, any>) {
    session.user = createUserDto;
    return JSON.stringify(session.user);
  }

  whoami(session: Record<string, any>) {
    session.user = session.user ? session.user : {};
    return JSON.stringify(session.user);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
