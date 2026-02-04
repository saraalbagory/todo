interface Task{
    id: string;
    title: string;
    completed: boolean;
    categoryId: string;
    description?: string;
}
export type { Task };