import "./UserList.css"

export const User=(props)=>{
    return <div className="UserCard">
            <img src={props.img}></img>
            <div className="Parallel">
                <h2>{props.name}</h2>
                <p>{props.age}</p>
            </div>
        </div>
}