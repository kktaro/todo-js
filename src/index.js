import "./styles.css";

const onClickAdd = () => {
  const inputForm = document.getElementById("add-text");

  const inputText = inputForm.value;
  inputForm.value = "";

  if (inputText === "") {
    return;
  }

  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(createIncomplete(inputText));
};

const onClickDelete = (event) => {
  const deleteTarget = event.target.parentNode;
  const parentList = document.getElementById("incomplete-list");
  parentList.removeChild(deleteTarget);
};

const onClickComplete = (event) => {
  const completeTarget = event.target.parentNode;
  const children = completeTarget.childNodes;
  const li = children[0];

  // 完了したTODO リストへの追加
  const completeList = document.getElementById("complete-list");
  completeList.appendChild(createComplete(li.innerText));

  // 未完了のTODO リストからの削除
  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.removeChild(completeTarget);
};

const onClickBack = (event) => {
  const backTarget = event.target.parentNode;
  const children = backTarget.childNodes;
  const li = children[0];

  // 未完了のTODO リストへの追加
  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(createIncomplete(li.innerText));

  // 完了したTODO リストからの削除
  const completeList = document.getElementById("complete-list");
  completeList.removeChild(backTarget);
};

const createIncomplete = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", (event) => onClickComplete(event));

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", (event) => onClickDelete(event));

  // divの子要素に各要素を設定
  div.appendChild(li);
  div.append(completeButton);
  div.append(deleteButton);

  return div;
};

const createComplete = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(戻す)生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", (event) => onClickBack(event));

  // divの子要素に各要素を設定
  div.appendChild(li);
  div.append(backButton);

  return div;
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
