let btns = document.querySelectorAll('.btn_head button');
let status_area = document.querySelector('.status_area');
let contact_list = document.querySelector('.contact_list');
let calls_area = document.querySelector('.calls_area');
let community_area = document.querySelector('.community_area');
let chatBtn = document.querySelector('.chatBtn');
let status_btn = document.querySelector('.status_btn');
let callbtn = document.querySelector('.callbtn');
let usercontactlist = document.querySelectorAll('.usercontactlist li');
let content_chat_area = document.querySelector('.content_chat_area');
let profile_contact = document.querySelector(".profile_contact");
let profile_contact_img = document.querySelector(".profile_contact img");
let contact_name = document.querySelector(".contact_name h5");

btns.forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        if (element.id === "status") {
            status_area.style.left = "0";
            contact_list.style.left ='-100%';
            calls_area.style.left ='100%';
            community_area.style.left = '-100%';
            element.classList.add('active');
            chatBtn.style.display ="none";
            status_btn.style.display ="block";
            callbtn.style.display = "none"
        }

        else if (element.id === "chats") {
            status_area.style.left = "100%";
            contact_list.style.left = '0%';
            calls_area.style.left = '100%';
            community_area.style.left = '-100%';
            element.classList.add('active');
            chatBtn.style.display = "block";
            status_btn.style.display = "none";
            callbtn.style.display = "none"
        }
        else if (element.id === "calls") {
            calls_area.style.left = '0';
            status_area.style.left = "-100%";
            contact_list.style.left = '-100%';
            community_area.style.left = '-100%';
            element.classList.add('active');
            chatBtn.style.display = "none";
            status_btn.style.display = "none";
            callbtn.style.display = "block"
        }
        else {
            calls_area.style.left = '100%';
            status_area.style.left = "100%";
            contact_list.style.left = '100%';
            community_area.style.left = '0%';
            element.classList.add('active');
            chatBtn.style.display = "none";
            status_btn.style.display = "none";
            callbtn.style.display = "none"
        }
    })
});
usercontactlist.forEach((element, index) =>{
    element.setAttribute('id', `contact_btn${index}`);
    element.addEventListener('click', () =>{
      if(element.id === `contact_btn${index}`){
        content_chat_area.style.display ="block";
      }
      profile_contact_img.src = element.firstElementChild.childNodes[1].src;
      contact_name.innerHTML = element.children[1].firstElementChild.innerHTML;
    })
  });
  profile_contact.addEventListener('click', () =>{
    content_chat_area.style.display ="none";
  })



