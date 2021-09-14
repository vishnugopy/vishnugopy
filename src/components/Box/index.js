import './style.scss';

const Box = (props) => {
    return (
     <section className="box">
         {props.children}
     </section>
    );
  }
  
  export default Box;