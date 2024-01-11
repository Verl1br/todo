import AddNewTodoForm from "../components/AddNewTodoForm";
import TodosList from "../components/TodoList";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-5 text-4xl font-bold text-black">Todo App</h1>

        <AddNewTodoForm />

        <TodosList />
      </div>
    </div>
  );
};

export default HomePage;
