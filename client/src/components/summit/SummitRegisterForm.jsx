
const SummitRegisterForm = () => {
  return (
    <div className="summit-body">
               <div className="inner-row">
                        <div className="summit-body-content">
                                   <h1>Register for the Yora Summit</h1>
                                   <p>Enter your details below to express your interest in the upcoming Year of Return Africa. Our team will follow up with the next steps. Glad to have you onboard.</p>

                                   <form>
                                             <div className="form-row split">
                                                        <div className="form-column">
                                                                  <label htmlFor="firstname">Firstname</label>
                                                                  <input type="text" className="form-control" placeholder="First name" />
                                                        </div>
                                                        <div className="form-column">
                                                                  <label htmlFor="firstname">Lastname</label>
                                                                  <input type="text" className="form-control" placeholder="Last name" />
                                                        </div>
                                             </div>
                                             <div className="form-row">
                                                         <label htmlFor="email">Email address</label>
                                                         <input type="email" className="form-control" placeholder="address@company.com" />
                                             </div>
                                             <div className="form-row split">
                                                         <div className="form-column">
                                                                    <label htmlFor=""></label>
                                                         </div>
                                             </div>
                                   </form>
                        </div>
               </div>
    </div>
  )
}

export default SummitRegisterForm