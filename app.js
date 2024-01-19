const scriptURL = 'https://script.google.com/macros/s/AKfycbwSXNy9Y0OTE010b13TwPkmR54lxTit1mVMJBkcKAQN41LlxaO-_lON5iO0SfJAn0zd/exec';
  const form = document.forms['submit-to-google-sheet']
  let msg = document.querySelector("#message");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Thank You For Subscribing!";
          setTimeout(() => {
            msg.innerHTML = "Thank You For Subscribing!";
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })