import { IsEnum } from "class-validator";
import { TaskStatus } from "../tasks-status-enum";


export class updateTaskDTO{
    @IsEnum(TaskStatus)
    status: TaskStatus;
}