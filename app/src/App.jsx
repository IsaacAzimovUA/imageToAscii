import { useState } from 'react';
import instance from '../axios';
import { useEffect } from 'react';

function App() {
  const [image, setImage] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        instance.get('/api/v1/image').then((res) => {
          setImage(res.data.payload);
        });
      } catch (error) {
        console.error(`trying to fetch: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Front</h1>
      <pre>{image}</pre>
    </>
  );
}

export default App;
