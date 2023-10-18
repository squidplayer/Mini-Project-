import React from 'react'
import './SellCar.css'

const SellCar = () => {
  return (
    <div>
        
        <form id="customer-form" action="#">

          <label for="name">Customer Name:</label>
          <input type='text' id='name ' name='name' required></input>

          <label for='phone'>Phone No</label>
          <input type='tel' id='phone' name='phone' required></input>


          <label for='email' >Email Address</label>        
          <input type='email' id='email' name='email' required></input>

          <label for='company'>Company Name</label>
          <select id="company" name="company" required>
                <option value="" disabled selected>Select Company</option>
                <option value="Company A">Company A</option>
                <option value="Company B">Company B</option>
                <option value="Company C">Company C</option>
          </select>


          <label for="model">Car Model (with Year):</label>
          <input type="text" id="model" name="model" required></input>

          <label for="running">Running Done (in km):</label>
          <input type="text" id="running" name="running" required></input>

          <label for="images">Upload Images:</label>
          <input type="file" id="images" name="images" accept="image/*" multiple />

          <label for="status">Car Status:</label>
    <select id="status" name="status" required>
              <option value="" disabled selected>Select Car Status</option>
              <option value="First Hand">First </option>
              <option value="Second Hand">Second Hand</option>
              <option value="Third Hand">Third hand</option>
    </select>

        <label for="comments">Additional Comments:</label>
        <textarea id="comments" name="comments"></textarea>
    
        <input type="submit" value="Submit" class="submit-btn"></input>


        </form>
        
      

   </div>
 
  )
}

export default SellCar;