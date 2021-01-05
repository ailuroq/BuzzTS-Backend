import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Article } from "../article/article.entity";
import { User } from "./user.entity";
import { ArticleService } from "../article/article.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService,],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
