import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.userService.createUser(createUserDto);
    return createdUser;
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    return users;
  }

  @Get(':id')
  async getUserById(@Param('id') userId: number) {
    const user = await this.userService.getUserById(userId);
    return user;
  }

  @Patch(':id')
  async updateUser(@Param('id') userId: number, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userService.updateUser(userId, updateUserDto);
    return updatedUser;
  }

  @Patch(':id/patch')
  async patchUser(@Param('id') userId: number, @Body() updateUserDto: UpdateUserDto) {
    const patchedUser = await this.userService.patchUser(userId, updateUserDto);
    return patchedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: number) {
    const deletedUser = await this.userService.deleteUser(userId);
    return deletedUser;
  }
}
