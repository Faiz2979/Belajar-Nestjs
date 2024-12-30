import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { Task, TaskStatus } from './tasks.model';
@Injectable()
export class TasksService {
    private tasks: Task[] =[];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find((task) => task.id === id);
    }

    createTask(createTaskDto:CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: (this.tasks.length+1).toString(),
            title,
            description,
            status: TaskStatus.OPEN
        };
        this.tasks.push(task);
        return task
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    updateTaskStatus(id: string, status: TaskStatus): Task {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }

    searchData(filter: GetTaskFilterDto): Task[] {
        const { status, search } = filter;
        let tasks = this.getAllTasks();
        if(status) {
            tasks = tasks.filter((task) => task.status === status);
        }
        if(search) {
            tasks = tasks.filter((task) => task.title.includes(search) || task.description.includes(search));
        }
        return tasks;
    }
}
