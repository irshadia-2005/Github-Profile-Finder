const username=document.querySelector(".search input");
const BaseURL= "https://api.github.com/users";
const button=document.querySelector(".search button");
const avatar=document.querySelector(".avatar");
const profilename=document.querySelector(".profile-top h2");
const username_profile=document.querySelector(".profile-top a");
const bio=document.querySelector(".bio");

const followers_val=document.querySelector(".followers dd");

const following_val=document.querySelector(".following dd");

const repo_val=document.querySelector(".repo dd");

 button.addEventListener("click", async(evt)=>{
   evt.preventDefault();
   const user=username.value;
   const URL= `${BaseURL}/${user}`;
   let response=await fetch(URL);
   let data=await response.json();
    avatar.src=data.avatar_url;
    profilename.innerText=data.name;
    username_profile.innerText=data.login;
  username_profile.href=data.html_url;
  bio.innerText=data.bio;
  followers_val.innerText=data.followers;
   following_val.innerText=data.followers;
   repo_val.innerText=data.followers;
 });
    
