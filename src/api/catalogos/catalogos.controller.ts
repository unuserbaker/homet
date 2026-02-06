import { Controller, Get } from '@nestjs/common';
import { CatalogosService } from './catalogos.service';

@Controller('catalogos')
export class CatalogosController {
  constructor(private readonly service: CatalogosService) {}

  @Get('tipos-gasto')
  tipos() {
    return this.service.tiposGasto();
  }

  @Get('categorias')
  categorias() {
    return this.service.categorias();
  }

  @Get('subcategorias')
  subcategorias() {
    return this.service.subcategorias();
  }
}
