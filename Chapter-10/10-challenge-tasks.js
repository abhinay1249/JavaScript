            const button = document.querySelector('.js-button');
            const buttonElement=button.classList.contains("js-button");
            console.log(buttonElement);

            const gamingButton = document.querySelector('.js-toggle');
            //const gamingButton1 = document.querySelector('.js-toggle1');
            //const gamingButton2 = document.querySelector('.js-toggle2');

            function onToggle(selector){
                const button = document.querySelector(selector);

                if(!button.classList.contains('is-toggled')){
                    prevButton();
                    button.classList.add('is-toggled');
                }else{
                    button.classList.remove('is-toggled');
                }
            }

            function prevButton(){
                const buttonElement = document.querySelector('.is-toggled');

                if(buttonElement){
                    buttonElement.classList.remove('is-toggled');
                }
            }
            // function onToggle1(){
            //     if(!gamingButton1.classList.contains("is-toggled")){
            //         gamingButton1.classList.add("is-toggled");
            //     }else{
            //         gamingButton1.classList.remove("is-toggled");
            //     }
            // }
            // function onToggle2(){
            //     if(!gamingButton2.classList.contains("is-toggled")){
            //         gamingButton2.classList.add("is-toggled");
            //     }else{
            //         gamingButton2.classList.remove("is-toggled");
            //     }
            // }