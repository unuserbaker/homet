import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { FilterGastoDTO } from './dto/filter-gasto.dto';

@Controller('gastos')
export class GastosController {
  constructor(private readonly service: GastosService) {}

  @Get('resumen/mensual')
  resumenMensual(@Query() query: FilterGastoDTO): Promise<any> {
    return this.service.resumenMensual(
      query.mes ?? new Date().toISOString().slice(0, 7),
    );
  }

  @Post()
  create(@Body() dto: CreateGastoDto): Promise<any> {
    return this.service.create(dto);
  }

  @Get()
  findAll(): Promise<any> {
    return this.service.findAll();
  }
}
