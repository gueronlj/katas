const head = { name:'Lorens'}

const person2 = {name:'Jeff'}

const person3 = {name:'sally'}

const tail = {name:'9'}


head.next = person2
person2.next = person3
person3.next = tail

const find = (node, value) => {
   if(node.name === value){
      return true
   } else if (node.next == undefined){
      return false
   }else{
      return find(node.next, value)
   }
}

console.log(find(head, 'sally')); //returns true
