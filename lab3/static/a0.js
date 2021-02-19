let addButton = document.getElementById('addButton');
let taskName = document.getElementById('taskName');
let ulList = document.getElementById('toDoList');

addButton.addEventListener('click', addTask);

function addTask() {
    var div = document.createElement('div');
    div.classList.add('box');

    var li = document.createElement('p');
    li.innerText = taskName.value;
    li.classList.add('box-li');
    
    var chBox = document.createElement('input');
    chBox.setAttribute("type", "checkbox");
    chBox.classList.add('box-input');
    chBox.addEventListener('click', function () {
        if(chBox.checked == true) {
            li.style.textDecoration = "line-through";
        }
        else {
            li.style.textDecoration = "none";
        }
    })
    var deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', 'https://icon-library.com/images/red-recycle-bin-icon/red-recycle-bin-icon-20.jpg');
    deleteIcon.setAttribute('width', '16px');
    deleteIcon.classList.add('box-img');
    deleteIcon.addEventListener('click', function () {
        ulList.removeChild(liItem);
    })
    div.appendChild(chBox);
    div.appendChild(li);
    div.appendChild(deleteIcon);
    
    var liItem = document.createElement('li');
    liItem.appendChild(div);
    ulList.appendChild(liItem);

    taskName.value = "";
}
