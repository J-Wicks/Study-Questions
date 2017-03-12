var stack = [];

// 2. Define the function countDown(int) 
function countDown(int){
    stack.push(int);
    
    if(int == 1){
    ;
    }
    
    else stack.push(countDown(int - 1));
}
// 3. Call countDown() on an integer

console.log(countDown(10));
