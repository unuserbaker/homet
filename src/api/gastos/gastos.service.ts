import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gasto } from '../entities/gastos.entity';
import { CreateGastoDto } from './dto/create-gasto.dto';

@Injectable()
export class GastosService {
  constructor(
    @InjectRepository(Gasto)
    private readonly gastoRepo: Repository<Gasto>,
  ) {}

  create(dto: CreateGastoDto) {
    return this.gastoRepo.save(dto);
  }

  findAll() {
    return this.gastoRepo.find({
      order: { fecha: 'DESC' },
    });
  }
}
