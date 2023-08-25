

let changeUrl = () =>  {
      let inputValue = document.getElementById("image_url_input").value;
      if(inputValue == ""){
       errorFunction()
   
      }
    

          document.getElementById("image_box").attributes.src.value = inputValue
          document.getElementById("image_url_input").value = ""
      

  }

let errorFunction = ()=> {
    inputValue = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
    document.getElementById("image_box").attributes.src.value  = inputValue
}
