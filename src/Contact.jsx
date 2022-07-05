import React , {useState} from "react";


const Contact=()=> {


  const[data, setdata] = useState(
    {
      name:"",
      phone:"",
      email:"",
      msg:"",
    }
  );

const InputEvent=(e)=>{

const {name , value} = e.target;

setdata((pv)=>{
return{
  ...pv,[name]:value,
};
});

};
  

const formsubmit=(e)=>{

        e.preventDefault();

        alert(`${data.name},${data.email},${data.phone},${data.msg}`)

        

  };



  return (
    <>
    
        <div className="my-5">
         <h1 className="text-center">Contact Us</h1>
        </div>

         
         <div className="container contact-div ">

             <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                 <form onSubmit={formsubmit}>



                      <div class="form-group">
                              <label for="name">Name</label>
                              <input type="text" name="name" value={data.name} onChange={InputEvent} class="form-control my-2" id="name" aria-describedby="nameHelp" placeholder="Enter your name"/>
                              
                      </div>

                      

                      <div class="form-group">
                              <label for="phone">Mobile number</label>
                              <input type="number" name="phone" value={data.phone} onChange={InputEvent} class="form-control my-2" id="phone" aria-describedby="phoneHelp" placeholder="Enter mobile number"/>
                              
                      </div>


                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" value={data.email} onChange={InputEvent} class="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>


                      <div class="form-group">
                        
                        <div class="mb-3">
                                <label for="msg" class="form-label my-3">Message</label>
                                <textarea class="form-control " name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"placeholder="Enter your message"></textarea>
                              </div>                        
                      </div>




                      <button type="submit" class="btn btn-outline-primary my-3">Submit</button>


                 </form>
               </div>
             </div>

         </div>

    </>
  );
}

export default Contact;
