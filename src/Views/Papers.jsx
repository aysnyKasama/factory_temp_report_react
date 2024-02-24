import A4Landscape from './A4Landscape';

function papers() {
    return (
      <div className="papers">
        <A4Landscape />
        <A4Landscape lastElement={true}/>
      </div>
    );
  }
  
  export default papers;
  