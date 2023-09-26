//this keyword is for reference purpose of an object.
//this keyword value depends upon how it is called?
//  1.function invocation (always return global object)
//  2.method invocation (always return object itself)

// console.log(this); //globally call kiya he

function abc(){
    console.log(this)
}

// abc(); // function invocation

let obj = {
    name:"Shyam",
    age:24,
    def:function(){
        // console.log(this);
        function klm(){
            console.log(this);
        }
        klm();
    }
}

// obj.def(); //method invocation
let ghi = obj.def;
ghi(); //function invocation


