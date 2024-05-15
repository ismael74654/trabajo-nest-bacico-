import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './cita.entity';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private citasRepository: Repository<Cita>,
  ) {}

  async create(cita: Cita): Promise<Cita> {
    return await this.citasRepository.save(cita);
  }
}
