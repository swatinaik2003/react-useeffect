import { useEffect } from 'react';

function Component() {
  useEffect(() => {
    console.log();
  }, []);

  return <div>Hello World!</div>;
}
export default Component;