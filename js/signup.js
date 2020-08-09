
function validate()
{
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var pass = document.getElementById("pass");       
    var reenterpass = document.getElementById("reenterpass");
    var lblfname = document.getElementById("errfname");
    var lbllname = document.getElementById("errlname");
    var lblpass = document.getElementById("errpass");
    var lblrepass = document.getElementById("errrepass");
    if(fname.value.trim() == "")
    {
        //alert("");
        lblfname.style.visibility="visible";
        fname.style.border= "2px solid red";
        return false;
    }
    else
    {
        fname.style.border= "2px solid green";
        lblfname.style.visibility="hidden";
    }

    if(lname.value.trim() == "")
    {
        lbllname.style.visibility="visible";
        lname.style.border = "2px solid red";
        return false;
    }
    else
    {
        lname.style.border = "2px solid green";
        lbllname.style.visibility="hidden";
    }

    if(pass.value.trim() == "")
    {
        lblpass.style.visibility="visible";
        pass.style.border = "2px red solid";
        return false;
    }
    else
    {
        lblpass.style.visibility="hidden";
        pass.style.border = "2px green solid";
    }
    if(reenterpass.value.trim() == "")
    {
        lblrepass.style.visibility="visible";
        reenterpass.style.border = "2px red solid";
        return false;
    }
    else
    {
        lblrepass.style.visibility="hidden";
        reenterpass.style.border = "2px red solid";
    }    

    if(pass.value.trim() != reenterpass.value.trim())
    {
        alert("Password and Confirm Password don't match");
        pass.style.border = "2px red solid";
        reenterpass.style.border = "2px red solid";
        return false;

    }
    else
        return true;
}

function validatelogin()
{
    var loginuser = document.getElementById("loginuser");
    var loginpass = document.getElementById("loginpass");
    var lbluser = document.getElementById("lbluser");
    var lblpass = document.getElementById("lblpass");
    if(loginuser.value == "")
    {
        lbluser.style.visibility = "visible";
        return false
    }
    else if(loginuser.value != "")
    {
        lbluser.style.visibility = "hidden";
        //return true;
    }

    if(loginpass.value == "")
    {
        lblpass.style.visibility = "visible";
        return false
    }
    return true;
}

function adminlogin()
{
        var adminuname = document.getElementById("adminuname");
        var adminpass  = document.getElementById("adminpass");
        var lbluname = document.getElementById("lbluname");
        var lblpass = document.getElementById("lblpass");
        //alert("admin username:"+adminuname.value);
        if(adminuname.value.trim() == "")
        {
            lbluname.style.visibility = "visible";
            return false;
        }
        else
        {
            lbluname.style.visibility = "hidden";
            adminuname.style.border = "2px solid green";
        }
        if(adminpass.value.trim() == "")
        {
            lblpass.style.visibility = "visible";
            return false;
        }
        else
        {
            lblpass.style.visibility = "hidden";
            adminpass.style.border = "2px solid green";
        }
        
        return true;
}

function addrecipe()
{
    var para = document.getElementById("recipe");
    var recipe = document.getElementById("textarea").value;
    var node = document.createElement("p");
    node.style.color = "coral";
    node.style.border = "2px solid red";
    node.style.backgroundColor = "white";
    node.style.boxSizing = "border-box";
    node.style.fontFamily = "Arial";
    node.style.fontSize = "30px"; 
    var recipenode = document.createTextNode(recipe);
    node.appendChild(recipenode);
    para.appendChild(node);

}