
export default function IdCard(props){
    const dict = props.dude1
    console.log(props.dude1)
    let isStudent = dict.isStudent ? "student" : "not student"

    return (
        <div className="frame">
            <img src={dict.img} width="128rx"></img>
            <div className="text">
                <p><b>First Name:</b> { dict.firstName }</p>
                <p><b>Last Name: </b> { dict.lastName }</p>
                <p><b>Country: </b>{ dict.country }</p>
                <p><b>Student Status:</b> { isStudent }</p>
            </div>
            
            
        </div>
    );
    
}