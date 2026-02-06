import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column({ type: 'date' })
  fechaNacimiento!: Date;
}
