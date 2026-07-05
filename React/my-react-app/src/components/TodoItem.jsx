// Bài 1: Tạo Component TodoItem
// Tạo một component hiển thị một todo item với các props: title, completed, priority
import PropTypes from "prop-types";
const TodoItem = ({title, completed, priority}) => {
    return (
        <div>
            <h3> Title: {title}</h3>
            <p>State: {completed ? "Completed" : "Not complete"}</p>
            <p>Priorty: {priority}</p>
        </div>
    );
};
TodoItem.PropTypes = {
    completed: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
};
export default TodoItem;
//run in App.jsx
// function App(){
//     return (
//         <div>
//             <TodoList 
//                 title= "An com"
//                 complete = {true}
//                 priority = "Third"
//             />
            
//              <TodoList 
//                 title= "Ia"
//                 complete = {false}
//                 priority = "First"
//             />

//             <TodoList 
//                 title= "Ngu"
//                 complete = {false}
//                 priority = "Second"
//             />
//         </div>
//     )
// }