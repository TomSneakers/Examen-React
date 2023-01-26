
const MyList = (props) => {
    return(
        <ul>
            {
                props.data.map((result, id) => {
                    return(
                        <li className="liste" key={id}>Name: {result.name} | {result.age} ans | {result.mail} | tel: {result.phone}</li>
                    )
                })
            }
        </ul>
    )

}
export default MyList