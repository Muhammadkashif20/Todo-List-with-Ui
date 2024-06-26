var count=0
var key=0
function addBtn() {
    let inp=document.getElementById('inp').value
    let show=document.getElementById('show')
    show.innerHTML+=`<ul>
  <li id="items" class="outline-2 border-2 outline-gray-200 border-gray-200 w-[25rem] h-[7vh] px-2 my-6 rounded-md flex justify-between items-center" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
    <span class="flex-grow ">${inp}</span>
    <button id="delbtn" onclick="del()" class="bg-gray-200 w-[5rem] h-[6.8vh] rounded-r-md font-bold mr-[-.5rem] flex-shrink-0">Delete</button>
  </li>
</ul>`
key++
localStorage.setItem(`User Todo ${key}`,inp)
    show.style.display='block'
    count++
    document.getElementById('inp').value=''
}
function delAll() {
    location.reload()
}
function del() {
    var item=document.getElementById('items')
    item.remove()
}   