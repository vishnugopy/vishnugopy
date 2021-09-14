import './style.scss';

const Name = (props) => {
    return (
     <div className="box">
         {props.children}
     </div>
    );
  }
  
  export default Name;