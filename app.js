
const url = 'https://gorest.co.in/public/v1/users';
const token = 'd7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3';

// Defining data fetching function
async function fetchUser(url,token){

    const jsonData = await fetch(url,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const { data } = await jsonData.json();
    if(data){
        hideLoader();
        showUserList(data)
    }

}

// hide the loader
function hideLoader(){
    document.getElementById('spinner_container').style.display = 'none';
}

// define innerHTML
function showUserList(data){

    let element = '';
    for(let item of data){
        element += `<li> ${item.name} </li>`
    }

    document.getElementById('user_list').innerHTML = element;

}


// calling data fetching function
fetchUser(url,token);
