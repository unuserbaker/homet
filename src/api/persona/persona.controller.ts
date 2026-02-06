import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { PersonasService } from './persona.service';

@Controller('personas')
export class PersonasController {
  constructor(private readonly service: PersonasService) {}

  @Post()
  create(@Body() dto: CreatePersonaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
