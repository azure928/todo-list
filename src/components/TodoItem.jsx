import { useState } from "react";

export const TodoItem = ({
  todo,
  updateTargetId,
  setUpdateTargetId,
  onTodoListUpdate,
  onTodoListDelete,
}) => {
  const [inputValue, setInputValue] = useState("");

  const isUpdateMode = Boolean(updateTargetId);

  const updateTarget = (item) => {
    if (!item) {
      setInputValue("");
      setUpdateTargetId(null);
      return;
    }

    setInputValue(item.content);
    setUpdateTargetId(item.id);
  };

  return (
    <div key={todo.id}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={(e) => {
          onTodoListUpdate(todo.id, { isDone: e.target.checked });
        }}
      />
      {updateTargetId === todo.id ? (
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.content}
        </span>
      )}
      <button
        onClick={() => {
          onTodoListDelete(todo.id);
        }}
        disabled={isUpdateMode}
      >
        DEL
      </button>
      <button
        onClick={() => {
          if (isUpdateMode) {
            onTodoListUpdate(updateTargetId, { content: inputValue });
            updateTarget(null);
            return;
          }

          updateTarget(todo);
        }}
        disabled={isUpdateMode && todo.id !== updateTargetId}
      >
        UPDATE
      </button>
    </div>
  );
};
