import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Persona } from './persona.entity';
import { TipoGasto } from './tipo-gasto.entity';
import { CategoriaGasto } from './categoria-gasto.entity';
import { SubcategoriaGasto } from './subcategoria-gasto.entity';

@Entity('gastos')
export class Gasto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  descripcion!: string;

  @Column('decimal', { precision: 12, scale: 2 })
  monto!: number;

  @Column({ type: 'date' })
  fecha!: Date;

  @ManyToOne(() => Persona, { nullable: true })
  persona?: Persona;

  @ManyToOne(() => TipoGasto, { eager: true })
  tipoGasto!: TipoGasto;

  @ManyToOne(() => CategoriaGasto, { eager: true })
  categoria!: CategoriaGasto;

  @ManyToOne(() => SubcategoriaGasto, { nullable: true, eager: true })
  subcategoria?: SubcategoriaGasto;

  @Column({ default: false })
  esRecurrente!: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
