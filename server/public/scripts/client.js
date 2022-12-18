$(document).ready(onReady);
// onReady function to handle submit, delete, complete task
function onReady() {
  console.log("client sourced!");
  getList();
  $("#addTask").on("click", checkOff);
  $("#deleteTask").on("click", deleteList);
}

// Use "PUT" request to update resource (check it off)
function putList() {
  console.log("putList firing off");
}

// Get list data from server ("GET")
// Append that data to the DOM
function getList() {
  console.log("getList firing off");
}

// Delete resource ("DELETE")
// Call the "GET" again to update DOM

function deleteList() {
  console.log("deleteList firing off");
  const id = $(this).parent().parent().data("");
  $.ajax({
    type: "DELETE",
    url: `/toDoCollection/${id}`,
  })
    .then(function () {
      getList();
    })
    .catch(function (error) {
      console.log("error with deleting ", error);
    });
}

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

// get buttom clicks working first
// client
// get stuff popping up on the DOM, functions
// then do requests

// req.body is everything in POST request
