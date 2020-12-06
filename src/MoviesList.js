const MoviesList = () => {

    return(
        <div>
            <table>
            <thead>
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.movieinfo.map((details,index) => {
                            return (
                                <tr>
                                    <td>{details.Title} </td>
                                    <td>{details.Production_Budget} </td>
                                    <td>{details.Release_Date} </td>
                                    <td>{details.Distributor} </td>
                                    <td>{details.Major_Genre} </td>
                                    <td>{details.Director} </td>
                                    <td><button onClick={() => {this.getDelete(index)} } >Delete</button></td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
            </table>
        </div>
    )

}