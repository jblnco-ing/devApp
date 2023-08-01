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
  readonly name: string;
  @MinLength(1)
  @MaxLength(200)
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  readonly description: string;
  @IsEnum(statusType)
  @IsNotEmpty()
  @Field()
  readonly status: statusType;
  @IsArray()
  @IsNotEmpty()
  @Field((type) => Int)
  readonly rolId: number[];
  @IsArray()
  @IsNotEmpty()
  @Field((type) => Int)
  readonly developerId: number[];
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
