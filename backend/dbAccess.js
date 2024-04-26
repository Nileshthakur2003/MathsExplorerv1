

const client = await pool.connect()

await client.end()



export async function dbFetchAll(props){
    let result = {};
    /*
    props={
        "table":"users",
        "uid":"tbw8x732856x32yr3urn",
        "username":"nilesh"
    }


    */

    if(props.table){
        let stmt = "SELECT * from ";
        stmt+=props.table;

        result = await client.query({
            rowMode: 'array',
            text:stmt,
        })
    }



    return result;

}