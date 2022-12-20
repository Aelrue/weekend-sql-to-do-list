$(document).ready(onReady);
// onReady function to handle submit, delete, complete task
function onReady() {
  console.log("client sourced!");
  $(".addTask").on("click", addTask);
  $(document).on("click", ".deleteTask", deleteTask);
  $(document).on("click", ".completeTask", checkOff);

  getList();
}

// "POST" to create a new resource
// Call the "GET" again to update DOM
function addTask() {
  console.log("added!");
  let listEntry = {
    task: $("#task").val(),
  };
  console.log("through listEntry", listEntry);
  $.ajax({
    type: "POST",
    url: "/list",
    data: listEntry,
  })
    .then(function (response) {
      console.log("post request made,", response);
      $("#listItems").val("");
      getList();
    })
    .catch((error) => {
      console.log("Error adding task", error);
    });
}

// Get list data from server ("GET")
// Append that data to the DOM
function getList() {
  console.log("getList firing off");
  $("#listItems").empty();
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
        <button name="completeTask" class="completeTask">
          <i class="far fa-check-circle" style="font-size: 24px"></i>
        </button>
        <button name="deleteTask" class="deleteTask">
          <i class="far fa-trash-alt" style="font-size: 24px"></i>
        </button>
        </td>
      </tr>
      `);
    }
  });
}

// Use "PUT" request to update resource (check it off)
function checkOff() {
  console.log("putList firing off");
  const id = $(this).parent().parent().data("id");
  $.ajax({
    type: "PUT",
    url: `/list/${id}`,
  })
    .then(function () {
      getList();
    })
    .catch(function (error) {
      console.log("error with check off", error);
    });
}

// Delete resource ("DELETE")
// Call the "GET" again to update DOM

function deleteTask() {
  console.log("deleteTask firing off");
  const id = $(this).parent().parent().data("id");
  console.log(id);

  $.ajax({
    type: "DELETE",
    url: `/list/${id}`,
  })
    .then(function (response) {
      console.log("back from delete", response);
      getList();
    })
    .catch(function (error) {
      console.log("error with deleting ", error);
    });
}

// get button clicks working first
// client
// get stuff popping up on the DOM, functions
// then do requests

// req.body is everything in POST request
