(function() {
    const btns = document.querySelectorAll(".btn");
    const customerImage = document.querySelector("#customer-img");
    const customerName = document.querySelector("#customer-name");
    const customerText = document.querySelector("#customer-text");
    let counter = 0;

    class Customers {
        constructor(name, image, review) {
            this.name = name;
            this.image = image;
            this.review = review;
        }
    };

    let billy = new Customers('Billy Bob', 'customer-0', 'They never said winning was easy. Some people can’t handle success, I can. The other day the grass was brown, now it’s green because I ain’t give up.');

    let jake = new Customers('Jake', 'customer-1', 'Never surrender. They key is to have every key, the key to open every door. Every chance I get, I water the plants, Lion! Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. ' );

    let brian = new Customers('Brian', 'customer-2', 'The best. How’s business? Boomin. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key.');

    let joe = new Customers('Joe', 'customer-3', 'Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. We don’t see them, we will never see them. Stay focused.');

    let jerome = new Customers('Jerome', 'customer-4', 'They key is to have every key, the key to open every door. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. ');

    const customerArray = [billy, jake, brian, joe, jerome];

    customerName.textContent = customerArray[counter].name;
    customerText.textContent = customerArray[counter].review;


    btns.forEach(function(button){
        button.addEventListener('click', function(e) {
            if (button.classList.contains('prevBtn')) {
                counter--;
                if (counter < 0) {
                    counter = customerArray.length -1;
                }
                customerImage.src = "./img/" + customerArray[counter].image + ".jpg";
                customerText.textContent = customerArray[counter].review;
                customerName.textContent = customerArray[counter].name;
            } else {
                counter++;
                if (counter > customerArray.length -1) {
                    counter = 0;
                }
                customerImage.src = "./img/" + customerArray[counter].image + ".jpg";
                customerText.textContent = customerArray[counter].review;
                customerName.textContent = customerArray[counter].name;
            }
        })
    })
})();