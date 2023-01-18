import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsString, IsEmail } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'user@mail.dom', description: 'User`s email'})
  @IsString({message: 'Should be a string'})
  @IsEmail({}, {message: 'Incorrect email'})
  readonly email: string;

  @ApiProperty({example: 'veryHardPassword', description: 'User`s password'})
  @IsString({message: 'Should be a string'})
  readonly password: string;
}