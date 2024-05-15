import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { Paciente } from './paciente.entity';
import { PacienteDto } from './paciente.dto'; // Importar PacienteDto

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Get()
  async findAll() {
    return this.pacientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pacientesService.findOne(+id);
  }
  @Post()
  async create(@Body() paciente: PacienteDto) {
    return this.pacientesService.create(paciente);
  }
  
  

  @Put(':id')
  async update(@Param('id') id: string, @Body() pacienteDto: PacienteDto) {
    return this.pacientesService.update(+id, pacienteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pacientesService.remove(+id);
  }
}
