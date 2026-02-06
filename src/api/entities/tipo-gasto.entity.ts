import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_gasto')
export class TipoGasto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  nombre!: string;
}
