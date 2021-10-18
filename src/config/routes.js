import { About } from "../components/About";
import { ToDoList } from "../components/Todo";
import { TodoAppTimeline } from '../components/TodoAppTimeline';
export const routes = [
    {
        path: "/about",
        component: About,
        label: "About"
    },
    {
        path: "/todo",
        component: ToDoList,
        label: "Todo"
    },
    {
        path: "/timeline",
        component: TodoAppTimeline,
        label: "Timeline"
    }
]