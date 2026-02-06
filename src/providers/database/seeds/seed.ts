import { AppDataSource } from '../data-source';
import { TipoGasto } from '../../../api/entities/tipo-gasto.entity';
import { CategoriaGasto } from '../../../api/entities/categoria-gasto.entity';
import { SubcategoriaGasto } from '../../../api/entities/subcategoria-gasto.entity';

async function seed(): Promise<boolean> {
  await AppDataSource.initialize();

  const tipoRepo = AppDataSource.getRepository(TipoGasto);
  const categoriaRepo = AppDataSource.getRepository(CategoriaGasto);
  const subcategoriaRepo = AppDataSource.getRepository(SubcategoriaGasto);

  // --------------------
  // TIPOS DE GASTO
  // --------------------
  const tipos = ['fijo', 'no_fijo'];
  for (const nombre of tipos) {
    if (!(await tipoRepo.findOneBy({ nombre }))) {
      await tipoRepo.save(tipoRepo.create({ nombre }));
    }
  }

  // --------------------
  // CATEGORIAS
  // --------------------
  const categorias = ['hogar', 'personal', 'trabajo'];
  const categoriasMap: Record<string, CategoriaGasto> = {};

  for (const nombre of categorias) {
    let categoria = await categoriaRepo.findOneBy({ nombre });
    categoria ??= await categoriaRepo.save(categoriaRepo.create({ nombre }));
    categoriasMap[nombre] = categoria;
  }

  // --------------------
  // SUBCATEGORIAS
  // --------------------
  const subcategorias = {
    hogar: ['mercado', 'arriendo', 'servicios', 'aseo', 'comida', 'otros'],
    personal: ['otros'],
    trabajo: ['otros'],
  };

  for (const [categoriaNombre, subs] of Object.entries(subcategorias)) {
    for (const nombre of subs) {
      const exists = await subcategoriaRepo.findOne({
        where: {
          nombre,
          categoria: { id: categoriasMap[categoriaNombre].id },
        },
      });

      if (!exists) {
        await subcategoriaRepo.save(
          subcategoriaRepo.create({
            nombre,
            categoria: categoriasMap[categoriaNombre], // Esto está bien para crear
          }),
        );
      }
    }
  }

  console.log('✅ Seed ejecutado correctamente');
  await AppDataSource.destroy();
  return true;
}

seed().catch((err: unknown) => {
  if (err instanceof Error) {
    console.error('❌ Error en seed', err.message);
  } else {
    console.error('❌ Error en seed', err);
  }
  process.exit(1);
});
