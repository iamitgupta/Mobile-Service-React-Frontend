import React from 'react'



const Contact = () => {


  return (
    <div class="container contact p-4 card">
      <div class="row">
        <div class="col-md bg-warning">
          <div class="contact-info">
            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
            <h2>Contact Us</h2>
            <h4>We would love to hear from you !</h4>
          </div>
        </div>
        <div class="col-md-9">
          <div class="contact-form">
            <div class="form-group">
              <label class="control-label col-sm-2" for="fname">Purpose:</label>
              <div class="col-sm-10">

                <select class="form-select form-select-md" aria-label=".form-select-lg example">
                  <option selected>Feedback</option>
                  <option value="1">Marketing</option>
                  <option value="2">Abuse</option>
                  <option value="3">Tips</option>
                  <option value="3">Bug detection</option>
                  <option value="5">others</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="fname">Full Name:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="fname" placeholder="Enter Full Name" name="fname" />
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-2" for="email">Email:</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="lname">Subject:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="lname" placeholder="Subject" name="lname" />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="comment">Comment:</label>
              <div class="col-sm-10">
                <textarea class="form-control" rows="5" id="comment"></textarea>
              </div>
            </div>








            <div class="form-group">
              <div class=" p-2 d-w-25">
                <button type="submit" class="btn btn-lg btn-dark">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
