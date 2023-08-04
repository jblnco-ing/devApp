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
import { statusType } from '../entities/projects.entity';

@InputType()
export class CreateProjectDto {
  @MinLength(1)
  @MaxLength(80)
  @IsNotEmpty()
  @IsString()
  @Field((type) => String)
  name: string;
  @MinLength(1)
  @MaxLength(200)
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  description: string;
  @IsEnum(statusType)
  @IsNotEmpty()
  @IsOptional()
  @Field((type) => statusType, { nullable: true })
  status?: statusType;
  @IsOptional()
  @Field(() => [Number], { nullable: true })
  rolesIds?: number[];
  @IsArray()
  @IsNotEmpty()
  @Field(() => [Number], { nullable: true })
  developerIds?: number[];
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
