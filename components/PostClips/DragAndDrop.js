import { useState } from "react";
import { DragZone, FeedbackMessage } from "./post_clips";


export default function DragAndDrop(props){

    const [ message, setMessage ] = useState('Drag and drop the file here');

    function drag(e){
        e.preventDefault();

        console.log('here');
    }

    function drop(e){
        e.preventDefault();
        const file = e.dataTransfer.items[0].getAsFile;
        
        console.log(file.name);
    }
    return(
        <DragZone>
            <div draggable='true' onDrop={drop}>
                <span>{message}</span>
            </div>
        </DragZone>
    );
}