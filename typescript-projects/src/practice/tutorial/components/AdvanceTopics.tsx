let userData: User[] = [
    {
        id: 1,
        name: "Prathvi",
        email: "prathvi@gmail.com",
        password: "prathvi123",
        address: "Berasia",
        createdAt: "06-08-2025"
    },
    {
        id: 2,
        name: "Kirat",
        email: "kirat@gmail.com",
        password: "kirat",
        address: "Gurgaon",
        createdAt: "06-08-2025"
    },
]

interface User {
    id: Number;
    name: String;
    email: String;
    password: String;
    address: String;
    createdAt: String;
}

type UpdatedUser = Pick<User, "id" | "name" | "email" | "password">;

type UpdatedUserOptional = Partial<UpdatedUser>;

function userUpdate(user: UpdatedUser) {
    const updated = userData.map((u) => u.id === user.id ? ({ ...u, name: user.name, email: user.email, password: user.password }) : { ...u });
    userData = updated
}

function userUpdationWithProp(user: UpdatedUserOptional) {
    const updated = userData.map((u) => {
        if (u.id === user.id) {
            return {
                ...u,
                ...(user.name && { name: user.name }),
                ...(user.email && { email: user.email }),
                ...(user.password && { password: user.password })
            };
        }
        return u;
    });
    userData = updated;
}


userUpdate({
    id : 2,
    name : "Donald Trump",
    email : "donaldduck.com",
    password : "fYouAmerica"
})


userUpdationWithProp({
    id : 2,
    name : "Modi JI "
})

// console.log(userData)
// console.log(userData)

// READONLY :

interface Config {
    readonly Endpoint : string;
    readonly Routes : string;
}

const config : Config = {
    Endpoint : "https://app.100xdevs.com",
    Routes : "/user"
}

// config.Endpoint = "dadasdas";
// console.log(config);

// RECORD : 

interface User {
    name : String;
    email : String;
}

type Users = Record<string, {name : string, email : string}>;

const users : Users = {
    "ras@dq1.com" : {
        name : "Prathvi",
        email : "prathvi@gmail.com"
    },
    "dds2332dcdc" : {
        name : "Roman Reigns",
        email : "roman@yahoo.com"
    },
}


// MAP :
type MapType = {
    name : string;
    email : string;
}

const data = new Map<string, MapType>();
data.set("1", {name : "prathvi", email : "fsdfdsf"});
data.set("2", {name : "sanjay", email : "kokgorgr"});
const d = data.get("2");
console.log(d);
data.delete("1");
// console.log(data)


