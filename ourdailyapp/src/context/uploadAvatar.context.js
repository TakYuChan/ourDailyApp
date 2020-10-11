import React, {createContext, useState} from "react";
import bg from "../assets/images/uploadAvatarPage/default.jpg"

const UploadAvatarContext = createContext();
function UploadAvatarProvider({children}) {
    const [imgUploaded, setImgUploaded] = useState(bg);
    // const [TabBorderOnLeft, setTabBorderOnLeft] = useState(true);

    const uploadImgHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
        if(reader.readyState === 2) {
          setImgUploaded(reader.result);
        }
      }
      reader.readAsDataURL(e.target.files[0]);
    }

    return <UploadAvatarContext.Provider value={{imgUploaded, setImgUploaded, uploadImgHandler}}>{children}</UploadAvatarContext.Provider>
}

export {UploadAvatarProvider, UploadAvatarContext};