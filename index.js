
const portfolioArray = document.querySelectorAll(".website-img");

// const userID = process.env.USER_ID;


portfolioArray.forEach(function(img){
    img.addEventListener("click", function(event){
        console.log(event.target.id);
        const idName = event.target.id;
        const name = idName.slice(0, (idName.length - 3));
        console.log(name);
        document.querySelector(".overlay").style.display = "block";
        document.querySelector("#"+name+"-card").style.display = "block";
    })
});

const crosses = document.querySelectorAll(".cross");

crosses.forEach(function(cross){
    cross.addEventListener("click", function(event){
        console.log(event.target.parentElement);
        const parentElement = event.target.parentElement;
    
        parentElement.style.display = "none";
        document.querySelector(".overlay").style.display = "none";
    })

});

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   console.log(event);

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_146w2nx';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});