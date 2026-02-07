import { Controller, Get } from '@nestjs/common';
import { CatalogosService } from './catalogos.service';

@Controller('catalogos')
export class CatalogosController {
  constructor(private readonly service: CatalogosService) {}

  @Get('tipos-gasto')
  tipos(): any {
    return this.service.tiposGasto();
  }

  @Get('categorias')
  categorias(): any {
    return this.service.categorias();
  }

  @Get('subcategorias')
  subcategorias(): any {
    return this.service.subcategorias();
  }
}
