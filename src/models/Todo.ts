export class Todo {
    public id: number | undefined;
    public name: string | undefined;

    constructor(id: number, name:string){
        this.id = id;
        this.name = name;
    }
}