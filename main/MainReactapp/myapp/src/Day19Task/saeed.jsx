

const Saeed = () => {
    let [loading, setLoading] = useState(false)
    let [gitUser, setGitUser] = useState([]);

    let Saeed =async () =>{
        try{
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await response.json();
            setGitUser(data);
            console.log(gitUser);
            setLoading(false);
        }catch(error){
             console.log("Error" + error);
        }
    }
    useEffect(() => {
        return () => {
            Saeed();
        };
    },[])

    if(loading){
        return <Loading />
    }else{

    }

  return (
    <div>
        {
            gitUser.map((ele)=>{
            return(<>
                <p>{ele.title}</p>
            </>)
           })
        }
    </div>
  )
}

export default FetchApi