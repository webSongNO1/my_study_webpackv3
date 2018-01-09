let s=`!`
let p=`我是一句话而已${s}`;
document.write(p);

const form=document.querySelector("form");
const user=form.querySelector("input[type='text']");
const password=form.querySelector("input[type='password']");
const submit=form.querySelector("button[type='button']");
submit.onclick=submit_;

function submit_(){
    const userName=user.value;
    const passWord=password.value;   
    if(userName==''){
        alert("用户名不能为空！")
        return;
    }else if(passWord==''){
        alert("密码不能为空！")
        return;
    }else{
        alert(`您的账户是名是：${userName},密码是：${passWord}。请牢记！！！`);
    }
}