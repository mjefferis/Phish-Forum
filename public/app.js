/* Note Taker (18.2.6)
 * front-end
 * ==================== */

// Loads results onto the page
function getResults() {
  // Empty any results currently on the page
  $("#results1").empty();
  $("#results2").empty();
  $("#results3").empty();
  $("#results4").empty();
  $("#results5").empty();
  $("#results6").empty();
  $("#results7").empty();
  $("#results8").empty();
  $("#results9").empty();
  $("#results10").empty();
  $("#results11").empty();
  $("#results12").empty();
  $("#results13").empty();
  // Grab all of the current notes
  $.getJSON("/all", function(data) {
    // For each note...
    for (var i = 0; i < data.length; i++) {
      // ...populate result divs with a p-tag that includes the note's title and object id
      $("#results1").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
    }
  });
}

// Runs the getResults function as soon as the script is executed
getResults();

// When the #make-new button is clicked
$(document).on("click", "#make-new1", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title1").val(),
      note: $("#note1").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
      $("#results1").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note1").val("");
      $("#title1").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new2", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title2").val(),
      note: $("#note2").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results2").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note2").val("");
      $("#title2").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new3", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title3").val(),
      note: $("#note3").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results3").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note3").val("");
      $("#title3").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new4", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title4").val(),
      note: $("#note4").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results4").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note4").val("");
      $("#title4").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new5", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title5").val(),
      note: $("#note5").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results5").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note5").val("");
      $("#title5").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new6", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title6").val(),
      note: $("#note6").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results6").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note6").val("");
      $("#title6").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new7", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title7").val(),
      note: $("#note7").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results7").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note7").val("");
      $("#title7").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new8", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title8").val(),
      note: $("#note8").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results8").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note8").val("");
      $("#title8").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new9", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title9").val(),
      note: $("#note9").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results9").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note9").val("");
      $("#title9").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new10", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title10").val(),
      note: $("#note10").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results10").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note10").val("");
      $("#title10").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new11", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title11").val(),
      note: $("#note11").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results11").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note11").val("");
      $("#title11").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new12", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title12").val(),
      note: $("#note12").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results12").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note12").val("");
      $("#title12").val("");
    });
});

// When the #make-new button is clicked
$(document).on("click", "#make-new13", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      title: $("#title13").val(),
      note: $("#note13").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
    // Add the title and delete button to the #results section
    $("#results13").prepend("<p class='data-entry'"  + data.title + "at " + data.created + ": " + data.note+ "</p>");
      // Clear the note and title inputs on the page
      $("#note13").val("");
      $("#title13").val("");
    });
});