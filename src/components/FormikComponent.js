import { Formik, useFormik } from "formik";
import { values } from "lodash";

export default function FormikDemo(){
    const formik = useFormik({
        initialValues:{
            UserName:'',
            Password:'',
            City:'',
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })

    
    return(
        <div className="container-fluid">
                <h2>Register User</h2>
                <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Username</dt>
                    <dd><input name='UserName' type="text" onChange={formik.handleChange} value={formik.values.UserName}/></dd>
                    <dt>Password</dt>
                    <dd><input name='Password' type="password" onChange={formik.handleChange} value={formik.values.Password}/></dd>
                    <dt>City</dt>
                    <dd>
                        <select name='City' onChange={formik.handleChange} value={formik.values.City}>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Hyderabad</option>
                        </select>
                    </dd>
                    <button>Register</button>

                </dl>
            </form>
            <h2>User Dteails</h2>
            {formik.values.UserName}
        </div>
    )
}