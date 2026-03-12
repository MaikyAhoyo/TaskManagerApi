import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MinLength,
  IsNumber,
} from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'El título debe ser un texto' })
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber({}, { message: 'El ID del usuario debe ser un número' })
  @IsNotEmpty({ message: 'El ID del usuario es requerido' })
  userId: number;
}
