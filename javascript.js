function openMenu() {
    document.getElementById("myMenu").style.height = "100%"
}

function closeMenu() {
    document.getElementById("myMenu").style.height = "0%"
}

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
      searchBox.focus();
    }
});

optionsList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label-1").innerHTML;
        optionsContainer.classList.remove("active");
    })
})

searchBox.addEventListener("keyup", function(e) {
    filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm= searchTerm.toLowerCase();
    optionsList.forEach( option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
           option.style.display = "block";
        }  else {
           option.style.display = "none";
        }
    });
};

const GTInput = document.querySelectorAll(".gt-input");

for (let i = 0; i < GTInput.length; i++) {
    let currentLabel = GTInput[i]
    .parentElement.firstElementChild;

    GTInput[i].addEventListener("focus", function() {
        currentLabel.classList.add("move-up");
    })
    
    GTInput[i].addEventListener("blur", function() {
        if(GTInput[i].value === "") {
        currentLabel.classList.remove("move-up");
      }
    })
}

$(function() {
    $("#visible").click(function() {
        $('#invisible').toggleClass("show");
    });
});