import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, Length } from 'class-validator';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  @IsNotEmpty()
  @Length(2, 100)
  nombre: string;

  @Column('date')
  fechaNacimiento: string;

  @Column({ length: 100 }) // Nueva columna para tipo de cita
  @IsNotEmpty()
  @Length(2, 100)
  tipoCita: string;

  @Column({ length: 255 }) // Nueva columna para enfermedad
  @IsNotEmpty()
  @Length(2, 255)
  enfermedad: string;
}
