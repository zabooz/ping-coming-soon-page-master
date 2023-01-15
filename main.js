const userInput = document.querySelector('#email');
const emailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]+$/g;
const notifyBtn = document.querySelector('button');
const error = document.createElement('p');

userInput.addEventListener('input', e => {
    const width = window.innerWidth
    if(width <= 600){
        if(!emailRegex.test(userInput.value)){
            error.textContent = 'Please provide a valid email address';
            error.classList.add('error')
            console.log(error.textContent)
            userInput.after(error)
        }else{
            document.querySelector('.error').remove()
        }
    }
});

notifyBtn.addEventListener('click', e => {
    console.log('hello world')
    const form = document.querySelector('form')
    if(!emailRegex.test(userInput.value)){
        error.textContent = 'Please provide a valid email address';
        error.classList.add('error')
        console.log(error.textContent)
        form.after(error)
    }else{
        document.querySelector('.error').remove()

    }
})

