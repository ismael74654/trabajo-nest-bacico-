import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { Paciente } from './paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
  providers: [PacientesService],
  controllers: [PacientesController],
})
export class PacientesModule {}
