document.getElementById('add-box').addEventListener('click', addItem);

function addItem(){
    let ul = document.getElementById('todo_list');
    let input = document.getElementById('input');
    let li = document.createElement('li');
    li.setAttribute('draggable', 'true');
    li.setAttribute('ondragstart', 'dragStarted(event)');
    li.setAttribute('ondragover', 'draggingOver(event)');
    li.setAttribute('ondrop', 'dropped(event)');
    if (input.value.trim() === '') {
       return;
    } else {
    li.setAttribute('id',input.value);
    li.innerHTML = `<i class='material-icons cb-unchecked' id='check_icon' onclick="checked(event)">
    check_box_outline_blank</i>
    ${input.value}<i class='material-icons create' id='create' onclick="editItem()">create</i>
    <i class='material-icons trash' id='delete' onclick="deleteItems()">delete</i>`
    ul.appendChild(li);
    input.value = '';
}
}
function checked(event) {
    let checkedItem = document.getElementById('checked_icon');
if (event.target === checkedItem || !checkedItem ){
    event.target.innerHTML = `<i class='material-icons cb-checked hidden'>check_box</i>`;
}
}
function deleteItems(){
    let listItems = document.getElementsByTagName('li'); 
for (let i = 0; i < listItems.length; i++) {
  listItems[i].onclick = function() {
this.parentNode.removeChild(this); 
}
}    
}
let dragableElementClass = 'single-item';
let source;
function dragStarted(e) {
    source = e.target;
    e.dataTransfer.setData('text/plain', e.target.innerHTML);
    e.dataTransfer.effectAllowed = 'move';
}

function draggingOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}
function dropped(e) {
    e.preventDefault();
    e.stopPropagation();
    let target = e.target;

    if (e.target.localName === 'i' || e.target.localName === 'p') {
        target = target.parentElement;
    }
    if (source.localName === 'i' || source.localName === 'p') {
        source = source.parentElement;
    }

    source.innerHTML = target.innerHTML;
    target.innerHTML = e.dataTransfer.getData('text/plain');
}
function editItem() {
    let listItems = document.getElementsByTagName('li'); 
for (let i = 0; i < listItems.length; i++) {
    listItems[i].onclick = function() {
 event.target.innerHTML = `<input id = "customInput">
 <button type="submit" class="btn btn-default" onclick = "saveChanges()">
 <i class='material-icons save'>save</i></button>`; 
}
    }  
   }
function saveChanges(){
let myInput = document.getElementById('customInput').value;
alert(myInput);
  event.stopPropagation();
}  






