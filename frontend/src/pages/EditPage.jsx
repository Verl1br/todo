import EditTodoForm from "../components/EditTodoForm";

const EditPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-5 text-4xl font-bold text-black">Todo App</h1>

        <EditTodoForm />
      </div>
    </div>
  );
};

export default EditPage;
