import { createData } from 'next/data';

export async function getData() {
    const data = await fetch('../../public/data/werkzaamheden.json'); // Implement your data-fetching logic here
    return {
      props: {
        data,
      },
    };
}

export default createData(getData);