import EmailContent from "./email-content";
import EmailToolbar from "./email-toolbar";


function MainEmail(){
    return(
        <main className="email-view">
        <EmailToolbar/>
            <EmailContent/>

        </main>
    )
}
export default MainEmail
