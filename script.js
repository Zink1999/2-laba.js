var user = {
	name: "Valera",
	country: "Zhytomyr"
};

var user2 = {};

function isEmpty(obj) {
    if (Object.keys(obj).length != 0) {
        console.log("true")
    }
    else{
    console.log("false")
    }
}

isEmpty(user);
isEmpty(user2);