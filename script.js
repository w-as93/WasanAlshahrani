new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 4
        }
    }
  });

// انتظر حتى يتم تحميل الصفحة بالكامل
window.addEventListener("load", function () {
    const loader = document.getElementById("loading");
  
    // تعطيل التمرير أثناء التحميل
    document.body.classList.add("loading");
  
    // تأخير لمدة ثانيتين قبل بدء إخفاء الـ loader
    setTimeout(() => {
      // تفعيل تأثير التلاشي التدريجي
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
  
      // بعد انتهاء تأثير التلاشي، قم بإخفاء العنصر تمامًا
      setTimeout(() => {
        loader.style.display = "none";
  
        // إعادة التمرير بعد إخفاء الـ loader
        document.body.classList.remove("loading");
  
        // بدء الأنميشن للدوائر النسبية
        const circles = document.querySelectorAll(".progress-circle");
        circles.forEach(circle => {
          const percentage = circle.getAttribute("data-percentage");
          circle.style.setProperty("--percentage", percentage);
        });
      }, 500); // مدة التلاشي (0.5 ثانية)
    }, 2000); // مدة التأخير قبل بدء التلاشي (2 ثانية)
  });

// ارسال الايميلات
function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  email: document.getElementById("email").value,
	  message: document.getElementById("message").value,
	};
  
	const serviceID = "service_gxnp1yr";
	const templateID = "template_r5ww3ni";
  
	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("name").value = "";
		  document.getElementById("email").value = "";
		  document.getElementById("message").value = "";
		  console.log(res);
		  alert("Your message sent successfully!!")
  
	  })
	  .catch(err=>console.log(err));
  }