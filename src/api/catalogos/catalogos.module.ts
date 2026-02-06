import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoGasto } from '../entities/tipo-gasto.entity';
import { CategoriaGasto } from '../entities/categoria-gasto.entity';
import { SubcategoriaGasto } from '../entities/subcategoria-gasto.entity';
import { CatalogosController } from './catalogos.controller';
import { CatalogosService } from './catalogos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TipoGasto, CategoriaGasto, SubcategoriaGasto]),
  ],
  controllers: [CatalogosController],
  providers: [CatalogosService],
})
export class CatalogosModule {}
