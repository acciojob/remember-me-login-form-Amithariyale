//your JS code here. If required.

const form=document.querySelector("form");
let userData=[];

form.addEventListener("submit",(e)=>{
	e.preventDefault();

	let user={
		username:e.target.username.value,
		password:e.target.password.value,
	}
	const prevUserData=JSON.parse(localStorage.getItem("userData"));

	// console.log()
	if(prevUserData && prevUserData.find((item)=>item.username===user.username && item.password===user.password) ){
		const btn=document.createElement('input');
		btn.type="button";
		btn.id="existing";
		btn.value="Login as existing user";
		btn.addEventListener("click",login(user));
		form.appendChild(btn);
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
}









