import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Body() cat: Cat) {
    return this.catsService.create(cat);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cat: Cat) {
    this.catsService.update(id, cat);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.catsService.remove(id);
    return `This action removes a #${id} cat`;
  }
}
