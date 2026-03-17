import { IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsString({ message: 'El nombre de usuario es requerido' })
  @IsNotEmpty({ message: 'El nombre de usuario no puede estar vacío' })
  username: string;

  @IsString({ message: 'La contraseña es requerida' })
  @IsNotEmpty({ message: 'La contraseña no puede estar vacía' })
  password: string;
}
