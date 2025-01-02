import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "../tasks.model";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}