function call(){
    let fname=document.querySelector(".fname");
    let lname=document.querySelector(".lname");
    let user={};
    let data=[];
    data.push(fname.value,lname.value);
    user.push(data);
    console.log(user);
}