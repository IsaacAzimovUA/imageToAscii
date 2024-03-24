import { useEffect, useState } from 'react';
import {
  Header,
  Container,
  InputField,
  SelectField,
  Button,
} from './components';
import axiosInstance from '../axios';
import useLocalStorage from 'use-local-storage';

function App() {
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageOptions, getImageOptions] = useState([]);
  const [options, setOptions] = useLocalStorage('options', {
    width: '',
    height: '',
    fit: '',
  });
  const [clipboard, setClipboard] = useState(null);

  const handleFileSelect = (e) => {
    setImageFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imageFile', imageFile);
    formData.append('options', JSON.stringify(options));

    try {
      const response = await axiosInstance.post(
        '/api/v1/image/convert',
        formData
      );
      setImage(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setOptions((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/image');
        getImageOptions(response.data.fit);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const clickHandler = async () => {
    try {
      await navigator.clipboard.writeText(image);
      if (image) {
        setClipboard('Saved to clipboard');
        setTimeout(() => setClipboard(null), 1500);
      }
    } catch (err) {
      setClipboard(`Failed to copy: ${err}`);
    }
  };

  return (
    <>
      <Header />
      <main className="mt-28">
        <Container maxWidth="max-w-screen-md lg:max-w-screen-lg">
          <form
            id="uploadForm"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <SelectField
              label="fit"
              name="fit"
              value={options.fit}
              onChange={handleChange}
              imageOptions={imageOptions}
            />
            <InputField
              label="width"
              name="width"
              type="number"
              value={options.width}
              onChange={handleChange}
            />
            <InputField
              label="height"
              name="height"
              type="number"
              value={options.height}
              onChange={handleChange}
            />
            <InputField
              label="file"
              type="file"
              id="file"
              name="file"
              onChange={handleFileSelect}
              style="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4 file:rounded-br-md
              file:rounded-tr-md
              file:border-0 file:text-sm file:font-semibold
              file:bg-blue-600 file:text-white
              hover:file:outline-blue-600 hover:file:bg-blue-500 file:cursor-pointer cursor-pointer"
            />
            <Button
              style={
                'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
              }
              type="submit"
            >
              Convert
            </Button>
            <Button
              onClick={clickHandler}
              style={
                'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50 sm:inline-flex shadow-sm ring-1'
              }
              type="button"
            >
              {clipboard ? clipboard : 'Copy To Clipboard'}
            </Button>
          </form>
        </Container>
        <Container maxWidth="max-w-fit overflow-scroll">
          {image ? (
            <pre>{image}</pre>
          ) : (
            <p className="text-red-600">Upload an image</p>
          )}
        </Container>
      </main>
    </>
  );
}

export default App;
