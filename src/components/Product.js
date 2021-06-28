import React from 'react';

export default function Product(props) {
  
  
  const { product, onAdd, decNum } = props;
  return (<div>
    <div>
      <tr>
    <td  className="constant">{product.Date}</td>
    <td className="constant">{product.Time}</td>
    <td className="constant">{product.Availabilty}</td>
    <td><button className="constantbutton" onClick={()=> {onAdd(product)
    decNum();
    }}>Book Now</button></td>
      </tr>
      
    </div>
    
</div>
  
  );
}
