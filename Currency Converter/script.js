const selectlist=document.querySelectorAll(".dropdown select");

for(let select1 of selectlist){
    for(let code in countryList){
        option1=document.createElement("Option");
        option1.innerText=code;
        option1.value=code;
        select1.append(option1)
    }
}
