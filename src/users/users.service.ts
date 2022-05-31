import { Injectable } from '@nestjs/common';


export type User = {
    id: number,
    name: string,
    username: string,
    password: string,
}
@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'first',
            username: 'firstUser',
            password: 'first'
        },
        {
            id: 2,
            name: 'second',
            username: 'secondUser',
            password: 'second'
        },
        {
            id: 3,
            name: 'third',
            username: 'thirdUser',
            password: 'third'
        }
    ];


    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}
