
const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
const http = require("http");

class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 

    add(element) {  //Inserting elements O(1)
        // creates a new node 
        var node = new Node(element); 
        var current; 
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
       // iterate to the end of the list
            while (current.next) { 
                current = current.next; 
            }
            current.next = node; 
        } 
        this.size++; 
    } 
}
var result = new LinkedList(); //storing a data in the linked list

//inserting elements complexity O(1)
router.post("/", cors(), (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    var hit=0;
    var bio=0;
    var it=result.head;
    while (1) {
        if(result.size!=0){
            if(it.element.word==req.body.word || req.body.word === "" || req.body.synonym === "" ) { // check for duplicates and empty imputs
                hit=1;
                bio=1;
            }
            else  hit=0;
        }
       if(it==null) break;
        it=it.next;
        if(it==null) break;
    }
   if(hit==0 && bio==0 && req.body.word != "" && req.body.synonym != ""){
      result.add(req.body); //inserting objects
      res.status(200);
      res.send("Successfully added");
   }
   else res.send("Duplicates and empty inputs are not allowed");
  });

router.get("/", cors(), (req, res) => {
  res.status(200);
  res.send(result);
});

//good function for finding middle element for binary search 
/*const middle = (start, last) => {
    if (start === null) {
        return null;
    }

    let slow = start;
    let fast = start.next;

    while (fast != last) {

        fast = fast.next;
        if (fast != last) {
            slow = slow.next;
            fast = fast.next;
        }
    }

    return slow;
};
*/
//Binary search O(log n) complexity
//For binary search we need a sorted list but this is a list with strings and sorting is different
/*function sortFactory(prop) {
    return function(a,b){ return a[prop].localeCompare(b[prop]); };
 }*/ 
 
 //result.sort(sortFactory('word')); // sort by name property//not working



/*  var it=result.head;
    let novi=[];
    let start = it;
    let last = null;
    let mid;
    do {
       // if (start === last && last && last.value != value) return null;
        mid = middle(start, last);
        console.log(mid);
        //if (!mid) return null;
        console.log(mid.element.word); //works but only finding a middle element
        if (mid.element.word=== rijec) 
            {
                pronadjeno=1;
                vratiSinonim+=' ' + mid.element.synonym;
            }
        else if(mid.element.word < rijec) //the problem comparing strings we need different sorting
            start = mid.next 
        else { last = mid; }
        it=it.next;
    } while (last != null || last === start);
    */


//Finally I realized that sorting in linked list +   string comparison + binary search would have O(nˇ2)


//Linear searching - complexity  O(n) in the linked list 
router.get("/:searchBar", cors(), (req, res) => {
    let rijec = req.params.searchBar;
    if (rijec=="") res.send('Not exists');
    let vratiSinonim='';
    let pronadjeno=0;
    res.setHeader('Content-Type', 'application/json');  
if(result.size!=0){
    var it=result.head; //iterator on the start 
    let novi=[];
    while(1){
        if(it==null) break;
        novi= it.element.synonym.split(" "); //in the case that synonym is more than one word to enable lookups
        if(rijec===it.element.word) {
            pronadjeno=1;
            vratiSinonim+=' ' + it.element.synonym;
        }
        for(var i=0; i<novi.length; i++){
            if(rijec==novi[i]){
             vratiSinonim+= ' ' + it.element.word;
            }
        }
     it=it.next;
     if(it==null) break;
    }
}
    if(result.size==0) res.send("First you have to add synonym")
    else if(pronadjeno==1 && rijec!="") res.send(vratiSinonim); 
    else { vratiSinonim=""; res.send('Not exists'); }
  });
  
module.exports = router;