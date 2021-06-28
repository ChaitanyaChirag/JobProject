import React from 'react';

export default function Basket(props) {
  const { cartItems } = props;

  return (
    <div >
      <table>
 

 <tr>
 <td>Sat Jul 16 2021</td>
   <td>03:00 PM PST -04:00 PM PST</td>
   <td>0 seats available</td>
   <td><button class="full">Full</button></td>
   </tr>
 <tr>
 <td>Sun Jul 17 2021</td>
   <td>03:00 PM PST -04:00 PM PST</td>
   <td>0 seats available</td>
   <td><button class="full">Full</button></td>
   </tr>
 <tr>
 <td>Mon Jul 18 2021</td>
   <td>03:00 PM PST -04:00 PM PST</td>
   <td>0 seats available</td>
   <td><button class="full">Full</button></td>
   </tr>
 <tr>
 <td>Tue Jul 19 2021</td>
   <td>03:00 PM PST -04:00 PM PST</td>
   <td>0 seats available</td>
   <td><button class="full">Full</button></td>
   </tr>
 <tr>
 <td>Wed Jul 20 2021</td>
   <td>03:00 PM PST -04:00 PM PST</td>
   <td>0 seats available</td>
   <td><button class="full">Full</button></td>
   </tr>

</table>
<hr/>
      <h2>Booked Classes</h2>
      <div className="tablehead">
     <tr>
       <th>Date</th>
       <th >Time</th>
       <th >Status</th>
     </tr>
     </div> 
      <div>
        {cartItems.length === 0 && 
        <div className="footer">No class selected</div>}
        { cartItems.length <=3?(
        cartItems.map((item) => (
          <div>
           
          <div key={item.id} className="row">
            <div >
              
            <table>
              <tr>
             <td > {item.Date} </td>
            <td > {item.Time}</td>
             <td>Seat confirmed</td>
         <td>   <button  onClick={() => alert('Selected class will be removed from the list ')}>cancel</button></td>
            </tr>
            </table>
            </div>
           
            
             
            </div>

       
          </div>
        ))) :alert("Only 3 classes allowed") }

        
        
      </div>
    </div>
  );
}
