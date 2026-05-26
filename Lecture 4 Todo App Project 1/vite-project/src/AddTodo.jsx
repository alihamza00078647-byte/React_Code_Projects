

function AddTodo() {
  return (
      <div className="container text-center">
        <div className="row AddTodo-parent-container">
          <input type="text" className="col-4" placeholder="Write Todo here."/>
          <input type="date" className="col-3" />
          <button type="button" className="btn btn-success col-2">Add Todo</button>
        </div>
      </div>
  );
}

export default AddTodo;
