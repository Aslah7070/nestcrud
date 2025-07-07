import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDeteo } from 'src/users/dtos/CreateUsers.dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('datas')
  getUsers(@Query('sortedBy') sortedBy: string) {
    console.log(sortedBy);
    return this.userService.fetchUsers();
  }
  @Post('create')
  @UsePipes(new ValidationPipe())
  postUsers(@Body() userData: CreateUserDeteo) {
    console.log(userData);
    return {};
  }
  @Get(':id/:postId')
  getUserById(@Param('id', ParseIntPipe) id: string, @Param('postId') postId: string) {
    console.log(id);
    console.log(postId);
    return { id, postId };
  }
}
