var std1 = {
    name: "Anas",
    roll_no: "11",
    result: "B"
}
var std2 = {
    name: "Azeem",
    roll_no: "12",
    result: "A"
}
var std3 = {
    name: "Fatima",
    roll_no: "13",
    result: "A-1"
}
var std4 = {
    name: "Hamza",
    roll_no: "14",
    result: "A-1"
}
var std5 = {
    name: "Hifza",
    roll_no: "15",
    result: "A"
}
var std6 = {
    name: "Hoorain",
    roll_no: "16",
    result: "A"
}
var std7 = {
    name: "Maham",
    roll_no: "17",
    result: "A"
}
var std8 = {
    name: "Minnah",
    roll_no: "18",
    result: "A-1"
}
var std9 = {
    name: "Sadiq",
    roll_no: "19",
    result: "A-1"
}
var std10 = {
    name: "Sundas",
    roll_no: "20",
    result: "C"
}
var allClass = [std1, std2, std3, std4, std5, std6, std7, std8, std9, std10];
var table = document.getElementById("mytab");
table.innerHTML = `<tr><td><b>Name</b></td><td><b>Roll_no</b></td><td><b>Result</b></td></tr>
<tr><td>${allClass[0].name}</td><td>${allClass[0].roll_no}</td><td>${allClass[0].result}</td></tr>
<tr><td>${allClass[1].name}</td><td>${allClass[1].roll_no}</td><td>${allClass[1].result}</td></tr>
<tr><td>${allClass[2].name}</td><td>${allClass[2].roll_no}</td><td>${allClass[2].result}</td></tr>
<tr><td>${allClass[3].name}</td><td>${allClass[3].roll_no}</td><td>${allClass[3].result}</td></tr>
<tr><td>${allClass[4].name}</td><td>${allClass[4].roll_no}</td><td>${allClass[4].result}</td></tr>
<tr><td>${allClass[5].name}</td><td>${allClass[5].roll_no}</td><td>${allClass[5].result}</td></tr>
<tr><td>${allClass[6].name}</td><td>${allClass[6].roll_no}</td><td>${allClass[6].result}</td></tr>
<tr><td>${allClass[7].name}</td><td>${allClass[7].roll_no}</td><td>${allClass[7].result}</td></tr>
<tr><td>${allClass[8].name}</td><td>${allClass[8].roll_no}</td><td>${allClass[8].result}</td></tr>
<tr><td>${allClass[9].name}</td><td>${allClass[9].roll_no}</td><td>${allClass[9].result}</td></tr>`



function searchfun(){
  var filter = document.getElementById("myinp").value;
  var myTable = document.getElementById("mytab");
  var tr = myTable.getElementsByTagName("TR");
  
  for (var i=1; i<tr.length; i++){
    var td = tr[i].getElementsByTagName("TD")[1];
    if(td)
    var textValue = td.textContent || td.innerHTML;
    if (textValue.indexOf(filter) > -1){
        tr[i].style.display = "";
        tr[i].style.color = "green";
        tr[i].style.fontWeight = "bold";
    } else {
        tr[i].style.display = "none";
    }

  }
 
}
