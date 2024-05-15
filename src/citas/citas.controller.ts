import { Controller, Post, Body } from '@nestjs/common';
import { CitasService } from './citas.service';
import { Cita } from './cita.entity';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  async create(@Body() cita: Cita): Promise<Cita> {
    return await this.citasService.create(cita);
  }
}

