import React from 'react'
import Family from './Family'
import './Family.css'



let grandfather={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"ALF",
    damonsRelation:"Grandfather"
}
let grandmother={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"Elsie",
    damonsRelation:"Grandmother"
}
let father={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"Dave",
    damonsRelation:"father"
}
let mother={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"Maggie",
    damonsRelation:"mother"
}
let uncle={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"Paul",
    damonsRelation:"Uncle"
}
let aunt={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"Jane",
    damonsRelation:"aunt"
}
let brother={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"Luke",
    damonsRelation:"brother"
}
let sister={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"Karen",
    damonsRelation:"sister"
}
let cousin1={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"James",
    damonsRelation:"cousin1"
}
let cousin2={
    img:"https://randomuser.me/api/portraits/men/49.jpg",
    name:"Jessica",
    damonsRelation:"cousin2"
}

const FamilyTree=()=> {
  return (
    <div className="grandParentsTree row">
        <div className="GrandParents row">
            <Family img={grandfather.img} name={grandfather.name} relation={grandfather.damonsRelation}/>
            <Family img={grandmother.img} name={grandmother.name} relation={grandmother.damonsRelation}/>
        </div>
        <div className="ParentsFamily col-6">
            <div className="Parents row">
                <Family img={father.img} name={father.name} relation={father.damonsRelation}/>
                <Family img={mother.img} name={mother.name} relation={mother.damonsRelation}/>        
            </div>
            <div className="ParentsChild row">
                <Family img={brother.img} name={brother.name} relation={brother.damonsRelation}/>
              <Family img={sister.img} name={sister.name} relation={sister.damonsRelation}/>
            </div>
        </div>

        <div className="UncleFamily col-6">
            <div className="Uncle row">
                <Family img={uncle.img} name={uncle.name} relation={uncle.damonsRelation}/>
                <Family img={aunt.img} name={aunt.name} relation={aunt.damonsRelation}/>     
            </div>
            <div className="UncleChild row">
                <Family img={cousin1.img} name={cousin1.name} relation={cousin1.damonsRelation}/>
                <Family img={cousin2.img} name={cousin2.name} relation={cousin2.damonsRelation}/>
            </div>
        </div>
    </div>

    // <div className='row'>
    //     <div className='col-12'>
    //         <Family img={grandfather.img} name={grandfather.name} relation={grandfather.damonsRelation}/>
    //         <Family img={grandmother.img} name={grandmother.name} relation={grandmother.damonsRelation}/>
    //     </div>
        
        
    //     <div>
    //         <div className="col-6">
    //             <Family img={father.img} name={father.name} relation={father.damonsRelation}/>
    //             <Family img={mother.img} name={mother.name} relation={mother.damonsRelation}/>
    //         </div>
    //         <div className="col-6">
    //             <Family img={brother.img} name={brother.name} relation={brother.damonsRelation}/>
    //             <Family img={sister.img} name={sister.name} relation={sister.damonsRelation}/>
    //         </div>
    //     </div>

    //     <div>
    //         <div className="col-6">
    //             <Family img={uncle.img} name={uncle.name} relation={uncle.damonsRelation}/>
    //             <Family img={aunt.img} name={aunt.name} relation={aunt.damonsRelation}/>
    //         </div>
    //         <div className="col-6">
    //             <Family img={cousin1.img} name={cousin1.name} relation={cousin1.damonsRelation}/>
    //             <Family img={cousin2.img} name={cousin2.name} relation={cousin2.damonsRelation}/>
    //         </div>
    //     </div>
        
    // </div>
  )
}

export default FamilyTree
