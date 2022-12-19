$(document).ready(onReady);
// onReady function to handle submit, delete, complete task
function onReady() {
  console.log("client sourced!");
  $("#addTask").on("click", addTask);
  $("#deleteTask").on("click", deleteList);

  getList();
}

// Use "PUT" request to update resource (check it off)
function checkOff() {
  console.log("putList firing off");
}

// Get list data from server ("GET")
// Append that data to the DOM
function getList() {
  console.log("getList firing off");
  $.ajax({
    type: "GET",
    url: "/list",
  }).then(function (response) {
    console.log("back from server", response);
    for (let i = 0; i < response.length; i++) {
      $("#listItems").append(`
      <tr data-id=${response[i].id}>
      <td>${response[i].tasks}</td>
      <td>${response[i].isDone}</td>
      <td>
      <button id="completeTask"></button>
      <button id="deleteTask"></button>
      </td>
      </tr>
      `);
    }
  });
}

// Delete resource ("DELETE")
// Call the "GET" again to update DOM

function deleteList() {
  console.log("deleteList firing off");
  const id = $(this).parent().parent().data("");
  $.ajax({
    type: "DELETE",
    url: `/list_router/${id}`,
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
function addTask() {
  console.log("added!");
  let listEntry = {
    task: $("#task").val(),
    isDone: false,
    // hardcode isDone
  };
  console.log("through listEntry", listEntry);
  $.ajax({
    type: "POST",
    url: "/list",
    data: listEntry,
  }).then(function (response) {
    console.log("post request made, response");
    $("#listItems").val("");
    getList();
  });
}

// get button clicks working first
// client
// get stuff popping up on the DOM, functions
// then do requests

// req.body is everything in POST request
