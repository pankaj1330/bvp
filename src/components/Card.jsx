export default function Card(props){    
    const {tt,title,desc,tag} = props

    return(
        <>
            <article className="card">
                <div className="upper">
                    <span>{tt}</span>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="footer">
                    <span>{tag}</span>
                </div>
            </article>
        </>
    )
}