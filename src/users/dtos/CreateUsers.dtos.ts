/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDeteo {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  place: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
