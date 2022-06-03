/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( props ) {
  const handleChange = () => {
    props.onCheck(props.item);
  }

  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={props.item.done}
        onChange={handleChange}
      />
      <span className={props.item.done ? 'has-text-grey-light' : ''}>
        {props.item.text}
      </span>
    </label>
  );
}

export default TodoItem;