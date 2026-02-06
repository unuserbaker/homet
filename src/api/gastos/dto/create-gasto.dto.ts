import {
  IsNumber,
  IsDateString,
  IsBoolean,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class CreateGastoDto {
  @IsString()
  @IsNotEmpty()
  descripcion!: string;

  @IsNumber()
  monto!: number;

  @IsDateString()
  fecha!: string;

  @IsNumber()
  tipoGastoId!: number;

  @IsNumber()
  categoriaId!: number;

  @IsOptional()
  subcategoriaId?: number;

  @IsOptional()
  personaId?: number;

  @IsOptional()
  @IsBoolean()
  esRecurrente?: boolean;
}
