import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsDateString } from 'class-validator';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  @IsNotEmpty()
  nombre: string;

  @Column('date')
  @IsDateString()
  fechaNacimiento: string;

  @Column({ length: 100 })
  @IsNotEmpty()
  tipoCita: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  enfermedad: string;
}

  