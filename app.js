let select = document.querySelector("select");
console.log(select);

select.addEventListener("change", async () => {
  let container = document.querySelector(".repos-container");
  container.innerHTML = "";
  let id = document.querySelector("#username");
  let username = id.value;
  console.log(username);
  let data = await getData(username);
  Loopdata(data);
});

function Loopdata(data) {
  for (const info of data) {
    createElement(info);
    console.log(info);
  }
}

function createElement(info) {
  let container = document.querySelector(".repos-container");
  let li = document.createElement("li");
  let a = document.createElement("a");
  let div = document.createElement("div");
  let div1 = document.createElement("div");
  let p = document.createElement("p");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  
  div.classList.add("title");
  p.innerText = info.name;
  p1.innerText = info.visibility;
  p2.innerText = info.language;
  p3.innerText = info.size+" KB";
  a.setAttribute("href", `https://github.com/${info.full_name}`);
  p1.classList.add("badge");
  div1.classList.add("desc");
  
  if(p2.innerText==""){
    p2.innerText="React";
  }
  console.log(p2.innerText);
  
  container.appendChild(li);
  li.append(a);
  a.append(div);
  div.append(p);
  div.append(p1);
  a.append(div1);
  div1.append(p2);
  div1.append(p3);
}

async function getData(username) {
  try {
    const URL = `https://api.github.com/users/${username}/repos`;
    let res = await axios.get(URL);
    console.log(res);
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
