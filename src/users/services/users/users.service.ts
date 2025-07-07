import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeDatas = [{ id: 1, name: 'aslah', place: 'manjeri' }];

  fetchUsers() {
    return this.fakeDatas;
  }
}
