import { useState } from 'react';
import instance from '../axios';

function App() {
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleFileSelect = (e) => {
    setImageFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imageFile', imageFile);
    try {
      const response = await instance.post('/api/v1/image/convert', formData);
      setImage(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Front</h1>
      <form
        id="uploadForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="file" id="file" name="file" onChange={handleFileSelect} />
        <input type="submit" value="Upload File" />
      </form>

      {image ? <pre>{image}</pre> : <p>upload an image</p>}
    </>
  );
}

export default App;
