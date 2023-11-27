import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useRef, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { useContext } from 'react';
import { Context } from '../App';
const Login = ({signIn}) => {
    const [fakes,userDetails,openModal,setOpenModal] = useContext(Context);
    const emailInputRef = useRef(null);
    const modal_opener=()=>{
        setOpenModal(true)
    }
    return (
        <>
        
        <div  onClick={modal_opener}>
            <div
              className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
                 items-center hover:bg-black/[0.05] curson-pointer relative "
            >
              <FaUser className="text-[15px] md:text-[19px]" />
             
            </div>
          </div>
        <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput id="email" ref={emailInputRef} placeholder="name@iut-dhaka.edu" required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
              </div>
              <div className="flex justify-between">
               
                {/* <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  Lost Password?
                </a> */}
              </div>
              <div className="w-full flex justify-between">
                <Button>Log in to your account</Button>
                <Button onClick={signIn}>Log in with gmail</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                {/* Not registered?&nbsp;
                <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                  Create account
                </a> */}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default Login;