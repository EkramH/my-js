
let count = 0;
document.getElementById("add-btn").addEventListener("click", function(){
    count ++;
    const inputValue = document.getElementById("input-value").value;

    if(inputValue == ""){
        alert("Please Enter a Value");
    } else {   
        const mainContent = document.getElementById("content-container");
        const tableContainer = document.createElement("tr");
        tableContainer.innerHTML = `<th>${count}</th>
        <td>${inputValue}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button>
        <button class="btn btn-success done-btn">Done</button></td>`
        mainContent.appendChild(tableContainer);

        document.getElementById("input-value").value = ""; //Empt

        const deleteButton = document.getElementsByClassName("delete-btn");

        const doneButton = document.getElementsByClassName("done-btn");
        for(const button of deleteButton){
            button.addEventListener("click", function(e){
                e.target.parentNode.parentNode.style.display = "none"; //Display hide button parentNode td
            });
        }

        for(const button of doneButton){
            button.addEventListener("click", function(e){
                e.target.parentNode.parentNode.style.textDecoration = "line-through"; 
            });
        }
    }
})
