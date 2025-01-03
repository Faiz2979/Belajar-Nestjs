import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './dto/task.entity';
import { TasksService } from './tasks.service';
@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    // @Get('')
    // getTasks(@Query() filterDto:GetTaskFilterDto): Task[] {

    //     if(Object.keys(filterDto).length) {
    //         return this.tasksService.searchData(filterDto);
    //     } else {
    //         return this.tasksService.getAllTasks();
    //     }
        
    // }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    // @Get('/:id')
    // getTaskById(@Param('id') id: string): Task {
    //     return this.tasksService.getTaskById(id);
    // }

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void {
    //     this.tasksService.deleteTask(id);
    // }


    // @Post('/')
    // createTask(@Body() createTaskDto:CreateTaskDto): Task {
    //     return this.tasksService.createTask(createTaskDto);
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(
    // @Param('id') id: string, 
    // @Body() updateTaskDTO: updateTaskDTO): Task {
    //     const { status } = updateTaskDTO;
    //     return this.tasksService.updateTaskStatus(id, status);
    // }
    
}
