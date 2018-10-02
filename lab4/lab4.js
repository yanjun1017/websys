// hide the songs when the picture has not been click
$("#table1").hide();
$("#mybody").hide();
$("#site").click(function(){
	$.ajax({
		type: "GET",
		url: "lab4.json",
		dataType: "json",
		success: function(data){
			table = myTable(data);
			$("#table1").show();
			$("#site").hide();
		}, 
		error: function(msg){
			alert("Please Reload!");
		}	
	});
});
/* This function is going to parse the JSON file into each variable names and add them as the cell to the table */
function myTable(data){
	var x = document.getElementById("table1");
	var tablee = "<tr><td>Track Name</td><td>artist</td><td>Album Name</td><td>Release Date</td><td>Genre</td><td>Link to the artist's website</td><td>Albuum Cover</td>";
	/* Since the array size of the data.mySongs is 4, we will need to loop through the array 4 times to get the songs 
	from the data element*/
	for (i = 0; i < 4; i ++){
		/* these are the value of each row
		data.mySongs[i] will return the mySongs array with index i 
		data.mySongs[i].element will return the value of the specific element */
		var title = data.mySongs[i].title;
		var artist = data.mySongs[i].artist;
		var album = data.mySongs[i].album_name;
		var date = data.mySongs[i].release_Date;
		var genre = data.mySongs[i].genre;
		var link = data.mySongs[i].link;
		var cover = data.mySongs[i].cover;
		/* add the element to the table*/
		tablee += "<tr>" +
		"<td>" + title + "</td>" +
		"<td>" + artist + "</td>" +
		"<td>" + album + "</td>" +
		"<td>" + date + "</td>" +
		"<td>" + genre + "</td>" +
		/* <a href> <a>: will make the value a hyper link */
		"<td>" + "<a href='" + link + "'> " + link + "</a>" + "</td>" +
		/* by using width and height method, i want to resize the image with 105*105 pixels*/
		"<td>" + "<img src='" + cover + "' width='105' height='105' />" + "</td></tr>";
	}
	/* this will assign the HTML table with the table just created called "tablee" */
	document.getElementById("table1").innerHTML = tablee;
}
