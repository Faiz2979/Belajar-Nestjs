import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';
@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('')
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id);
    }


    @Post('/')
    createTask(@Body() createTaskDto:CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    
}
