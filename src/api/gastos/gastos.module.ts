import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GastosController } from './gastos.controller';
import { GastosService } from './gastos.service';
import { Gasto } from '../entities/gastos.entity';
import { Persona } from '../entities/persona.entity';
import { TipoGasto } from '../entities/tipo-gasto.entity';
import { CategoriaGasto } from '../entities/categoria-gasto.entity';
import { SubcategoriaGasto } from '../entities/subcategoria-gasto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Gasto,
      Persona,
      TipoGasto,
      CategoriaGasto,
      SubcategoriaGasto,
    ]),
  ],
  controllers: [GastosController],
  providers: [GastosService],
  exports: [GastosService],
})
export class GastosModule {}
