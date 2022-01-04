import EmailHeader from "./email-header";
import EmailActions from "./email-actions";
import EmailBody from "./email-body";


function EmailContent (){
    return(
        <article className="email-content">
            <div className="title">
                <h1>Welcome to Flaticon</h1>
            </div>
                <EmailHeader/>
            <EmailBody/>
            <EmailActions/>


        </article>
    )
}

export default EmailContent
