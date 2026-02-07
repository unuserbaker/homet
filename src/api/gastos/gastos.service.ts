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

  async resumenMensual(
    mes: string,
  ): Promise<{ categoria: string; total: number }[]> {
    const [year, month] = mes.split('-').map(Number);

    const inicio = new Date(year, month - 1, 1);
    const fin = new Date(year, month, 0);

    return this.gastoRepo
      .createQueryBuilder('g')
      .select('c.nombre', 'categoria')
      .addSelect('SUM(g.monto)', 'total')
      .innerJoin('g.categoria', 'c')
      .where('g.fecha BETWEEN :inicio AND :fin', { inicio, fin })
      .groupBy('c.nombre')
      .orderBy('total', 'DESC')
      .getRawMany();
  }

  async resumenPorSubcategoria(
    mes: string,
  ): Promise<{ subcategoria: string; total: number }[]> {
    const [year, month] = mes.split('-').map(Number);

    return this.gastoRepo
      .createQueryBuilder('g')
      .select('s.nombre', 'subcategoria')
      .addSelect('SUM(g.monto)', 'total')
      .leftJoin('g.subcategoria', 's')
      .where('EXTRACT(YEAR FROM g.fecha) = :year', { year })
      .andWhere('EXTRACT(MONTH FROM g.fecha) = :month', { month })
      .groupBy('s.nombre')
      .orderBy('total', 'DESC')
      .getRawMany();
  }
}
