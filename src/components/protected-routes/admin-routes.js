import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminRoutes = ({ component: Component, ...rest }) => {


    const role = localStorage.getItem('role');

    return(
        <Route
            {...rest} 
            render = {
                (props) => {
                    if( role.toLowerCase().includes('admin') ){
                        return <Component {...props} />
                    }else{
                        return <Redirect to = {{ pathname: '*', state: { from: props.location }}} />
                    }
                }
            } 
        />
    )
}

// const mapStateToProps = ({ auth: { user }}) => {
//     return{
//         role: user.role
//     }
// }

export default AdminRoutes;