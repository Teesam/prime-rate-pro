import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const RegisteredUserRoutes = ({ component: Component, ...rest }) => {

    const status = localStorage.getItem('status');

    return(
        <Route
            {...rest} 
            render = {
                (props) => {
                    if( status.toLowerCase().includes('verified') ){
                        return <Component {...props} />
                    }else{
                        return <Redirect to = {{ pathname: '*', state: { from: props.location }}} />
                    }
                }
            } 
        />
    )
}

// const mapStateToProps = ({ auth: { user } }) => {
//     return{
//         isAuthenticated: !!user,
//         status: user.status
//     }
// }

export default RegisteredUserRoutes;