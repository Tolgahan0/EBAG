import React, {useState} from "react";
import Avatar from "react-avatar-edit";
import { InputText } from 'primereact/inputtext';
import porfile from './profile.png'
import { Dialog } from 'primereact/dialog';



const Profile = () => {
    const [image, setimage] = useState("");
    const [imagecrop, setimagecrop] = useState("");
   
    
    return (
        <div classname= 'profile_img text-center p-4'>
        <div classname= "flex flex-column justify-content-center aling-items-center">
            <img
            style={{
                width: "200px",
                height: "200px",
                borderRadius: "5px",
                objectFit: "cover",
                border: "4px solid green",
            }}
            src={porfile} alt="" />
            <label htmlFor="" className="mt-3 font-semibold text-5xl">TOLGAHAN AYAZ</label>

            <Dialog
            visible={imagecrop}
                   header={() => (
                    <p htmlFor="" className="text-2xl"font-semibold textColor>

                        Update Profile

                    </p>
                   )}
            onHide ={() => setimagecrop(false)}
            >
                <p>hello</p>
            </Dialog>
         <InputText 
         type= "file" 
         accept= '/image/*'
         onChange={(event)=>{
            const file =event.target.files[0];
            if (file && file.type.substring(0,5)=== "image"){
                setimage(file);
            }else {
                setimage(null)
            }
         }}
         />
        </div>
        </div>  
    )
}




export default Profile