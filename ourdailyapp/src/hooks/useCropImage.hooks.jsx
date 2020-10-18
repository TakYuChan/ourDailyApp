import { useCallback, useRef } from "react";
import "cropperjs/dist/cropper.css";

export default function useCropImage() {

    const displayImgRef = useRef();

    // const cropperRef = useRef(null);

    // const onCrop = useCallback(() => {
    //     const imageElement = cropperRef?.current;
    //     const cropper = imageElement?.cropper;
    //     // console.log(cropper.getCroppedCanvas().toDataURL());
    //     // console.log(cropper)
    //   }, []);


  
  
    // return {onCrop, cropperRef };
    return {displayImgRef};
}
