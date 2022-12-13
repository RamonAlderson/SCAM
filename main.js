	


    function login()
	{

		var email= document.getElementsByTagName('input')[0].value;
		var password= document.getElementsByTagName('password')[0];

        localStorage.setItem("myLoggedUser", email);
    }

    function showLoggedInNameOnPage(){
        var user = document.getElementById('loggedInUser');
        user.innerHTML = localStorage.getItem("myLoggedUser");
        
    }

    function logout(){
        if(isLoggedIn())
            localStorage.setItem("myLoggedUser", "");
    }

    function isLoggedIn(){
        if(localStorage.getItem("myLoggedUser") === "")
            return false;
        return true;
    }