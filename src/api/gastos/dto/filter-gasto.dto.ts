import { IsOptional, IsString, Matches } from 'class-validator';

export class FilterGastoDTO {
  @IsString()
  @IsOptional()
  @Matches(/^\d{4}-\d{2}$/, { message: 'El formato debe ser YYYY-MM' })
  mes?: string;

  @IsOptional()
  categoriaid?: number;
}
