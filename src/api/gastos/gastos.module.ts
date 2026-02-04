import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GastosController } from './gastos.controller';
import { GastosService } from './gastos.service';
import { Gasto } from './entities/gastos.entity';
import { Persona } from '../persona/entities/persona.entity';
import { TipoGasto } from '../tipo-gasto/entities/tipo-gasto.entity';
import { CategoriaGasto } from '../categoria-gasto/entities/categoria-gasto.entity';
import { SubcategoriaGasto } from '../subcategoria-gasto/entities/subcategoria-gasto.entity';

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
  exports: [TypeOrmModule],
})
export class GastosModule {}
