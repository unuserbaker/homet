import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CategoriaGasto } from '../entities/categoria-gasto.entity';

@Entity('subcategoria_gasto')
export class SubcategoriaGasto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @ManyToOne(() => CategoriaGasto, { eager: true })
  @JoinColumn({ name: 'categoriaId' })
  categoria!: CategoriaGasto;
}
