//your JS code here. If required.

const form=document.querySelector("form");
let userData=[];

form.addEventListener("submit",(e)=>{
	e.preventDefault();

	let user={
		username:e.target.username.value,
		password:e.target.password.value,
	}
	const prevUserData=JSON.parse(localStorage.getItem("userData") ?? "null");

	// console.log()
	if(prevUserData && prevUserData.find((item)=>item.username===user.username && item.password===user.password) ){
		const btn=document.getElementById('existing');
		btn.style.display='flex';
		btn.addEventListener('click',()=>login(user));
	}
	else{
		if(e.target.checkbox.checked){
			if(prevUserData)userData=[...prevUserData,user];
			else userData=[user];
			localStorage.setItem("userData",JSON.stringify(userData));
		}
		login(user)
	}
	
})

function login(user) {
	alert(`Logged in as ${user.username}`);
	form.reset();
}









