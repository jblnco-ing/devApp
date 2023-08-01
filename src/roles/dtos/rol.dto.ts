import { Field, InputType } from '@nestjs/graphql';
import {
  IsArray,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PartialType } from '@nestjs/graphql';

@InputType()
export class CreateRolDto {
  //name
  @MinLength(1)
  @MaxLength(80)
  @IsNotEmpty()
  @IsString()
  @Field()
  readonly name: string;
  //FK developerId
  // @IsPositive()
  // @IsNotEmpty()
  // readonly developerId: number;
  // //FK projectId
  // @IsPositive()
  // @IsNotEmpty()
  // @IsArray()
  // readonly projectId: number[];
}

export class UpdateRolDto extends PartialType(CreateRolDto) {}
