$(document).ready(onReady);
// onReady function to handle submit, delete, complete task
function onReady() {
  console.log("client sourced!");
  getList();
  $("#addTask").on("click", checkOff);
}

// Use "PUT" request to update resource (check it off)

// Get list data from server ("GET")
// Append that data to the DOM
function getList() {
  console.log("getList firing off");
}

// Delete resource ("DELETE")
// Call the "GET" again to update DOM

// "POST" to create a new resource
// Call the "GET" again to update DOM
function checkOff() {
  console.log("checked off!");
  let listEntry = $("#listItems").val();
  $.ajax({
    type: "POST",
    url: "/listLibrary",
    data: listEntry,
  }).then(function (response) {
    $("#listItems").val("");
    getList();
  });
}
