// 1. dovuci podatke sa servera
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json() )
.then(data => {
    main(data);
});

// 2. mapirati podatke u objekte koji imaju name, companyName, address, id
const main =(data) => {
    const result = data.map(user => ({
        id: user.id,
        name: user.name,
        companyName: user.company.name,
        street: `${user.address.city}, ${user.address.street}, ${user.address.zipCode}`
    }));

    result.map(user => createNew(user));
};

// 3. prikazati umesto jobs kockica, 
// kockice sa ovim informacijama (dovoljno je samo napisati name ispod ikonice)
const container = document.querySelector('.container');
const createNew = (user) => {
    const person = document.createElement('div');
    person.classList.add('person');

    person.innerHTML=`
        <div class="border">
            <div class="picture">
                <img src="teacher.jpg">
            </div>
        </div>
        <div class="container-data">
            <div class="name">
                <h2 class="person-name">${user.name}</h2>
                <h2 class="person-function">${user.companyName}</h2>
                <div class="description">
                <p>${user.street}</p>
                </div>
                <div class="devider">
                    <img class="line" src="line.png">
                </div>
            </div>   
        </div>
    `

    container.appendChild(person);
}

/* <div class="person">
    <div class="border">
        <div class="picture">
            <img src="teacher.jpg">
        </div>
    </div>
    <div class="container-data">
        <div class="name">
            <h2 class="person-name">Anita Smith</h2>
            <h2 class="person-function">Founder CEO</h2>
            <div class="description">
            <p>This slide is 100% editable.
                Adapt it to your needs and capture your audience's attention</p>
            </div>
            <div class="devider">
                <img class="line" src="line.png">
            </div>
        </div>   
    </div>
</div> */