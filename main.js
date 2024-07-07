const pages ={
    "home" : "red ",
    "projects" :"Lightblue",
    "about" : "Lightgreen"

}


const showPage =(page)=>{
    document.querySelector('h1').innerText=page
    document.querySelector('#content').style.backgroundColor=pages[page]
}

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("btnTheme").addEventListener("click",function(){
          document.documentElement.classList.toggle("dark")
          document.getElementById("btnTheme").innerText=document.documentElement.classList.contains("dark") ? "Light" : "Dark"
    })

    document.getElementById("btnMenu").addEventListener("click",function(){
        document.getElementById("popupMenu").classList.toggle("hidden")
     })

    document.querySelectorAll("a").forEach(function(el){
        el.addEventListener("click",function(){
            showPage(el.innerText.toLowerCase())
    
     })

   })
     

})