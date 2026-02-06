import { IsDateString, IsString, IsNotEmpty } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsDateString()
  fechaNacimiento!: Date;
}
