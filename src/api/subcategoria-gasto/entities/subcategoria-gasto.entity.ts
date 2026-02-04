import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CategoriaGasto } from './categoria-gasto.entity';

@Entity('subcategoria_gasto')
export class SubcategoriaGasto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => CategoriaGasto, { eager: true })
  categoria: CategoriaGasto;
}
