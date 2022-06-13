function add(name){
    let tag=document.createElement("div")
    tag.classList.add("tag")
    tag.setAttribute("value",name)
    let h1=document.createElement("h1")
    h1.innerHTML="Hello my name is"
    tag.append(h1)
    let h3=document.createElement("h3")
    h3.innerHTML=name
    tag.append(h3)
    let span=document.createElement("span")
    span.innerHTML="X"
    span.addEventListener("click",()=>deleteTag(name))
    tag.append(span)
    let container=document.querySelector(".container")
    container.append(tag)

}


let addButton=document.querySelector(".add")


addButton.addEventListener("click",()=>{
    let nameFromInput=document.querySelector(".field").value
    add(nameFromInput)
})


function deleteTag(name){
    let tags=document.querySelectorAll(".tag")
    for(let i=0;i<tags.length;i++){
        if(tags[i].getAttribute("value")==name)tags[i].remove()
    }


}

let clear=document.querySelector(".clear").addEventListener("click",()=>{
    let container=document.querySelector(".container").innerHTML=""
})
