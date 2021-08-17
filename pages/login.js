import {useState} from 'react';
import Link from 'next/link';
import Input from 'component/Input';

function login(props) {
  const [userData, setUserData] = useState();

  const onValueChange = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form', userData);
  };
  return (
    <>
      <section className='p-tb30'></section>
      <section
        className='content-inner'
        style={{backgroundImage: 'url(images/background/bg1.png)'}}
      >
        <div className='container'>
          <div className='row '>
            <div
              className='col-xl-6 col-lg-7 m-b30 wow fadeInLeft'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
            >
              <div className='section-head style-1 m-r70'>
                <div className='row justify-content-between m-lr0'>
                  <Link href='/login'>
                    <a className='btn btn-link d-inline-flex align-items-center '>
                      <h6 className='sub-title bgl-primary m-b20 text-primary'>
                        Login
                      </h6>
                    </a>
                  </Link>
                  <Link href='/register'>
                    <a className='btn btn-link d-inline-flex align-items-center '>
                      <h6 className='sub-title m-b20 text-primary'>
                        Register for Free
                      </h6>
                    </a>
                  </Link>
                </div>
              </div>

              <form className='dlab-form dzForm ' method='POST' action=''>
                <div className='dzFormMsg'></div>
                <input
                  type='hidden'
                  className='form-control'
                  name='dzToDo'
                  value='Contact'
                />
                <div className='row'>
                  <div className='col-sm-10'>
                    <Input
                      iconname='user'
                      label='Email'
                      placeholder='Enter Email...'
                      type='text'
                      name='email'
                      onValueChange={onValueChange}
                      required={true}
                    />
                  </div>
                  <div className='col-sm-10'>
                    <Input
                      iconname='lock'
                      label='Password'
                      placeholder='Enter Password...'
                      type='password'
                      name='password'
                      onValueChange={onValueChange}
                      required={true}
                    />
                  </div>

                  <div className='col-sm-12 mt-2'>
                    <button
                      name='submit'
                      value='Submit'
                      type='submit'
                      className='btn rounded-xl shadow btn-primary'
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className='col-xl-6 col-lg-5 m-b30 wow fadeInRight'
              data-wow-duration='2s'
              data-wow-delay='0.4s'
            >
              <div className='dlab-media cf-r-img'>
                <img src='images/about/img2.png' className='move-1' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default login;

/*
  <div className='container'> Login page</div>
      <MyModal />
      
*/
