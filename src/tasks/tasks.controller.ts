import { Controller, Get, Post } from '@nestjs/common';

@Controller('/tasks')
export class TasksController {
    @Get('/')
    getAllTasks() {
        return 'All tasks';
    }

    @Post('/')
    createTask() {
        return 'Task created';
    }
}
