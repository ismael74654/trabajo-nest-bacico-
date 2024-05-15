import { IsNotEmpty, IsDateString, MaxDate } from 'class-validator';

export class PacienteDto {
  @IsNotEmpty()
  nombre: string;

  @IsDateString()
  fechaNacimiento: string;

  @IsNotEmpty()
  tipoCita: string;

  @IsNotEmpty()
  enfermedad: string;
}
