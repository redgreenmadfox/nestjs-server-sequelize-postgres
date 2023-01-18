import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsToMany, Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unic identificator'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  
  @ApiProperty({example: 'user@mail.dom', description: 'User`s email'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;
  
  @ApiProperty({example: 'veryHardPassword', description: 'User`s password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;
  
  @ApiProperty({example: 'true', description: 'User`s ban status'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;
  
  @ApiProperty({example: 'He was very bad boy', description: 'User`s ban reason'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[];
}