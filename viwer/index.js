function envia() {
    let name = document.querySelector('#name').value
    let cpf_cnpj = document.querySelector('#cnpj-cpf').value
    let telefone = document.querySelector('#telefone').value
    let email = document.querySelector('#email').value

let form =

    {
        'name': name,
        'cpf-cnpj': cpf_cnpj,
        'telefone': telefone,
        'email': email
    }

    event.preventDefault();
    fazPost('http://localhost:3000/', form);
}


async function fazPost(url, form) {
    const response = await fetch(url ,

        {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },   
            body: JSON.stringify(form)
        })        
}