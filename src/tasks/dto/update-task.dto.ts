import { IsEnum } from "class-validator";
import { TaskStatus } from "../tasks.model";


export class updateTaskDTO{
    @IsEnum(TaskStatus)
    status: TaskStatus;
}