import React, {createContext, useState} from "react";
import bg from "../assets/images/uploadAvatarPage/default.jpg"
import {useDispatch} from "react-redux";
import {updateUserDetailsStart} from "../redux/Auth/auth.actions";
import useRouter from "../hooks/useRouter.hooks";

const UploadAvatarContext = createContext();
function UploadAvatarProvider({children}) {

   const dispatch = useDispatch();
   const router = useRouter();

    const [imgUploaded, setImgUploaded] = useState(bg);
    const [file, setFile] = useState('');
    // const [fileName, setFileName] = useState("");

    //onChange
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
      dispatch(updateUserDetailsStart(formData));
    }

    return <UploadAvatarContext.Provider value={{imgUploaded, setImgUploaded, onUploadImgHandler, onSubmit}}>{children}</UploadAvatarContext.Provider>
}

export {UploadAvatarProvider, UploadAvatarContext};