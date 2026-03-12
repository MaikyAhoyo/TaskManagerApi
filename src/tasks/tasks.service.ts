import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const { userId, ...taskData } = createTaskDto;
    const newTask = this.taskRepository.create({
      ...taskData,
      user: { id: userId },
    });

    return await this.taskRepository.save(newTask);
  }

  async findAll() {
    return await this.taskRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!task) {
      throw new NotFoundException(`La tarea con ID ${id} no existe`);
    }
    return task;
  }

  async findByUserId(userId: number) {
    return await this.taskRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.findOne(id);
    this.taskRepository.merge(task, updateTaskDto);
    return await this.taskRepository.save(task);
  }

  async remove(id: number) {
    const task = await this.findOne(id);
    return await this.taskRepository.remove(task);
  }
}
