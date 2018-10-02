$.ajax({
  type: "GET",
  url: "lab9.json",
  dataType: "json",
  success: function (data) {
    table = myTable(data);
  }
});

$("#refresh").click(function(){
  // remove the current lectures/labs
  for (var i = 0; i < 4; i++){
    $("div").remove();
  }
  // reload the josn file 
  $.ajax({
    type: "GET",
    url: "lab9.json",
    dataType: "json",
    success: function (data) {
      tablee = myTable(data);
    }
  });
});


function myTable(data){
  
   for (var i = 0; i < data.Websys[0].Lectures.length; i ++ ){
      
      var tab = document.getElementById("table1");
      var li = document.createElement("li");
      
      var lectureName = data.Websys[0].Lectures[i].Lecture;
      var lectureID = data.Websys[0].Lectures[i].Lecturee[0].Title;
      var lectureDescription = data.Websys[0].Lectures[i].Lecturee[0].Description;
      var lectureLink= data.Websys[0].Lectures[i].Lecturee[0].Link;
      // List
      var button = document.createElement("a");
      button.setAttribute("data-toggle", "tab");
      button.setAttribute("href", "#"+lectureName);
      button.setAttribute("value", lectureName);
      button.appendChild(document.createTextNode(lectureName));
      if (lectureName == "Lecture1"){
        li.setAttribute("class", "active");
      }
      li.appendChild(button);
      tab.appendChild(li);
      //-------------------------------------------------------
      var tab1 = document.getElementById("tabs");
      var x = document.createElement("div");
      x.setAttribute("class", "tab-content");
      div = document.createElement("div");
      if (lectureName == "Lecture1"){
        div.setAttribute("id", lectureName);
        div.setAttribute("class", "tab-pane fade in active");
      }
      else{
        div.setAttribute("id", lectureName);
        div.setAttribute("class", "tab-pane fade");
      }
      var name = document.createElement("h2");
      name.appendChild(document.createTextNode(lectureName));
      var link = document.createElement("a");
      link.setAttribute("href", lectureLink);
      link.appendChild(document.createTextNode("Link to Page"));
      var description = document.createElement("p");
      description.appendChild(document.createTextNode(lectureDescription));
      // li.setAttribute("id", "name");
      div.appendChild(name);
      div.appendChild(description);
      div.appendChild(link);
      x.appendChild(div);
      tab1.appendChild(x);
   }
   for (var i = 0; i < data.Websys[1].Labs.length; i ++){
      var tab = document.getElementById("table1");
      var li = document.createElement("li");
      // li.setAttribute("class", "active");

      var labName = data.Websys[1].Labs[i].Lab;
      var labID = data.Websys[1].Labs[i].Labb[0].Title;
      var labDescription = data.Websys[1].Labs[i].Labb[0].Description;
      var labLink = data.Websys[1].Labs[i].Labb[0].Link;
      //-------------------------------------------------------
      var button = document.createElement("a");
      button.setAttribute("data-toggle", "tab");
      button.setAttribute("href", "#"+labName);
      button.setAttribute("value", labName);
      button.appendChild(document.createTextNode(labName));
      li.appendChild(button);
      tab.appendChild(li);
      //-------------------------------------------------------
      var tab1 = document.getElementById("tabs")
      var x = document.createElement("div");
      x.setAttribute("class", "tab-content");
      div = document.createElement("div");
      div.setAttribute("id", labName);
      div.setAttribute("class", "tab-pane fade");
      var name = document.createElement("h2");
      name.appendChild(document.createTextNode(labName));
      var link = document.createElement("a");
      link.setAttribute("href", labLink);
      link.appendChild(document.createTextNode("Link to Page"));
      var description = document.createElement("p");
      description.appendChild(document.createTextNode(labDescription));
      // li.setAttribute("id", "name");
      div.appendChild(name);
      div.appendChild(description);
      div.appendChild(link);
      x.appendChild(div);
      tab1.appendChild(x);
   }
   // $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
   // $("tabs ul").addClass( "ui-corner-left" );
}
