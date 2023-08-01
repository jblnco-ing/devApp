import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
  IsArray,
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/graphql';

@InputType()
export class CreateDeveloperDto {
  @MinLength(1)
  @MaxLength(80)
  @IsNotEmpty()
  @IsString()
  @Field()
  readonly name: string;
  @MinLength(1)
  @MaxLength(80)
  @IsString()
  @IsEmail()
  @IsOptional()
  @Field({ nullable: true })
  readonly email: string;

  @IsArray()
  @IsNotEmpty()
  @Field((type) => Int)
  readonly rolId: number[];
}

export class UpdateDeveloperDto extends PartialType(CreateDeveloperDto) {}
