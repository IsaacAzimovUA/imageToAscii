import { useEffect, useState } from 'react';
import instance from '../axios';

function App() {
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageOptions, getImageOptions] = useState([]);
  const [form, setForm] = useState({});

  const handleFileSelect = (e) => {
    setImageFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imageFile', imageFile);
    formData.append('options', JSON.stringify(form));

    try {
      const response = await instance.post('/api/v1/image/convert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImage(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/api/v1/image');
        getImageOptions(response.data.fit);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Front</h1>
      <form
        id="uploadForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label>
          The fit to resize the image to
          <select name="fit" onChange={handleChange}>
            <option>Please choose an option</option>
            {imageOptions.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          width:
          <input name="width" type="number" onChange={handleChange} />
        </label>
        <label>
          height:
          <input name="height" type="number" onChange={handleChange} />
        </label>
        <input type="file" id="file" name="file" onChange={handleFileSelect} />
        <input type="submit" value="Upload File" />
      </form>

      {image ? <pre>{image}</pre> : <p>upload an image</p>}
    </>
  );
}

export default App;
