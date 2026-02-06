import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from '../entities/persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepo: Repository<Persona>,
  ) {}

  create(dto: CreatePersonaDto) {
    return this.personaRepo.save(dto);
  }

  findAll() {
    return this.personaRepo.find({
      order: { id: 'DESC' },
    });
  }
}
