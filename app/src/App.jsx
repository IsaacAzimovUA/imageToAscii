import { useEffect, useState } from 'react';
import { Header, Container, InputField, SelectField } from './components';
import axiosInstance from '../axios';
import useLocalStorage from 'use-local-storage';

function App() {
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageOptions, getImageOptions] = useState([]);
  const [options, setOptions] = useLocalStorage({});

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
    } catch (err) {
      console.error('Failed to copy: ', err);
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
            >
              {imageOptions.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </SelectField>
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
              type="file"
              id="file"
              name="file"
              onChange={handleFileSelect}
            />
            <button
              type="submit"
              className="mr-3 inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Submit
            </button>
            <button
              onClick={clickHandler}
              type="button"
              className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            >
              Copy To Clipboard
            </button>
          </form>
        </Container>
        <Container maxWidth="max-w-fit overflow-scroll">
          {image ? <pre>{image}</pre> : <p>Upload an image</p>}
        </Container>
      </main>
    </>
  );
}

export default App;
