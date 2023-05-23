
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
const ejercicio3 = () => {
    const [click, setClick] = useState('');
    

   
    return (
        <>
         <h1 className="display-2 text-center fw-semibold text-light">Hello my Friend{click}</h1>
         <aside className='text-center mt-5'>
            <Button variant="light" size="lg" onClick={()=> setClick(' (from changed state)!')}>Click</Button>
         </aside>
            
        </>
           
        
            
        
    );
};

export default ejercicio3;