import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paciente: string;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column()
  motivo: string;
}
