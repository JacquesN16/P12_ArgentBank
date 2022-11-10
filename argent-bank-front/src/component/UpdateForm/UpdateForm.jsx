import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


export default function UpdateForm () {
    const dispatch = useDispatch();
    const user = useSelector( s => s.user)
    const [newFirstname, setNewFirstname ] = useState('')
    const [newLastName, setNewLastname] = useState('')


    const onSubmit = () => {
        if (!user) {
            return
        }

        // const newUser = { firstName}


    }


    useEffect(()=>{
        if(user){
            setNewFirstname(user.firstName)
            setNewLastname(user.lastName)
        }
    },[user])

    return (
        <div className="update-form">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <form>
                <div className="form-content">
                    Fist Name
                    <input
                        type="text"
                        value={newFirstname}
                        onChange={(e)=>setNewFirstname(e.target.value)}

                    />
                </div>
                <div className="form-content">
                    Last Name
                    <input
                        type="text"
                        value={newLastName}
                        onChange={(e)=>setNewLastname(e.target.value)}
                    />
                </div>
                <div className="form-button">
                    <button type="submit" className="save-button">
                        Save
                    </button>
                    <button
                        onClick={onSubmit} className=" save-button cancel-button">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

