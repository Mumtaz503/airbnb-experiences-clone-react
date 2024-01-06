import './contact.css';

export default function Contact(properties) {
    return(
        <div className="contacts">
            <img src={properties.img} />
            <h3>{properties.name}</h3>
            <div className="info--groups">
                <img src="/logo192.png" alt="logo" className="logo" />
                <p>{properties.phone}</p>
            </div>
            <div className="info--groups">
                <img src="/logo192.png" alt="logo" className="logo" />
                <p>{properties.email}</p>
            </div>
        </div>
    );
}