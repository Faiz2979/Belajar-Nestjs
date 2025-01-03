import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './dto/task.entity';
import { TaskRepository } from './dto/task.repository';
@Injectable()
export class TasksService {
    
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {}

    
    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    async getAllTasks(): Promise<Task[]> {
        return await this.taskRepository.find();
    }

    // getTaskById(id: string): Task {
    //     const found= this.tasks.find((task) => task.id === id);
    //     if(!found) {
    //         throw new NotFoundException(`Task with ID ${id} not found`);
    //     }
    //     return found;
    // }

    async getTaskById(id: string): Promise<Task> {
        console.log('id', id);
        const found = await this.taskRepository.findOne({where: {id}});
        if (!found) {
            throw new NotFoundException(`Task with that ID not found`);
        }
        return found;
    }
    // createTask(createTaskDto:CreateTaskDto): Task {
    //     const { title, description } = createTaskDto;
    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN
    //     };
    //     this.tasks.push(task);
    //     return task
    // }

    // async createTask(title: string, description: string): Promise<Task> {
    //     const task = new Task();
    //     task.title = title;
    //     task.description = description;
    //     task.status = 'OPEN';
    //     await task.save();
    // }

    // deleteTask(id: string): void {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter((task) => task.id !== found.id);
    // }

    // updateTaskStatus(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }

    // searchData(filter: GetTaskFilterDto): Task[] {
    //     const { status, search } = filter;
    //     let tasks = this.getAllTasks();
    //     if(status) {
    //         tasks = tasks.filter((task) => task.status === status);
    //     }
    //     if(search) {
    //         tasks = tasks.filter((task) => task.title.includes(search) || task.description.includes(search));
    //     }
    //     return tasks;
    // }
}
