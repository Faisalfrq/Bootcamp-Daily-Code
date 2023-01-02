import {User} from './User'
import "./UserList.css"
import '../App.css';

let User1={
    image:
    "https://randomuser.me/api/portraits/men/49.jpg"
    ,name:"Roy Thompson"
    ,age:21
}

let User2={
    image:
    "https://randomuser.me/api/portraits/men/90.jpg"
    ,name:"Kathryn Mann"
    ,age:22
}

let User3={
    image:
    "https://randomuser.me/api/portraits/men/1.jpg"
    ,name:"Carla Ford"
    ,age:23

}

let User4={
    image:
    "https://randomuser.me/api/portraits/men/79.jpg"
    ,name:"Tina Barrett"
    ,age:24
}

let User5={
    image:
    "https://randomuser.me/api/portraits/men/83.jpg"
    ,name:"Charles"
    ,age:25
}

let User6={
    image:
    "https://randomuser.me/api/portraits/men/36.jpg"
    ,name:"Jill Little"
    ,age:26
}

let User7={
    image:
    "https://randomuser.me/api/portraits/men/94.jpg"
    ,name:"Irma Lyons"
    ,age:27
}

let User8={
    image:
    "https://randomuser.me/api/portraits/men/61.jpg"
    ,name:"Steven Stevenson"
    ,age:28
}

let User9={
    image:
    "https://randomuser.me/api/portraits/men/43.jpg"
    ,name:"Dianne Wells"
    ,age:29
}

let User10={
    image:
    "https://randomuser.me/api/portraits/men/46.jpg"
    ,name:"Eugene Harris"
    ,age:30
}

let User11={
    image:
    "https://randomuser.me/api/portraits/men/20.jpg"
    ,name:"Alvin Bass"
    ,age:31
}

let User12={
    image:
    "https://randomuser.me/api/portraits/men/34.jpg"
    ,name:"Elmer Stone"
    ,age:32
}

export const UserList=()=>{
    return (
    <div className="">
            <div className="row">
            <User   img={User1.image} name={User1.name} age={User1.age}/>
            <User   img={User2.image} name={User2.name} age={User2.age}/>
            <User   img={User3.image} name={User3.name} age={User3.age}/>
            <User   img={User4.image} name={User4.name} age={User4.age}/>
            </div>
            <div className="row">
            <User   img={User5.image} name={User5.name} age={User5.age}/>
            <User   img={User6.image} name={User6.name} age={User6.age}/>
            <User   img={User7.image} name={User7.name} age={User7.age}/>
            <User   img={User8.image} name={User8.name} age={User8.age}/>
            </div>
            <div className="row">
            <User   img={User9.image} name={User9.name} age={User9.age}/>
            <User   img={User10.image} name={User10.name} age={User10.age}/>
            <User   img={User11.image} name={User11.name} age={User11.age}/>
            <User   img={User12.image} name={User12.name} age={User12.age}/>
            </div>
    </div>
    )
}
export default UserList
