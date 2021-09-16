import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { Cake } from '@waracle-test/models';

import { CakesService } from './cakes.service';

@Controller('cakes')
export class CakesController {
  constructor(private cakesService: CakesService) {}

  @Post()
  async create(@Body() createCakeDto: Cake) {
    return await this.cakesService.create(createCakeDto);
  }

  @Get()
  async findAll() {
    return await this.cakesService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.cakesService.delete(id);
  }
}
