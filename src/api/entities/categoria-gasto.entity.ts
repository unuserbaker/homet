import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categoria_gasto')
export class CategoriaGasto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  nombre!: string;
}
