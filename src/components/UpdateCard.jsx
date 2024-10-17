export default function UpdateCard(props){
    const {imgLink,title,subtitle,date,footertitle} = props
    return (
        <>
            <article className="update-card">
                <div className="header">
                    <img src={props.imgLink} alt="" />
                </div>
                <div className="middle">
                    <p>{subtitle}, {date}</p>
                    <h2>{title}</h2>
                </div>
                <div className="footer">
                    <p>{footertitle}</p>
                    <span> &rarr; </span>
                </div>
            </article>
        </>
    )
}