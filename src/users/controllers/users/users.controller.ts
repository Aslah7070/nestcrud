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

@Controller('users')
export class UsersController {
  @Get('datas')
  getUsers(@Query('sortedBy') sortedBy: string) {
    console.log(sortedBy);
    return [{ name: 'aslah', place: 'malappuram' }];
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
