  "use client"
  import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
  import 'react-tabs/style/react-tabs.css';
  import { FaTruckFast } from "react-icons/fa6";
  
  export default () => (
    <Tabs>
      <TabList >
        <Tab>Address</Tab>
        <Tab>Order Details</Tab>
        <Tab>Registration</Tab>
      </TabList>
  
      <TabPanel>
      <form class="row g-3 animate__animated animate__backInUp"  id='frmss'>
       <h3 className='text-center text-primary p-2'>Login</h3>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
      </TabPanel>
      <TabPanel>
      <div className="container animate__animated animate__backInUp">
        <div className="row">
          <div className="col-lg-7 shadow-lg mt-5 rounded-2">
          <div className='bg-white p-4'>
          <h5>Items from Order #12537</h5>
          <div className='d-flex justify-content-between bg-secondary p-2 text-white'>
            <p>Item</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Total</p>
          </div>
          <div className='d-flex justify-content-between  p-2 border-bottom'>
            <p>The Military Duffle Bag</p>
            <p>3</p>
            <p>$134</p>
            <p>438</p>
          </div>
          <div className='d-flex justify-content-between  p-2 border-bottom'>
            <p>The Military Duffle Bag</p>
            <p>3</p>
            <p>$134</p>
            <p>438</p>
          </div>
          <div className='d-flex justify-content-between  p-2 border-bottom'>
            <p>The Military Duffle Bag</p>
            <p>3</p>
            <p>$134</p>
            <p>438</p>
          </div>
          <div className='d-flex justify-content-between  p-2'>
            <p>The Military Duffle Bag</p>
            <p>3</p>
            <p>$134</p>
            <p>438</p>
          </div>


       </div>
          </div>
          <div className="col-lg-4 shadow-lg mx-2 mt-5 rounded-2">
             <h5 className='p-2 '>Order Summary</h5>

             <div className='d-flex justify-content-between p-2 bg-light'>
                <p>Description</p>
                <p>Price</p>
             </div>
             <div className='d-flex justify-content-between p-2 border-bottom'>
                <p>Grand Total</p>
                <p>$235</p>
             </div>
             <div className='d-flex justify-content-between p-2 border-bottom'>
                <p>Shipping charge</p>
                <p>$35</p>
             </div>
             <div className='d-flex justify-content-between p-2 border-bottom'>
                <p>Estimated Tax</p>
                <p>$23</p>
             </div>
             <div className='d-flex justify-content-between p-2 border-bottom'>
                <p> Total</p>
                <p>$1683.22</p>
             </div>

          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-3 shadow-lg rounded-2 p-2 ">
            <h5 className='p-2'>Shipping Information</h5>
            <div>
              <b>Stanley Jones</b>
              <p>795 Folsom Ave, Suite 600 <br />
                 San Francisco, CA 94107 <br />
                P: (123) 456-7890 <br />
                 M: (+01) 12345 67890</p>
            </div>
          </div>
          <div className="col-lg-3 shadow-lg rounded-2 p-2 mx-4">
            <h5>Billing Information</h5>
            <div className='d-flex gap-3 p-2'>
              <b>Payment type:</b>
              <p>Credit Card</p>
            </div>
            <div className='d-flex gap-3 p-2'>
              <b>Provider:</b>
              <p>Visa ending in 2851</p>
            </div>
            <div className='d-flex gap-3 p-2'>
              <b>Validate Date:</b>
              <p>2024-05-6</p>
            </div>
          </div>
          <div className="col-lg-4 shadow-lg rounded-2 p-2 mx-4">
            <h5 className='mx-4'>Delivery Info...</h5>
            <div className='text-center '>

                <p><FaTruckFast /></p>
                <p>UPS Delivery <br />
                  Order ID : xxxx235 <br />

                     Payment Mode : COD</p>
            </div>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel>
      <form className='register animate__animated animate__backInUp'>
    <div class="row jumbotron box8">
      <div class="col-sm-12 mx-t3 mb-4">
        <h2 class="text-center text-info">Register</h2>
        <img src="https://icons8.com/preloaders/preloaders/488/GPS%20Map%20marker.gif" alt="" />
      </div>
      <div class="col-sm-6 form-group">
        <label for="name-f">First Name</label>
        <input type="text" class="form-control" name="fname" id="name-f" placeholder="Enter your first name." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="name-l">Last name</label>
        <input type="text" class="form-control" name="lname" id="name-l" placeholder="Enter your last name." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="address-1">Address Line-1</label>
        <input type="address" class="form-control" name="Locality" id="address-1" placeholder="Locality/House/Street no." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="address-2">Address Line-2</label>
        <input type="address" class="form-control" name="address" id="address-2" placeholder="Village/City Name." required/>
      </div>
      <div class="col-sm-4 form-group">
        <label for="State">State</label>
        <input type="address" class="form-control" name="State" id="State" placeholder="Enter your state name." required/>
      </div>
      <div class="col-sm-2 form-group">
        <label for="zip">Postal-Code</label>
        <input type="zip" class="form-control" name="Zip" id="zip" placeholder="Postal-Code." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="Country">Country</label>
        <select class="form-control custom-select browser-default">
          <option value="Afghanistan">Afghanistan</option>
          <option value="Åland Islands">Åland Islands</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Bouvet Island">Bouvet Island</option>
          <option value="Brazil">Brazil</option>
          <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
          <option value="Brunei Darussalam">Brunei Darussalam</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Cayman Islands">Cayman Islands</option>
          <option value="Central African Republic">Central African Republic</option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Christmas Island">Christmas Island</option>
          <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Congo">Congo</option>
          <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
          <option value="Cook Islands">Cook Islands</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Cote D'ivoire">Cote D'ivoire</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
          <option value="Faroe Islands">Faroe Islands</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="French Guiana">French Guiana</option>
          <option value="French Polynesia">French Polynesia</option>
          <option value="French Southern Territories">French Southern Territories</option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Gibraltar">Gibraltar</option>
          <option value="Greece">Greece</option>
          <option value="Greenland">Greenland</option>
          <option value="Grenada">Grenada</option>
          <option value="Guadeloupe">Guadeloupe</option>
          <option value="Guam">Guam</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guernsey">Guernsey</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-bissau">Guinea-bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
          
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>
      <div class="col-sm-6 form-group">
        <label for="Date">Date Of Birth</label>
        <input type="Date" name="dob" class="form-control" id="Date" placeholder="" required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="sex">Gender</label>
        <select id="sex" class="form-control browser-default custom-select">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unspesified">Unspecified</option>
        </select>
      </div>
      <div class="col-sm-2 form-group">
        <label for="cod">Country code</label>
       
      </div>
      <div class="col-sm-4 form-group">
        <label for="tel">Phone</label>
        <input type="tel" name="phone" class="form-control" id="tel" placeholder="Enter Your Contact Number." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="pass">Password</label>
        <input type="Password" name="password" class="form-control" id="pass" placeholder="Enter your password." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="pass2">Confirm Password</label>
        <input type="Password" name="cnf-password" class="form-control" id="pass2" placeholder="Re-enter your password." required/>
      </div>
      <div class="col-sm-12">
        <input type="checkbox" class="form-check d-inline" id="chb" required/><label for="chb" class="form-check-label">&nbsp;I accept all terms and conditions.
        </label>
      </div>

      <div class="col-sm-12 form-group mb-0">
        <button class="btn btn-primary float-right">Submit</button>
      </div>

    </div>
  </form>
      </TabPanel>
    </Tabs>
  );