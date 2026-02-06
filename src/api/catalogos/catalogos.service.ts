import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoGasto } from '../entities/tipo-gasto.entity';
import { CategoriaGasto } from '../entities/categoria-gasto.entity';
import { SubcategoriaGasto } from '../entities/subcategoria-gasto.entity';

@Injectable()
export class CatalogosService {
  constructor(
    @InjectRepository(TipoGasto)
    private readonly tipoGastoRepo: Repository<TipoGasto>,

    @InjectRepository(CategoriaGasto)
    private readonly categoriaRepo: Repository<CategoriaGasto>,

    @InjectRepository(SubcategoriaGasto)
    private readonly subcategoriaRepo: Repository<SubcategoriaGasto>,
  ) {}

  // --------------------
  // TIPOS DE GASTO
  // --------------------
  tiposGasto() {
    return this.tipoGastoRepo.find({
      order: { nombre: 'ASC' },
    });
  }

  // --------------------
  // CATEGORIAS
  // --------------------
  categorias() {
    return this.categoriaRepo.find({
      order: { nombre: 'ASC' },
    });
  }

  // --------------------
  // SUBCATEGORIAS
  // --------------------
  subcategorias() {
    return this.subcategoriaRepo.find({
      relations: ['categoria'],
      order: {
        categoria: { nombre: 'ASC' },
        nombre: 'ASC',
      },
    });
  }

  // --------------------
  // SUBCATEGORIAS POR CATEGORIA
  // --------------------
  subcategoriasPorCategoria(categoriaId: number) {
    return this.subcategoriaRepo.find({
      where: {
        categoria: { id: categoriaId },
      },
      order: { nombre: 'ASC' },
    });
  }
}
