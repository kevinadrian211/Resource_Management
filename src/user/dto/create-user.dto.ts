import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({ example: 'Pablo Emilio' })
    username: string;
  
    @ApiProperty({ example: 'escobar@mail.com' })
    email: string;
  
    @ApiProperty({ example: 'passwordjuan' })
    password: string;
}
