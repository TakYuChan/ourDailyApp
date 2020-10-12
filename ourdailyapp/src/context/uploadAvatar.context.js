import React, {createContext, useState} from "react";
import bg from "../assets/images/uploadAvatarPage/default.jpg"
import {useDispatch} from "react-redux";
import {updateUserAvatarStart} from "../redux/User/user.actions";

const UploadAvatarContext = createContext();
function UploadAvatarProvider({children}) {

   const dispatch = useDispatch();

    const [imgUploaded, setImgUploaded] = useState(bg);
    const [file, setFile] = useState('');

    // onChange
    const onUploadImgHandler = (e) => {
      // For image preview
      const reader = new FileReader();
      reader.onload = () => {
        if(reader.readyState === 2) {
          setImgUploaded(reader.result);

        }
      }
      // set image for uploading
      setFile(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }

    // On Submit changes
    const onSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('avatar', file);
      dispatch(updateUserAvatarStart(formData));
    }

    return <UploadAvatarContext.Provider value={{imgUploaded, setImgUploaded, onUploadImgHandler, onSubmit}}>{children}</UploadAvatarContext.Provider>
}

export {UploadAvatarProvider, UploadAvatarContext};