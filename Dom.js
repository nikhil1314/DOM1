//examine teh document object//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all(10));
//document.all[10].textContent='HEllo';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//get elementbyid//
// console.log(document.getElementById('header-title'));
// var headerTitle =document.getElementById('header-title');
// console.log(headerTitle);
//headerTitle.textContent='hello';
//headerTitle.innerHTML='goodbye';
//console.log(headerTitle.textContent);
//headerTitle.innerHTML='<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';


//get element by classname//
//var items = document.getElementsBytagname('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='hello 2';
//items[1].style.fontWeight ='bold';
//items[1].style.backgroundColor='yellow';
//items.style.backgroundColor='#f4f4f4';
//for(var i=0;i<items.length;i++){
//items[i].style.backgroundColor='#f4f4f4';

//}
//getelement bytag//

//ar li = document.getElementsByTagname('list-group-item');
//console.log(li);
//console.log(li[1]);
//li[1].textContent='hello 2';
//li[1].style.fontWeight ='bold';
//li[1].style.backgroundColor='yellow';
////items.style.backgroundColor='#f4f4f4';
//for(var i=0;i<li.length;i++){
//li5 [i].style.backgroundColor='#f4f4f4';
//}
//query selector//
 //var header=document.querySelector('#imain-header');
 //header.style.borderBottom ='solid 4px #ccc';
 //var input=document.querySelector('input');
 //input.value='hello';
 //var submit =document.querySelector('input[type="submit"]');
 //submit.value='send';
 //var item=document.querySelector('.list-group-item');
 //item.style.color='red';
 //var lastitem=document.querySelector('.list-group-item:last-child');

 //lastitem.style.color='red';
 //var seconditem=document.querySelector('.list-group-item:nth-child(2)');


 //seconditem.style.color='red';



 //query selectorall//

//  var title=document.querySelectorAll('.title');
//  console.log(title); 
//  title[0].textcontent ='hello';
//  var odd = document.querySelectorAll('li:nth-child(odd)');
//  var even = document.querySelectorAll('li:nth-child(even)');
//  for(var i=0;i<odd.length;i++);
//  odd[i].style.backgroundColor='#f4f4f4';
//  even[i].style.backgroundColor='#ccc';

// var itemlist=document.querySelector('#items');
// //parent node
// // console.log(itemlist.parentNode);
// // itemlist.parentNode.style.backgroundColor='#f4f4f4';
// //parent element
// // console.log(itemlist.parentElement);
// // itemlist.parentElement.style.backgroundColor='#f4f4f4';
// //child node
// // console.log(itemlist.childNodes);
// // console.log(itemlist.children);
// // console.log(itemlist.children[1]);
// // itemlist.children[1].style.backgroundColor='yellow';

// // //first child
// // console.log(itemlist.firstChild);
// // console.log(itemlist.firstElementChild);
// // itemlist.firstElementChild.textContent='hello';
// //lastchild
// // console.log(itemlist.firstChild);
// //  console.log(itemlist.lastElementChild);
// //  itemlist.lastElementChild.textContent='hello';
// //  itemlist.lastElementChild.style.backgroundColor='blue';

// //nextsibling
// // console.log(itemlist.nextSibling);
// // console.log(itemlist.nextElementSibling);
// // //previoussibling
// // console.log(itemlist.previousSibling);
// // //previous sibilng
// // console.log(itemlist.previousElementSibling);
// // itemlist.previousElementSibling.style.backgroundColor='yellow';

// //createelement
// //create adiv
// var newdiv=document.createElement('div');
// //add class
// newdiv.className='hello';
// //create id
// newdiv.id='hello2';
// //create title
// newdiv.setAttribute('title','hellodiv');
// //create atext
// var newdivtext=document.createTextNode('helloworld');
// newdiv.appendChild(newdivtext);
// var container = document.querySelector('header .container');
// var h1= document.querySelector('header h1');
//events//
 //var button=document.getElementById('button').addEventListener('click',buttonclick);
// function buttonclick(e){

//    // console.log('button clicked')
// //    document.getElementById('header-title').textContent='changed';
// //    document.querySelector('#main').style.backgroundColor='#f4f4f4';
// //console.log(e);
// // console.log(e.target);
// // console.log(e.target.id);
// // console.log(e.target.className);
// // console.log(e.target.classList);
// // var output=document.getElementById('output');
// // output.innerHTML ='<h3>'+e.target.id+'</h3>';

// // console.log(e.type);
// // console.log(e.clientx);
// // console.log(e.clienty);
// // console.log(e.offsetx);
// // console.log(e.offsety);
// // console.log(e.altkey);
// // console.log(e.ctrlkey);
// // console.log(e.shiftkey);

// }
// var button=document.getElementById('button');
// var box=document.getElementById('box');
//button.addEventListener('click',runevent);
// button.addEventListener('dbclick',runevent);
// button.addEventListener('mousedown',runevent);
// button.addEventListener('mouseup',runevent);
// box.addEventListener('mouseenter',runevent);
// box.addEventListener('mouseleave',runevent);
// box.addEventListener('mouseover',runevent);
// box.addEventListener('mouseout',runevent);
// box.addEventListener('mousemove',runevent);
// var iteminput=document.querySelector('input[type="text"]');
 var form=document.querySelector('form');
var select=document.querySelector('select');

// iteminput.addEventListener('keydown',runevent);
// iteminput.addEventListener('keyup',runevent);
// iteminput.addEventListener('keypress',runevent);
// iteminput.addEventListener('focus',runevent);
// iteminput.addEventListener('blur',runevent);

// iteminput.addEventListener('cut',runevent);
// iteminput.addEventListener('paste',runevent);
select.addEventListener('change',runevent);
select.addEventListener('input',runevent);
form.addEventListener('submit',runevent);







function runevent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
    // document.body.style.display='none';

     console.log(e.target.value);
    // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';
    // output.innerHTML ='<h3>mouseex:'+e.offsetx+'</h3><h3>mousey:'+e.offsety+'</h3>';
// document.body.style.backgroundColor= "rgb("+e.offsetx+","+e.offsety+",40)";
}

