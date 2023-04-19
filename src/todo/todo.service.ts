import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Injectable()
export class TodoService {
    create(createTodoDto: CreateTodoDto) {
        return '';
    }

    findAll() {
        return '';
    }

    findOne(id: number) {
        return this.findOne;
    }

    update(id: number, UpdateTodoDto: UpdateTodoDto) {
        return this.update(id, UpdateTodoDto);
    }

    remove(id: number) {
        return this.remove(id);
    }
}