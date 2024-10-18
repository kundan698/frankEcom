"use client"
import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
  return (
    <Accordion className='mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Features</Accordion.Header>
        <Accordion.Body>
          <div className='fb1'>
            <p>Sustainable Materials</p>
          </div>
          <div className='d-flex gap-3'>
            <img src="https://www.frankandoak.com/cdn/shop/files/icon-organic_cotton.svg" alt="" className=''/>
            <p className='mt-2 text-decoration-dashed'>Organic Cotton</p>

          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Fit & Sizing</Accordion.Header>
        <Accordion.Body>
          <div className='fb1'>
            <p>Sabrina is 5'9.5" wearing size S</p>
            <p>View the <a href="" className='text-dark'>Size Guide</a></p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Material & Care</Accordion.Header>
        <Accordion.Body>
          <div className='fb1'>
            <p>Materials</p>
            <p>Care Instructions</p>
            <p>Machine wash cold <br />
              Do not bleach <br />
               Tumble dry low heat <br />
               Iron low heat
               Hang to dry</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Shipping & Returns</Accordion.Header>
        <Accordion.Body>
          <div className='fb1'>
            <p>Free and Easy Returns</p>
            <p>ou have 15 days from the date your order is shipped to request a prepaid return</p>
            <p>shipping label online. Visit our FAQ for our full return policy.</p>
            <p>Shipping</p>
          
          </div>
          <div className='ame'>
            <p>American Addresses</p>
            <div className='d-flex justify-content-between p-2'>
                <p>
                American Addresses
               
                </p>
                <p>Standard (orders over $99)</p>
                <p> 3-5 Days	FREE</p>
               </div>
               <div className='d-flex justify-content-between p-2'>
                <p>
               Standard
               
                </p>
                <p>3-5 days</p>
                <p> $18</p>
               </div>
          </div>
          <div className='d-flex gap-2 fb mt-3'>
            <p>Purchases under $800</p>
            <p>NO DUTIES</p>
          </div>
          <div className='d-flex justify-content-between p-2 fb1'>
            <p>Purchases over $800</p>
            <p>Duties applicable</p>


          </div>
          <div className='ame'>
            <p>Canadian Addresses</p>
            <div className='d-flex justify-content-between p-2'>
                <p>
               Canadian Addresses
               
                </p>
                <p>Standard (orders over $99)</p>
                <p> 3-5 Days	FREE</p>
               </div>
               <div className='d-flex justify-content-between p-2'>
                <p>
               Standard
               
                </p>
                <p>3-5 days</p>
                <p> $18</p>
               </div>
          </div>
          <div className="fb1">
            <p>Online orders take 2 to 3 days to fulfill</p>
            <p>Free standard shipping offer is valid on orders placed on http://frankandoak.com  and http://ca.frankandoak.com  with a minimum purchase value of $99 after discounts and before taxes or any other associated fees are applied. Offer cannot be applied to past purchases. Additional restrictions may apply. </p>
            <p>Visit our Orders & Shipping FAQ for more information on shipping rates and delivery times. </p>
            <p>International Addresses</p>
            <p>Note: International shipping, outside of the US and Canada, is temporarily unavailable. We look forward to shipping around the world again soon!</p>

          </div>
          <div className=''>
            <button className='w-100 d-table mx-auto border-2 p-2 fs-6'>View International Rates</button>
          </div>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;