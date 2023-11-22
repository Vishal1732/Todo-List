import { useRef} from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {

  const todoNameElement=useRef();
  const todoDateElement=useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
     const todoName=todoNameElement.current.value;
     const dueDate=todoDateElement.current.value;
     todoNameElement.current.value="";
     todoDateElement.current.value="";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
