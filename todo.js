
//     <script>
//     var box =document.createElement('input');
//     console.log(box)
//     var ele = document.getElementById('body');
//     console.log(ele)
//     ele.appendChild(box);

//     var box2 = document.createElement('input');
//     ele.appendChild(box2);
//     box2.setAttribute("id","box22");

//     document.write("hellow world")

// </script> -->



// var heads=document.write("Todo List");
// // ele.appendChild(heads) 
// // heading.setAttribute("id","heading12");

// creating p tag and writing text but we dont need here i guess
// const para1 = document.createElement("p");
// const node = document.createTextNode("TASKS YOU WANT TO DO");
// para1.setAttribute("id", "mainheading")
// para1.appendChild(node);
// const element = document.getElementById("div1");
// element.appendChild(para1);

// // creating input box with java script but we dont need it here i guess
// var box=document.createElement('input')
// // setting box id
// box.setAttribute("id","inputbox")
// // storing body into ele so that we can append
// const ele=document.getElementById('body')
// // screen per print krny k liye appending input box into body. 
// ele.appendChild(box);
// defining DELETE function
function deleteItem(e) {
    e.parentNode.remove()
}
 
// taking values from input box and displaying it
function enter() {

    var getvalue = document.getElementById('inputbox');
    var ListTxt = document.createElement("li");
    ListTxt.setAttribute("id","Listtxt")
    var Listvalue = document.createTextNode(getvalue.value);
    ListTxt.appendChild(Listvalue) 
    Listdisplay.appendChild(ListTxt)
    inputbox.value="";
    
    // creating DELETE button
    var deletebtn=document.createElement("button")
    // assigning button name to be displayed on button
    var deleteText=document.createTextNode("Delete")
    // merging the name with button as in javascript they both are different  elements
    deletebtn.appendChild(deleteText)
    // List mai appear hu har element k sth ek ek kar k therefore appending it with list
    ListTxt.appendChild(deletebtn)
    // assigning class to button
    deletebtn.setAttribute("id", "DelBtn")       
    // on click per calling function
    deletebtn.setAttribute("onclick","deleteItem(this)")
    
    // creating EDIT button
    var editbtn=document.createElement("button")
    // // linking edit icon to variable
    // var eIconBtn= document.getElementById('pencil')
    // assigning icon to be displayed on button6
    // displaying text on Btn
    var editText=document.createTextNode('edit')
    // merging the name with button as in javascript they both are different  elements
    editbtn.appendChild(editText)
    // List mai appear hu har element k sth ek ek kar k therefore appending it with list
    ListTxt.appendChild(editbtn)
    // assigning class to button
    editbtn.setAttribute("id", "EditBtn")
    // on click per calling function
    editbtn.setAttribute("onclick","editItem(this)")
}

// defining EDIT function
function editItem(p) {
    // var prt=prompt("text here")
    // jo parameter pass kia usi ko bataya jo parent node hai (li) uska first child yani latest vale(sary siblings first child huty hain apny parent k)uthao aur oldval naam k variable ma store karo.
    var oldval = p.parentNode.firstChild.nodeValue;
    // edit value k variable pe wo new value ka prompt le kar save karayega.var old val mai jo recent value store hugi wo show karayega 
    var editValue=prompt("Enter new value here",oldval);
    // edit value k  variable ko wahi value assign kardi jo new edit ki hai
    // ye screen pe aisy show hurahi hai jaisy k ul (parent node) k andar li(firstchild ki value (nodeValue) wo value editvalue ki ajaye.
    // jab li k andar editValue sy new value ayegi tu wo automatic screen per print huga. 
    p.parentNode.firstChild.nodeValue=editValue;
}
