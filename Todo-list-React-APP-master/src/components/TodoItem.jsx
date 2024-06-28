import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex  justify-between">
        <div className="flex ">
          <span className="mr-4 text-gray-500">
            {index + 1}.
          </span>

          {/* title  */}
          <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="">
            {
            todo.completed &&(
              <span className=' italic font-medium bg-green-500 border rounded  mx-7'>
                <span className='px-2'>completed</span>
              </span>
              )
              }
          </div>
      <div className='space-x-3 ml-8'> 

      {/* check button  */}
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOn /> : <FaToggleOff />}
        </button>

        {/* delete button  */}
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaTimes />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaCheck />
          </button>
        )}
      </div>
      </div>
    </li>
  );
};

export default TodoItem;
