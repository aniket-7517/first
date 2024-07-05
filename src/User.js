function User() {

    const users = [
        {
            name : "aniket",
            class : "MCA",
            age : "23"
        },
    ]

    const getSeachQuery = (event) => {
        console.log(event.target.value);
    }

    const search = () => {
        console.log("Button clicked...")
    }

    return (
        <div className="container">
            
            <h4>Names : {users[0].name}</h4>
            <h4>Class : {users[0].class}</h4>
            <h4>Age : {users[0].age}</h4>

            <input type="text" onChange={(event) => getSeachQuery(event)} />
            <button onClick={search}>Search</button>

        </div>
    )
}

export default User;