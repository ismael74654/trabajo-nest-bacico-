import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './paciente.entity';
import { PacienteDto } from './paciente.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private pacientesRepository: Repository<Paciente>,
  ) {}

  async create(pacienteDto: PacienteDto): Promise<Paciente> {
    // Validar la fecha de nacimiento para asegurarse de que el paciente tenga al menos 18 años
    const fechaNacimiento = new Date(pacienteDto.fechaNacimiento);
    const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
    if (edad < 18) {
      throw new Error('El paciente debe tener al menos 18 años.');
    }
  
    // Crear y guardar el paciente en la base de datos
    const paciente: Paciente = new Paciente();
    paciente.nombre = pacienteDto.nombre;
    paciente.fechaNacimiento = pacienteDto.fechaNacimiento;
    paciente.tipoCita = pacienteDto.tipoCita;
    paciente.enfermedad = pacienteDto.enfermedad;
    return this.pacientesRepository.save(paciente);
  }
  
  
  

  findAll(): Promise<Paciente[]> {
    return this.pacientesRepository.find();
  }

  findOne(id: number): Promise<Paciente | undefined> {
    return this.pacientesRepository.findOne({ where: { id } });
}




async update(id: number, pacienteDto: PacienteDto): Promise<void> {
  await this.pacientesRepository.update(id, pacienteDto);
}

async remove(id: number): Promise<void> {
  await this.pacientesRepository.delete(id);
}
}
