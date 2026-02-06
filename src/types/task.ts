interface Task{
    id: string;
    title: string;
    completed: boolean;
    categoryId: string;
    description?: string;
    doneAt?: Date;
}
export type { Task };