import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
//,WorkIcon,SchoolIcon,StarIcon
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const TodoAppTimeline = () => {
    const { data, setData } = useContext(TodoContext);
    const handleComplete =(idx) =>{
        const newValue =data;
        newValue[idx].isCompleted=true;
        setData([...newValue]);
    }
    const handleInComplete =(idx) =>{
        const newValue =data;
        newValue[idx].isCompleted=false;
        setData([...newValue]);
    }
    const handleDelete =(idx)=>{
        //const deleteList=data.findIndex(x=> x.id===idx.id)
        if(idx<0) return;
        const newValue =data;
        newValue.splice(idx,1);
        setData([...newValue]);
    }
    
    return (
        <div >
            <h1 style={{ fontWeight:"2.5em", color:"red"}}>TODO App Timeline</h1>
            <VerticalTimeline >
                {data.map((event,idx) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: "rgb(33, 150, 243)", color: "#fff" }}
                    
                >
                  
                    <h3
                    className="vertical-timeline-element-title"
                    dangerouslySetInnerHTML={{ __html: event.name}}
                    
                    />
                    <h4>{event.deadline} </h4>
                    <h5>Status: {event.isCompleted ? "Done" : "Inprogress"}</h5>
                   
                    {!event.isCompleted ? (
                                <button  onClick={() => handleComplete(idx)} style={{ padding: 9, margin: 3, backgroundColor: '#90EE90', color: 'white' ,borderRadius:"60px", border:"1px solid blue" }}>
                                    Complete
                                </button>
                            ): 
                                <button onClick={() => handleInComplete(idx)} style={{ padding: 9, margin: 3, backgroundColor: '#8B0000', color: 'white' ,borderRadius:"60px", border:"1px solid blue" }}>
                                    Incomplete
                                </button>
                            }
                                <button onClick={() => handleDelete(idx)} style={{ padding: 9, margin: 3, backgroundColor: 'red', color: 'white', borderRadius:"60px", border:"1px solid blue"}}>
                                    Remove
                                </button>
                                
                </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
    </div>
    );
};