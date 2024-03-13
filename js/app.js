let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".menu");
    let menuItems = document.querySelector(".menu__list");
    menuBtn.addEventListener("click", (function() {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
        if (menuBtn.classList.contains("active")) document.body.style.overflow = "hidden"; else document.body.style.overflow = "";
    }));
    menu.addEventListener("click", (e => {
        if (e.target === menu) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    }));


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
   
    document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_btnMenu = target == menuBtn;
        const menu_is_active = menu.classList.contains("active");
    
        if (!its_menu && !its_btnMenu && menu_is_active) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            document.body.style.overflow = "";
        }
    });