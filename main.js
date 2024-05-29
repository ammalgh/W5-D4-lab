
let imge=document.querySelector("#writing")
let sorceImge =document.querySelector("#writing2")
let btn=document.getElementById("btn")

// console.log(userName);


async function logIn() {

    
    // let res= await fetch("https://64ec45a2f9b2b70f2bfa0612.mockapi.io/logIn",
    
    let res= await fetch("https://6657373e9f970b3b36c869ed.mockapi.io/api-database",
    {
        method:'POST',
    body:JSON.stringify({

     imge: imge.value,
     sorceImge:sorceImge.value

    }),

    headers: {

         'content-type': 'application/json; charset=UTF-8',

    },
})
let data = await res.json();

let divimge1=document.getElementById('divimge')
let imges=document.createElement('img')
imges.src=data.sorceImge

divimge1.append(imges)



console.log(data);
}
// 




// ----
let divimge1=document.getElementById('divimge')

let link="https://6657373e9f970b3b36c869ed.mockapi.io/api-database"
console.log(link);
async function fetchData(){
    let res = await fetch(link)

    let data = await res.json();


    for(let i =0 ;i< data.length;i++ ){
        let div1=document.createElement('div')
        divimge1.append(div1)
        let imges=document.createElement('img')
        let btn=document.createElement('button')
        btn.innerText='delet'
        imges.src= data[i].sorceImge;
        
        div1.append(imges)
        div1.append(btn)
        // delete
//         btn.setAttribute("onclick", 
//  del(data[i].id))
 } 


  
}

fetchData()


// function del(X){
//     fetch(`https://6657373e9f970b3b36c869ed.mockapi.io/api-database/${x}`, {
//   method: 'DELETE',
// })
// }