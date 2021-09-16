import './style.scss';
import Draggable from 'react-draggable';

const Box = (props) => {
    return (
        <Draggable>
     <section className="box" draggable="true">
         {props.children}
     </section>
     </Draggable>
    );
  }
  
  export default Box;