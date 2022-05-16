namespace App {
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
    }
    
    export interface DragAndDrop {
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
    }
    
    
    export interface UserInput {
        title: string;
        description: string;
        people: number;
    };
}