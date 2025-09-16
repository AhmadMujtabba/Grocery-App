let listArray=[{'name':'Milk','qty':1},{'name':'Eggs','qty':1}];
(()=>{
document.addEventListener('submit',(e)=>{
    formelm=document.querySelector('#groceryform')
    e.preventDefault();
    const formdata=new FormData(formelm);
    let returnedObj=creatObj(formdata)
    let dublicateStatus=dublicateItemManager(returnedObj)
    if(!dublicateStatus)
    {
    pushObjInArr(returnedObj)
    renderList();
    clearInput();
    }else{
      if(confirm(`${returnedObj.name} alread exist. Do you still want to dublicate?`))
      {
        pushObjInArr(returnedObj)
        renderList();
        clearInput();
      }
    }
    
})

renderList();
})();
function renderList(){
    let itemString="";
    let itemCountString="<p>You have not added any items yet!</p>";
    let listElm=document.querySelector('#listelement')
    let itemCountElm=document.querySelector('#itemcount')
    let totalQty=0;
    for(let i=listArray.length-1;i>=0;i--)
    {
        totalQty+=listArray[i].qty;
        itemString+=`<tr>
                  <td class="text-center" style="width: 1%">
                    <button class="btn btn-primary btn-square" onclick=decreaseQuantity(${i})>
                      <i class="bi bi-dash-square"></i>
                    </button>
                  </td>

                  <td class="w-100">
                    <p class="mb-0">${listArray[i].name}</p>
                  </td>

                  <td class="text-center" style="width: 1%">
                    <p class="mb-0">Qty.${listArray[i].qty}</p>
                  </td>
                  <td class="text-center" style="width: 1%">
                    <button class="btn btn-primary btn-square" onclick=increaseQuantity(${i})>
                      <i class="bi bi-plus-square"></i>
                    </button>
                  </td>

                  <td class="text-center" style="width: 1%">
                    <button class="btn btn-danger btn-square" onclick=deleteItem(${i})>
                      <i class="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>`
    }
    listElm.innerHTML=itemString;
    if(totalQty==0)
    {
      itemCountElm.innerHTML=itemCountString
    }
    else{
      itemCountElm.innerHTML=`Your have added total ${totalQty} items and total ${listArray.length} products`
    }
    
}


function creatObj(formdata){
    let itemname=formdata.get('item')
    let dataObj={
        'name':itemname,
        'qty':1
    }
    return dataObj
}

function pushObjInArr(dataObj){
    listArray.push(dataObj);
}

function deleteItem(itemid){
  if(confirm(`Are you sure to delete ${listArray[itemid].name}?`))
  {
  listArray.splice(itemid,1)
  renderList();
  }
}

function increaseQuantity(itemid)
{
  listArray[itemid].qty+=1
  renderList()
}

function decreaseQuantity(itemid)
{
  if(listArray[itemid].qty>1)
  {
    listArray[itemid].qty-=1;
  }
  else{
    alert('Quantity could not be less than 1');
  }
  renderList()
}

function dublicateItemManager(returnedObj){
  let uppercase=returnedObj.name.toUpperCase();
  let uppercasearray=listArray.map((v)=>{
   return v.name.toUpperCase();
  })
  return uppercasearray.some((w)=>w==uppercase)
}

function clearInput(){
  let inputElm=document.querySelector('#input')
  inputElm.value="";
}



