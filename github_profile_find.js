const username=document.querySelector(".search input");
const BaseURL= "https://api.github.com/users";
const button=document.querySelector(".search button");
const avatar=document.querySelector(".avatar");
const profilename=document.querySelector(".profile-top h2");
const username_profile=document.querySelector(".profile-top a");
const bio=document.querySelector(".bio");
const head=document.querySelector("#repos-heading");
const repo_list=document.querySelector("#repo-list");
const followers_val=document.querySelector(".followers dd");
const msg=document.querySelector("#message");
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
   following_val.innerText=data.following;
   repo_val.innerText=data.public_repos;
   const repolistURL=await fetch(data.repos_url);
   const repolist=await repolistURL.json();
   head.innerText="Repositeries";
let html="";
for (const repo of repolist) {
         html+=`<li class="repo">
          <a class="repo-name" href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
          <p class="repo-desc">${repo.description ||"No description provided."}</p>
          <span class="repo-lang">${repo.language || "Unknown"}</span>
        </li>`
} 
  
repo_list.innerHTML=html;
console.log(repo_list);
 });
