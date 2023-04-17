import { useEffect, useRef } from "react";

const UploadWidgetCloud = ({urlImg}) => {
    const CloudinaryRef = useRef();
    const widgetRef = useRef();
  
    useEffect(() => {
      CloudinaryRef.current = window.cloudinary;
  
      widgetRef.current = CloudinaryRef.current.createUploadWidget(
        {
          cloudName: "hoteltayronapruebas",
          uploadPreset: "hotelTayronaPrubas"
        },
        (error, result) => {
                    if (!error && result && result.event === "success") {
                      console.log("Uploaded in Cloudinary!");
                      console.log(result.info);
                      const urlImgUplo = result.info.secure_url
                      urlImg(urlImgUplo)
                    }
        }
      );
    }, []);
  
  
  const handleUploadClick = (e) => {
    e.preventDefault();
    if (widgetRef.current) {
      widgetRef.current.open();
    }
  };

    return (
            <div>
              <button onClick={(e) => handleUploadClick(e)}> change picture </button>
            </div>
  )};
  
  export default UploadWidgetCloud;
  