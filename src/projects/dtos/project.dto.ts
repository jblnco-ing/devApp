import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsArray,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';

enum statusType {
  'Active',
  'Pause',
  'Done',
  'Canceled',
  'Other',
}

@InputType()
export class CreateProjectDto {
  @MinLength(1)
  @MaxLength(80)
  @IsNotEmpty()
  @IsString()
  @Field((type) => Int)
  name: string;
  @MinLength(1)
  @MaxLength(200)
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  description: string;
  @IsEnum(statusType)
  @IsNotEmpty()
  @Field()
  status: statusType;
  @IsArray()
  @IsNotEmpty()
  @Field((type) => Int)
  rolId: number[];
  @IsArray()
  @IsNotEmpty()
  @Field((type) => Int)
  developerId: number[];
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
