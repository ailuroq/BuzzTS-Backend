import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Article } from "../article/article.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ length: 50 })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Article, article => article.user)
  articles: Article[]
}
