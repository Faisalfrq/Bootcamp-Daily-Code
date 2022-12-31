

//let image1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOC_UOizLxjtbFttm0VQ-JIROuOsNAsBHSiLK22g&s"
//let title="Harry Potter Book 1"
//let desc="Book about Harry Potter"

//using props
export const Book=(props)=>{
    return <div>
            <img src={props.img}></img>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
}
