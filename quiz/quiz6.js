/**
 * Quiz 7 focuses on jQuery
 *
 * @category    Quiz 7
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.04.16
 * @grade
 */

// 1 pt
// 1. Assume this is an HTML file, add a tag to import the jQuery file from a CDN.
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">

// 1 pt
// 2. Assume this is an HTML file, add a tag to import a local jQuery file called jquery.min.js
    <script src = "jquery.min.js"></script>

// 2 pts
// 3. Use jQuery to select the following div below and store it in a variable called div.
// <div id="newUserSignUpModal" style="display:none;" ><p>There is form data in this div.</p></div>
var divs = $( "#newUserSignUpmodal" ).has( "p" );

// 1 pt
// 4. The div selected above is currently hidden, use a jQuery method on this div variable to make it visible.
$("#newUserSignUpmodal").show();

// 2 pts
// 5. Assume the user is done using the modal in the div above.
//      Use a jQuery method to slowly fade the div out over a time span of 4 seconds.
$("#newUserSignUpmodal").fadeIn('slow').delay(4000).fadeOut('slow');

// 3 pts
// 6. List three more methods below that are available via the jQuery API.
$("p").dblclick(function(){
    $(this).hide();
});

$("#newUserSignUpmodal").mousedown(function(){
    alert("Mickey Mouse Down!");
});

$("#newUserSignUpmodal").hover(function(){
        alert("You signed up.!");
    },
    function(){
        alert("go you!");
    });