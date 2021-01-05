import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { Article } from "./article/article.entity";
import { User } from "./user/user.entity";
import { ArticleController } from "./article/article.controller";
import { ArticleModule } from "./article/article.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'blog',
      entities: [User, Article],
      synchronize: true,
      autoLoadEntities:true
    }),
    AuthModule,
    UsersModule,
    ArticleModule
  ],
  controllers: [UserController, ArticleController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection:Connection) {
  }
}
