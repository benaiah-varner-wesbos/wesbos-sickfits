import UpdateProduct from '../components/UpdateProduct'

const UpdatePage = ({ query }) => {
    console.log(query)
    return (
        <div>
            <UpdateProduct id={query.id}></UpdateProduct>
        </div>
    )
}

export default UpdatePage
