import {useState} from 'react'
import { toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { register} from '../features/auth/authSlice'

function Register() {
    const [ formData,setFormData ] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name,email,password,password2 } = formData

    const dispatch = useDispatch()

    const { user,isLoading,isSuccess,message } = 
    useSelector(
        state => state.auth
    )

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }
    // Submission
    const onSubmit = (e) => {
        e.preventDefault();

        if(password !== password2){

            toast.error('Passwords do not match')
        }
    }
    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Register {user}
                </h1>
                <p>Please create an Account</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input type="text" name='name' className="form-control" id='name' value={name} onChange={onChange} placeholder='Enter your name' required/>
                    </div>
                    <div className='form-group'>
                        <input type="email" name='email' className="form-control" id='email' value={email} onChange={onChange} placeholder='Enter your email' required/>
                    </div>
                    <div className='form-group'>
                        <input type="password" name='password' className="form-control" id='password' value={password} onChange={onChange} placeholder='Enter your password' required/>
                    </div>
                    <div className='form-group'>
                        <input type="password" name='password2' className="form-control" id='password2' value={password2} onChange={onChange} placeholder='Confirm password' required/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register